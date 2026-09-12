from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from .config import settings
from .gemini_client import gemini_service
from .bigquery_client import bigquery_service

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="API Backend para Startup Engine con Google Gemini AI y Google Cloud BigQuery"
)

# Configuración CORS para conexión con Frontend (React) y Website (Astro)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GeminiRequest(BaseModel):
    prompt: str
    user_id: Optional[str] = "guest"

class EventLogRequest(BaseModel):
    user_id: str
    event_type: str
    metadata: Optional[dict] = {}

@app.get("/")
def read_root():
    return {
        "status": "online",
        "system": settings.PROJECT_NAME,
        "version": settings.VERSION
    }

@app.post("/api/v1/gemini/generate")
def generate_ai_insight(req: GeminiRequest):
    if not req.prompt:
        raise HTTPException(status_code=400, detail="El prompt es obligatorio.")
    
    # 1. Obtener respuesta de Google Gemini
    ai_response = gemini_service.generate_startup_insight(req.prompt)
    
    # 2. Registrar evento en BigQuery
    bigquery_service.log_customer_event(
        user_id=req.user_id,
        event_type="gemini_query",
        metadata={"prompt_length": len(req.prompt)}
    )
    
    return {
        "user_id": req.user_id,
        "response": ai_response
    }

@app.post("/api/v1/analytics/event")
def log_event(req: EventLogRequest):
    success = bigquery_service.log_customer_event(
        user_id=req.user_id,
        event_type=req.event_type,
        metadata=req.metadata
    )
    return {"status": "recorded" if success else "failed"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)

import os
from pydantic import BaseModel

class Settings(BaseModel):
    PROJECT_NAME: str = "Startup Engine API"
    VERSION: str = "1.0.0"
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    GCP_PROJECT_ID: str = os.getenv("GCP_PROJECT_ID", "startup-builder-gcp")
    BIGQUERY_DATASET: str = os.getenv("BIGQUERY_DATASET", "analytics_dataset")

settings = Settings()

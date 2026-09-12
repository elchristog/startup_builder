# Web App Backend (Python + BigQuery + Google Gemini) 🐍

API Backend construida con **FastAPI**, integrando **Google Gemini AI** para generación inteligente de valor y **Google Cloud BigQuery** para almacenamiento y análisis masivo de eventos de conversión y uso.

## 📁 Estructura del Backend
- `app/main.py`: Punto de entrada de la API FastAPI y definición de endpoints.
- `app/gemini_client.py`: Módulo de conexión con la API de Google Gemini (`google-genai`).
- `app/bigquery_client.py`: Módulo de registro de eventos y analítica en Google BigQuery.
- `app/config.py`: Variables de entorno y configuración general.

## 🚀 Ejecución Local

```bash
# 1. Crear y activar entorno virtual
python -m venv venv
source venv/bin/activate  # En Linux / macOS

# 2. Instalar dependencias
pip install -r requirements.txt

# 3. Configurar variables de entorno (.env)
export GEMINI_API_KEY="tu-api-key-de-gemini"
export GCP_PROJECT_ID="tu-proyecto-gcp"

# 4. Iniciar la API
uvicorn app.main:app --reload --port 8000
```

import os
from google import genai
from .config import settings

class GeminiService:
    def __init__(self):
        api_key = settings.GEMINI_API_KEY or os.environ.get("GEMINI_API_KEY")
        if api_key:
            self.client = genai.Client(api_key=api_key)
        else:
            self.client = None

    def generate_startup_insight(self, prompt: str) -> str:
        """
        Genera respuestas estratégicas para startups utilizando Google Gemini AI.
        """
        if not self.client:
            return (
                f"[Modo Demostración Gemini AI]: Análisis estratégico generado para la consulta: '{prompt}'. "
                "Para conectarlo a producción, configura la variable GEMINI_API_KEY."
            )
        
        try:
            response = self.client.models.generate_content(
                model='gemini-2.5-flash',
                contents=prompt,
            )
            return response.text
        except Exception as e:
            return f"Error consultando la API de Gemini: {str(e)}"

gemini_service = GeminiService()

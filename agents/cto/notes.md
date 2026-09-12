# Notas Técnicas del CTO 🛠️

## 📌 Checklist de Infraestructura
- [x] Definición de Stack: Astro + React + Python FastAPI + BigQuery + Gemini.
- [ ] Configurar variables de entorno `.env` en Backend y Frontend.
- [ ] Implementar cliente de Google Gemini SDK (`google-genai`).
- [ ] Configurar conjunto de datos y esquemas en BigQuery.

## ⚙️ Estructura de Base de Datos Recomendada (BigQuery)
- `events_log`: Registro de interacciones de usuario en el frontend y funnel.
- `customer_metrics`: Medición de uso del producto, retención y actividad.
- `team_activities`: Log de tareas completadas por el equipo o por los agentes de IA.

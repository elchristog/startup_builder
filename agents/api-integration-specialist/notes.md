# Notas & Comunicación - API & Analytics Integration Specialist 📝

[Proyecto: nclex-prep-hispanos]

## 📌 1. Enfoque Actual & Tareas de la Semana
- [x] **[Etapa 5] Especificación de Schema BigQuery & Diccionario de Datos (EN REVISIÓN):** Persistido en `projects/nclex-prep-hispanos/database/schema-and-dictionary.md`.
  - **Dataset:** `simunclex_analytics_prod` en Google Cloud (`us-east4`).
  - **Tablas Core DDL:** `users`, `sessions`, `qbank_answers`, `paywall_events`, `subscriptions`.
  - **Vistas Analíticas:** `vw_cohort_retention_daily` (Retención D1/D30/D90) y `vw_conversion_funnel_summary` (Funnel TOFU-MOFU-BOFU).

## 📢 2. Solicitudes & Avisos para el Equipo (Menciones @Rol)
- **@cto / @cfo**: Tarea `[TASK-DB-01]` enviada a `En Revisión` para visto bueno ejecutivo.

## ⛔ 3. Bloqueos & Dependencias
- Ninguno. Avance completado sin bloqueos.

## 📊 4. Métricas & Resultados de Integraciones
- 100% de cobertura de campos para modelos de atribución LTV:CAC y análisis de cohortes de retención.


# 🗄️ Esquema de Base de Datos y Diccionario de Datos (BigQuery)

**Proyecto:** `nclex-prep-hispanos`  
**Dataset BigQuery:** `nclex_prep_hispanos_analytics`  
**Líder Responsable:** `@api-integration-specialist` / `@cto`  

---

## 📊 1. Arquitectura de Tablas por Etapa del Embudo

### Tabla 1: `raw_marketing_leads` (TOFU)
Almacena todos los registros de captación desde landing pages y ads.
- `lead_id` (STRING, REQUIRED): ID único del lead (UUID).
- `email` (STRING, REQUIRED): Email del usuario.
- `country_code` (STRING, NULLABLE): País de residencia (ej: MX, CO, PR, US, ES).
- `utm_source` (STRING, NULLABLE): Fuente de tráfico (tiktok, meta, google_search, organic).
- `utm_campaign` (STRING, NULLABLE): Nombre de la campaña publicitaria.
- `created_at` (TIMESTAMP, REQUIRED): Fecha y hora de captura. Partition Key (`DATE(created_at)`).

### Tabla 2: `app_users` (MOFU)
Información de cuenta de usuarios registrados en la app móvil.
- `user_id` (STRING, REQUIRED): ID único de cuenta de usuario en Firebase/Auth.
- `lead_id` (STRING, NULLABLE): ID del lead de origen.
- `full_name` (STRING, NULLABLE): Nombre completo.
- `nursing_degree_status` (STRING, NULLABLE): Estado profesional (`student`, `graduated`, `licensed_latam`).
- `target_exam_date` (DATE, NULLABLE): Fecha estimada en la que rendirá el NCLEX.
- `subscription_tier` (STRING, REQUIRED): Nivel actual (`free_tier`, `monthly_premium`, `quarterly_premium`, `annual_vip`).
- `created_at` (TIMESTAMP, REQUIRED): Fecha de registro en app.

### Tabla 3: `qbank_sessions_and_cat_events` (Uso de Producto & Engagement)
Eventos de resolución de preguntas y simulaciones CAT.
- `event_id` (STRING, REQUIRED): ID único del evento.
- `user_id` (STRING, REQUIRED): ID del usuario.
- `session_type` (STRING, REQUIRED): `qbank_practice`, `cat_simulation`, `flashcard_study`.
- `questions_answered` (INTEGER, REQUIRED): Cantidad de preguntas respondidas.
- `correct_answers` (INTEGER, REQUIRED): Cantidad de respuestas correctas.
- `estimated_theta_score` (FLOAT, NULLABLE): Puntuación de aptitud según modelo de Teoría de Respuesta al Ítem (IRT).
- `pass_probability` (FLOAT, NULLABLE): Porcentaje estimado de probabilidad de aprobar el NCLEX (0.0 - 1.0).
- `event_timestamp` (TIMESTAMP, REQUIRED): Marca de tiempo del evento. Partition Key (`DATE(event_timestamp)`).

### Tabla 4: `subscriptions_and_conversions` (BOFU & Revenue)
Histórico de pagos y renovación de suscripciones in-app y web.
- `transaction_id` (STRING, REQUIRED): ID de la transacción en Google Play Billing o Stripe.
- `user_id` (STRING, REQUIRED): ID del usuario.
- `plan_id` (STRING, REQUIRED): `monthly_1999`, `quarterly_4999`, `annual_11999`.
- `gross_amount_usd` (NUMERIC, REQUIRED): Monto bruto en USD.
- `platform_fee_usd` (NUMERIC, REQUIRED): Comisión de la plataforma (Google 15% o Stripe 2.9%+$0.30).
- `net_amount_usd` (NUMERIC, REQUIRED): Monto neto ingresado a la startup.
- `transaction_type` (STRING, REQUIRED): `new_subscription`, `renewal`, `refund`.
- `created_at` (TIMESTAMP, REQUIRED): Fecha del pago.

---

## 📈 2. Vistas Analíticas para Cálculo de Tasa de Conversión Histórica

### Vista: `view_funnel_conversion_daily`
Calcula la tasa de conversión diaria etapa por etapa:
- `date`: Fecha.
- `total_leads`: Leads capturados.
- `app_registrations`: Registros en app.
- `paid_conversions`: Nuevas suscripciones de pago.
- `lead_to_registration_rate`: % de Leads que registran app.
- `registration_to_paid_rate`: % de Usuarios app que convierten a pago.

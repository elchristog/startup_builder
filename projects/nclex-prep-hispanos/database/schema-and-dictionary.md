# 🗄️ Arquitectura de Datos, Schema BigQuery & Diccionario de Datos (Etapa 5)

**Proyecto:** NCLEX Prep Hispanos (`nclex-prep-hispanos`)  
**Producto Comercial:** *SimuNCLEX Bilingüe*  
**Fase:** Etapa 5 (GATE 5 - Pipeline BigQuery & Analytics de Conversión)  
**Autor:** `@api-integration-specialist` (API & Analytics Integration Specialist)  
**Aprobadores:** `@cto` (Chief Technology Officer) y `@cfo` (Chief Financial Officer)  
**Entregable Oficial:** `projects/nclex-prep-hispanos/database/schema-and-dictionary.md`  
**Fecha:** 2026-09-12  
**Estatus:** 🔍 COMPLETADO - EN REVISIÓN C-LEVEL  

---

## 🏗️ Especificación del Dataset BigQuery

- **Google Cloud Project ID:** `startup-builder-prod`
- **Dataset ID:** `simunclex_analytics_prod`
- **Location:** `us-east4` (Northern Virginia)
- **Particionamiento por Defecto:** `PARTITION BY DATE(created_at / answered_at / event_timestamp)`
- **Clusterización:** `CLUSTER BY user_id, utm_source`

---

## 📐 Tablas Core & Diccionario de Datos

### 1. Tabla: `users`
Almacena la identidad de los usuarios registrados en la plataforma/app.

```sql
CREATE TABLE IF NOT EXISTS `startup-builder-prod.simunclex_analytics_prod.users` (
  user_id STRING NOT NULL OPTIONS(description="UUID v4 único del usuario"),
  email STRING NOT NULL OPTIONS(description="Correo electrónico cifrado / hash SHA256"),
  country_code STRING OPTIONS(description="Código ISO de 2 letras del país de origen (ej. CO, MX, PR)"),
  target_exam_date DATE OPTIONS(description="Fecha estimada de presentación del NCLEX-RN"),
  acquisition_channel STRING OPTIONS(description="Canal de origen (meta_ads, google_seo, organic_direct)"),
  utm_source STRING OPTIONS(description="Fuente UTM del primer toque (fb_ad, google, instagram)"),
  utm_campaign STRING OPTIONS(description="Campaña UTM (advantage_video_bilingual, seo_silo_nclex)"),
  created_at TIMESTAMP NOT NULL OPTIONS(description="Fecha y hora UTC de registro"),
  updated_at TIMESTAMP OPTIONS(description="Última actualización del perfil")
)
PARTITION BY DATE(created_at)
CLUSTER BY user_id, acquisition_channel;
```

---

### 2. Tabla: `sessions`
Registra el inicio y término de cada sesión de práctica en la app.

```sql
CREATE TABLE IF NOT EXISTS `startup-builder-prod.simunclex_analytics_prod.sessions` (
  session_id STRING NOT NULL OPTIONS(description="UUID único de la sesión de práctica"),
  user_id STRING NOT NULL OPTIONS(description="ID de usuario asociado"),
  device_type STRING OPTIONS(description="Dispositivo (mobile_android, mobile_ios, desktop_web)"),
  os STRING OPTIONS(description="Sistema operativo (Android 14, iOS 17, macOS)"),
  app_version STRING OPTIONS(description="Versión de la app (ej. 1.0.0)"),
  questions_completed INT64 OPTIONS(description="Total de preguntas respondidas en la sesión"),
  started_at TIMESTAMP NOT NULL OPTIONS(description="Inicio de la sesión UTC"),
  ended_at TIMESTAMP OPTIONS(description="Fin de la sesión UTC")
)
PARTITION BY DATE(started_at)
CLUSTER BY user_id, device_type;
```

---

### 3. Tabla: `qbank_answers`
Telemetría detallada de cada respuesta clínica enviada por el usuario.

```sql
CREATE TABLE IF NOT EXISTS `startup-builder-prod.simunclex_analytics_prod.qbank_answers` (
  answer_id STRING NOT NULL OPTIONS(description="UUID único de la respuesta"),
  session_id STRING NOT NULL OPTIONS(description="ID de la sesión de estudio"),
  user_id STRING NOT NULL OPTIONS(description="ID del usuario"),
  question_id STRING NOT NULL OPTIONS(description="ID de la pregunta NGN (ej. NGN-001)"),
  category STRING OPTIONS(description="Categoría clínica según NCSCBN"),
  is_correct BOOL NOT NULL OPTIONS(description="TRUE si la respuesta fue correcta"),
  time_spent_seconds INT64 OPTIONS(description="Tiempo dedicado a responder en segundos"),
  bilingual_toggle_used BOOL NOT NULL OPTIONS(description="TRUE si activó el toggle de traducción en español"),
  selected_language STRING OPTIONS(description="Idioma activo al confirmar respuesta (EN o ES)"),
  answered_at TIMESTAMP NOT NULL OPTIONS(description="Timestamp UTC de la respuesta")
)
PARTITION BY DATE(answered_at)
CLUSTER BY user_id, question_id;
```

---

### 4. Tabla: `paywall_events`
Rastrae las impresiones, intentos de pago y conversiones en la pantalla de cobro.

```sql
CREATE TABLE IF NOT EXISTS `startup-builder-prod.simunclex_analytics_prod.paywall_events` (
  event_id STRING NOT NULL OPTIONS(description="UUID del evento de paywall"),
  user_id STRING NOT NULL OPTIONS(description="ID del usuario"),
  session_id STRING OPTIONS(description="ID de la sesión asociada"),
  trigger_source STRING OPTIONS(description="Gatillo (freemium_10q_limit, full_cat_simulation_click)"),
  plan_selected STRING OPTIONS(description="Plan elegido (monthly_29usd, quarterly_69usd)"),
  price_usd NUMERIC OPTIONS(description="Monto en USD"),
  stripe_checkout_session_id STRING OPTIONS(description="Session ID de Stripe Checkout"),
  status STRING NOT NULL OPTIONS(description="Estado del evento (impression, checkout_started, completed, abandoned)"),
  event_timestamp TIMESTAMP NOT NULL OPTIONS(description="Timestamp UTC del evento")
)
PARTITION BY DATE(event_timestamp)
CLUSTER BY user_id, status;
```

---

### 5. Tabla: `subscriptions`
Mantiene el estado financiero y la retención recurrente de suscripciones.

```sql
CREATE TABLE IF NOT EXISTS `startup-builder-prod.simunclex_analytics_prod.subscriptions` (
  subscription_id STRING NOT NULL OPTIONS(description="ID de suscripción Stripe (sub_xxx)"),
  user_id STRING NOT NULL OPTIONS(description="ID del usuario"),
  plan_id STRING NOT NULL OPTIONS(description="ID de plan de precios (simunclex_monthly_29)"),
  amount_usd NUMERIC NOT NULL OPTIONS(description="Precio recurrente abonado"),
  status STRING NOT NULL OPTIONS(description="Estado (active, past_due, canceled, refunded)"),
  current_period_start TIMESTAMP NOT NULL OPTIONS(description="Inicio del período de cobro actual"),
  current_period_end TIMESTAMP NOT NULL OPTIONS(description="Fin del período de cobro actual"),
  canceled_at TIMESTAMP OPTIONS(description="Timestamp de cancelación si aplica"),
  created_at TIMESTAMP NOT NULL OPTIONS(description="Timestamp UTC de creación de la suscripción")
)
PARTITION BY DATE(created_at)
CLUSTER BY user_id, status;
```

---

## 📊 Vistas Analíticas para KPIs de Negocio

### Vista 1: Cohortes de Retención Temporal (`vw_cohort_retention_daily`)

```sql
CREATE OR REPLACE VIEW `startup-builder-prod.simunclex_analytics_prod.vw_cohort_retention_daily` AS
WITH user_cohorts AS (
  SELECT
    user_id,
    DATE(created_at) AS cohort_date
  FROM `startup-builder-prod.simunclex_analytics_prod.users`
),
user_activity AS (
  SELECT DISTINCT
    user_id,
    DATE(started_at) AS activity_date
  FROM `startup-builder-prod.simunclex_analytics_prod.sessions`
)
SELECT
  c.cohort_date,
  DATE_DIFF(a.activity_date, c.cohort_date, DAY) AS day_number,
  COUNT(DISTINCT c.user_id) AS cohort_size,
  COUNT(DISTINCT a.user_id) AS active_users,
  SAFE_DIVIDE(COUNT(DISTINCT a.user_id), COUNT(DISTINCT c.user_id)) * 100 AS retention_rate_percentage
FROM user_cohorts c
LEFT JOIN user_activity a ON c.user_id = a.user_id
GROUP BY cohort_date, day_number
ORDER BY cohort_date DESC, day_number ASC;
```

---

### Vista 2: Embudo de Conversión TOFU-MOFU-BOFU (`vw_conversion_funnel_summary`)

```sql
CREATE OR REPLACE VIEW `startup-builder-prod.simunclex_analytics_prod.vw_conversion_funnel_summary` AS
SELECT
  DATE(u.created_at) AS registration_date,
  u.acquisition_channel,
  COUNT(DISTINCT u.user_id) AS registered_users,
  COUNT(DISTINCT CASE WHEN q.user_id IS NOT NULL THEN u.user_id END) AS trial_started_users,
  COUNT(DISTINCT CASE WHEN p.status = 'impression' THEN u.user_id END) AS paywall_viewers,
  COUNT(DISTINCT CASE WHEN s.status = 'active' THEN u.user_id END) AS paid_subscribers,
  SAFE_DIVIDE(COUNT(DISTINCT CASE WHEN s.status = 'active' THEN u.user_id END), COUNT(DISTINCT u.user_id)) * 100 AS overall_conversion_rate_percentage
FROM `startup-builder-prod.simunclex_analytics_prod.users` u
LEFT JOIN `startup-builder-prod.simunclex_analytics_prod.qbank_answers` q ON u.user_id = q.user_id
LEFT JOIN `startup-builder-prod.simunclex_analytics_prod.paywall_events` p ON u.user_id = p.user_id
LEFT JOIN `startup-builder-prod.simunclex_analytics_prod.subscriptions` s ON u.user_id = s.user_id
GROUP BY registration_date, u.acquisition_channel
ORDER BY registration_date DESC;
```

---

## 🔄 Estado de Compuerta & Próximo Paso

- **Estatus:** 🔍 **GATE 5 COMPLETADO - PENDIENTE VISTO BUENO C-LEVEL DE CTO Y CFO**
- **Próxima Etapa:** Finalización de la arquitectura técnica y pase a la fase de despliegue oficial.

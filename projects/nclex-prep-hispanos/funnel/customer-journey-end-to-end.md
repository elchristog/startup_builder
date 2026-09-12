# 🗺️ Mapeo del Customer Journey End-to-End (Etapa 3C)

**Proyecto:** NCLEX Prep Hispanos (`nclex-prep-hispanos`)  
**Producto Comercial:** *SimuNCLEX Bilingüe*  
**Fase del Funnel:** Etapa 3C (GATE 3C - Experiencia de Usuario & Mapeo de Retención)  
**Autor:** `@cpo` (Chief Product Officer)  
**Aprobadores:** `@cpo`, `@ceo` y Christian (Founder & Director Supremo)  
**Entregable Oficial:** `projects/nclex-prep-hispanos/funnel/customer-journey-end-to-end.md`  
**Fecha:** 2026-09-12  
**Estatus:** 🔍 COMPLETADO - EN REVISIÓN C-LEVEL  

---

## 👤 User Persona Representativa

- **Nombre:** María Elena Rodríguez (32 años).
- **Origen:** Bogotá, Colombia (residiendo en Miami, Florida).
- **Profesión:** Licenciada en Enfermería (5 años de experiencia clínica en UCI).
- **Meta:** Aprobar el NCLEX-RN en EE. UU. para obtener su Licencia de Enfermera Registrada (Salario proyectado: $88,000 USD/año).
- **Principal Frustración:** Entiende los conceptos médicos perfectamente, pero los bancos de preguntas tradicionales (UWorld, Archer) están 100% en inglés con vocabulario complejo (*"tachycardia", "dyspnea", "assessment vs. evaluation"*), lo que le genera ansiedad y lentitud al responder.

---

## 🗺️ Mapa de Experiencia del Usuario (7 Etapas Secuenciales)

```
[ ETAPA 1: DISCOVERY ] ──────────► Meta Ads Advantage+ / SEO Google ➔ Descubrimiento de la app bilingüe
                                         │
                                         ▼
[ ETAPA 2: LEAD & DOWNLOAD ] ────► Descarga de Guía PDF ➔ Redirección Deep Link a Play Store (`simunclex.app`)
                                         │
                                         ▼
[ ETAPA 3: ONBOARDING DUAL ] ────► Selección de idioma de apoyo ➔ Configuración de meta diaria de estudio
                                         │
                                         ▼
[ ETAPA 4: FIRST PRACTICE ] ─────► Test gratuito de 10 preguntas NGN con Toggle Bilingüe instantáneo
                                         │
                                         ▼
[ ETAPA 5: PAYWALL CONVERSION ] ─► Bloqueo al agotar las 10Q ➔ Suscripción Premium ($29/mes)
                                         │
                                         ▼
[ ETAPA 6: DAILY HABIT & RETENTION ] ➔ Gamificación con Streaks, Simulacro CAT y Push Notifications (D30/D90)
                                         │
                                         ▼
[ ETAPA 7: NCLEX EXAM DAY ] ────► Simulación aprobatoria final ➔ Presentación del examen oficial NCLEX-RN
```

---

### 🟢 Etapa 1: Discovery (Descubrimiento & Primer Contacto)
- **Punto de Contacto:** Video Ad en Instagram/Meta Ads Advantage+ o búsqueda en Google de *"simulador nclex en español"*.
- **Pensamiento del Usuario:** *"Necesito una herramienta que me ayude a entender las preguntas del NCLEX sin perder horas traduciendo cada palabra."*
- **Emoción:** Esperanza / Curiosidad.
- **Acción:** Clic en el anuncio / enlace SEO para ir a `simunclex.com`.

---

### 🟢 Etapa 2: Lead Capture & App Download (Captura & Descarga)
- **Punto de Contacto:** Landing Page Modal `LeadMagnetModal.tsx` + Redirección Deep Link.
- **Pensamiento del Usuario:** *"Quiero la guía gratuita para ver los trámites de homologación y probar las preguntas en mi teléfono."*
- **Emoción:** Confianza / Motivación.
- **Acción:** Ingresa su correo electrónico, descarga la guía PDF y la web la redirige a Google Play Store para instalar la app *SimuNCLEX Bilingüe*.

---

### 🟢 Etapa 3: Onboarding Bilingüe Dual (Configuración Inicial)
- **Punto de Contacto:** Pantalla de Bienvenida de la App.
- **Experiencia de Producto:**
  1. Selecciona su país de origen y fecha estimada de examen (ej. *"En 6 meses"*).
  2. Ajusta su meta diaria de estudio (ej. *"15 preguntas al día"*).
  3. Realiza un tour interactivo de 3 pantallas aprendiendo a usar el **Toggle Bilingüe (Español ↔ Inglés)** y el *Glosario Interactivo*.
- **Emoción:** Sensación de alivio y claridad.

---

### 🟢 Etapa 4: First Practice Session (Primer Test NGN Bilingüe)
- **Punto de Contacto:** Dashboard de Práctica de la App.
- **Experiencia de Producto:**
  - María inicia el **Trial Gratuito de 10 Preguntas NGN**.
  - Lee la pregunta NGN en inglés (*"A 45-year-old client presents with dyspnea and tachycardia..."*).
  - Activa el **Toggle Bilingüe** con un toque y ve instantáneamente la traducción clínica contextual en español.
  - Al seleccionar la respuesta, la app le muestra la **Racional Médica Explicativa** en español sobre por qué esa respuesta es la correcta según la NCSCBN.
- **Emoción:** Asombro (*"¡Esto es exactamente lo que necesitaba!"*).

---

### 🟢 Etapa 5: Paywall Trigger & Conversion (Conversión a Suscripción)
- **Punto de Contacto:** Modal de Paywall Bloqueante al completar la Pregunta #10.
- **Experiencia de Producto:**
  - La app le presenta su informe instantáneo: *"¡Has completado tus 10 preguntas de prueba con un 70% de aciertos! Tu pronóstico de pase actual es Medio."*
  - Despliega la oferta de suscripción: **Plan Mensual $29.00 USD/mes** o **Plan Trimestral $69.00 USD/3 meses**.
  - Incluye badges de seguridad, garantía de reembolso de 7 días y testimonio de una enfermera colombiana que aprobó en Florida.
- **Acción:** María ingresa su tarjeta vía Stripe Checkout en la app y desbloquea el acceso ilimitado de 2,500+ preguntas.

---

### 🟢 Etapa 6: Daily Study Habit & Retención D30/D90 (Hábito Diario)
- **Punto de Contacto:** Notificaciones Push, Rachas (Streaks) y Simulacros CAT.
- **Estrategia de Retención D30/D90:**
  - **Mecánica de Gamificación (Streaks):** Contador de racha diaria (*"🔥 ¡Llevas 12 días seguidos estudiando!"*).
  - **Notificaciones Push Personalizadas:** Enviadas a la hora habitual de estudio de María (*"¡Hora de tus 15 preguntas diarias! Mantén tu racha activa 🩺"*).
  - **Exámenes Adaptativos CAT (Computer Adaptive Testing):** Simulaciones que ajustan la dificultad según el rendimiento de María, imitando el algoritmo oficial del NCLEX.
  - **Revisión Semanal de Desempeño por Categoría:** Informe de fortalezas (ej. *Farmacología 82%*) y debilidades (ej. *Control de Infecciones 54%*).
- **Emoción:** Enfoque, disciplina y progreso constante.

---

### 🟢 Etapa 7: NCLEX Exam Day & Pass Graduation (Graduación & Recomendación)
- **Punto de Contacto:** Módulo de Simulacro Final pre-examen + Pantalla de Celebración.
- **Experiencia de Producto:**
  - 1 semana antes de su examen oficial, María realiza el *Simulacro Completo de 85 Preguntas* y obtiene una puntuación de pronóstico de pase **"Very High" (94%)**.
  - Rinde el NCLEX-RN oficial y lo aprueba en 85 preguntas.
  - Recibe un correo de felicitación de SimuNCLEX y deja un testimonio con foto/video recomendando la app a su red de enfermeras hispanas.
- **Resultado de Producto:** Viralidad orgánica (K-Factor > 1.2) y conversión a embajadora de marca.

---

## ⚠️ Mapa de Fricciones & Mitigaciones de Producto

| Punto de Fricción Identificado | Causante UX/UI | Estrategia de Mitigación CPO |
| :--- | :--- | :--- |
| **Fricción 1: Frustración por traducción rígida** | Traducción literal de Google Translate que altera el sentido de la pregunta médica. | **Mitigación:** Curaduría bilingüe por enfermeros RN nativos + Glosario interactivo con definiciones contextuales. |
| **Fricción 2: Abandono durante la pregunta #5 del Trial** | El usuario se distrae o cierra la app antes de terminar el test gratuito. | **Mitigación:** Guardado automático de progreso + Push Notification a las 2h: *"¡Te faltan solo 5 preguntas para ver tu resultado!"* |
| **Fricción 3: Churn en el Día 30 de suscripción** | Pérdida de motivación tras 3 semanas de estudio. | **Mitigación:** Reporte semanal motivacional por email con gráfico de evolución + Desbloqueo de insignias de dominio clínico. |
| **Fricción 4: Temor al ingresar la tarjeta en el Paywall** | Desconfianza de pago en apps móviles. | **Mitigación:** Garantía de reembolso incondicional de 7 días + Procesamiento seguro Stripe + Logotipos de seguridad visibles. |

---

## 📊 Métricas & KPIs de Retención Objetivo

- **Tasa de Conversión Onboarding-to-Trial:** **> 85%** de usuarios registrados completan el flujo de bienvenida.
- **Tasa de Completitud del Trial 10Q:** **> 75%** de usuarios responden las 10 preguntas.
- **Conversión Trial-to-Paid (Paywall):** **> 10%**.
- **Retención D1:** **55%** | **Retención D30:** **38%** | **Retención D90:** **28%**.
- **Net Promoter Score (NPS):** **> 65**.

---

## 🔄 Estado de Compuerta & Próximo Paso

- **Estatus:** 🔍 **GATE 3C COMPLETADO - PENDIENTE VISTO BUENO C-LEVEL Y FOUNDER**
- **Próxima Etapa:** **Etapa 4: Curaduría QBank & Desarrollo de App Móvil (`[TASK-APP-01]`)** asignada a `@content-lead`, `@ux-designer` y `@cto`.

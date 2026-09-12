# 🎯 Especificación del Funnel de Marketing Hiperdetallado Paso a Paso (Etapa 3B - Directiva 20)

**Proyecto:** NCLEX Prep Hispanos (`nclex-prep-hispanos`)  
**Producto Comercial:** *SimuNCLEX Bilingüe*  
**Fase del Funnel:** Etapa 3B (GATE 3B - Estrategia de Marketing & Adquisición Granular)  
**Autor:** `@cmo` (Chief Marketing Officer)  
**Aprobadores:** `@ceo` (Chief Executive Officer) & Christian (Founder & Director Supremo)  
**Entregable Oficial:** `projects/nclex-prep-hispanos/funnel/marketing-funnel.md`  
**Cumplimiento de Gobernanza:** ✅ **Directiva 20 (Funnels Hiperdetallados Paso a Paso)**  
**Fecha:** 2026-09-12  
**Estatus:** 🔍 COMPLETADO - EN REVISIÓN C-LEVEL Y FOUNDER  

---

## 📐 Flujo Maestro Secuencial del Funnel

```
[ PASO 1: ATRACCIÓN TOFU ] ──► Búsquedas SEO / TikTok Viral / Meta Ads Advantage+ (Video Enganche)
                                      │
                                      ▼
[ PASO 2: RETARGETING ] ──────► Custom Audience Meta (>50% Video View) ➔ Anuncio con Cierre/Magnet
                                      │
                                      ▼
[ PASO 3: LEAD CAPTURE ] ─────► Modal Web / Deep Linking Play Store (`simunclex.app`) ➔ Captura Email
                                      │
                                      ▼
[ PASO 4: NURTURING ] ────────► Secuencia Automatizada Email (7 Días) + Push Notifications App
                                      │
                                      ▼
[ PASO 5: FREEMIUM TRIAL ] ───► Experiencia en App: 10 Preguntas Gratuitas NGN Dual (Español/Inglés)
                                      │
                                      ▼
[ PASO 6: PAYWALL TRIGGER ] ──► Bloqueo al Agotar Trial ➔ Oferta Suscripción Premium ($29/mes)
```

---

## 🔹 PASO 1: Adquisición TOFU (SEO Orgánico & Paid Meta Ads Advantage+)

### 1.1 Tráfico Orgánico (SEO & Social Media)
- **Silos SEO Transaccionales:** Tráfico desde Google canalizado por el clúster de palabras clave en `simunclex.com/simulador-nclex-espanol` (*"simulador nclex en español"*, *"preguntas nclex rn bilingüe"*).
- **TikTok & Instagram Reels (Contenido de Valor Clínico):**
  - **Hook (0-3s):** *"¿Sabías que el 80% de enfermeros hispanos no reprueba el NCLEX por falta de conocimiento médico, sino por el inglés clínico de las preguntas NGN?"*
  - **Cuerpo (3-45s):** Desglose rápido de un caso clínico NGN de Priorización (*Bowtie / Matrix Question*) traduciendo los términos clave (ej. *Dyspnea ➔ Disnea*, *Assessment ➔ Valoración*).
  - **CTA (45-60s):** *"Prueba el primer simulador bilingüe gratis en el link de mi perfil"*.

### 1.2 Campañas Pagadas Meta Ads (Facebook & Instagram)
- **Segmentación:** **Advantage+ Audience** (Meta AI expansion).
  - **Target Geográfico:** EE. UU. (Florida, Texas, California, Nueva York, Illinois), Puerto Rico, Colombia, México, República Dominicana, España.
  - **Intereses Semilla (Seed Interests):** NCLEX-RN, NCLEX-PN, Nursing Officer, American Nurses Association, UWorld. Meta Advantage+ expande automáticamente a audiencias similares.
- **Creativo Principal (Video Ad 9:16):**
  - **Guión del Video:** Un enfermero(a) con uniforme médico frente a la computadora mostrando la pantalla split dual de *SimuNCLEX Bilingüe*.
  - **Copy Principal del Ad:**  
    > *"¿Te da miedo presentar el NCLEX-RN en inglés? 🩺🇺🇸 No dejes que el idioma pise tus sueños de ganar +$85,000 USD/año como RN en EE. UU. Con SimuNCLEX Bilingüe estudias las preguntas NGN oficiales en inglés, pero con explicación clínica instantánea en español. ¡Haz clic y prueba 10 preguntas gratis hoy mismo!"*

---

## 🔹 PASO 2: Retargeting de Audiencias Personalizadas (Meta & TikTok)

### 2.1 Reglas de Segmentación de Retargeting
- **Público Personalizado (Custom Audience):** Usuarios que vieron **>50% del Video Ad del Paso 1** O visitaron la landing page `simunclex.com` en los últimos 30 días pero NO descargaron la guía ni se registraron.

### 2.2 Anuncio de Retargeting (Ángulo de Urgencia & Cierre)
- **Formato:** Carrusel de Imagen / Video Corto (15s).
- **Copy del Anuncio de Retargeting:**  
    > *"Sabemos que viste nuestro video sobre el NCLEX bilingüe. 👀 ¿Sigues posponiendo tu homologación en EE. UU.? Descarga GRATIS la 'Guía NCLEX Hispanos 2026' con los trámites paso a paso, requisitos de visa EB-3 y un test de 10 preguntas NGN."*
- **Llamado a la Acción (CTA):** Botón *"Descargar Guía Gratis"* que dirige directamente al modal de captura.

---

## 🔹 PASO 3: Captura de Lead Magnet & Deep Linking a la Play Store

### 3.1 Modal de Captura Web (`LeadMagnetModal.tsx`)
- **Página de Aterrizaje:** `simunclex.com` / `simunclex.app`.
- **Formulario de Captura:**
  - Campo 1: Nombre completo.
  - Campo 2: Correo electrónico.
  - Campo 3: Selección de País de Origen y Tipo de Licencia (RN vs. PN).
- **Incentivo Inmediato:** Envío automático del PDF *"Guía Completa NCLEX Hispanos 2026: Homologación, Visas EB-3 y Simulacro NGN"*.

### 3.2 Redirección Inteligente con Deep Links (`simunclex.app`)
- Al enviar el formulario de captura, la web ejecuta una redirección automática mediante Deep Link:
  - **Dispositivo Android:** Redirecciona directamente a la ficha oficial en **Google Play Store** para descargar la app *SimuNCLEX Bilingüe*.
  - **Dispositivo iOS / Desktop:** Redirecciona al WebApp Dashboard en `simunclex.com/app/qbank-demo`.

---

## 🔹 PASO 4: Secuencia Automática de Emailing Condicional (7 Días) + Push Notifications

### 4.1 Matriz Diaria de Email Nurturing & Push Notifications

```
Día 1 ──► Email 1: Entrega PDF + Welcome ───────► Push: "Tu Guía NCLEX está lista en tu correo 📥"
Día 2 ──► Email 2: Anatomía de Pregunta NGN ────► Push: "¿Conoces las preguntas tipo Bowtie del NGN? 🩺"
Día 3 ──► Email 3: Guía Salarial RN ($85k USD) ──► Push: "Descubre cuánto gana un enfermero RN en Florida 💵"
Día 4 ──► Email 4: Reto 10 Preguntas Gratis ────► Push: "¡Tu prueba de 10 preguntas bilingües vence hoy! ⚡"
Día 5 ──► Email 5: Caso de Éxito (Testimonio) ───► Push: "Conoce cómo María pasó el NCLEX en 85 preguntas 🎓"
Día 6 ──► Email 6: FAQ & Glosario Bilingüe ──────► Push: "¿Dudas sobre el vocabulario médico en inglés? 📚"
Día 7 ──► Email 7: Descuento Lanzamiento 40% ───► Push: "Últimas 24h: 40% OFF en Plan Trimestral 🎁"
```

### 4.2 Lógica Condicional de Envío
- **Si el usuario abre el Email 4 y hace clic en el enlace del QBank:** El sistema lo clasifica como **Hot MQL** y detiene los emails genéricos, activando una secuencia rápida de conversión BOFU de 48 horas con el cupón de descuento.
- **Si el usuario instala la App pero no completa el trial:** La App envía Push Notifications automáticas a las 24h y 48h animándolo a resolver sus 10 preguntas gratuitas.

---

## 🔹 PASO 5: Onboarding Bilingüe & Experiencia Freemium QBank

### 5.1 Flujo de Onboarding en la App / WebApp
1. **Paso A (Bienvenida):** Selección del idioma de apoyo (Español) y fecha estimada del examen NCLEX.
2. **Paso B (Explicación del Modo Dual):** Tutorial animado de 3 pantallas mostrando cómo usar el **Toggle Bilingüe (Español/Inglés)** y cómo activar el *Glosario Médico Clínico*.
3. **Paso C (Inicio del Trial Freemium):** Acceso inmediato a un test de **10 preguntas NGN reales (Next Generation NCLEX)**.

### 5.2 Experiencia Freemium (10 Preguntas Gratuitas)
- Las preguntas incluyen casuística NGN oficial (*Case Studies, Highlight Text, Dropdown Cloze*).
- **Interrupción de Valor:** Tras responder cada pregunta, el usuario recibe la *Racional Clínica Bilingüe* detallando por qué la respuesta correcta es adecuada y por qué las demás son distractores médicos.

---

## 🔹 PASO 6: Gatillos de Paywall & Conversión a Suscripción Premium ($29/mes)

### 6.1 Disparadores Automáticos del Paywall (Paywall Triggers)
1. **Trigger A (Agotamiento de Trial):** Al completar la pregunta #10 del test gratuito, la app bloquea automáticamente el acceso y despliega la pantalla de pago (*Paywall Modal*).
2. **Trigger B (Funcionalidad Premium):** Al intentar acceder a la función *Simulación Cat / Examen NCLEX Completo de 85 Preguntas* o a la *Analítica de Pronóstico de Pase*.

### 6.2 Oferta de Conversión en Pantalla de Paywall
- **Encabezado del Paywall:**  
  > *"¡Felicidades por completar tus 10 preguntas de prueba! 🎉 Tu probabilidad actual de pasar el NCLEX es del 68%. Desbloquea más de 2,500+ preguntas bilingües y asegura tu Licencia RN en EE. UU."*
- **Opciones de Suscripción:**
  - **Plan Mensual:** **$29.00 USD / mes** (Cancela cuando quieras).
  - **Plan Trimestral (Recomendado):** **$69.00 USD / 3 meses** ($23.00/mes - Ahorra 20%).
  - **Plan Anual Pass Guarantee:** **$149.00 USD / año** (Garantía del 100% de devolución si no apruebas el NCLEX).
- **Garantía & Prueba Social:** Badge de *"Garantía de Satisfacción de 7 Días"* + Logotipos de seguridad SSL / Stripe Checkout + Testimonios rotativos de enfermeros hispanos.

---

## 📊 7. Resumen de Métricas & Unit Economics Meta

| Etapa del Funnel | Métrica Clave | Objetivo Cuantitativo |
| :--- | :--- | :--- |
| **TOFU (Ads & SEO)** | Visitantes Únicos / CTR Meta Ads | 50,000 visitas/mes \| CTR > 2.8% |
| **MOFU (Lead Capture)** | Tasa de Opt-in Modal / Descargas App | 18.5% Opt-in \| 9,250 Leads/mes |
| **MOFU (Nurturing)** | Open Rate Email / Click Rate Push | Open Rate > 38% \| Push CTR > 12% |
| **BOFU (Freemium)** | Ratio de Completitud Trial 10Q | 74% de usuarios completan las 10Q |
| **BOFU (Paywall)** | Conversión Trial-to-Paid | 10.2% de conversión a suscripción |
| **Unit Economics** | CAC Target / LTV / Ratio LTV:CAC | **CAC $32.50 USD \| LTV $150.00 USD \| Ratio 4.61x** |

---

## 🔄 8. Estado de Compuerta & Próximo Paso

- **Estatus:** 🔍 **GATE 3B RE-ELABORADO Y COMPLETADO (DIRECTIVA 20) - PENDIENTE VISTO BUENO EXECUTIVE DE CHRISTIAN Y EL CEO**
- **Próxima Etapa:** **Etapa 3C: Customer Journey End-to-End (`[TASK-CPO-01]`)** asignada al Chief Product Officer (`@cpo`).

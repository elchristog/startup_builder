# 🎯 Arquitectura del Funnel de Marketing & Adquisición

Este documento detalla cada una de las fases del embudo de conversión para atraer, calificar y convertir clientes potenciales en compradores de la startup.

---

## 📐 Diagrama del Funnel (Top-to-Bottom)

```
[ Tráfico Orgánico / Ads / RRSS ]
              │
              ▼
   ┌──────────────────────┐
   │ 1. Atractivo (TOFU)  │ ──> Landing Page en Astro (Velocidad & SEO)
   └──────────┬───────────┘
              │
              ▼
   ┌──────────────────────┐
   │ 2. Captura (MOFU)    │ ──> Lead Magnet / Formulario de Calificación
   └──────────┬───────────┘
              │
              ▼
   ┌──────────────────────┐
   │ 3. Conversión (BOFU) │ ──> Demostración / Checkout / Pago Directo
   └──────────┬───────────┘
              │
              ▼
   ┌──────────────────────┐
   │ 4. Registro/Login    │ ──> Creación de Cuenta en Web App React (/login)
   └──────────────────────┘
```

---

## 📌 Detalle Paso a Paso de la Fase de Marketing

### Paso 1: Top of the Funnel (TOFU) - Atracción
- **Canales:** Tráfico orgánico SEO (vía blog/landing Astro), LinkedIn Ads, X/Twitter Threads y campañas de retargeting.
- **Punto de contacto:** Landing page principal desarrollada en `website/`.
- **Objetivo:** Captar la atención en menos de 3 segundos con una propuesta de valor clara y un titular impactante.

### Paso 2: Middle of the Funnel (MOFU) - Nutrición & Calificación
- **Mecanismo:** Diagnóstico con Inteligencia Artificial (impulsado por Google Gemini en el backend).
- **Acción del Usuario:** Completa un breve formulario interactivo sobre las necesidades de su negocio.
- **Micro-Conversión:** Registro de email y teléfono para recibir un informe ejecutivo personalizado.

### Paso 3: Bottom of the Funnel (BOFU) - Venta & Pago
- **Oferta Core:** Acceso a la plataforma / servicio acelerador de startups.
- **Elemento de Urgencia:** Prueba con garantía de satisfacción y cupos limitados por cohorte.
- **Llamado a la Acción (CTA):** Botón directo "Empezar Ahora" que redirige al pasarela de pago y posterior registro en la Web App (`/login`).

---

## 📊 Métricas Clave de Rendimiento (KPIs)
- **CTR (Click Through Rate):** Target > 3%
- **Landing Page Conversion Rate:** Target > 10% (de visita a lead)
- **Sales Conversion Rate:** Target > 4% (de lead a cliente pagador)
- **CAC (Costo de Adquisición de Cliente):** Mantener por debajo del 30% del LTV (Life Time Value).

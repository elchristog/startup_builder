# ⚡ Especificación Técnica & Arquitectura Web en Astro (Etapa 3A)

**Proyecto:** NCLEX Prep Hispanos (`nclex-prep-hispanos`)  
**Plataforma Web:** *SimuNCLEX Bilingüe Hub* (`simunclex.com`)  
**Fase del Funnel:** Etapa 3A (GATE 3A - Arquitectura Web SSG/SSR)  
**Autor:** `@web-specialist` (Web Specialist & Astro Architect)  
**Revisor Técnico C-Level:** `@cto` (Chief Technology Officer)  
**Entregable Oficial:** `projects/nclex-prep-hispanos/website/astro-architecture-spec.md`  
**Fecha:** 2026-09-12  
**Estatus:** 🔍 COMPLETADO - EN REVISIÓN CTO  

---

## 🏗️ 1. Estructura de Directorios & Arquitectura de Proyecto Astro

La web principal de **SimuNCLEX Bilingüe** se construirá sobre **Astro v4.x** combinando **Static Site Generation (SSG)** para contenido SEO transaccional de alto tráfico y **Server-Side Rendering (SSR / Islands)** para widgets interactivos bilingües.

```text
projects/nclex-prep-hispanos/website/
├── astro.config.mjs               # Configuración de Astro (Tailwind/Vanilla CSS, Site URL, Sitemap)
├── package.json                   # Dependencias de producción y Scripts
├── public/
│   ├── favicon.ico
│   ├── icons/                     # Ícono ASO Google Play (512x512 px) y PWA manifest
│   └── fonts/                     # Fuentes Outfit e Inter auto-hospedadas (woff2)
└── src/
    ├── layouts/
    │   ├── BaseLayout.astro       # Layout raíz (SEO tags, Schema.org, Fonts, Analytics)
    │   └── LandingLayout.astro    # Layout optimizado para conversión sin distracciones
    ├── components/
    │   ├── global/
    │   │   ├── Header.astro       # Navegación principal + Selector de Idioma
    │   │   └── Footer.astro       # Enlaces legales, silos SEO y redes sociales
    │   ├── hero/
    │   │   └── HeroSection.astro  # Titular H1, UVP y CTA principal al Lead Magnet
    │   ├── simulator/
    │   │   ├── QBankPreview.tsx   # React Island: Demo interactivo de pregunta NGN bilingüe
    │   │   └── BilingualToggle.tsx# Swapper flotante de idioma (Español / Inglés)
    │   ├── conversion/
    │   │   ├── LeadMagnetModal.tsx# Capturador de email para guía gratuita NCLEX
    │   │   └── PricingGrid.astro  # Cuadro comparativo de planes de suscripción
    │   └── seo/
    │       ├── SchemaJsonLd.astro # Generador de esquemas Schema.org (Course/MedicalApp)
    │       └── CanonicalUrl.astro # Etiquetas canonicals automáticas
    ├── pages/
    │   ├── index.astro            # Homepage / Hub principal de conversión
    │   ├── simulador-nclex-en-espanol.astro # Silo SEO A (Palabra clave principal)
    │   ├── revalidacion-enfermeria-usa.astro# Silo SEO B (Guía de trámites)
    │   ├── preguntas-nclex-rn-bilingue.astro# Silo SEO C (QBank Preview & NGN Spec)
    │   └── api/
    │       └── lead-capture.ts    # Endpoint SSR para registrar leads en BigQuery/CRM
    └── styles/
        └── global.css             # Tokens CSS (Variables HSL: Primary #0284C7, Accent #10B981)
```

---

## 🚀 2. Componentes Clave & Client Islands (Islas de Interactividad)

| Componente | Tipo de Renderizado | Propósito & Funcionalidad |
| :--- | :--- | :--- |
| **`HeroSection.astro`** | SSG (HTML Estático) | Carga instantánea del H1 optimizado para SEO transaccional y propuesta de valor bilingüe. |
| **`QBankPreview.tsx`** | Client Island (`client:visible`) | Mini-simulador interactivo en React. Muestra 1 pregunta NGN real con toggle bilingüe sin recargar la página. |
| **`BilingualToggle.tsx`** | Client Island (`client:idle`) | Permite alternar la interfaz entre español e inglés manteniendo el estado de la pregunta. |
| **`LeadMagnetModal.tsx`** | Client Island (`client:only="react"`) | Modal emergente optimizado para capturar el email del usuario a cambio del "PDF Guía NCLEX Hispanos 2026". |
| **`lead-capture.ts`** | Endpoint SSR (Server Route) | Recibe el formulario, valida el email y lo transmite en tiempo real a BigQuery y el CRM de correos. |

---

## ⚡ 3. Estrategia de Optimización Core Web Vitals (Target Score > 95)

1. **Largest Contentful Paint (LCP < 1.2s):**
   - Pre-carga crítica de fuentes WOFF2 (`Outfit` y `Inter`) mediante etiquetas `<link rel="preload">`.
   - Cero imágenes pesadas en el Hero; sustituidas por código CSS con gradientes HSL `#0284C7` y sombras vectoriales.
2. **First Input Delay / Interaction to Next Paint (INP < 50ms):**
   - Uso estricto de la arquitectura de **Islas de Astro (`client:visible`)** para que el JavaScript interactivo se cargue únicamente cuando el usuario haga scroll hasta el simulador.
3. **Cumulative Layout Shift (CLS = 0.00):**
   - Dimensiones reservadas para todos los bloques interactivos y contenedores modales.

---

## 📊 4. Schema de Integración de Analítica & BigQuery Payload

El endpoint `src/pages/api/lead-capture.ts` procesará la conversión y enviará la siguiente estructura JSON a BigQuery:

```json
{
  "event_name": "lead_registration",
  "timestamp": "2026-09-12T17:28:40Z",
  "user_data": {
    "email": "enfermera.demo@gmail.com",
    "lead_source": "landing_hero_lead_magnet",
    "preferred_language": "es"
  },
  "utm_params": {
    "utm_source": "google_search",
    "utm_medium": "cpc",
    "utm_campaign": "nclex_hispanos_brand"
  },
  "technical_metadata": {
    "user_agent": "Mozilla/5.0...",
    "device_type": "mobile",
    "page_path": "/simulador-nclex-en-espanol"
  }
}
```

---

## 🔄 5. Estado de Compuerta & Próximo Paso

- **Estatus:** 🔍 **GATE 3A COMPLETADO - PENDIENTE REVISIÓN Y VISTO BUENO CTO (@cto)**
- **Próxima Etapa:** **Etapa 3B: Definición del Funnel de Marketing TOFU-MOFU-BOFU (`[TASK-MKT-01]`)** asignada al CMO (`@cmo`).

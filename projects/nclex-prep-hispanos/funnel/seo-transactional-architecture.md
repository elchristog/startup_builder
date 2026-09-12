# 📐 Especificación Estratégica de Arquitectura SEO Transaccional Web (Etapa 2C)

**Proyecto:** NCLEX Prep Hispanos (`nclex-prep-hispanos`)  
**Plataforma & Marca:** *SimuNCLEX Bilingüe* (`SimuNCLEX`)  
**Fase de Funnel:** Etapa 2C (GATE 2C - Arquitectura SEO Transaccional Web)  
**Autor:** `@seo-specialist` (SEO Specialist)  
**Entregable Oficial:** `projects/nclex-prep-hispanos/funnel/seo-transactional-architecture.md`  
**Fecha:** 2026-09-12  
**Estatus:** 🟢 COMPLETADO & REVISADO  

---

## 🎯 1. Resumen Ejecutivo & Estrategia de Captación Orgánica

A partir de la investigación cuantitativa de palabras clave (`seo-keywords-research.md`), el estudio de Naming (`brand-and-naming.md`) y el informe macroeconómico (`macro-analysis.md`), se proyecta un mercado de **48,500+ búsquedas mensuales** con nula competencia ASO/SEO optimizada en español.

El objetivo de la **Arquitectura SEO Transaccional Web** es capturar este tráfico orgánico a costo $0 y canalizarlo quirúrgicamente hacia la prueba gratuita (Freemium: 50 Preguntas NGN sin tarjeta) y la descarga directa de la aplicación móvil en Google Play Store.

### 📊 Aplicación del Principio de Pareto (80/20):
El **80% de las conversiones transaccionales** provendrán de **3 URLs Pilares clave**:
1. `https://simunclex.com/simulador-nclex-espanol` (Captura: *"simulador nclex en español"* - 7,400 búsquedas/mes)
2. `https://simunclex.com/preguntas-nclex-rn-espanol` (Captura: *"preguntas nclex rn español"* - 6,100 búsquedas/mes)
3. `https://simunclex.com/revalidacion-enfermeria-usa` (Captura: *"revalidacion enfermeria usa"* - 4,200 búsquedas/mes)

---

## 🗺️ 2. Mapa del Sitio & Jerarquía Estructural de URLs (Sitemap Architecture)

Se establece una arquitectura en silos (*Hub & Spoke Model*) para maximizar la autoridad del dominio y la distribución del *PageRank* interno hacia las páginas de conversión BOFU.

```
                                  ┌───────────────────────────┐
                                  │   https://simunclex.com/  │
                                  │      (Home / Master)      │
                                  └─────────────┬─────────────┘
                                                │
         ┌──────────────────────┬───────────────┴───────────────┬──────────────────────┐
         ▼                      ▼                               ▼                      ▼
┌──────────────────┐  ┌──────────────────┐            ┌──────────────────┐   ┌──────────────────┐
│ /simulador-nclex-│  │ /preguntas-nclex-│            │  /revalidacion-  │   │     /precios     │
│     espanol      │  │    rn-espanol    │            │  enfermeria-usa  │   │  (Planes & App)  │
│  (Silo BOFU 1)   │  │  (Silo BOFU 2)   │            │  (Silo MOFU 3)   │   │  (Silo BOFU 4)   │
└────────┬─────────┘  └────────┬─────────┘            └────────┬─────────┘   └──────────────────┘
         │                     │                               │
         ▼                     ▼                               ▼
 ┌───────────────┐     ┌───────────────┐               ┌───────────────┐
 │ /caso-clinico-│     │ /glosario-    │               │ /calculadora- │
 │   ngn-demo    │     │ ingles-medico │               │  salario-usa  │
 └───────────────┘     └───────────────┘               └───────────────┘
```

---

## 📋 3. Especificación Técnica Detallada por URL Pilar

### 🔹 3.1 Página de Inicio (Home / Master Brand)
- **URL Canonical:** `https://simunclex.com/`
- **Etapa del Funnel:** TOFU / MOFU / BOFU (Brand Home)
- **Título SEO (Title Tag - 58 caracteres):**  
  `SimuNCLEX Bilingüe | Simulador NCLEX RN en Español para USA`
- **Meta Descripción (Meta Description - 152 caracteres):**  
  `Aprueba tu examen NCLEX RN en EE. UU. simulando preguntas NGN en inglés con explicaciones, racionales y glosario bilingüe en español. ¡Prueba gratis 50 preguntas!`
- **Jerarquía H1 / H2:**
  - **H1:** `SimuNCLEX Bilingüe: Tu Licencia de Enfermería RN en Estados Unidos`
  - **H2:** `¿Por qué el 80% de los enfermeros hispanos fallan el NCLEX en inglés?`
  - **H2:** `La Metodología Puente Bilingüe: English Exam, Spanish Brain`
  - **H2:** `Práctica NGN Interactivas con Racionales en Español`
  - **H2:** `Planes Flexibles sin Contrato: Estudia desde tu Celular`
- **Schema.org Structured Data:** `SoftwareApplication` & `Organization`

---

### 🔹 3.2 URL Transaccional Pilar 1: Simulador NCLEX en Español (BOFU - Máxima Conversión)
- **URL Canonical:** `https://simunclex.com/simulador-nclex-espanol`
- **Etapa del Funnel:** BOFU (Bottom of the Funnel / Direct Trial)
- **Keyword Semilla Primaria:** `simulador nclex en español` (7,400/mes | KD 24 | CPC $4.80)
- **Keywords Secundarias:** `simulador examen nclex ngn`, `nclex rn en español app`, `simulador nclex gratis`
- **Título SEO (Title Tag - 59 caracteres):**  
  `Simulador NCLEX en Español | Practica Preguntas NGN Bilingües`
- **Meta Descripción (Meta Description - 154 caracteres):**  
  `El simulador NCLEX RN #1 para enfermeros hispanos. Preguntas Next Generation en inglés auténtico con explicaciones paso a paso en español. Comienza gratis.`
- **Jerarquía H1 / H2:**
  - **H1:** `Simulador NCLEX RN en Español con Casos Clínicos NGN`
  - **H2:** `Simula el Examen Real Pearson VUE en Modo Adaptativo (CAT)`
  - **H2:** `Traducción Instantánea y Racionales Clínicos en Español`
  - **H2:** `Banco de Preguntas NGN Actualizado a las Normas NCSBN`
  - **H2:** `Comienza tu Prueba Gratuita de 50 Preguntas Hoy`
- **Elementos CRO On-Page:**
  - Formulario de Registro Rápido (Google 1-Tap Login / Email).
  - Banner interactivo de prueba in-page (Muestra interactiva de 1 pregunta NGN Bowtie).
  - Badge de Google Play Store para descarga directa de la app.
- **Schema.org Structured Data:** `SoftwareApplication` & `Course`

---

### 🔹 3.3 URL Transaccional Pilar 2: Banco de Preguntas NCLEX RN (BOFU/MOFU)
- **URL Canonical:** `https://simunclex.com/preguntas-nclex-rn-espanol`
- **Etapa del Funnel:** BOFU / MOFU (Consideración de Producto)
- **Keyword Semilla Primaria:** `preguntas nclex rn español` (6,100/mes | KD 28 | CPC $5.10)
- **Keywords Secundarias:** `banco de preguntas nclex español`, `preguntas ngn nclex`, `examen nclex gratis español`
- **Título SEO (Title Tag - 57 caracteres):**  
  `Preguntas NCLEX RN en Español | Banco NGN Bilingüe Resuelto`
- **Meta Descripción (Meta Description - 151 caracteres):**  
  `Accede a +2,500 preguntas NCLEX RN explicadas en español. Domina casos clínicos NGN, farmacología y priorización con explicaciones detalladas. Pruébalo gratis.`
- **Jerarquía H1 / H2:**
  - **H1:** `Banco de Preguntas NCLEX RN Explicadas en Español`
  - **H2:** `Categorías del Examen: Priorización, Delegación y Farmacología`
  - **H2:** `Formato Next Generation NCLEX: Matriz, Bowtie y Case Studies`
  - **H2:** `¿Por qué practicar con preguntas en inglés y explicaciones en español?`
- **Schema.org Structured Data:** `FAQPage` & `Quiz`

---

### 🔹 3.4 URL Informacional Pilar 3: Guía de Revalidación de Enfermería en EE. UU. (MOFU)
- **URL Canonical:** `https://simunclex.com/revalidacion-enfermeria-usa`
- **Etapa del Funnel:** MOFU (Atracción y Educación de Candidatos)
- **Keyword Semilla Primaria:** `revalidacion enfermeria usa` (4,200/mes | KD 38 | CPC $6.20)
- **Keywords Secundarias:** `requisitos para trabajar de enfermero en estados unidos`, `cgfns en español`, `visa eb3 enfermeria`
- **Título SEO (Title Tag - 59 caracteres):**  
  `Revalidación de Enfermería en USA | Guía Paso a Paso 2026`
- **Meta Descripción (Meta Description - 155 caracteres):**  
  `Descubre cómo homologar tu título de enfermería en EE. UU. Requisitos CGFNS, registro en Board de Enfermería y preparación NCLEX Bilingüe. Descarga la guía.`
- **Jerarquía H1 / H2:**
  - **H1:** `Guía Definitiva para Revalidar tu Título de Enfermería en Estados Unidos`
  - **H2:** `Paso 1: Validación de Credenciales con CGFNS o Josef Silny`
  - **H2:** `Paso 2: Solicitud de Autorización para Examen (ATT) ante el Board`
  - **H2:** `Paso 3: Aprobación del NCLEX RN (El Paso Crítico)`
  - **H2:** `Paso 4: Examen de Inglés (IELTS/OET) y Visa EB-3 de Residencia`
- **Lead Magnet On-Page:** Checklist descargable en PDF *"Ruta de Revalidación 2026 para Enfermeros Hispanos"* a cambio de email/registro.
- **Schema.org Structured Data:** `HowTo` & `Article`

---

### 🔹 3.5 URL de Conversión: Calculadora de Salario & ROI RN (MOFU/BOFU)
- **URL Canonical:** `https://simunclex.com/calculadora-salario-enfermero-usa`
- **Keyword Primaria:** `cuanto gana un enfermero revalidado en usa` (3,500/mes)
- **Propósito CRO:** Herramienta interactiva donde el enfermero ingresa su país actual (ej. México, Colombia, Puerto Rico) y su salario mensual actual, y la calculadora genera su incremento financiero proyectado en EE. UU. ($89,000 USD/año mediano) mostrando el ROI de suscribirse a *SimuNCLEX Bilingüe*.
- **CTA:** *"Invierte $19.99/mes para desbloquear un salario de $7,400/mes en USA. Empieza Gratis."*

---

## 🔗 4. Arquitectura de Enlazado Interno & Esculpido de PageRank (Internal Linking Strategy)

```
                            ┌─────────────────────────────────┐
                            │      PÁGINAS INFORMACIONALES    │
                            │ (Blog / Guías / Calculadora)    │
                            └────────────────┬────────────────┘
                                             │
                        Anchor Text: "Simulador NCLEX en español"
                        Anchor Text: "Practica preguntas NGN"
                                             │
                                             ▼
                            ┌─────────────────────────────────┐
                            │    PÁGINAS TRANSACCIONALES BOFU │
                            │   (/simulador-nclex-espanol)    │
                            └────────────────┬────────────────┘
                                             │
                                             ▼
                            ┌─────────────────────────────────┐
                            │   LANDING DE CONVERSIÓN & APP   │
                            │ (Google Play Store / Reg. Web)  │
                            └─────────────────────────────────┘
```

1. **Textos de Ancla (Anchor Texts) Estrictos:**
   - Toda mención de la práctica del examen en blog/guías debe enlazar a `/simulador-nclex-espanol` usando el texto de ancla exacto `"simulador NCLEX en español"` o `"probar simulador NGN"`.
2. **Breadcrumbs Transaccionales (Migas de Pan):**
   - `Inicio` ➔ `Simulador NCLEX` ➔ `Preguntas RN Bilingües`.
3. **Pie de Página (Footer) Transaccional SEO:**
   - Enlace estático en footer a las 3 URLs Pilares para garantizar flujo continuo de PageRank a lo largo de todo el sitio web en Astro.

---

## ⚙️ 5. Especificaciones Técnicas SEO en Astro & Rendimiento (< 1.5s)

1. **Framework Web:** Astro Web Framework (`/website`) para generación estática (SSG) y 0 KB de JavaScript cliente por defecto en páginas informacionales.
2. **Core Web Vitals Targets:**
   - **LCP (Largest Contentful Paint):** < 1.2s.
   - **FID / INP (Interaction to Next Paint):** < 50ms.
   - **CLS (Cumulative Layout Shift):** 0.00.
3. **Indexación & Sitemap XML:**
   - Generación automática mediante `@astrojs/sitemap` apuntando a `https://simunclex.com/sitemap-index.xml`.
4. **Metadatos Bilingües & Hreflang:**
   - `<link rel="alternate" hreflang="es" href="https://simunclex.com/simulador-nclex-espanol" />`
   - `<link rel="alternate" hreflang="es-US" href="https://simunclex.com/simulador-nclex-espanol" />`
   - `<link rel="alternate" hreflang="es-PR" href="https://simunclex.com/simulador-nclex-espanol" />`

---

## 📈 6. KPIs de Rendimiento & Medición en BigQuery

La tasa de conversión y tráfico de cada URL transaccional se registrará en Google BigQuery en la tabla `projects/nclex-prep-hispanos/database/` bajo el siguiente esquema de eventos:

- `organic_landing_hit`: Registro de visitas por URL canonical y referer organic.
- `freemium_signup_conversion`: Conversión de visita orgánica a registro de 50 preguntas gratis.
- `app_download_click`: Clics salientes hacia la ficha oficial en Google Play Store.
- **Meta de Conversión Orgánica (SEO Web ➔ Lead):** **> 12.5%** de conversión de visita orgánica a registro freemium.

---

## 🔄 7. Estado de Compuerta & Próximo Paso

- **Estatus:** 🟢 **GATE 2C COMPLETADO SATISFACTORIAMENTE**
- **Próxima Etapa:** Transferencia a la **Etapa 2D: Selección & Persistencia del Dominio Web** (`projects/nclex-prep-hispanos/funnel/domain-strategy.md`).

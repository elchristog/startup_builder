# 🚀 Funnel de Desarrollo de Negocio & Ciclo de Vida de Startup (Business Development Lifecycle)

**Documento Maestro de Arquitectura de Operaciones**  
**Startup Builder Framework**  
**Aprobado por:** Christian (Founder & Director Supremo) & `@ceo`  
**Última Actualización:** 2026-09-12  

---

## 📌 Visión General

El **Funnel de Desarrollo de Negocio (Business Development Lifecycle)** es la metodología estricta, secuencial y basada en datos mediante la cual **Startup Builder** transforma una idea inicial en una empresa digital en producción.

Cada sub-etapa exige la **persistencia en markdown de un entregable específico** en la carpeta `projects/[startup-id]/funnel/` o `website/` antes de que el siguiente agente pueda proceder. El tablero Kanban (`projects/[active_project_id]/kanban-board.md`) administra estas dependencias mediante **Compuertas de Control (Stage Gates)** bloqueantes.

### 🛡️ Protocolo de Gobernanza y Verificación Kanban por @project-admin
Entre cada transición de sub-etapa, se ejecuta de forma obligatoria el **Protocolo de Doble Prompt**:
1. **PROMPT 1 (Auditoría Kanban por `@project-admin`):** El Administrador del Proyecto y Líder de la Metodología Kanban (`@project-admin`) audita que el entregable previo se haya persistido correctamente, que el Kanban esté actualizado y que no existan violaciones metodológicas.
   - Si detecta incumplimiento, `@project-admin` modifica e inyecta órdenes de corrección en el prompt del siguiente agente.
   - Si se cumple la metodología, `@project-admin` aprueba y da luz verde al PROMPT 2.
2. **PROMPT 2 (Siguiente Agente Operativo):** Prompt listo para ejecutar la siguiente tarea técnica u operativa desbloqueada.


## 🗺️ Mapa Completo del Embudo de Desarrollo de Negocio

```mermaid
graph TD
    E0["💡 Etapa 0: Propuesta & Inicialización<br/>(@founder & @ceo)"] --> Gate1{"🔴 Gate 1: Viabilidad & Unit Economics<br/>(@feasibility-analyst)"}
    Gate1 -- "Dictamen GO (LTV:CAC > 3.5x)" --> E2A["🔍 Etapa 2A: Research Keywords SEO/ASO<br/>(@seo-specialist)"]
    Gate1 -- "NO-GO" --> Pivot["⛔ Proyecto Descartado / Pivot"]
    E2A --> E2B["🏷️ Etapa 2B: Selección & Persistencia del Naming<br/>(@content-lead / @cmo)"]
    E2B --> E2B_MACRO["🌎 Etapa 2B.1: Inteligencia Macroeconómica & Industria<br/>(@macro-analyst)"]
    E2B_MACRO --> E2C["📐 Etapa 2C: Arquitectura SEO Transaccional<br/>(@seo-specialist)"]
    E2C --> E2D["🌐 Etapa 2D: Selección & Persistencia del Dominio Web<br/>(@seo-specialist / @cmo)"]
    E2D --> E2E["🎨 Etapa 2E: Paleta de Colores & Design System<br/>(@ux-designer)"]
    E2E --> E2F["🖼️ Etapa 2F: Prompt de IA para Generación de Logo<br/>(@ux-designer)"]
    E2F --> E3A["⚡ Etapa 3A: Instrucciones & Arch. Web en Astro<br/>(@web-specialist / @cto)"]
    E3A --> E3B["🎯 Etapa 3B: Estrategia del Funnel de Marketing<br/>(@cmo)"]
    E3B --> E3C["🗺️ Etapa 3C: Customer Journey End-to-End<br/>(@cpo)"]
    E3C --> Gate4{"📱 Gate 4: Curaduría QBank & App Móvil<br/>(@content-lead, @ux-designer, @cto)"}
    Gate4 --> Gate5{"📊 Gate 5: BigQuery & Analytics Pipeline<br/>(@api-integration-specialist)"}
    Gate5 --> Gate6{"🚀 Gate 6: Lanzamiento & Growth<br/>(@meta-ads-specialist, @growth-hacker)"}
```

---

## 📋 Detalle Paso a Paso de la Cadena Secuencial de Persistencia

### 💡 Etapa 0: Propuesta de Idea & Inicialización del Proyecto
- **Agente:** `@founder` ➔ `@ceo`
- **Acción:** Creación de estructura `projects/[startup-id]/`, activación en `agents/active-project.md` e inicialización del Kanban.
- **Archivo Persistido:** `projects/[startup-id]/kanban-board.md` y `agents/ceo/notes.md`.

---

### 📊 Etapa 1: Evaluación Cuantitativa de Viabilidad & Unit Economics (GATE 1)
- **Agente:** `@feasibility-analyst`
- **Acción:** Modelar LTV:CAC, payback, margen neto y matriz de riesgos.
- **Archivo Persistido:** `projects/[startup-id]/feasibility-study.md`.

---

### 🔍 Etapa 2A: Investigación de Keywords & Clúster SEO/ASO (GATE 2A)
- **Agente:** `@seo-specialist`
- **Acción:** Analizar volumen de búsqueda, intención comercial y dificultad de palabras clave en Google Search y Google Play Store.
- **Archivo Persistido:** `projects/[startup-id]/funnel/seo-keywords-research.md`.

---

### 🏷️ Etapa 2B: Selección & Persistencia del Naming Comercial (GATE 2B)
- **Agente:** `@content-lead` / `@cmo`
- **Acción:** Seleccionar el nombre comercial oficial optimizado para SEO y ASO basado en la investigación de la Etapa 2A.
- **Archivo Persistido:** `projects/[startup-id]/funnel/brand-and-naming.md`.

---

### 🌎 Etapa 2B.1: Inteligencia Macroeconómica & Entorno de Industria (GATE 2B.1)
- **Agente:** `@macro-analyst`
- **Acción:** Analizar tendencias PESTEL, regulaciones de homologación/visas, poder adquisitivo por región (PPP) y contexto de mercado global para respaldar precios y posicionamiento.
- **Archivo Persistido:** `projects/[startup-id]/macro-analysis.md`.

---

### 📐 Etapa 2C: Arquitectura SEO Transaccional de la Web (GATE 2C)
- **Agente:** `@seo-specialist`
- **Acción:** Definir la estructura jerárquica de URLs, sitemap transaccional (Landings de Nicho, Calculadoras, Glosarios) e intencionalidad de conversión.
- **Archivo Persistido:** `projects/[startup-id]/funnel/seo-transactional-architecture.md`.

---

### 🌐 Etapa 2D: Selección & Persistencia del Dominio Web (GATE 2D)
- **Agente:** `@seo-specialist` / `@cmo`
- **Acción:** Seleccionar el dominio oficial `.com` / `.app` priorizando autoridad SEO, facilidad de recordación y disponibilidad.
- **Archivo Persistido:** `projects/[startup-id]/funnel/domain-strategy.md`.

---

### 🎨 Etapa 2E: Paleta de Colores & Sistema de Diseño (GATE 2E)
- **Agente:** `@ux-designer`
- **Acción:** Definir la paleta de colores HSL/Hexadecimal, psicología cromática, tipografías y tokens de interfaz UI.
- **Archivo Persistido:** `projects/[startup-id]/funnel/design-system-and-branding.md`.

---

### 🖼️ Etapa 2F: Prompt para Generación del Logo con IA (GATE 2F)
- **Agente:** `@ux-designer` / `@content-lead`
- **Acción:** Redactar el prompt ultra-específico e ingeniería de instrucciones para generar el logo vectorial/SVG e icono de app mediante herramientas de IA.
- **Archivo Persistido:** `projects/[startup-id]/funnel/logo-ai-prompt.md`.

---

### ⚡ Etapa 3A: Instrucciones & Especificación Técnica Web en Astro (GATE 3A)
- **Agente:** `@web-specialist` / `@cto`
- **Acción:** Documentar la arquitectura técnica, componentes UI, páginas y optimizaciones de rendimiento (< 1.5s) para el desarrollo en Astro.
- **Archivo Persistido:** `projects/[startup-id]/website/astro-architecture-spec.md`.

---

### 🎯 Etapa 3B: Estrategia del Funnel de Marketing (GATE 3B)
- **Agente:** `@cmo`
- **Acción:** Diseñar el embudo comercial completo (TOFU atracción, MOFU consideración, BOFU oferta/conversion y secuencias de nurturing).
- **Archivo Persistido:** `projects/[startup-id]/funnel/marketing-funnel.md`.

---

### 🗺️ Etapa 3C: Mapeo del Customer Journey End-to-End (GATE 3C)
- **Agente:** `@cpo`
- **Acción:** Diseñar la experiencia completa del usuario desde el primer toque publicitario, onboarding in-app, uso del QBank NGN hasta la renovación de suscripción.
- **Archivo Persistido:** `projects/[startup-id]/funnel/customer-journey-end-to-end.md`.

---

### 📱 Etapa 4: Curaduría de Contenidos QBank & Desarrollo de App Móvil (GATE 4)
- **Agente:** `@content-lead`, `@ux-designer` & `@cto`
- **Acción:** Curar preguntas NGN bilingües y programar la aplicación webapp/móvil.
- **Directorio de Entrega:** `projects/[startup-id]/webapp/`.

---

### 📊 Etapa 5: Infraestructura BigQuery & Analytics Pipeline (GATE 5)
- **Agente:** `@api-integration-specialist` & `@cto`
- **Acción:** Crear esquemas de base de datos e ingesta de eventos de conversión temporal.
- **Archivo Persistido:** `projects/[startup-id]/database/schema-and-dictionary.md`.

---

### 🚀 Etapa 6: Lanzamiento, Ads & Crecimiento (GATE 6)
- **Agente:** `@meta-ads-specialist`, `@growth-hacker` & `@customer-success`
- **Acción:** Activar pauta digital, optimizar tasa de conversión in-app y escalar el MRR.

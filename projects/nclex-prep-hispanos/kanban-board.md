# 📋 Tablero Kanban - NCLEX Prep Hispanos (`nclex-prep-hispanos`)

**Startup:** NCLEX Prep Hispanos (Google Play App & Platform)  
**Líderes de Proyecto:** `@ceo` | `@cmo` | `@cpo` | `@cto`  
**Metodología:** Cadena de Producción Secuencial Estricta (Stage-Gated Kanban)  
**Última Actualización:** 2026-09-12  

---

## 💡 1. Backlog / Ideas

- [ ] `[IDEA-01]` **Simulador con IA para Explicaciones por Voz:** Integrar síntesis de voz en las explicaciones de preguntas en inglés. (`@cpo` / `@cto`)
- [ ] `[IDEA-02]` **B2B Nursing Schools Partnership:** Licencias corporativas para universidades en Puerto Rico y LATAM. (`@cmo` / `@ceo`)
- [ ] `[IDEA-03]` **Comunidad Privada In-App:** Foro de resolución de casos clínicos entre pares. (`@cpo`)

---

## 🎯 2. Por Hacer (To Do) - Cadena Secuencial con Compuertas de Control (Gates)

### 🟢 FASE 2A: RESEARCH SEO & NAMING (GATE 2A - ACTIVO / DESBLOQUEADO)
*Desbloqueado tras aprobación del Gate 1 (Viabilidad). Esta tarea definirá el clúster de palabras clave para el Naming comercial y el ASO.*

- [ ] `[TASK-SEO-01]` **Investigación de Clúster de Keywords & Naming SEO/ASO:** Investigar volumen de búsquedas (Search Volume), intencionalidad y dificultad de palabras clave clave (*"NCLEX RN en español"*, *"simulador NCLEX"*, *"enfermería USA"*, *"revalidación enfermeros"*) en EE. UU., Puerto Rico y LATAM. Definir la arquitectura de Naming comercial para la app y el dominio.  
  - **Asignado a:** `@seo-specialist`  
  - **Dependencia:** `TASK-01` (Aprobada ✅).  
  - **Entregable esperado:** Documento `projects/nclex-prep-hispanos/seo-and-naming-strategy.md` y actualización en `agents/seo-specialist/notes.md`.

---

### 🟡 FASE 2B: ESTRATEGIA DE PRODUCTO & EMBUDO (GATE 2B - 🔒 BLOQUEADO POR TASK-SEO-01)
*Se activa al completar la investigación de Keywords y Naming comercial.*

- [ ] `[TASK-02]` **Arquitectura de QBank NGN & Motor CAT:** Definir la especificación del motor de preguntas adaptativas (IRT) y los tipos de ítems NGN.  
  - **Asignado a:** `@cpo`  
  - **Estado:** 🔒 Bloqueado por `TASK-SEO-01`  
- [ ] `[TASK-06]` **Plan de Marketing Funnel & Campañas Orgánicas:** Diseñar embudo TOFU-MOFU-BOFU para enfermeros hispanos migrantes.  
  - **Asignado a:** `@cmo`  
  - **Estado:** 🔒 Bloqueado por `TASK-SEO-01`  

---

### 🔵 FASE 3: DISEÑO DE EXPERIENCIA & CONTENIDOS (GATE 3 - 🔒 BLOQUEADO POR FASE 2B)

- [ ] `[TASK-03]` **Curaduría del Banco de Preguntas Bilingüe Inicial (500 ítems):** Estructurar JSON maestro en Inglés NGN con racionales en Español.  
  - **Asignado a:** `@content-lead`  
  - **Estado:** 🔒 Bloqueado por `TASK-02`  
- [ ] `[TASK-04]` **UX/UI Wireframes App Móvil (Android/Google Play):** Diseñar las pantallas clave: Dashboard, QBank, CAT Exam y Glosario.  
  - **Asignado a:** `@ux-designer`  
  - **Estado:** 🔒 Bloqueado por `TASK-02`  
- [ ] `[TASK-05]` **Ficha ASO & Visual Assets Google Play:** Metadatos, screenshots y diseño gráfico para la ficha en la App Store.  
  - **Asignado a:** `@seo-specialist`  
  - **Estado:** 🔒 Bloqueado por `TASK-06` y `TASK-SEO-01`  

---

### 🟢 FASE 4: DESARROLLO TÉCNICO & DEPLOYMENT (GATE 4 - 🔒 BLOQUEADO POR FASE 3)

- [ ] `[TASK-07]` **Setup de Repositorio & App Base Móvil (Flutter/React Native):** Inicializar app en `projects/nclex-prep-hispanos/webapp/`.  
  - **Asignado a:** `@cto`  
  - **Estado:** 🔒 Bloqueado por `TASK-04`  
- [ ] `[TASK-08]` **Desarrollo de Landing Page Comercial en Astro:** Desarrollar sitio comercial en `projects/nclex-prep-hispanos/website/`.  
  - **Asignado a:** `@web-specialist`  
  - **Estado:** 🔒 Bloqueado por `TASK-06`  
- [ ] `[TASK-09]` **Pipeline BigQuery & Analytics:** Crear esquema en `projects/nclex-prep-hispanos/database/`.  
  - **Asignado a:** `@api-integration-specialist`  
  - **Estado:** 🔒 Bloqueado por `TASK-07`  

---

## 🏃 3. En Progreso (In Progress)

- [/] `[TASK-00]` **Inicialización Estratégica & Gobernanza Kanban:** Definición de arquitectura multi-startup y alineación de dependencias secuenciales. (Asignado a: `@ceo`)

---

## 🔍 4. En Revisión (In Review)

*(Sin tareas actualmente en revisión)*

---

## ✅ 5. Completado (Done)

- [x] `[TASK-INIT]` **Directiva Inicial del Founder:** Solicitud de evaluación de viabilidad para app de preparación NCLEX-RN para hispanohablantes. (Completado por: `@ceo`)
- [x] `[TASK-01]` **Evaluación de Viabilidad Detallada y Modelo LTV:CAC:** Estudio cuantitativo completado en `projects/nclex-prep-hispanos/feasibility-study.md` (Dictamen: VIABLE CON CONDICIONES. LTV:CAC 4.29x, Payback < 30 días, Margen Neto 85%). (Completado por: `@feasibility-analyst`, Aprobado por: `@ceo` el 2026-09-12)

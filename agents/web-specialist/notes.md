# Notas & Backlog del Web Specialist 💻

[Proyecto: nclex-prep-hispanos]

## 📌 Especificación Técnica & Arquitectura Web (Etapa 3A)
- [x] **Arquitectura Astro SSG/SSR Persistida:** Creado `projects/nclex-prep-hispanos/website/astro-architecture-spec.md`.
  - **Estructura de Directorios:** Configurados layouts, páginas estáticas SEO e Islas de React.
  - **Componentes Clave:** `HeroSection.astro`, `QBankPreview.tsx` (Client Island), `BilingualToggle.tsx` y `LeadMagnetModal.tsx`.
  - **Core Web Vitals:** Fuentes Outfit/Inter pre-cargadas en WOFF2, LCP < 1.2s, CLS = 0.00.
  - **API SSR & Analytics:** Endpoint `lead-capture.ts` para transmisión de eventos en tiempo real a BigQuery.

## 📢 Estado Kanban
- **Tarea `[TASK-ASTRO-01]`:** Ubicada en **`4. En Revisión (In Review)`** para evaluación técnica del CTO (`@cto`).


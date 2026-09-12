# Notas Técnicas del CTO 🛠️

[Proyecto: nclex-prep-hispanos]

## 📌 Aprobaciones C-Level & Directrices de Arquitectura
- ✅ **Etapa 3A (Arquitectura Web Astro - APROBADO):** Visto bueno técnico otorgado a `projects/nclex-prep-hispanos/website/astro-architecture-spec.md`.
  - **Hibridación SSG/SSR:** SSG estático para silos SEO transaccionales; Client Islands React (`QBankPreview.tsx`, `LeadMagnetModal.tsx`) con hidratación diferida `client:visible`.
  - **Core Web Vitals:** Pre-carga de fuentes WOFF2 (Outfit/Inter), LCP < 1.2s y CLS = 0.00.
  - **BigQuery Integration:** Endpoint SSR `lead-capture.ts` validado con schema JSON para ingestión de eventos en tiempo real.

## 📢 Próximas Asignaciones Técnicas & de Marketing
- **@cmo:** Habilitada la Etapa 3B (`[TASK-MKT-01]`) para diseñar la definición del Funnel de Marketing TOFU-MOFU-BOFU (`marketing-funnel.md`).


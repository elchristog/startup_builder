# Startup Builder & Engine 🚀

Plataforma integral para acelerar y sentar las bases de creación, validación y escalamiento de startups de alto impacto con modelos de ingresos recurrentes y conversión optimizada.

## 📐 Estructura del Proyecto

```
startup-builder/
├── agents/                       # Agentes de IA (Miembros del Equipo)
│   ├── core-directives.md        # 📜 Directrices Fundamentales & Protocolo de Comunicación
│   ├── team-hierarchy.md         # 🏛️ Organigrama y Jerarquía del Equipo
│   ├── kanban-board.md           # 📋 Tablero Kanban Central de Producción
│   ├── ceo/                      # Chief Executive Officer (Dirección General)
│   │   ├── prompt.md             # 🤖 System Prompt Ejecutable del Agente
│   │   ├── instructions.md       # 📋 Directrices Específicas del Rol
│   │   └── notes.md              # 📝 Canal de Comunicación & Estado
│   ├── cmo/                      # Chief Marketing Officer (Líder de Marketing)
│   ├── cpo/                      # Chief Product Officer (Líder de Producto)
│   ├── cto/                      # Chief Technology Officer (Líder de Tecnología)
│   ├── content-lead/             # Líder de Generación de Contenidos & Copywriter
│   ├── web-specialist/           # Especialista en Sitio Web & CRO (Astro)
│   ├── meta-ads-specialist/      # Especialista en Facebook e Instagram Ads
│   ├── youtube-specialist/       # Especialista en YouTube & Video Marketing
│   ├── media-buyer/              # Paid Media Specialist (Tráfico Pago General)
│   ├── seo-specialist/           # SEO Lead (Tráfico Orgánico Google)
│   ├── ux-designer/              # UI/UX Designer (Diseño de Experiencia)
│   ├── customer-support/         # Customer Support Specialist (Atención Omnicanal)
│   └── customer-success/         # Customer Success Specialist (Optimización de Funnel)
│                                 # (Cada carpeta contiene prompt.md, instructions.md y notes.md)
│
├── website/                      # Sitio Web Público / Landing Page de Ventas (Astro)
│   ├── src/
│   │   ├── components/           # Componentes UI de conversión rápida
│   │   └── pages/index.astro     # Landing principal con estética moderna
│   └── astro.config.mjs
│
├── webapp/                       # Aplicación Web Core (SaaS / Platform)
│   ├── frontend/                 # Frontend (React)
│   │   └── src/
│   │       ├── login/            # Módulo de Autenticación y Onboarding
│   │       ├── customers/        # Portal y Dashboard para Clientes
│   │       └── team/             # Workspace Interno para Operaciones y Equipo
│   └── backend/                  # API Rest (Python + Google Gemini + BigQuery)
│       └── app/
│           ├── main.py           # API Principal (FastAPI)
│           ├── gemini_client.py  # Integración con Google Gemini AI
│           └── bigquery_client.py# Analítica e inteligencia de datos con BigQuery
│
├── funnel/                       # Documentación Estratégica de Conversión & LTV
│   ├── marketing-funnel.md       # Arquitectura del Funnel de Adquisición y Ventas
│   └── customer-journey-end-to-end.md # Viaje End-to-End del Cliente Post-Compra
│
└── database/                     # Gobernanza de Datos & BigQuery
    └── schema-and-dictionary.md  # 🗄️ Esquema, Tablas, Features & ERD en BigQuery
```

---

## 🛠️ Tecnologías Empleadas

- **Landing & Marketing:** Astro (Alto rendimiento y SEO)
- **Frontend App:** React.js (Interfaz dinámica y moderna)
- **Backend API:** Python (FastAPI / Uvicorn)
- **AI Core:** Google Gemini AI API
- **Big Data & Analytics:** Google Cloud BigQuery

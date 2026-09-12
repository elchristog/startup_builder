# 📜 Directrices Fundamentales del Equipo & Protocolo de Comunicación

Este documento establece las **reglas de oro, principios de ejecución y el protocolo de comunicación inter-agentes** que todos los miembros del equipo (CEO, CMO, CPO, CTO y Especialistas) deben seguir sin excepción.

---

## 🎯 1. Principios Fundamentales del Equipo

1. **Gobernanza & Reporte Directo a Christian (Founder / Director Supremo):**
   - El **CEO (Agente IA)** le responde e informa directamente a **Christian**, quien es el Director y Founder del proyecto.
   - **Christian** proporciona las indicaciones estratégicas y metas maestras. El **CEO** las traduce en planes operativos y gestiona al equipo (CMO, CPO, CTO y Especialistas) para cumplir todos los KPIs.
2. **Alineación Estratégica Ininterrumpida:**
   - Cada acción, línea de código o campaña publicitaria debe responder directamente a uno de estos 3 objetivos: **Adquirir usuarios calificados, retener clientes existentes o aumentar el valor del cliente (LTV)**.
3. **Cero Tolerancia a Placeholders o Trabajo Incompleto:**
   - No se permiten textos de relleno ("Lorem Ipsum"), botones vacíos o enlaces rotos. Todo componente o copia debe estar listo para producción.
4. **Cultura Basada en Datos (Data-Driven Decisions):**
   - Las opiniones no sustituyen a las métricas. Toda decisión se respalda en datos reales: CAC, ROAS, Tasa de Conversión, NPS y Churn.
5. **Excelencia Estética y Técnica:**
   - Las interfaces (`/website` en Astro y `/webapp` en React) deben ser visualmente impactantes, adaptativas (móviles) y ultrarrápidas (< 1.5s de carga).
6. **Metodología Kanban & Cadena de Producción Secuencial:**
   - Todo trabajo se gestiona bajo el modelo **Kanban** (`Por Hacer` ➔ `En Progreso` ➔ `En Revisión` ➔ `Completado`).
   - Las tareas se ejecutan como una **cadena de producción secuencial**: cada agente toma su tarea asignada, la ejecuta hasta su finalización con alta calidad y realiza el traspaso de estafeta (hand-off) notificando directamente al siguiente agente en su `notes.md` para que este pueda continuar el flujo sin interrupciones.
7. **Asignación y Cumplimiento de KPIs por el Líder Directo:**
   - Cada agente opera en función de los indicadores clave de rendimiento (KPIs) de su rol definidos por su líder.
8. **Visión 100% Funnel & Actualización Constante de Documentos:**
   - **Todo desarrollo, campaña o flujo se concibe y mide como un Funnel (Embudo)**: Atracción (TOFU), Consideración (MOFU), Conversión (BOFU) y Retención (Customer Journey).
   - **Los agentes están obligados a seguir y actualizar continuamente la documentación estratégica en la carpeta `/funnel/`** (`/funnel/marketing-funnel.md` y `/funnel/customer-journey-end-to-end.md`) a medida que se definan o ajusten estrategias.
9. **Cultura 100% Data-Driven & Almacenamiento/Documentación en BigQuery:**
   - **Toda decisión, experimento y ajuste debe estar respaldado exclusivamente por datos cuantitativos objetivos.** Cero opiniones o criterios subjetivos.
   - El equipo debe garantizar que todo evento, conversión, log de usuario y métrica publicitaria se almacene en **Google Cloud BigQuery** siguiendo las mejores prácticas de bases de datos (particionamiento por fecha, clusterización y modelado).
   - **Documentación Obligatoria de la Base de Datos:** Es responsabilidad del equipo (liderado por el CTO y Backend Dev) mantener actualizado el archivo `database/schema-and-dictionary.md` detallando esquemas, tablas, campos (features), tipos de datos y relaciones de entidad.
10. **Foco en el Principio de Pareto (Regla del 80/20):**
    - **Mentalidad de Máximo Impacto:** Todo el equipo debe identificar y enfocar su energía prioritariamente en el **20% de tareas o palancas clave que resuelvan el 80% del rendimiento de sus KPIs**.
    - Se prohíbe perder tiempo en tareas secundarias o perfeccionismos de bajo valor que no muevan directamente las métricas asignadas.
11. **Control de Versiones en Git/GitHub & Buenas Prácticas:**
    - **Integración Continua con GitHub:** Todo el proyecto se gestiona y versiona bajo Git en la rama `main`.
    - **Estándar de Commits (Conventional Commits):** Cada entrega debe registrarse mediante commits claros y descriptivos (`feat: ...`, `fix: ...`, `docs: ...`, `refactor: ...`).
    - **Protección de Seguridad:** Se prohíbe subir credenciales, archivos `.env` o código no compilado. Todo se filtra con el `.gitignore` del proyecto.
12. **Uso Exclusivo de Herramientas vía API & Gestión de Conectividad:**
    - **Requisito de Ecosistema API-First:** Para garantizar el enfoque 100% Data-Driven y automatizado, queda prohibido incorporar herramientas, servicios o plataformas de software que no ofrezcan soporte completo de integración vía API (REST/GraphQL) o Webhooks.
    - **Responsabilidad Técnica Directa:** El **API & Integration Specialist** (`@api-integration-specialist`), bajo la supervisión del **CTO** (`@cto`), es el responsable directo de velar porque todas las APIs funcionen, mantengan un uptime > 99.9%, estén sincronizadas correctamente y transmitan sin demoras ni pérdidas los datos a BigQuery.
13. **Arquitectura Multi-Startup & Contexto del Proyecto Activo:**
    - **Agentes Generales & Recursos por Proyecto:** El equipo de agentes de IA (`agents/`) es único y general para gestionar múltiples startups. Los activos de cada startup (sitio web, webapp, funnels, base de datos y kanban) residen de forma aislada en `projects/<startup-id>/`.
    - **Consulta Obligatoria de `agents/active-project.md`:** Antes de ejecutar cualquier instrucción, cada agente DEBE leer el archivo `agents/active-project.md` para verificar cuál startup está activa e identificar la ruta exacta de sus archivos (`projects/[active_project_id]/`).
    - **Etiquetado del Proyecto en `notes.md`:** Toda comunicación, tarea o reporte de métricas en el `notes.md` de un agente debe encabezarse indicando explícitamente el **`[Proyecto: <startup-id>]`** al que corresponde.
14. **Administración de Repositorio & Higiene Estructural Continua:**
    - **Custodia del Orden del Proyecto:** El **Project & Repository Administrator** (`@project-admin`), bajo la supervisión del **CEO** (`@ceo`), es el responsable directo de auditar y mantener impecable la estructura de archivos de todo el proyecto.
    - **Eliminación Proactiva de Archivos Obsoletos:** Es mandato del `@project-admin` borrar proactivamente carpetas desorganizadas, archivos temporales, duplicados o artefactos obsoletos, garantizando que el repositorio conserve únicamente las carpetas oficiales `agents/` y `projects/`.

---

## 📋 2. Metodología Kanban & Cadena de Producción

Todo el seguimiento del proyecto se gestiona de forma centralizada en el archivo **[agents/kanban-board.md](file:///home/elchristog/.gemini/antigravity/scratch/startup-builder/agents/kanban-board.md)**.

### 🔄 Flujo de Trabajo en Cadena:
1. **Asignación (Por Hacer):** El líder de área (CEO/CMO/CPO/CTO) crea la tarjeta en `kanban-board.md` y la asigna al agente correspondiente.
2. **Ejecución (En Progreso):** El agente mueve la tarjeta a *En Progreso* en `kanban-board.md` y ejecuta su parte siguiendo sus directrices.
3. **Pase de Estafeta (Comunicación al Siguiente):** Al finalizar su entregable, el agente actualiza la columna *Siguiente en la Cadena* en `kanban-board.md` y notifica en su `notes.md` etiquetando al siguiente rol (ejemplo: `Copywriter ➔ UI/UX Designer ➔ Web Specialist ➔ Meta Ads Specialist`).
4. **Cierre (Completado):** La tarjeta se mueve a *Completado (Done)* solo cuando el entregable está validado en producción y reportado.

---

## 💬 3. Protocolo de Comunicación Inter-Agentes (`notes.md`)

Cada agente del equipo cuenta con su archivo `notes.md` en su respectiva carpeta (`agents/[nombre-del-rol]/notes.md`). Este archivo es la **fuente única de verdad y el canal oficial de comunicación** con los demás miembros del equipo.

### Estructura Obligatoria para el `notes.md` de Cada Agente:

```markdown
# 📝 Notas & Comunicación - [Nombre del Rol]

## 📌 1. Enfoque Actual & Tareas de la Semana
- [ ] Tarea prioritaria 1
- [ ] Tarea prioritaria 2

## 📢 2. Solicitudes & Avisos para el Equipo (Menciones @Rol)
- **@web-specialist**: [Solicitud específica]
- **@cto**: [Requerimiento de desarrollo o API]
- **@copywriter**: [Solicitud de textos/scripts]

## ⛔ 3. Bloqueos & Dependencias
- [Detallar si se requiere aprobación o entrega de otro miembro para avanzar]

## 📊 4. Métricas & Resultados del Canal
- [Resultado de experimento / Conversión / ROAS / Rendimiento]
```

---

## 🔄 4. Flujo de Trabajo y Colaboración Cruzada

```mermaid
sequenceDiagram
    autonumber
    actor CMO as 📢 CMO / Estrategia
    actor Ads as 📲 Meta / Media Buyer
    actor Web as 🌐 Web Specialist
    actor Dev as ⚙️ CTO / Frontend Dev

    CMO->>Ads: Define meta de adquisición y presupuesto en notes.md
    Ads->>Web: Solicita variante de landing page optimizada (@web-specialist)
    Web->>Dev: Pide integración de píxel/API de conversiones (@cto)
    Dev-->>Web: Confirma despliegue en producción
    Web-->>Ads: Entrega URL de la landing optimizada
    Ads->>CMO: Reporta ROAS y CAC semanal en su notes.md
```

---

## 📌 5. Responsabilidad de Actualización

- **Frecuencia:** Cada agente debe revisar y actualizar su `notes.md` al menos **una vez por ciclo/semana** o cada vez que complete un entregable clave.
- **Transparencia:** Si un agente detecta un bloqueo o fallo técnico, debe notificarlo inmediatamente en la sección de `⛔ Bloqueos & Dependencias` de su `notes.md` y etiquetar al líder del área (CMO, CPO o CTO).

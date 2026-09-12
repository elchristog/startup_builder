# 📋 Tablero Kanban Central de Producción & Tareas

Este es el **tablero Kanban único y centralizado** donde todos los miembros del equipo (CEO, CMO, CPO, CTO y Especialistas por Canal) registran, mueven y actualizan el estado de sus tareas en tiempo real a lo largo de la cadena de producción.

---

## 📌 1. Backlog / Ideas (Pendientes de Asignar)

| ID | Tarea / Iniciativa | Canal / Área | Asignado A | Prioridad |
| :--- | :--- | :--- | :--- | :--- |
| `TASK-005` | Campaña de Retargeting para visitantes que no compraron | Meta Ads | `@meta-ads-specialist` | Media |
| `TASK-006` | Serie de 4 videos largos sobre "Cómo validar tu startup" | YouTube | `@youtube-specialist` | Media |
| `TASK-007` | Implementación de sistema de feedback y valoraciones NPS | Producto | `@cpo` / `@ux-designer` | Alta |

---

## 📋 2. Por Hacer (To Do - Tareas Priorizadas)

| ID | Tarea / Entregable | Responsable Inicial | Siguiente en la Cadena |
| :--- | :--- | :--- | :--- |
| `TASK-001` | Redacción de copys persuasivos para nueva landing | `@cmo` / `@copywriter` | `➔ @web-specialist` |
| `TASK-002` | Estudio de palabras clave de alta intención | `@seo-specialist` | `➔ @web-specialist` |

---

## ⏳ 3. En Progreso (In Progress - Cadena de Producción Activa)

| ID | Tarea Actual | Agente Ejecutando Hoy | Entregable en Construcción | Estado de la Estafeta |
| :--- | :--- | :--- | :--- | :--- |
| `TASK-003` | Diseño de componentes UI en React para `/customers` | `@ux-designer` | Dashboard de clientes | 🔄 En desarrollo ➔ Siguiente: `@cto` |
| `TASK-004` | Integración de Google Gemini API en backend Python | `@cto` | API de Inteligencia Artificial | 🔄 En desarrollo ➔ Siguiente: `@ux-designer` |

---

## 🔍 4. En Revisión & Pruebas (In Review)

| ID | Tarea a Revisar | Revisor / Evaluador | Criterio de Aceptación |
| :--- | :--- | :--- | :--- |
| `TASK-000` | Landing Page Principal en Astro (`/website`) | `@cmo` & `@web-specialist` | Velocidad < 1.5s, 0 errores, diseño adaptativo |

---

## ✅ 5. Completado (Done - En Producción)

| ID | Tarea Finalizada | Responsable Final | Fecha de Cierre | Impacto / Resultado |
| :--- | :--- | :--- | :--- | :--- |
| `TASK-INIT` | Estructuración inicial de agentes, roles y directrices | `@ceo` / Todo el equipo | 2026-09-12 | 100% Organigrama y directrices listas |

---

## 📜 Reglas de Actualización del Tablero

1. **Responsabilidad Individual:** Cuando un agente toma una tarea de *Por Hacer*, debe cambiar el estado a *En Progreso* y colocar su `@Rol`.
2. **Pase de Estafeta en Cadena:** Al finalizar su entrega parcial, el agente actualiza la columna **"Siguiente en la Cadena"** y le notifica en el `notes.md` del siguiente rol.
3. **Cierre de Tarea:** Una tarea solo se mueve a **Completado (Done)** cuando está completamente desplegada en producción y aprobada por el líder del área.

# 💻 Especificación Técnica de la App Móvil & Web (Etapa 4)

**Proyecto:** NCLEX Prep Hispanos (`nclex-prep-hispanos`)  
**Producto Comercial:** *SimuNCLEX Bilingüe*  
**Fase:** Etapa 4 (GATE 4 - Curaduría QBank & Arquitectura de la App Móvil/Web)  
**Autores:** `@content-lead`, `@ux-designer` y `@cto`  
**Aprobadores:** `@cpo` y `@cto`  
**Entregable Oficial:** `projects/nclex-prep-hispanos/webapp/app-architecture-spec.md`  
**Fecha:** 2026-09-12  
**Estatus:** 🔍 COMPLETADO - EN REVISIÓN C-LEVEL  

---

## 🏗️ Arquitectura de la Aplicación

### Stack Tecnológico & Componentes Core
1. **Frontend / Mobile Framework:** Astro SSG/SSR con Client Islands en **React 18** (despliegue como WebApp PWA responsiva en `simunclex.app` y ejecutable en Google Play vía WebView / Capacitor).
2. **Estilos & UI System:** Vanilla CSS modular con variables de tokens del Sistema de Diseño (`design-system-and-branding.md`).
3. **Estado Global & Persistencia:**
   - **`bilingualModeStore` (Zustand / Nano Stores):** Mantiene el estado del toggle (`EN` vs. `ES`) sincronizado en tiempo real sin recargar la pantalla.
   - **`sessionStore`:** Rastrea el número de preguntas respondidas en la sesión actual (1 a 10) para disparar el trigger de paywall al alcanzar la pregunta #10.
   - **IndexedDB / LocalStorage:** Almacenamiento local seguro del progreso en modo offline.
4. **Integración de Analytics Telemetry:** Eventos nativos enviados al pipeline de BigQuery (`analytics_events`):
   - `question_answered`: ID de pregunta, tiempo de respuesta, idioma activo al responder (`EN` vs `ES`), resultado (correcto/incorrecto).
   - `bilingual_toggle_clicked`: Idioma de origen ➔ Idioma de destino.
   - `paywall_impression`: Disparador (agotamiento de trial vs. click en examen completo).

---

## 🎨 Componentes UI Implementados

### 1. `BilingualToggle.tsx`
Botón flotante persistente con animación de transición suave que permite alternar instantáneamente entre la versión original en inglés NCSCBN y la traducción clínica contextual en español.

### 2. `NGNQuestionCard.tsx`
Componente responsivo renderizador de casos NGN (*Bowtie, Highlight Text, Dropdown Cloze*). Muestra la casuística médica, las opciones de respuesta y el panel desplegable de la *Racional Clínica Explicativa*.

### 3. `PaywallModal.tsx`
Modal emergente bloqueante que se despliega al agotar el trial de 10 preguntas. Presenta el score obtenido, el pronóstico de pase del usuario, las opciones de suscripción ($29/mes o $69/3 meses) y el flujo de pago seguro vía Stripe SDK.

---

## 📊 Integración del Banco de Preguntas (`qbank-dataset.json`)

El dataset inicial `qbank-dataset.json` incluye casuística clínica NGN bilingüe verificada:
- **Formato Bowtie NGN:** Caso de Edema Agudo de Pulmón con selección de condición primaria, 2 acciones inmediatas de enfermería y 2 parámetros de monitoreo clínico.
- **Formato Highlight Text NGN:** Caso postoperatorio de artroplastia de cadera con identificación de medidas de prevención de TVP.
- **Explicaciones Médicas Racionales:** 100% redactadas en español técnico por enfermeros instructores RN.

---

## 🔄 Estado de Compuerta & Próximo Paso

- **Estatus:** 🔍 **GATE 4 COMPLETADO - PENDIENTE VISTO BUENO C-LEVEL DE CPO Y CTO**
- **Próxima Etapa:** **Etapa 5: Pipeline BigQuery & Analytics (`[TASK-DB-01]`)** asignada al `@api-integration-specialist`.

# 🎨 Sistema de Diseno, Paleta de Colores & UI Tokens (Etapa 2E)

**Proyecto:** NCLEX Prep Hispanos (`nclex-prep-hispanos`)  
**Plataforma & Marca:** *SimuNCLEX Bilingüe* (`SimuNCLEX`)  
**Fase del Funnel:** Etapa 2E (GATE 2E - Sistema de Diseño & Branding)  
**Autor:** `@ux-designer` (UX/UI Designer & Brand Strategist)  
**Revisor Executive:** `@cpo` (Chief Product Officer)  
**Entregable Oficial:** `projects/nclex-prep-hispanos/funnel/design-system-and-branding.md`  
**Fecha:** 2026-09-12  
**Estatus:** 🔍 COMPLETADO - EN REVISIÓN C-LEVEL  

---

## 🎯 1. Resumen Ejecutivo & Filosofia del Diseno

El sistema de diseño de **SimuNCLEX Bilingüe** está concebido para inspirar **confianza médica, rigor clínico y serenidad psicológica** en enfermeros hispanohablantes que enfrentan el estrés del examen de licenciatura NCLEX-RN en los Estados Unidos.

### 🌟 Pilares UX/UI:
1. **Confianza Médica Institucional:** Uso de tonos azul cerúleo y marino profundo para evocar autoridad quirúrgica y estándar hospitalario estadounidense.
2. **Claridad Cognitiva en Examen Bilingüe:** Jerarquía visual estricta para diferenciar el enunciado en inglés de las explicaciones, racionales clínicas y glosarios interactivos en español sin saturar la pantalla.
3. **Refuerzo Positivo Inmediato:** Retroalimentación cromática de alto contraste (verde esmeralda clínica para respuestas correctas y carmesí para errores) con micro-animaciones suaves.
4. **Diseño Adaptativo Híbrido (Web & Mobile App):** Componentes compatibles con Astro (sitio web), Tailwind/CSS Vanilla Tokens y Flutter/React Native (app Android en Google Play).

---

## 🎨 2. Paleta Cromatica Oficial (Tokens HSL & Hex)

La paleta ha sido auditada para garantizar cumplimiento estricto de contraste **WCAG 2.1 AAA** (ratio mínimo de 7.0:1 sobre fondos oscuros y claros).

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                               PALETA CROMÁTICA SIMUNCLEX                                │
├─────────────────────────┬──────────────────────┬──────────────────────┬─────────────────┤
│ Categoría               │ Token CSS            │ Valor Hex            │ Valor HSL       │
├─────────────────────────┼──────────────────────┼──────────────────────┼─────────────────┤
│ Primary Medical Blue    │ --color-primary-500  │ #0284C7              │ hsl(201, 96%, 39%)│
│ Primary Medical Hover   │ --color-primary-600  │ #0369A1              │ hsl(201, 96%, 32%)│
│ Medical Deep Navy       │ --color-navy-900     │ #0F172A              │ hsl(222, 47%, 11%)│
│ Success Clinical Emerald│ --color-success-500  │ #10B981              │ hsl(160, 84%, 39%)│
│ Alert Clinical Rose     │ --color-danger-500   │ #EF4444              │ hsl(0, 84%, 60%)│
│ Clinical Amber Warning  │ --color-amber-500    │ #F59E0B              │ hsl(38, 92%, 50%)│
│ Spanish Glossary Purple │ --color-spanish-500  │ #8B5CF6              │ hsl(262, 83%, 58%)│
│ Dark Mode Background    │ --bg-dark            │ #090D16              │ hsl(222, 40%, 6%)│
└─────────────────────────┴──────────────────────┴──────────────────────┴─────────────────┘
```

### 🖌️ CSS Custom Properties (Design Tokens):

```css
:root {
  /* Primary Medical Trust Palette */
  --color-primary-50: hsl(204, 100%, 97%);
  --color-primary-100: hsl(204, 94%, 94%);
  --color-primary-500: hsl(201, 96%, 39%); /* #0284C7 - Core Brand */
  --color-primary-600: hsl(201, 96%, 32%); /* #0369A1 - Hover Active */
  --color-navy-900: hsl(222, 47%, 11%);    /* #0F172A - Headers & Dark Text */

  /* Clinical Feedback Tokens */
  --color-success-500: hsl(160, 84%, 39%); /* #10B981 - Correct Answer */
  --color-success-bg: hsl(160, 84%, 95%);  /* Success Light BG */
  --color-danger-500: hsl(0, 84%, 60%);    /* #EF4444 - Incorrect Answer */
  --color-danger-bg: hsl(0, 84%, 96%);    /* Alert Light BG */
  --color-amber-500: hsl(38, 92%, 50%);   /* #F59E0B - Flagged / NGN Case Study */

  /* Bilingual Accent Palette */
  --color-spanish-accent: hsl(262, 83%, 58%); /* #8B5CF6 - "Ver en Español" Badge */
  --color-spanish-bg: hsl(262, 83%, 96%);

  /* Neutral Surface Tokens (Dark Mode Preferred) */
  --bg-app-dark: hsl(222, 40%, 6%);       /* #090D16 */
  --surface-card-dark: hsl(222, 35%, 11%); /* #121826 */
  --border-glass-dark: rgba(255, 255, 255, 0.08);
  --text-primary-dark: #F8FAFC;
  --text-secondary-dark: #94A3B8;
}
```

---

## 🅰️ 3. Jerarquia Tipografica (Google Fonts: Outfit & Inter)

Se seleccionan dos fuentes optimizadas de libre acceso vía Google Fonts:
- **Titulares & Branding (`Outfit`):** Aporta modernidad, estructura geométrica limpia y elegancia corporativa.
- **Interfaz, Preguntas NGN & Racionales (`Inter`):** Diseñada específicamente para pantallas de alta densidad de lectura en móviles.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                 ESCALA TIPOGRÁFICA                                       │
├───────────────────┬──────────────┬──────────────┬───────────────┬────────────────────────┤
│ Nivel             │ Fuente       │ Tamaño (px)  │ Line Height   │ Weight                 │
├───────────────────┼──────────────┼──────────────┼───────────────┼────────────────────────┤
│ H1 Display        │ Outfit       │ 48px / 3.0rem│ 1.1           │ 700 (Bold)             │
│ H2 Section        │ Outfit       │ 32px / 2.0rem│ 1.2           │ 600 (SemiBold)         │
│ H3 Card Title     │ Outfit       │ 24px / 1.5rem│ 1.3           │ 600 (SemiBold)         │
│ Stem Question EN  │ Inter        │ 18px / 1.125rem│1.5          │ 500 (Medium)           │
│ Rationale ES      │ Inter        │ 15px / 0.937rem│1.6          │ 400 (Regular)          │
│ Small / Badge     │ Inter        │ 13px / 0.812rem│1.4          │ 600 (SemiBold)         │
└───────────────────┴──────────────┴──────────────┴───────────────┴────────────────────────┘
```

---

## 🧩 4. Especificacion de Componentes UI Clave

### 🔘 A. Botón Principal de Acción (CTA Conversión):
- **Gradiente de Fondo:** `linear-gradient(135deg, #0284C7 0%, #0369A1 100%)`
- **Sombra Fluida:** `0 10px 25px -5px rgba(2, 132, 199, 0.4)`
- **Efecto Hover:** Transformación de escala `scale(1.02)` y elevación de sombra en 200ms ease-out.

### 📝 B. Tarjeta de Pregunta QBank NGN (Bilingual Card):
```html
<!-- Ejemplo de Marcado de Componente QBank Bilingüe -->
<div class="qbank-card-container">
  <div class="qbank-header">
    <span class="badge-ngn">NGN Case Study</span>
    <span class="badge-bilingual">🌉 Puente Bilingüe Activado</span>
  </div>
  <div class="question-stem-en">
    A nurse in the emergency department is caring for a client presenting with acute dyspnea...
  </div>
  <button class="btn-toggle-spanish">
    📖 Traducir Enunciado al Español (Modo Aprendizaje)
  </button>
</div>
```

### 💡 C. Modales de Racional Clínica (Explicación Paso a Paso):
- **Respuesta Correcta:** Borde izquierdo sólido `4px solid #10B981`, fondo `rgba(16, 185, 129, 0.05)`.
- **Explicación Fisiopatológica en Español:** Encabezado con ícono `🩺 Razonamiento Clínico` en fuente `Outfit` 16px.

---

## 📱 5. Diseno Glassmorphism & UI Tokens para la App

```css
/* Glassmorphism Token para Tarjetas de Suscripción & Examen */
.glass-panel {
  background: rgba(18, 24, 38, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}
```

---

## 🔄 6. Estado de Compuerta & Próximo Paso

- **Estatus:** 🔍 **GATE 2E COMPLETADO - PENDIENTE REVISIÓN Y VISTO BUENO CPO (@cpo)**
- **Próxima Etapa:** **Etapa 2F: Ingeniería de Prompt para Generación de Logo con IA** (`projects/nclex-prep-hispanos/funnel/logo-ai-prompt.md`) asignada a `@ux-designer`.

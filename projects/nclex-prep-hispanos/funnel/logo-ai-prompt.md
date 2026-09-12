# 🎨 Ingeniería de Prompt para Generación de Logo con IA (Etapa 2F)

**Proyecto:** NCLEX Prep Hispanos (`nclex-prep-hispanos`)  
**Plataforma & Marca:** *SimuNCLEX Bilingüe* (`SimuNCLEX`)  
**Fase del Funnel:** Etapa 2F (GATE 2F - Identidad Gráfica & Logo IA)  
**Autor:** `@ux-designer` (UX/UI Designer & Brand Strategist)  
**Revisor Ejecutivo:** `@cpo` (Chief Product Officer)  
**Entregable Oficial:** `projects/nclex-prep-hispanos/funnel/logo-ai-prompt.md`  
**Fecha:** 2026-09-12  
**Estatus:** 🔍 COMPLETADO - EN REVISIÓN CPO  

---

## 🎯 1. Concepto Creativo & Metáfora Visual del Isotipo

El isotipo de **SimuNCLEX Bilingüe** fusiona tres símbolos clave en una sola marca vectorial limpia, minimalista y moderna:

```
                      ┌──────────────────────────────────────────────┐
                      │             CONCEPTO DEL ISOTIPO             │
                      ├──────────────────────────────────────────────┤
                      │  🩺 1. Estetoscopio Clínico (Rigor NCLEX)    │
                      │  🌉 2. Escudo / Puente Bilingüe (EE.UU./LATAM)│
                      │  ✅ 3. Checkmark NGN (Aprobado en el Examen) │
                      └──────────────────────────────────────────────┘
```

1. **🩺 Estetoscopio Moderno:** Representa la profesión de enfermería y la acreditación clínica oficial en EE. UU.
2. **🌉 Escudo & Puente Bilingüe:** Simboliza la protección del profesional hispanohablante y el puente de transición hacia la licencia estadounidense.
3. **✅ Checkmark de Éxito NGN:** Integrado sutilmente en el flujo de la línea del estetoscopio para transmitir el resultado exitoso en el examen NCLEX-RN.

---

## 🎨 2. Especificación Cromática (Design Tokens HSL & Hex)

- **Fondo del Isotipo ASO:** `#0F172A` / `hsl(222, 47%, 11%)` (Navy Oscuro Hospitalario).
- **Línea Principal del Isotipo:** `#0284C7` / `hsl(201, 96%, 39%)` (Azul Cerúleo Médico).
- **Acento Checkmark de Éxito:** `#10B981` / `hsl(160, 84%, 39%)` (Verde Esmeralda Clínico).
- **Efecto de Iluminación:** Neón suave con brillo de 15% en el gradiente de transmisión.

---

## 🤖 3. Prompts de Generación de Logo con IA por Motor

### 🖼️ Option A: Midjourney v6 Prompt (Recomendado para Vectorial Limpio)

```text
/imagine prompt: Minimalist modern medical app icon logo, featuring a sleek stylized stethoscope forming a protective shield and an integrated subtle success checkmark, flat vector graphic, cyan blue #0284C7 and emerald green #10B981 accent glow, isolated on solid dark navy #0F172A background, tech-medical aesthetic, high contrast, smooth curves, Apple iOS app store style, UI icon design, clean lines, no realistic details, no text --ar 1:1 --v 6.0 --style raw --no text, font, letters, realistic stethoscope, shadows, gradients background
```

### 🤖 Option B: DALL-E 3 / OpenAI Prompt

```text
A professional flat vector logo for a bilingual medical app named "SimuNCLEX". The logo consists of a modern, minimal icon combining a stethoscope loop, a protective medical shield, and a subtle green checkmark. Color scheme: primary vibrant sky blue (#0284C7) and clinical emerald green (#10B981) details set against a solid dark navy (#0F172A) background. The style is ultra-clean, vector-flat, geometric, perfect for an app icon, zero 3D render, zero text or lettering.
```

### ⚡ Option C: Google Imagen 3 Prompt

```text
Clean flat vector app icon for a medical exam simulator. An abstract icon blending a stethoscope shape with a bridge-shield silhouette and a checkmark. Colors: medical blue #0284C7 and green #10B981 on a dark navy background #0F172A. Minimalist vector art, suitable for Google Play Store icon, high legibility at 512x512 pixels, no text.
```

---

## 📱 4. Especificaciones ASO para Google Play Store

- **Dimensiones:** `512 x 512 px` (Formato PNG de 32 bits con transparencia o fondo sólido `#0F172A`).
- **Radio de Esquinas (Squircle):** `20%` (Radio de 102.4px en cuadrícula estándar de Android).
- **Cero Texto en el Ícono:** Prohibido incluir letras dentro del isotipo para maximizar la legibilidad en pantallas de teléfonos inteligentes de 5 pulgadas y evitar problemas de localización.

---

## 🔄 5. Estado de Compuerta & Próximo Paso

- **Estatus:** 🔍 **GATE 2F COMPLETADO - PENDIENTE REVISIÓN Y VISTO BUENO CPO (@cpo)**
- **Próxima Etapa:** **Etapa 3A: Especificación Técnica Web en Astro (`[TASK-ASTRO-01]`)** asignada a `@web-specialist` / `@cto`.

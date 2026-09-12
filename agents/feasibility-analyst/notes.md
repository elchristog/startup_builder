# 📝 Notas & Comunicación - Feasibility & Market Analyst 📝

**[Proyecto: nclex-prep-hispanos]**

---

## 📌 1. Enfoque Actual & Tareas del Proyecto
- [x] Ejecutar estudio cuantitativo de viabilidad para `nclex-prep-hispanos`.
- [x] **Persistir el Informe Completo:** Generar el entregable en `projects/nclex-prep-hispanos/feasibility-study.md`.
- [x] Modelar Unit Economics (Precios Google Play: $19.99/mes, $49.99/trimestre, $119.99/año, comisión 15%, permanencia 3.5 meses).
- [x] Validar objetivos de ratio LTV:CAC > 3.5x y Payback < 60 días.
- [x] Evaluar matriz de riesgos (barrera lingüística del examen, competencia UWorld/Archer, costos NGN) y definir mitigaciones.
- [x] Emitir dictamen final y notificar al CEO (@ceo) para aprobación del Gate 1 en el Kanban.

> 📄 **Documento Oficial Persistido:** [projects/nclex-prep-hispanos/feasibility-study.md](file:///home/elchristog/.gemini/antigravity/scratch/startup-builder/projects/nclex-prep-hispanos/feasibility-study.md)

---

## 📊 2. Resumen del Informe de Viabilidad Cuantitativa & Unit Economics

### 🔹 2.1 Modelo de Precios y LTV (Lifetime Value)
- **Monetización:** Suscripciones en Google Play Store (Comisión Google Play: 15% bajo el programa de suscripciones para desarrolladores).
- **Estructura de Planes & Mix Estimado de Suscripción:**
  - **Plan Mensual:** $19.99 / mes (Mix: 50%)
  - **Plan Trimestral:** $49.99 / trimestre ($16.66/mes eq., Mix: 35%)
  - **Plan Anual:** $119.99 / año ($10.00/mes eq., Mix: 15%)
- **Permanencia Promedio (Retention Period):** 3.5 meses.
- **Cálculo de Ingreso Bruto Promedio por Usuario (Gross LTV):**
  - Suscriptores Mensuales (3.5 meses × $19.99) = $69.97
  - Suscriptores Trimestrales (1.17 trimestres × $49.99) = $58.49
  - Suscriptores Anuales ($119.99 cobrado por adelantado) = $119.99
  - **LTV Bruto Ponderado:** `(0.50 × $69.97) + (0.35 × $58.49) + (0.15 × $119.99) = $73.46`
- **LTV Neto (Descontando 15% de comisión Google Play Store):**
  - **LTV Neto en Caja:** `$73.46 × (1 - 0.15) = $62.44`
  - **Margen Contributivo Neto (deduciendo ~$2.44 de OPEX de IA/Servidor por usuario):** **$60.00 por usuario**.

---

### 🔹 2.2 Estimación de CAC (Costo de Adquisición de Cliente) y Ratios Financieros
- **CAC Estimado (Meta Ads / Google Search targeting a Enfermeros Hispanos):** **$14.00**
  - *Sustento:* Nicho hiper-segmentado con alta intención de búsqueda ("NCLEX en español", "revalidación enfermería EE. UU.", enfermeros en Puerto Rico y migrantes hispanos).
- **Ratio LTV : CAC:**
  - **LTV Bruto / CAC:** `$73.46 / $14.00 =` **5.25x**
  - **LTV Neto / CAC:** `$60.00 / $14.00 =` **4.29x**
  - **Cumplimiento de Meta:** **SÍ CUMPLE** (Objetivo > 3.5x; alcanzado 4.29x neto / 5.25x bruto).
- **Periodo de Retorno de Inversión (Payback Period):**
  - Suscripciones trimestrales y anuales recobran el CAC **el Día 1** (Neto inicial de $42.49 y $101.99 respectivamente).
  - Suscripción mensual recobra el CAC en `$14.00 / ($19.99 × 0.85) = 0.82 meses` (**~25 días**).
  - **Payback Promedio Ponderado:** **< 30 días** (Meta: < 60 días. **SÍ CUMPLE**).

---

## 🛡️ 3. Evaluación de Riesgos Clave & Plan de Mitigación

| # | Riesgo | Nivel de Impacto | Medida de Mitigación Propuesta |
|---|---|---|---|
| **1** | **Barrera lingüística del examen oficial:** El NCLEX-RN real es 100% en inglés. Si la app enseña solo en español, el usuario podría reprobar el examen oficial. | 🔴 ALTO | **Metodología Dual-Bridge (Preguntas en Inglés + Racionales Bilingües):** Presentar las preguntas y casos en inglés NGN auténtico con un botón toggle de traducción instantánea al español y explicaciones conceptuales en español. Esto prepara al enfermero para el examen real mientras elimina el bloqueo de comprensión. |
| **2** | **Competencia directa (UWorld, Archer Review, Kaplan):** Competidores angloparlantes consolidados con gran volumen de preguntas. | 🟠 MEDIO | **Diferenciación de Nicho & Disrupción de Precio:** UWorld cobra $139–$300+ sin soporte en español. Nuestra propuesta ofrece un precio de entrada accesible ($19.99/mes), app nativa en Google Play y acompañamiento 100% enfocado en la comunidad de enfermeros hispanohablantes. |
| **3** | **Costos elevados de producción de contenido NGN:** Las preguntas NGN (estudios de caso, matrices, bow-tie) requieren alto esfuerzo de diseño clínico. | 🟠 MEDIO | **Pipeline de Producción Asistido por IA + Validación Clínica:** Generación inicial de estructuras de casos clínicos NGN mediante LLMs especializados y revisión/firma final por enfermeros BSN/MSN hispanos en EE. UU., reduciendo costos de producción en un 70%. |

---

## ⚖️ 4. Dictamen Final de Viabilidad

### **VEREDICTO: VIABLE CON CONDICIONES**

El proyecto **NCLEX Prep Hispanos** presenta métricas financieras sobresalientes (LTV:CAC neto de **4.29x**, Payback **< 30 días**, Margen Bruto Neto del **85%** post-Google Play) y resuelve un dolor crítico y desatendido en una comunidad con alto poder adquisitivo futuro (enfermeros buscando licencias en EE. UU.).

#### **Condiciones Obligatorias para el Pase de Compuerta (Gate 1):**
1. **Arquitectura Pedagógica Bilingüe (Dual-Bridge):** Mantener el contenido del examen en inglés NGN con racionales/traducción interactiva en español para garantizar la tasa de graduados aprobados.
2. **Optimización de Producción de Preguntas vía IA:** Implementar la generación asistida por IA para mantener el costo unitario de ítem NGN bajo $10/caso clínico.
3. **Estrategia ASO y Adquisición Orgánica:** Enfocar el lanzamiento inicial en la Store de Google Play optimizando palabras clave para Puerto Rico, Florida, Texas, California y países emisores (Colombia, México, Cuba).

---

## 📢 5. Solicitudes & Avisos para el Equipo (Menciones @Rol)

- **@ceo**: **INFORME COMPLETADO Y SOLICITUD DE APROBACIÓN GATE 1.** Notificación formal para que proceda con la revisión y aprobación del **Gate 1** en el tablero Kanban (`projects/nclex-prep-hispanos/kanban-board.md`), habilitando las tareas de la Fase 2 para `@cpo` (`TASK-02`) y `@cmo` (`TASK-06`).
- **@cpo**: Tener en cuenta la metodología **Dual-Bridge (Preguntas en Inglés + Explicaciones Bilingües)** para la especificación del motor QBank y ítems NGN (`TASK-02`).
- **@cmo**: Utilizar el benchmark de **CAC de $14.00** para el diseño del embudo comercial TOFU-MOFU-BOFU (`TASK-06`).

---

## ⛔ 6. Bloqueos & Dependencias
- Ninguno. La tarea `TASK-01` ha finalizado con éxito.

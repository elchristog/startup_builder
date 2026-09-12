# 📊 Estudio Cuantitativo de Viabilidad & Unit Economics

**Proyecto:** NCLEX Prep Hispanos (`nclex-prep-hispanos`)  
**Fecha de Evaluación:** 2026-09-12  
**Analista a Cargo:** `@feasibility-analyst`  
**Estatus:** 🟢 APROBADO por el CEO (Gate 1 Completado)  


---

## 🎯 1. Resumen Ejecutivo & Veredicto

### **VEREDICTO DE VIABILIDAD: VIABLE CON CONDICIONES**

El proyecto **NCLEX Prep Hispanos** presenta métricas financieras sobresalientes con un ratio LTV:CAC Neto proyectado de **4.29x** (LTV Bruto: **5.25x**), un periodo de retorno de inversión (Payback) **< 30 días** y un Margen Neto del **85%** descontando la comisión del 15% de Google Play Store.

### **Condiciones Obligatorias de Ejecución:**
1. **Arquitectura Pedagógica Bilingüe (Dual-Bridge):** Mantener el contenido del examen en inglés NGN con racionales/traducción interactiva en español para garantizar la tasa de graduados aprobados.
2. **Generación Asistida por IA:** Implementar la producción de estudios de caso NGN mediante LLMs especializados y revisión médica por enfermeros BSN/MSN para mantener el costo unitario por ítem < $10.
3. **Estrategia ASO y Keywords:** Ejecutar investigación SEO previa para capturar el tráfico orgánico de búsqueda en EE. UU., Puerto Rico y LATAM.

---

## 💰 2. Modelo Financiero & Unit Economics

### 🔹 2.1 Estructura de Precios y Planes (Google Play Store)

| Plan | Precio Cobrado | Frecuencia de Cobro | Ingreso Mensual Eq. | Mix Estimado |
| :--- | :--- | :--- | :--- | :--- |
| **Plan Mensual** | $19.99 | Mensual | $19.99 / mes | 50% |
| **Plan Trimestral** | $49.99 | Trimestral | $16.66 / mes | 35% |
| **Plan Anual** | $119.99 | Anual | $10.00 / mes | 15% |

- **Permanencia Promedio (Retention Period):** 3.5 meses.

### 🔹 2.2 Cálculo de LTV (Lifetime Value)
- **Suscriptores Mensuales:** 3.5 meses × $19.99 = $69.97 LTV Bruto
- **Suscriptores Trimestrales:** 1.17 trimestres × $49.99 = $58.49 LTV Bruto
- **Suscriptores Anuales:** Cobrado upfront = $119.99 LTV Bruto
- **LTV Bruto Ponderado:** `(0.50 × $69.97) + (0.35 × $58.49) + (0.15 × $119.99) =` **$73.46**
- **Comisión Google Play Store (15% Tier):** -$11.02
- **LTV Neto en Caja:** **$62.44**
- **OPEX Técnico de Servidor & IA por usuario:** -$2.44
- **LTV Neto Contributivo:** **$60.00**

---

### 🔹 2.3 Modelo de Adquisición (CAC) & Payback

- **Costo de Adquisición de Cliente (CAC Estimado):** **$14.00**
  - *Sustento:* Nicho hiper-segmentado de alta intención ("NCLEX en español", "revalidación enfermería EE. UU.", enfermeros migrantes).
- **Ratios LTV : CAC:**
  - **LTV Bruto / CAC:** `$73.46 / $14.00 =` **5.25x** (Meta: > 3.5x - **CUMPLE**)
  - **LTV Neto / CAC:** `$60.00 / $14.00 =` **4.29x** (Meta: > 3.5x - **CUMPLE**)
- **Periodo de Retorno de Inversión (Payback Period):**
  - Plan Trimestral y Anual: Recobro **Día 1** ($42.49 y $101.99 neto inicial).
  - Plan Mensual: Recobro en `$14.00 / ($19.99 × 0.85) = 0.82 meses` (**~25 días**).
  - **Payback Promedio Ponderado:** **< 30 días** (Meta: < 60 días - **CUMPLE**).

---

## 🛡️ 3. Matriz de Riesgos & Mitigaciones

| # | Riesgo Identificado | Impacto | Medida de Mitigación Estratégica |
|---|---|---|---|
| **1** | **Barrera lingüística del examen oficial (Inglés real vs. Español):** El examen NCLEX Pearson VUE es 100% en inglés. | 🔴 ALTO | **Metodología Dual-Bridge:** Preguntas NGN en inglés técnico auténtico con botón de traducción instantánea al español y racionales/explicaciones clínicas en español. |
| **2** | **Competencia de gigantes (UWorld, Archer, Kaplan):** Competidores angloparlantes dominantes con marcas consolidadas. | 🟠 MEDIO | **Diferenciación de Nicho & Precio Accesible:** Enfoque 100% en enfermeros hispanos migrantes, app nativa en Google Play y precio mensual accesible ($19.99 vs. $139–$300+ de UWorld). |
| **3** | **Costos de producción de contenido NGN (Next Gen NCLEX):** Estudios de caso y preguntas complejas con alto costo editorial. | 🟠 MEDIO | **Pipeline de Producción Asistido por IA + Validación Clínica:** Generación inicial estructurada mediante LLMs y revisión final por enfermeros BSN/MSN hispanos en EE. UU. (Reducción del 70% en costo unitario por caso). |

---

## 📋 4. Recomendaciones para las Siguientes Etapas del Funnel

1. **Etapa 2A (SEO Specialist):** Investigar las palabras clave con mayor volumen de búsqueda ("NCLEX RN en español", "simulador NCLEX", "preguntas NCLEX bilingües") para alimentar la etapa de Naming.
2. **Etapa 2B (Naming & Branding):** Seleccionar un nombre comercial con alta relevancia SEO/ASO para facilitar el posicionamiento orgánico en Google Play Store.
3. **Etapa 2C (Producto & Marketing):** Configurar el motor CAT (Computerized Adaptive Testing) respetando el modelo bilingüe Dual-Bridge.

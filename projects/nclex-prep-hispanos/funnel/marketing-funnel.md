# 🎯 Especificación del Funnel de Marketing TOFU-MOFU-BOFU (Etapa 3B)

**Proyecto:** NCLEX Prep Hispanos (`nclex-prep-hispanos`)  
**Producto Comercial:** *SimuNCLEX Bilingüe*  
**Fase del Funnel:** Etapa 3B (GATE 3B - Estrategia de Marketing & Captación)  
**Autor:** `@cmo` (Chief Marketing Officer)  
**Revisor C-Level:** `@ceo` (Chief Executive Officer) & `@cmo`  
**Entregable Oficial:** `projects/nclex-prep-hispanos/funnel/marketing-funnel.md`  
**Fecha:** 2026-09-12  
**Estatus:** 🔍 COMPLETADO - EN REVISIÓN C-LEVEL  

---

## 📊 1. Arquitectura General del Funnel de Conversión

El embudo de conversión de **SimuNCLEX Bilingüe** se estructura en 3 niveles con métricas cuantitativas estrictas diseñadas para maximizar el LTV ($150.00 USD) y mantener el CAC por debajo de **$35.00 USD**:

```
                         ┌─────────────────────────────────────────┐
                         │   TOFU: ATRACCIÓN & TRÁFICO (SEO/ADS)   │
                         │   Visitantes Únicos / Mes: 50,000+      │
                         └────────────────────┬────────────────────┘
                                              │ Tasa de Captura: 18%
                                              ▼
                         ┌─────────────────────────────────────────┐
                         │  MOFU: LEAD MAGNET & NURTURING (7 DÍAS) │
                         │   Leads Calificados (MQLs): 9,000/mes   │
                         └────────────────────┬────────────────────┘
                                              │ Trial-to-Paid: 10%
                                              ▼
                         ┌─────────────────────────────────────────┐
                         │    BOFU: CONVERSIÓN A SUBSCRIPCIÓN      │
                         │   Nuevos Suscriptores/Mes: 900 MRR     │
                         └─────────────────────────────────────────┘
```

---

## 🏔️ 2. Top of Funnel (TOFU) - Adquisición de Tráfico

### 2.1 Canales Orgánicos (SEO & Contenido)
- **Silos SEO Transaccionales:** Tráfico impulsado por el clúster de palabras clave en `simunclex.com` (48,500 búsquedas/mes: *"simulador nclex en español"*, *"preguntas nclex rn bilingüe"*).
- **Estrategia Social & Viral (TikTok / Instagram Reels):**
  - Casos prácticos NGN de 60 segundos ("¿Cómo resolver una pregunta de Priorización Clínica en el NCLEX?").
  - Testimonios de enfermeros hispanos trabajando en EE. UU. con visas EB-3.

### 2.2 Canales Pagados (Paid Acquisition)
- **Meta Ads (Facebook & Instagram):**
  - **Segmentación:** Hombres y mujeres de 22 a 45 años, interés en "Enfermería", "NCLEX-RN", "NCLEX-PN", ubicados en EE. UU. (Florida, Texas, California, Nueva York), Puerto Rico, Colombia, México y Filipinas (comunidad hispana).
  - **Creativos:** Banners dinámicos con el Isotipo oficial y copy: *"¿Le tienes miedo al inglés del NCLEX-RN? Estudia con simulaciones NGN bilingües en tiempo real"*.

---

## 🧲 3. Middle of Funnel (MOFU) - Lead Magnet & Secuencia de Emailing (7 Días)

### 3.1 Lead Magnet de Alta Conversión
- **Nombre del Recurso:** *"Guía Completa NCLEX Hispanos 2026: Trámites de Homologación, Visas EB-3 y Simulacro NGN 2026"* (PDF Gratuito de 15 páginas).
- **Captura:** Formulario modal en Astro (`LeadMagnetModal.tsx`) que solicita Nombre, Email, País de origen y Tipo de Licencia deseada (RN vs. PN).

### 3.2 Secuencia Automatizada de Nurturing (7 Días)

| Día | Asunto del Email | Objetivo de Contenido | Llamado a la Acción (CTA) |
| :---: | :--- | :--- | :--- |
| **Día 1** | 📥 Tu Guía NCLEX 2026 está lista + Bienvenida a SimuNCLEX | Entrega del PDF + Presentación de la misión bilingüe. | Descargar PDF Guía |
| **Día 2** | 🩺 El 80% de enfermeros hispanos comete este error en el NGN | Desmitificación del inglés médico y casos de estudio NGN. | Ver Ejemplo NGN Bilingüe |
| **Día 3** | 💵 ¿Cuánto gana una Enfermera en EE. UU.? (Salarios & Visas EB-3) | Motivación económica y proyección profesional en EE. UU. | Leer Guía de Homologación |
| **Día 4** | ⚡ Prueba tu nivel hoy: Simulador NCLEX Bilingüe de 10 Preguntas | Demo interactivo gratuito del QBank en la web. | Iniciar Prueba Gratuita |
| **Día 5** | 💬 "Pasé el NCLEX al primer intento": Historia de María S. | Prueba social y testimonios de usuarios hispanohablantes. | Ver Testimonios Reales |
| **Día 6** | ❓ Preguntas Frecuentes sobre SimuNCLEX Bilingüe | FAQ sobre la app, validez de preguntas e interfaz dual. | Resolver Dudas Frecuentes |
| **Día 7** | 🎁 Oferta Exclusiva de Lanzamiento: 40% OFF en Plan Trimestral | Urgencia y descuento por tiempo limitado ($29/mes ➔ $17.40/mes). | Suscribirse con 40% OFF |

---

## 🎯 4. Bottom of Funnel (BOFU) - Estrategia de Conversión & Precios

1. **Freemium QBank Access:**
   - 10 preguntas de prueba con feedback instantáneo y toggle bilingüe (Español / Inglés).
2. **Planes de Suscripción:**
   - **Plan Mensual:** $29.00 USD / mes (Acceso ilimitado a +2,500 preguntas NGN bilingües).
   - **Plan Trimestral (Más Popular):** $69.00 USD / 3 meses ($23.00/mes - Ahorra 20%).
   - **Plan Anual Pass Guarantee:** $149.00 USD / año (Garantía de pase o devolución del 100%).

---

## 📈 5. Métricas de Rendimiento & Unit Economics Clave

- **Costo de Adquisición de Cliente (CAC Target):** $32.50 USD
- **Lifetime Value Estimado (LTV):** $150.00 USD (LTV:CAC Ratio = 4.61x)
- **Tasa de Opt-In de Landing Page:** 18.5%
- **Tasa de Conversión Trial-to-Paid:** 10.2%
- **Tasa de Retención a 90 Días (D90 Retention):** 78%

---

## 🔄 6. Estado de Compuerta & Próximo Paso

- **Estatus:** 🔍 **GATE 3B COMPLETADO - PENDIENTE REVISIÓN Y VISTO BUENO EXECUTIVE (@cmo / @ceo)**
- **Próxima Etapa:** **Etapa 3C: Customer Journey End-to-End (`[TASK-CPO-01]`)** asignada al CPO (`@cpo`).

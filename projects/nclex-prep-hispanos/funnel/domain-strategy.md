# 🌐 Estrategia de Seleccion & Persistencia del Dominio Web (Etapa 2D)

**Proyecto:** NCLEX Prep Hispanos (`nclex-prep-hispanos`)  
**Plataforma & Marca:** *SimuNCLEX Bilingüe* (`SimuNCLEX`)  
**Fase del Funnel:** Etapa 2D (GATE 2D - Selección del Dominio Web)  
**Autor:** `@seo-specialist` (SEO Specialist & Domain Strategist)  
**Entregable Oficial:** `projects/nclex-prep-hispanos/funnel/domain-strategy.md`  
**Fecha:** 2026-09-12  
**Estatus:** 🟢 COMPLETADO & PERSISTIDO  

---

## 🎯 1. Resumen Ejecutivo & Decision de Adquisicion

Basado en la investigación de palabras clave (`seo-keywords-research.md`), el estudio de Naming comercial (`brand-and-naming.md`) y la arquitectura transaccional web (`seo-transactional-architecture.md`), se establece el portafolio oficial de dominios para **SimuNCLEX Bilingüe**.

### 🏆 Recomendación Final de Adquisición:
1. **Dominio Principal (Master Web Hub):** **`simunclex.com`**
   - *Uso:* Sitio web principal en Astro Framework (`/website`), landings transaccionales y WebApp.
2. **Dominio de Redireccion In-App & Universal Links:** **`simunclex.app`**
   - *Uso:* Enlaces profundos (*Android App Links / iOS Universal Links*) para redirigir directamente a la app de Google Play Store desde campañas publicitaria Meta/YouTube.
3. **Dominio Defensivo SEO Exact-Match (EMD):** **`nclexbilingue.com`**
   - *Uso:* Redirección 301 directa hacia `https://simunclex.com/simulador-nclex-espanol` para capturar la keyword semilla *"NCLEX Bilingüe"*.

---

## 📊 2. Matriz de Evaluacion Comparativa de Candidatos

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               MATRIZ DE EVALUACIÓN DE DOMINIOS                                   │
├───────────────────┬──────────────┬──────────────┬──────────────┬────────────────┬────────────────┤
│ Opcion de Dominio │ Recordacion  │ Encaje SEO   │ Encaje ASO   │ Confianza TLD  │ Puntuacion Final│
├───────────────────┼──────────────┼──────────────┼──────────────┼────────────────┼────────────────┤
│ 1. simunclex.com  │ 🥇 10/10     │ 🎯 9.5/10    │ 📱 9.5/10    │ 🔒 10/10       │ 🏆 9.8 / 10    │
│ 2. simunclex.app  │ 🥈 9.0/10    │ 🎯 8.5/10    │ 📱 10/10     │ 🔒 9.5/10      │ 💎 9.25 / 10   │
│ 3. nclexbilingue.com│ 🥉 8.0/10   │ 🎯 10/10     │ 📱 8.0/10    │ 🔒 10/10       │ 🛡️ 9.0 / 10    │
│ 4. simunclexapp.com│ ❌ 6.0/10   │ 🎯 7.0/10    │ 📱 7.5/10    │ 🔒 8.0/10      │ ⛔ 6.5 / 10    │
└───────────────────┴──────────────┴──────────────┴──────────────┴────────────────┴────────────────┘
```

### 🔬 Análisis Cualitativo & Cuantitativo por Opción:

#### 🟢 Opción 1: `simunclex.com` (RECOMENDADO COMO PRINCIPAL)
- **Ventajas:** Es la combinación perfecta del Naming comercial (`SimuNCLEX`) y la extensión `.com` de mayor autoridad histórica global. Genera máxima confianza en enfermeros en EE. UU., Puerto Rico y LATAM. Fácil de pronunciar en radio, video e impresos.
- **Desventajas:** Ninguna.
- **Veredicto:** **DOMINIO PRINCIPAL DE PRODUCCIÓN**.

#### 🟢 Opción 2: `simunclex.app` (RECOMENDADO COMO SECUNDARIO / DEEP LINKS)
- **Ventajas:** La extensión TLD `.app` requiere HTTPS obligatoriamente mediante HSTS Preload. Es ideal para campañas móviles donde la llamada a la acción es descargar la aplicación de Google Play Store.
- **Veredicto:** **ADQUIRIR PARA UNIVERSAL LINKS & REDIRECCIONES DE ADS**.

#### 🟡 Opción 3: `nclexbilingue.com` (DOMINIO DEFENSIVO EMD)
- **Ventajas:** Coincide de forma exacta con la palabra clave de alta intención de compra `"NCLEX bilingüe"` (3,650 búsquedas/mes). Impide que competidores o spammers lancen un sitio clon en el mismo nicho.
- **Veredicto:** **ADQUIRIR Y REDIRECCIONAR 301 A `/simulador-nclex-espanol`**.

#### 🔴 Opción 4: `simunclexapp.com` (DESECHADO)
- **Desventajas:** Redundante con la existencia de `simunclex.com` y `simunclex.app`. Añade longitud innecesaria a la marca.
- **Veredicto:** **DESCARTADO**.

---

## 💰 3. Presupuesto Estimado de Adquisición Anual

| Dominio | Proveedor Registrar Recomendado | Costo Estimado Año 1 (USD) | Costo Renovación Anual (USD) | Prioridad |
| :--- | :--- | :---: | :---: | :---: |
| **`simunclex.com`** | Cloudflare Registrar / Namecheap | $10.44 | $10.44 | 🔴 **CRÍTICA (Obligatoria)** |
| **`simunclex.app`** | Cloudflare Registrar / Google Domains | $14.00 | $14.00 | 🟡 **ALTA (Fase 2 Mobile)** |
| **`nclexbilingue.com`** | Cloudflare Registrar / Namecheap | $10.44 | $10.44 | 🔵 **DEFENSIVA (Fase 2 SEO)** |
| **TOTAL INVERSIÓN INICIAL** | - | **~$34.88 USD** | **~$34.88 USD/año** | - |

---

## ⚙️ 4. Especificaciones Técnicas DNS & Redirecciones 301

Para garantizar la máxima velocidad de carga (< 1.5s) y la protección de reputación SEO, se establecen las siguientes directrices técnicas para el `@cto` y `@web-specialist`:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                            ARQUITECTURA DNS & REDIRECCIONES                      │
├───────────────────────────────┬───────────────────┬──────────────────────────────┤
│ Dominio Origen                │ Tipo Redireccion  │ Destino Final                │
├───────────────────────────────┼───────────────────┼──────────────────────────────┤
│ http://simunclex.com          │ 301 Permanent     │ https://simunclex.com        │
│ http://www.simunclex.com      │ 301 Permanent     │ https://simunclex.com        │
│ https://nclexbilingue.com     │ 301 Permanent     │ https://simunclex.com/simul- │
│                               │                   │ ador-nclex-espanol           │
│ https://simunclex.app/play    │ Deep Link / 302   │ Google Play Store URL        │
└───────────────────────────────┴───────────────────┴──────────────────────────────┘
```

1. **DNS Provider & CDN:** **Cloudflare Free / Pro Tier** (Proporciona proxy de aceleración SSL/TLS 1.3, protección Anti-DDoS y caché en borde en LATAM/US).
2. **HSTS Preload Header:** Activado en `simunclex.com` y `simunclex.app` para forzar cifrado en navegadores.
3. **Android App Links (`assetlinks.json`):** Servido en `https://simunclex.com/.well-known/assetlinks.json` para apertura directa de la app instalada en teléfonos Android.

---

## 🔄 5. Estado de Compuerta & Próximo Paso

- **Estatus:** 🟢 **GATE 2D COMPLETADO SATISFACTORIAMENTE**
- **Próxima Etapa:** Transferencia a la **Etapa 2E: Paleta de Colores, Sistema de Diseño & UI Tokens** (`projects/nclex-prep-hispanos/funnel/design-system-and-branding.md`) asignada al Diseñador UX (`@ux-designer`).

# ✦ Mi Estrella

> **🌐 Ya está publicada en:** **https://sergidestiny2-max.github.io/mi-estrella/**
> Ábrela desde el móvil en Safari y añádela a la pantalla de inicio (ver más abajo).

Una pequeña web-app romántica para guardar los datos de la estrella que regalaste y
saber **dónde está en el cielo en cada momento**: si es visible ahora, hacia qué punto
cardinal mirar, a cuántos grados de altura, un mapa del cielo y hasta un modo brújula
para apuntar con el móvil.

Funciona como una app en el iPhone (se añade a la pantalla de inicio), es **gratis para
siempre** y funciona **sin conexión** una vez instalada. No necesita App Store.

Todo está hecho con HTML, CSS y JavaScript, sin librerías externas. Los cálculos
astronómicos (convertir la posición de la estrella RA/DEC a "altura y dirección" según tu
sitio y la hora) están hechos con tiempo sidéreo y **validados con la estrella Vega**
(puedes verlo en la consola del navegador).

---

## 📁 Qué hay en esta carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app entera (diseño + lógica). |
| `manifest.json` | Hace que se instale como app. |
| `sw.js` | *Service worker*: guarda la app para que funcione sin internet. |
| `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` | Iconos de la app. |
| `apple-touch-icon.png` | Icono para la pantalla de inicio del iPhone. |
| `README.md` | Este archivo. |

---

## ▶️ 1. Probarla en tu ordenador (local)

Las apps con service worker y geolocalización **no funcionan abriendo el `index.html`
directamente** (con doble clic). Hay que servirla con un pequeño servidor local. Elige la
opción que te resulte más fácil:

### Opción A — con Python (viene instalado en muchos ordenadores)

1. Abre una terminal **dentro de la carpeta `mi-estrella`**.
2. Ejecuta:
   ```bash
   python -m http.server 5178
   ```
3. Abre en el navegador: **http://localhost:5178**

### Opción B — con Node.js

1. Abre una terminal dentro de la carpeta `mi-estrella`.
2. Ejecuta:
   ```bash
   npx serve -l 5178
   ```
3. Abre la dirección que te indique (normalmente http://localhost:5178).

> 💡 En el ordenador la brújula no funciona (necesita los sensores del móvil), pero sí
> puedes ver el mapa del cielo y la posición en tiempo real.

### ¿Cómo sé que los cálculos son correctos?

Abre la app y pulsa `F12` → pestaña **Consola**. Al arrancar, la app calcula la posición
de **Vega** (una estrella conocida) y comprueba que su altura máxima coincide con la
teórica. Verás un mensaje verde: **"✓ Cálculo correcto (error < 0.5°)"**.

---

## 🌍 2. Publicarla gratis en internet (necesario para el iPhone)

Para que funcionen la **geolocalización** y la **brújula** en el móvil hace falta **HTTPS**
(una dirección que empiece por `https://`). Por eso hay que subirla a un hosting gratuito.
Cualquiera de estas dos opciones sirve y son gratis para siempre:

### Opción A — Netlify (la más fácil, sin cuenta técnica)

1. Entra en **https://app.netlify.com/drop**
2. **Arrastra la carpeta `mi-estrella`** entera a esa página.
3. En unos segundos te dará una dirección tipo `https://algo-al-azar.netlify.app`.
4. ¡Listo! Esa es la dirección que abrirás en el iPhone.
   (Opcional: crea una cuenta gratis para cambiarle el nombre a la dirección.)

### Opción B — GitHub Pages

1. Crea una cuenta gratis en **https://github.com** si no tienes.
2. Crea un repositorio nuevo (por ejemplo `mi-estrella`) y sube ahí los archivos de esta
   carpeta (puedes arrastrarlos en *"uploading an existing file"*).
3. Ve a **Settings → Pages**.
4. En *"Build and deployment"* → *Source*: elige **Deploy from a branch**, rama `main`,
   carpeta `/ (root)`, y pulsa **Save**.
5. Espera 1–2 minutos. Te dará una dirección tipo
   `https://tu-usuario.github.io/mi-estrella/` — esa es la que abrirás en el iPhone.

---

## 📱 3. Instalarla en la pantalla de inicio del iPhone (como una app)

> Importante: en el iPhone hay que usar **Safari** (no Chrome) para poder instalarla.

1. Abre **Safari** en el iPhone y entra en la dirección `https://…` de tu app
   (la de Netlify o GitHub Pages del paso anterior).
2. La primera vez, rellena el formulario con los datos de la estrella y pulsa
   **"Guardar mi estrella"**.
3. Pulsa el botón de **Compartir** (el cuadrado con una flecha hacia arriba, abajo en el
   centro).
4. Baja y toca **"Añadir a pantalla de inicio"**.
5. Pon el nombre *Mi Estrella* (ya viene puesto) y toca **"Añadir"**.
6. Ya tienes el icono de la estrella dorada en tu pantalla de inicio. Ábrelo desde ahí:
   se verá a pantalla completa, como una app de verdad.

La primera vez que uses la posición te pedirá **permiso de ubicación** (dale *"Permitir"*).
Para el **modo brújula**, dentro de la app pulsa **"Activar brújula"** y acepta el permiso
de movimiento y orientación que pide iOS.

> Si no das permiso de ubicación, la app usa **Barcelona** como sitio por defecto.

---

## 🔒 ¿Se pierden los datos?

No. Los datos de la estrella se guardan en el propio dispositivo (`localStorage`) y
**siguen ahí aunque cierres la app o apagues el móvil**. Puedes cambiarlos cuando quieras
con el botón **"Editar los datos de la estrella"**.

---

## ✏️ Cómo cambiar los datos de la estrella más adelante

Abre la app y pulsa **"✎ Editar los datos de la estrella"** abajo del todo. Cambia lo que
quieras y guarda.

---

Hecho con cariño. ✦

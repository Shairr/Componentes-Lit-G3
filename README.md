# Componentes Lit — Equipo 3

Aplicación de ejemplo construida con **Lit** y **Vite** para practicar el desarrollo de **Web Components** nativos: componentes reutilizables con Shadow DOM, propiedades reactivas, eventos personalizados y composición de vistas. Incluye una demo de registro de café artesanal para el emprendimiento **Café Raíz** y una página de integración con un componente externo desarrollado por el **Equipo 3**.

## Contenido

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación y uso](#instalación-y-uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Componentes](#componentes)
- [Eventos personalizados](#eventos-personalizados)
- [Tema y estilos](#tema-y-estilos)
- [Integración con el Equipo 4](#integración-con-el-equipo-4)
- [Estado actual y siguientes pasos](#estado-actual-y-siguientes-pasos)

## Características

- Componentes escritos como clases que extienden `LitElement`.
- Encapsulamiento de estilos con `static styles` y Shadow DOM.
- Propiedades reactivas declaradas con `static properties`.
- Comunicación padre → hijo mediante propiedades y atributos.
- Comunicación hijo → padre mediante `CustomEvent` con `bubbles` y `composed`.
- Vistas compuestas: la vista de inicio reutiliza el formulario y la tabla.
- Integración de un componente de terceros (`wc-form-register`) reutilizando la tabla propia como adaptador de datos.
- Estilos con *design tokens* (variables CSS) para mantener la paleta de la marca.

## Tecnologías

| Herramienta | Versión         | Uso                                  |
| ----------- | --------------- | ------------------------------------ |
| [Lit](https://lit.dev/) | `^3.3.3` | Web Components y renderizado reactivo |
| [Vite](https://vite.dev/) | `^8.3.0` | Servidor de desarrollo y build       |
| JavaScript (ES Modules) | — | Lógica de los componentes           |

> Los componentes usan la API de `lit-element`, incluida como dependencia transitiva de `lit`. Si prefieres declararla de forma explícita, puedes agregarla con `npm install lit-element`.

## Requisitos

- **Node.js** 20.19+ o 22.12+ (requerido por Vite 8).
- **npm** 10+.

## Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/Shairr/Componentes-Lit-G3.git
cd Componentes-Lit-G3

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Vite mostrará la URL local (por defecto `http://localhost:5173/`).

### Páginas disponibles

| Página | URL | Descripción |
| ------ | --- | ----------- |
| Demo principal | `http://localhost:5173/` | Barra de navegación, rutas declaradas y vista de inicio con el formulario y la tabla de Café Raíz. |
| Integración | `http://localhost:5173/integracion.html` | Formulario del Equipo 3 conectado a la tabla de Café Raíz. |

### Scripts

| Comando           | Descripción                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Inicia el servidor de desarrollo con recarga en caliente. |
| `npm run build`   | Genera la versión de producción en `dist/`.       |
| `npm run preview` | Sirve localmente el resultado del build.          |

## Estructura del proyecto

```text
Componentes-Lit-G3/
├── index.html                     # Demo principal (navbar + rutas)
├── integracion.html               # Demo de integración con el Equipo 4
├── package.json
├── src/
│   ├── index.js                   # Punto de entrada: registra los componentes
│   ├── components/
│   │   ├── button/
│   │   │   └── button.js          # <wc-button>
│   │   ├── navbar/
│   │   │   └── navbar.js          # <wc-navbar>
│   │   └── router/
│   │       ├── index.js           # Registra los componentes del router
│   │       ├── router.js          # <wc-router>
│   │       ├── route.js           # <wc-route>
│   │       ├── link.js            # <wc-link>
│   │       └── viewport.js        # <wc-viewport>
│   ├── externos/
│   │   └── equipo-4/
│   │       └── register.js        # <wc-form-register> (componente externo)
│   └── views/
│       ├── home/
│       │   ├── home.js            # <wc-home>
│       │   ├── register.js        # <wc-register>
│       │   └── table.js           # <wc-table>
│       ├── page2/
│       │   └── page2.js           # <wc-page2>
│       ├── page3/
│       │   └── page3.js           # <wc-page3>
│       └── integracion/
│           ├── integracion.js     # <wc-integracion>
│           └── integracion.md     # Notas de la integración
└── Taller_Equipo_3.png            # Evidencia del taller
```

## Componentes

### Componentes base

| Etiqueta      | Archivo                  | Descripción |
| ------------- | ------------------------ | ----------- |
| `<wc-button>` | `src/components/button/button.js` | Botón con texto configurable mediante el atributo `text` y cambio de color al presionar. |
| `<wc-navbar>` | `src/components/navbar/navbar.js` | Barra de navegación flotante que agrupa enlaces y botones. |
| `<wc-link>`   | `src/components/router/link.js`   | Enlace lógico que emite el evento `goEvent` con el destino. |
| `<wc-route>`  | `src/components/router/route.js`  | Contenedor de una vista asociada a un `path`. |
| `<wc-viewport>` | `src/components/router/viewport.js` | Muestra la vista de la ruta activa (vista por defecto: `/home`). |
| `<wc-router>` | `src/components/router/router.js` | Coordina los viewports y las rutas declaradas. |

### Vistas

| Etiqueta      | Archivo                       | Descripción |
| ------------- | ----------------------------- | ----------- |
| `<wc-home>`   | `src/views/home/home.js`      | Vista de inicio. Mantiene la lista de cafés y la pasa a la tabla. |
| `<wc-register>` | `src/views/home/register.js` | Formulario de registro de café artesanal. Calcula el total automáticamente y emite `cafeRegister`. |
| `<wc-table>`  | `src/views/home/table.js`     | Tabla reutilizable. Recibe la lista mediante la propiedad `.list`. |
| `<wc-page2>`  | `src/views/page2/page2.js`    | Vista de ejemplo de la página 2. |
| `<wc-page3>`  | `src/views/page3/page3.js`    | Vista de ejemplo de la página 3. |
| `<wc-integracion>` | `src/views/integracion/integracion.js` | Vista que adapta los datos del formulario externo al formato de `wc-table`. |
| `<wc-form-register>` | `src/externos/equipo-4/register.js` | Formulario de productos del Equipo 4. |

### Ejemplo de uso

```html
<!-- Vista de inicio: formulario + tabla -->
<wc-home></wc-home>

<!-- Tabla con datos controlados por el padre -->
<wc-table .list="${this.cafeList}"></wc-table>

<!-- Botón con texto personalizado -->
<wc-button text="Guardar"></wc-button>
```

## Eventos personalizados

| Evento            | Emitido por        | `detail`                                                        | Escuchado por |
| ----------------- | ------------------ | --------------------------------------------------------------- | ------------- |
| `cafeRegister`    | `<wc-register>`    | `{ nombre, origen, precio, cantidad, total }`                    | `<wc-home>`   |
| `product-register`| `<wc-form-register>` | `{ foto, titulo, descripcion, precio }`                        | `<wc-integracion>` |
| `goEvent`         | `<wc-link>`        | `{ to, routerName }`                                             | Router (en construcción) |

Los eventos de registro se emiten con `bubbles: true` y `composed: true` para poder atravesar el Shadow DOM y ser escuchados por el componente padre.

## Tema y estilos

La interfaz usa variables CSS que pueden sobrescribirse desde el documento anfitrión:

```css
:root {
  --color-marca: #6f4e37;      /* Marrón principal de Café Raíz */
  --color-acento: #c68642;     /* Caramelo para precios y focos */
  --color-texto: #2c1a0e;      /* Texto principal */
  --color-superficie: #ffffff; /* Fondo de tarjetas y tablas */
  --fuente-base: system-ui, sans-serif;
}
```

Cada componente declara sus estilos con `static styles = css\`...\``, por lo que no se filtran al resto de la página.

## Integración con el Equipo 4

La página `integracion.html` monta `<wc-integracion>`, que a su vez:

1. Importa el formulario externo `src/externos/equipo-4/register.js`.
2. Escucha el evento `product-register` emitido por `<wc-form-register>`.
3. Adapta el `detail` al formato que espera `<wc-table>`:

   | Origen (Equipo 4) | Destino (tabla Café Raíz) |
   | ----------------- | ------------------------- |
   | `titulo`          | `nombre`                  |
   | `descripcion`     | `origen`                  |
   | `precio`          | `precio`                  |
   | —                 | `cantidad` (fijada en `1`) |
   | —                 | `total` (`precio × cantidad`) |

4. Agrega la fila a `lista` y vuelve a renderizar la tabla.

De esta forma se reutiliza un componente de otro equipo sin modificar su implementación interna.

## Estado actual y siguientes pasos

Algunas partes están en evolución:

- La demo principal (`index.html`) declara rutas, pero el router (`wc-router` / `wc-viewport`) todavía no está conectado en la página; la navegación está en fase de integración.
- `page2` y `page3` son vistas de ejemplo.
- `src/views/integracion/integracion.md` está reservado para documentar el proceso de integración.

---

**Equipo 3** — Proyecto académico de Programación de Interfaces (PIC).

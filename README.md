# Entre Líneas - Papelería y Útiles Escolares

Proyecto integrador grupal desarrollado con **HTML5** y **Bootstrap 5.3** para el curso de Desarrollo Web Full Stack de la **Fundación CILSA**.

El objetivo del proyecto es construir un sitio web responsive, visualmente atractivo y fácil de navegar, aplicando los componentes nativos, el sistema de grillas (*grid*) y las clases de utilidad de Bootstrap.

---

## 📂 Estructura del Proyecto

```
mi-primera-pagina-bootstrap/
│
├── index.html          # Página principal (Navbar, Hero, Carrusel de Destacados, Sección Institucional y Footer)
├── categorias.html     # Página de categorías (Navbar y estructura base vinculada)
├── contacto.html       # Página de contacto (Navbar y estructura base vinculada)
├── README.md           # Documentación general y catálogo detallado de productos
└── img/                # Recursos gráficos e imágenes de productos y tienda
    ├── LOGO_ENTRE_LINEAS.png
    ├── interior de tienda.jpg
    ├── Cuaderno tapa dura.jpeg
    ├── midori.jpeg
    ├── cuaderno.jpg
    ├── Resaltadores 2.jpeg
    ├── Bolígrafos de tinta gel 0,5mm.jpeg
    ├── marcadores.jpeg
    ├── Cartuchera.jpeg
    ├── Cartuchera con bolsillos.jpeg
    ├── organizador de escritorio.jpeg
    └── notas adhesivas.jpeg
```

---

## 🧭 Navegación entre Páginas

El sitio cuenta con una barra de navegación fija superior (`sticky-top`) que conecta las tres páginas principales del proyecto:
- **Inicio (`index.html`)**: Presentación general, acceso a productos destacados y sección informativa.
- **Categorías (`categorias.html`)**: Catálogo de productos clasificados por rubro; cada producto permite consultar sus detalles en un modal de Bootstrap.
- **Contacto (`contacto.html`)**: Sección destinada a canales de atención y comunicación.

---

## 📦 Catálogo Completo de Productos

A continuación se detalla toda la información de los productos disponibles en el proyecto, organizados por categoría para facilitar su consulta y comprensión por parte de cualquier miembro del equipo o evaluador:

### 1. 📖 Libretas y Cuadernos

| Producto | Imagen | Categoría | Precio | Descripción | Dónde se muestra |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cuaderno bordó tapa dura** | `img/Cuaderno tapa dura.jpeg` | Libretas | $10.500 | Cuaderno/agenda en tono bordó elegante con encuadernación cosida y hojas lisas de alto gramaje (80 g/m²) que no traspasan la tinta de plumas ni resaltadores. | Diapositiva 1 del carrusel de destacados (`index.html`) |
| **Cuaderno estilo Midori** | `img/midori.jpeg` | Libretas | $12.800 | Libreta de viaje artesanal con cubierta de cuero/eco-cuero resistente, cierre elástico y sistema de repuestos recargables. Diseñada para acompañar viajes y proyectos a largo plazo. | Diapositiva 2 del carrusel de destacados (`index.html`) |
| **Cuaderno pastel con elástico** | `img/cuaderno.jpg` | Libretas | $9.500 | Cuaderno de tapa dura lisa en tonalidad pastel, con cinta elástica de seguridad y señalador de tela. Ideal para notas diarias, clases y bitácora. | Portada / Hero principal (`index.html`) |

---

### 2. ✏️ Escritura

| Producto | Imagen | Categoría | Precio | Descripción | Dónde se muestra |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Resaltadores pastel** | `img/Resaltadores 2.jpeg` | Escritura | $6.400 | Set de resaltadores en tonos amarillo, menta, rosa y durazno para destacar apuntes. | Diapositiva 1 del carrusel de destacados (`index.html`) |
| **Bolígrafos de tinta gel 0.5mm** | `img/Bolígrafos de tinta gel 0,5mm.jpeg` | Escritura | $5.900 | Set de bolígrafos de punta fina 0.5 mm con tinta gel de flujo continuo y secado ultra rápido, diseñados para una escritura ergonómica, suave y limpia. | Diapositiva 2 del carrusel de destacados (`index.html`) |
| **Marcadores punta pincel (Brush Pens)** | `img/marcadores.jpeg` | Escritura | $7.900 | Marcadores flexibles con punta tipo pincel para caligrafía moderna, lettering, bocetos y detalles artísticos. | Recursos del proyecto (`img/`) |

---

### 3. 🗂️ Organización

| Producto | Imagen | Categoría | Precio | Descripción | Dónde se muestra |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cartuchera clásica** | `img/Cartuchera.jpeg` | Organización | $8.200 | Cartuchera compacta confeccionada en lona de alta durabilidad con cierre metálico reforzado y forro interior lavable. Ideal para los útiles esenciales del día a día. | Diapositiva 1 del carrusel de destacados (`index.html`) |
| **Cartuchera con bolsillos múltiples** | `img/Cartuchera con bolsillos.jpeg` | Organización | $9.800 | Cartuchera de gran capacidad con compartimentos desplegables, solapas elásticas y divisiones especiales para reglas, tijeras y variedad de lápices. | Recursos del proyecto (`img/`) |
| **Organizador de escritorio** | `img/organizador de escritorio.jpeg` | Organización | $11.200 | Módulo organizador de escritorio con compartimentos escalonados para ordenar bolígrafos, notas adhesivas, clips y accesorios de trabajo o estudio. | Recursos del proyecto (`img/`) |
| **Notas adhesivas y señaladores** | `img/notas adhesivas.jpeg` | Organización | $4.200 | Set de notas autoadhesivas en diferentes medidas y banderitas señaladoras pastel para marcar libros, apuntes y recordatorios. | Recursos del proyecto (`img/`) |

---

## 🖼️ Recursos Institucionales

- **`img/LOGO_ENTRE_LINEAS.png`**: Logotipo oficial de la marca "Entre Líneas - Papelería y Útiles Escolares", ubicado en la barra de navegación superior.
- **`img/interior de tienda.jpg`**: Fotografía del local físico, utilizada en la sección institucional *"Todo comienza con una idea"* en `index.html`.

---

## 🛠️ Tecnologías y Librerías

- **HTML5**: Estructura semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Bootstrap 5.3.3**:
  - Sistema de grilla flexible (`container`, `row`, `col-*`, `g-*`).
  - Barra de navegación responsive (`navbar`, `navbar-expand-lg`, `collapse`, `nav-underline`).
  - Carrusel de productos interactivo (`carousel`, `carousel-dark`, `carousel-indicators`, `carousel-control`).
  - Tarjetas de producto (`card`, `ratio-16x9`, `badge`, `rounded-pill`).
  - Modal reutilizable con información detallada de cada producto (`modal`, `data-bs-toggle`).
  - Botones y utilidades de color, tipografía y espaciado nativas (`bg-success-subtle`, `text-secondary`, etc.).
- **Bootstrap Icons 1.11.3**: Iconografía vectorial para acciones, categorías y botones.

---

## ✅ Formulario de contacto y validaciones

La página de contacto incluye un formulario con validación del lado del cliente para garantizar que los datos ingresados sean correctos antes del envío.

### Validaciones implementadas
- Nombre: obligatorio y solo letras.
- Apellido: obligatorio y solo letras.
- Email: obligatorio y formato válido.
- Mensaje de éxito al completar correctamente el formulario.

El script que controla estas validaciones se encuentra en `js/contacto.js`.

## ▶️ Cómo ejecutar el proyecto

1. Abrir la carpeta del proyecto en el navegador.
2. Cargar `index.html` o navegar desde `contacto.html`.
3. Si se trabaja localmente con un servidor estático, se puede utilizar Live Server o cualquier servidor local simple.

## 👥 Contexto del Proyecto
- **Curso:** Desarrollo Web Full Stack.
- **Institución:** Fundación CILSA.
- **Trabajo Integrador 1:** Primera página responsive con Bootstrap.

# El Visitante — Tienda de Música

**El Visitante** es un sitio web estático desarrollado con HTML5, CSS3 (Sass) y Bootstrap 5, pensado como tienda de referencia para los amantes del rock y el metal en Argentina. Permite explorar y comprar vinilos, instrumentos e informarse sobre próximos recitales de bandas nacionales e internacionales.

## 🔗 Sitio en vivo

[Ver el sitio](https://nibra3.github.io/el-visitante/)

## 📄 Páginas

- **Inicio** (`index.html`): presentación de la tienda, destacados del mes, combos y formulario de registro.
- **Vinilos** (`pages/vinilos.html`): catálogo completo de ediciones en vinilo.
- **Recitales** (`pages/recital.html`): información del próximo recital y discografía relacionada.
- **Instrumentos** (`pages/instrumentos.html`): catálogo de instrumentos y combos con amplificador.
- **Nosotros** (`pages/nosotros.html`): historia de la tienda, su identidad y vínculo con la cultura del rock y el metal.

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 con Sass (`scss/` como fuente, compilado a `styles/style.css`)
- [Bootstrap 5.3.8](https://getbootstrap.com/) (grilla, navbar, carrusel y formularios)
- [AOS](https://michalsnik.github.io/aos/) para animaciones al hacer scroll

## 🔍 SEO y Accesibilidad

Cada página cuenta con:

- `<title>` y `meta description` únicos, acordes a su contenido.
- `meta keywords` relevantes según la temática de cada página.
- Un único `<h1>` por página, con jerarquía de encabezados consistente (`h1 → h2 → h3`).
- HTML semántico (`header`, `main`, `section`, `article`, `footer`), evitando contenedores genéricos innecesarios.
- Texto alternativo (`alt`) descriptivo en todas las imágenes.
- Nombres de archivo descriptivos para imágenes y páginas.
- Contraste de texto y fondo validado en todas las secciones.

## 📁 Estructura del proyecto

```
el-visitante/
├── index.html
├── styles/
│   └── style.css
├── scss/
│   ├── main.scss
│   ├── base/
│   ├── components/
│   ├── layout/
│   └── utilities/
├── img/
└── pages/
    ├── vinilos.html
    ├── recital.html
    ├── instrumentos.html
    └── nosotros.html
```

## 👤 Autor

Nahuel Ibarra — Copyright 2026

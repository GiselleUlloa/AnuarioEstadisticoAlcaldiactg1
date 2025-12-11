# AnuarioEstadisticoAlcaldiactg1

### Anuario Estadístico 2024 – Distrito de Cartagena

---

## 1. Descripción General

El **Anuario Estadístico 2024** es una plataforma digital desarrollada por el **Centro de Estudios Territoriales** de la **Secretaría de Planeación Distrital de Cartagena**, orientada a compilar, organizar y difundir información cuantitativa actualizada sobre el estado socioeconómico, demográfico y territorial del Distrito de Cartagena.

Este repositorio contiene el código fuente del sitio web del Anuario, incluyendo estructura HTML, hojas de estilo CSS unificadas, scripts, recursos gráficos y documentación técnica para su mantenimiento y actualización.

---

## 2. Objetivo del Proyecto

El proyecto busca proporcionar un sistema de consulta moderno, accesible y con identidad visual institucional, que permita:

* Centralizar y estructurar la información estadística oficial.
* Facilitar la lectura y el análisis de datos relevantes del Distrito.
* Estandarizar criterios de diseño y presentación visual.
* Garantizar disponibilidad y fácil actualización para el equipo técnico.

---

## 3. Tecnologías Utilizadas

| Componente                     | Descripción                                |
| ------------------------------ | ------------------------------------------ |
| **HTML5**                      | Base estructural del contenido             |
| **CSS3 (variables y módulos)** | Sistema visual unificado y responsivo      |
| **JavaScript Vanilla**         | Navegación e interactividad ligera         |
| **Tableau Public Embedding**   | Integración de dashboards estadísticos     |
| **Git y GitHub**               | Control de versiones y documentación       |
| **Adobe CC (AI/PS)**           | Edición y preparación de recursos gráficos |

---

## 4. Estructura del Repositorio

```
/
├── assets/
│   ├── img/
│   ├── icons/
│   └── banners/
├── css/
│   ├── variables.css
│   ├── global.css
│   └── secciones/
│       ├── economia.css
│       ├── educacion.css
│       ├── movilidad.css
│       └── ...
├── js/
│   └── main.js
├── index.html
├── secciones/
│   ├── presentacion.html
│   ├── demografia.html
│   ├── economia.html
│   └── …
└── README.md
```

---

## 5. Secciones del Anuario

El Anuario presenta información organizada en los siguientes capítulos:

* Presentación
* Demografía
* Pobreza
* Turismo
* Vivienda
* Seguridad
* Economía
* Educación
* Mercado Laboral
* Censo
* Movilidad
* Salud

Cada sección incorpora análisis descriptivo, visualizaciones integradas, tarjetas de contenido y elementos responsive.

---

## 6. Estándares de Diseño y Lineamientos Visuales

El sitio aplica un sistema de diseño institucional basado en:

* Tipografías oficiales: **Inter** y **Poppins**.
* Paleta cromática institucional mediante variables CSS globales.
* Sombreados suaves y bordes redondeados para tarjetas de contenido.
* Componentes unificados:

  * Topbar institucional
  * Menú de navegación horizontal
  * Tarjetas informativas con espaciado modular
  * Embeds optimizados de Tableau

El diseño está construido para garantizar una experiencia responsiva en diferentes resoluciones de pantalla.

---

## 7. Integración de Tableau

La plataforma utiliza visualizaciones oficiales de **Tableau Public**, integradas mediante código embebido estandarizado:

```html
<div class="tableauPlaceholder" id="vizXXXX">
  <noscript>
    <img src="https://public.tableau.com/.../viz.png" />
  </noscript>
  <object ...></object>
</div>
```

Las visualizaciones son cargadas de forma optimizada para mejorar el rendimiento, evitando bloqueos y reduciendo el tiempo de carga.

---

## 8. Ejecución Local

Para visualizar el proyecto localmente:

1. Clonar el repositorio:

   ```
   git clone https://github.com/usuario/AnuarioEstadistico2024.git
   ```
2. Abrir el archivo principal:

   ```
   index.html
   ```
3. No requiere servidor local; funciona directamente en un navegador moderno.

---

## 9. Política de Contribuciones (Acceso Restringido)

Este repositorio es de carácter **institucional** y su contenido está administrado exclusivamente por el **Centro de Estudios Territoriales** de la Secretaría de Planeación Distrital.

Las contribuciones externas **no están habilitadas públicamente**.

Toda modificación, actualización o adición al código debe:

1. Ser solicitada previamente y por escrito al equipo responsable.
2. Contar con autorización formal antes de su implementación.
3. Realizarse únicamente por personal autorizado o colaboradores oficialmente designados.

Pull Requests externos o cambios no autorizados **no serán aceptados**.

---

## 10. Créditos Institucionales

Proyecto desarrollado por:
**Centro de Estudios Territoriales**
Secretaría de Planeación Distrital
Alcaldía de Cartagena de Indias
2024 – 2025

---

## 11. Licencia

El contenido de este repositorio está protegido por las normas institucionales de la Alcaldía de Cartagena.
Para usos, reproducción o redistribución, se requiere autorización previa de la entidad responsable.

---


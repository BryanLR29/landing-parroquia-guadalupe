# ⛪ Sistema de Captación Digital Responsivo - Comunidad Juvenil

![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub__Pages-2ea44f?style=for-the-badge&logo=github)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📌 Visión General del Proyecto

Este proyecto nace de una necesidad real dentro de la **Parroquia de Nuestra Señora de Guadalupe**, donde el flujo de captación de nuevos miembros para el grupo juvenil requería una transición eficiente entre el contacto físico (filtro con el encargado de la comunidad) y la integración digital.

Desarrollé una **Landing Page de Bienvenida** 100% responsiva y optimizada para dispositivos móviles. El sistema centraliza los accesos a las redes oficiales y automatiza la incorporación al grupo oficial de comunicación interna, resolviendo la pérdida de prospectos en el proceso de registro tradicional.

> 🌐 **Despliegue en producción:** Puedes ver el resultado final en vivo aquí: [https://bryanlr29.github.io/landing-parroquia-guadalupe/](https://bryanlr29.github.io/landing-parroquia-guadalupe/)

---

## 🛠️ Ingeniería y Características Técnicas

Aunque la arquitectura del sitio es estática, se aplicaron metodologías limpias de desarrollo web enfocadas en la optimización de recursos y la experiencia de usuario (UX):

* **Arquitectura Desacoplada (Clean Code):** Separación estricta de responsabilidades en archivos independientes (`index.html`, `style.css`, `script.js`) para garantizar la mantenibilidad del código.
* **Diseño Responsivo Fluido (Mobile-First):** Implementación de *Media Queries* nativas que re-renderizan y adaptan automáticamente la interfaz según el hardware (Smartphones, Tablets o Laptops), previniendo desbordamientos.
* **Estética Glassmorphic Moderna:** Interfaz con efectos visuales avanzados utilizando desenfoque por hardware (`backdrop-filter`), variables nativas de CSS y animaciones en bucle (`@keyframes`) para lograr un entorno dinámico y atractivo para el sector juvenil.
* **Optimización Táctil vs Desktop:** Inyección de lógica en JavaScript para detectar el entorno de ejecución (User-Agent). Activa efectos de paralaje tridimensional (3D) con las coordenadas del puntero solo en computadoras, y los suspende en pantallas táctiles para ahorrar batería y mejorar la fluidez del *scroll*.
* **Consumo de API Externa:** Automatización del renderizado del código QR de WhatsApp mediante el consumo en tiempo real de una API de gráficos estáticos, eliminando la carga de imágenes pesadas en el servidor local.

---

## 📂 Estructura del Software

```text
├── index.html   # Estructura semántica global e inyección dinámica de APIs.
├── style.css    # Variables, animaciones y hojas de estilo responsivas.
└── script.js    # Lógica de detección de hardware y control de interacciones 3D.

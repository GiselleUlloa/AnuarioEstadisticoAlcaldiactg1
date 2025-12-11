const menuToggle = document.getElementById('menuToggle');
const menuItems = document.getElementById('menu');

// Menú hamburguesa (tu código existente)
menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('show');
    menuToggle.classList.toggle('active');
});

// ✅ NUEVO: Activar la página actual en el menú
function setActiveMenu() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.menu-items li a');
    
    menuLinks.forEach(link => {
        // Remover active de todos
        link.classList.remove('active');
        
        // Agregar active al link actual
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// Ejecutar cuando la página carga
document.addEventListener('DOMContentLoaded', setActiveMenu);

// ================================
// 7️⃣ Scroll reveal adicional
// ================================
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add("is-visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);




// // ================================
// // 7️⃣ Scroll reveal adicional
// // ================================
// const reveals = document.querySelectorAll(".reveal");

// const revealOnScroll = () => {
//   const windowHeight = window.innerHeight; // Altura de la ventana
//   reveals.forEach(el => {
//     const elementTop = el.getBoundingClientRect().top;
//     if (elementTop < windowHeight - 80) {
//       el.classList.add("is-visible"); // Activa animación fade-in
//     }
//   });
// };

// window.addEventListener("scroll", revealOnScroll);
// window.addEventListener("load", revealOnScroll); // También al cargar la página


// ================================
// 8️⃣ Animación fade-in para tarjetas (.card)
// ================================
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { // Cuando la tarjeta entra en pantalla
      entry.target.classList.add("visible"); // Activa animación
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


// ================================
// 9️⃣ Botón "Ver más" interactivo
// ================================
document.querySelectorAll(".btn-link").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.target.classList.add("clicked"); // Efecto clic
    setTimeout(() => {
      e.target.classList.remove("clicked"); // Quitar efecto después de 0.4s
    }, 400);
  });
});


// ================================
// 🔟 Sidebar y acordeón
// ================================
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar-innovador'); // Contenedor sidebar
  const btn = document.querySelector('.floating-index');       // Botón flotante

  // Toggle abrir/cerrar sidebar
  btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  // Acordeón dentro del sidebar
  const accordions = document.querySelectorAll('.accordion-btn');
  accordions.forEach(acc => {
    acc.addEventListener('click', () => {
      const content = acc.nextElementSibling;
      if (content.style.maxHeight) { 
        content.style.maxHeight = null; // Cierra si estaba abierto
      } else {
        document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null); // Cierra otros
        content.style.maxHeight = content.scrollHeight + "px"; // Abre actual
      }
    });
  });
});


// ================================
// 1️⃣1️⃣ Integración de Tableau (dashboard responsive)
// ================================
var divElement = document.getElementById('viz1755630395306'); // Contenedor del dashboard
var vizElement = divElement.getElementsByTagName('object')[0]; // Objeto de Tableau

function ajustarTableau() {
  var width = divElement.offsetWidth;
  vizElement.style.width = '100%'; // Siempre ancho 100%

  // Ajuste de altura según ancho
  if (width > 800) {
    vizElement.style.height = (width * 0.75) + 'px';
  } else if (width > 500) {
    vizElement.style.height = (width * 0.75) + 'px';
  } else {
    vizElement.style.height = '900px'; // Móviles pequeños
  }
}

// Ejecutar ajuste al cargar y redimensionar
window.addEventListener('load', ajustarTableau);
window.addEventListener('resize', ajustarTableau);

// Cargar script de Tableau
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);


// Ejecutar  boton hacia arriba 

const btn = document.getElementById('btnVolverArriba');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
});


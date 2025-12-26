// Script para manejar el cierre del banner
(function() {
  'use strict';
  
  // Esperar a que el DOM esté completamente cargado
  function initBannerClose() {
    const banner = document.querySelector('.hextra-banner');
    if (!banner) return;
    
    // Buscar el botón de cerrar usando la clase específica de Hextra
    const closeButton = banner.querySelector('.hextra-banner-close-button');
    
    if (closeButton) {
      // Remover cualquier listener previo para evitar duplicados
      const newCloseButton = closeButton.cloneNode(true);
      closeButton.parentNode.replaceChild(newCloseButton, closeButton);
      
      // Agregar el event listener al nuevo botón
      newCloseButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Guardar en localStorage para que no se muestre de nuevo
        const bannerKey = banner.getAttribute('data-banner-key') || 'announcement';
        localStorage.setItem(bannerKey, 'closed');
        
        // Remover el banner del DOM
        banner.remove();
        
        // Actualizar la altura del banner en el CSS
        document.documentElement.style.setProperty('--hextra-banner-height', '0px');
        document.documentElement.classList.add('hextra-banner-hidden');
      });
    }
  }
  
  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBannerClose);
  } else {
    // DOM ya está listo
    initBannerClose();
  }
  
  // También intentar después de un pequeño delay por si el banner se carga dinámicamente
  setTimeout(initBannerClose, 100);
  setTimeout(initBannerClose, 500);
})();


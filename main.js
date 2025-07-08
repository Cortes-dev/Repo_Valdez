// Función para animar la entrada de elementos uno por uno
function animateElementsSequentially() {
    const elements = document.querySelectorAll('.content_description');
    
    // Ocultar todos los elementos inicialmente
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Función para mostrar elementos con delay
    function showElement(index) {
        if (index < elements.length) {
            elements[index].style.opacity = '1';
            elements[index].style.transform = 'translateY(0)';
            
            // Llamar al siguiente elemento después de un delay
            setTimeout(() => {
                showElement(index + 1);
            }, 300); // 300ms de delay entre cada elemento
        }
    }
    
    // Iniciar la animación después de un pequeño delay
    setTimeout(() => {
        showElement(0);
    }, 500);
}

// Función para animar la navegación
function animateNavigation() {
    const navItems = document.querySelectorAll('#link_nav');
    
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100); // 100ms de delay entre cada elemento de navegación
    });
}

// Función para animar el título principal
function animateTitle() {
    const title = document.querySelector('h1');
    title.style.opacity = '0';
    title.style.transform = 'scale(0.8)';
    title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'scale(1)';
    }, 200);
}

// Función principal que ejecuta todas las animaciones
function initAnimations() {
    // Animar título
    animateTitle();
    
    // Animar navegación
    setTimeout(() => {
        animateNavigation();
    }, 400);
    
    // Animar elementos de contenido
    setTimeout(() => {
        animateElementsSequentially();
    }, 800);
}

// Ejecutar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initAnimations);

// Función para reiniciar animaciones (útil para testing)
function resetAnimations() {
    const elements = document.querySelectorAll('.content_description, #link_nav, h1');
    elements.forEach(element => {
        element.style.opacity = '';
        element.style.transform = '';
        element.style.transition = '';
    });
    
    setTimeout(() => {
        initAnimations();
    }, 100);
}

// Opcional: Reiniciar animaciones con la tecla 'R'
document.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
        resetAnimations();
    }
});

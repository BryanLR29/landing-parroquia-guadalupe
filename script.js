document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const body = document.body;

    // Detectar si es un dispositivo móvil táctil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // 💻 EFECTO 3D: Solo si NO es celular (Laptop / Escritorio)
    if (!isMobile) {
        body.addEventListener('mousemove', (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
            
            // Pausamos la levitación CSS para que no choque con el giro 3D
            card.style.animation = 'none'; 
            card.style.transition = 'none';
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Resetear inclinación cuando el mouse sale de la pantalla y reactivar levitación
        body.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.5s ease';
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
            
            // Después de regresar a su lugar, reactivamos la levitación suavemente
            setTimeout(() => {
                card.style.animation = 'levitar 4s ease-in-out infinite alternate';
            }, 500);
        });
    } else {
        // 📱 Si es CELULAR, respetamos la animación limpia de entrada
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }
});
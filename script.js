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
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            card.style.transition = 'none';
        });

        // Resetear inclinación cuando el mouse sale de la pantalla
        body.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.5s ease';
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    } else {
        // 📱 Si es CELULAR, solo le damos una animación limpia de entrada
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }
});
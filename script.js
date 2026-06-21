document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const body = document.body;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!isMobile) {
        body.addEventListener('mousemove', (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            card.style.transition = 'none';
        });

        body.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.5s ease';
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }
});

window.addEventListener('load', () => {

    const splash =
        document.getElementById('splash-screen');

    setTimeout(() => {

        splash.style.opacity = '0';

        setTimeout(() => {
            splash?.remove();
            startCrossRain();
        }, 500);

    }, 1500);

});

function startCrossRain() {
    const rainContainer = document.getElementById('cross-rain');

    for (let i = 0; i < 35; i++) {

        const cross = document.createElement('div');

        cross.classList.add('cross');
        cross.textContent = '✝';

        cross.style.left = Math.random() * 100 + '%';

        cross.style.fontSize =
            (15 + Math.random() * 20) + 'px';

        cross.style.animationDuration =
        (6 + Math.random() * 4) + 's';

        cross.style.animationDelay =
            Math.random() * 2 + 's';

        rainContainer.appendChild(cross);
    }

    setTimeout(() => {
        rainContainer.style.transition = 'opacity 0.8s ease';
        rainContainer.style.opacity = '0';
        setTimeout(() => {
            rainContainer.style.display = 'none';
        }, 800);
    }, 5000);
}
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
    }
});

window.addEventListener('load', () => {
    startCrossRain();
    startStarRain();
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

}

function startStarRain() {
    const container = document.getElementById('cross-rain');
    const sparkles = ['✦', '✧', '+', '·'];

    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        star.style.color = `rgba(255, 255, 200, ${0.6 + Math.random() * 0.4})`;
        star.style.textShadow = `0 0 ${6 + Math.random() * 8}px rgba(255, 215, 0, ${0.5 + Math.random() * 0.5})`;

        star.style.left = Math.random() * 100 + '%';
        star.style.fontSize = (7 + Math.random() * 10) + 'px';
        star.style.animationDuration = (8 + Math.random() * 6) + 's';
        star.style.animationDelay = Math.random() * 10 + 's';

        container.appendChild(star);
    }
}
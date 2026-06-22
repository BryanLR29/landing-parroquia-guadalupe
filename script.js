document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const body = document.body;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!isMobile) {
        const cardParent = card.parentNode;
        const tiltWrapper = document.createElement('div');
        tiltWrapper.className = 'card-tilt-wrapper';
        cardParent.insertBefore(tiltWrapper, card);
        tiltWrapper.appendChild(card);
    }
});

window.addEventListener('load', () => {
    startCrossRain();
    startStarRain();
});

function startCrossRain() {
    const container = document.getElementById('cross-rain');

    function createCross(delay = 0) {
        const cross = document.createElement('div');
        cross.classList.add('cross');
        cross.textContent = '✝';
        cross.style.left = (35 + Math.random() * 30) + '%';
        cross.style.fontSize = (15 + Math.random() * 20) + 'px';
        const duration = 8 + Math.random() * 6;
        cross.style.animationDuration = duration + 's';
        cross.style.animationDelay = delay + 's';
        container.appendChild(cross);
        setTimeout(() => cross.remove(), (duration + delay + 1) * 1000);
    }

    for (let i = 0; i < 40; i++) {
        setTimeout(() => createCross(0), i * 250);
    }

    setInterval(() => createCross(0), 800);
}

function startStarRain() {
    const container = document.getElementById('cross-rain');
    const sparkles = ['✦', '✧', '+', '·'];

    function createStar(delay = 0) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        star.style.color = `rgba(255, 255, 200, ${0.8 + Math.random() * 0.2})`;
        star.style.textShadow = `0 0 ${10 + Math.random() * 12}px rgba(255, 215, 0, ${0.7 + Math.random() * 0.3})`;
        star.style.left = (Math.random() < 0.7 ? 20 + Math.random() * 60 : Math.random() * 100) + '%';
        star.style.fontSize = (12 + Math.random() * 20) + 'px';
        const duration = 10 + Math.random() * 8;
        star.style.animationDuration = duration + 's';
        star.style.animationDelay = (delay + Math.random() * 2) + 's';
        container.appendChild(star);
        setTimeout(() => star.remove(), (duration + delay + 3) * 1000);
    }

    for (let i = 0; i < 35; i++) {
        setTimeout(() => createStar(0), i * 250);
    }

    setInterval(() => createStar(0), 800);
}

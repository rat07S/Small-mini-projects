document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.aurora-layer');
    const x = (window.innerWidth / 4 - e.clientX) / 10;
    const y = (window.innerHeight / 4 - e.clientY) / 10;
    
    layers.forEach(layer => {
        layer.style.transform = `translate(-50%, -50%) rotate(${x}deg) skew(${y}deg)`;
    });
});

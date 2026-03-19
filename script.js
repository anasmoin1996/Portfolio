document.addEventListener('DOMContentLoaded', () => {
    // Hero Tilt Effect
    const hero = document.getElementById('hero');
    
    document.addEventListener('mousemove', (e) => {
        if(!hero) return;
        const x = (window.innerWidth / 2 - e.clientX);
        const y = (window.innerHeight / 2 - e.clientY);
        
        hero.style.transform = `translate(${x / 45}px, ${y / 45}px) rotate(${x / 500}deg)`;
    });
});

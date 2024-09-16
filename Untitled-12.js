document.addEventListener('mousemove', function(e) {
    const fluidTrail = document.createElement('div');
    fluidTrail.classList.add('fluid-trail');
    
    // Random size for variation in fluid effect
    const size = Math.random() * 25 + 12;
    fluidTrail.style.width = `${size}px`;
    fluidTrail.style.height = `${size}px`;
    
    // Position the fluid trail at the cursor
    fluidTrail.style.left = `${e.pageX - size / 2}px`;
    fluidTrail.style.top = `${e.pageY - size / 2}px`;
    
    document.body.appendChild(fluidTrail);
    
    // Remove the fluid trail after the animation finishes
    setTimeout(() => {
        fluidTrail.remove();
    }, 2500);
});

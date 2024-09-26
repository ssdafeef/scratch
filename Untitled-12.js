document.addEventListener('mousemove', function(e) {
    const fluidTrail = document.createElement('div');
    fluidTrail.classList.add('fluid-trail');
    
    // Random size for variation in fluid effect
    const size = Math.random() * 25 + 10;
    fluidTrail.style.width = `${size}px`;
    fluidTrail.style.height = `${size}px`;
    
    // Position the fluid trail at the cursor
    fluidTrail.style.left = `${e.pageX - size / 2}px`;
    fluidTrail.style.top = `${e.pageY - size / 2}px`;
    
    document.body.appendChild(fluidTrail);
    
    // Remove the fluid trail after the animation finishes
    setTimeout(() => {
        fluidTrail.remove();const headSpace = document.getElementById('head-space');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const distanceX = mouseX - centerX;
  const distanceY = mouseY - centerY;
  const angleX = distanceX * 0.01;
  const angleY = distanceY * 0.01;

  headSpace.style.transform = `perspective(1000px) rotateX(${angleY}deg) rotateY(${angleX}deg)`;
});     
    }, 2500);
});

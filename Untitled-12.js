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
  const mouseX = e.clientX;;
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
// Get the #head-space element
const headSpace = document.getElementById('head-space');

// Check if the device supports the DeviceMotion API
if (window.DeviceMotionEvent) {
  // Set the initial values for the rotation
  let x = 0;
  let y = 0;

  // Add an event listener for the device motion
  window.addEventListener('devicemotion', (event) => {
    // Get the acceleration values
    const acceleration = event.accelerationIncludingGravity;

    // Calculate the rotation based on the acceleration values
    x = acceleration.x * 10;
    y = acceleration.y * 10;

    // Update the transform of the #head-space element
    headSpace.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });
} else {
  console.log('DeviceMotion API is not supported');
}
function animate() {
  requestAnimationFrame(animate);
  // Update the transform of the #head-space element
  headSpace.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
}

animate();
// Calculate the rotation based on the acceleration values
x = Math.max(-30, Math.min(30, acceleration.x * 10));
y = Math.max(-30, Math.min(30, acceleration.y * 10));
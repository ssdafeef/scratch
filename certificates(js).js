const backspace = document.getElementById('backspace');

document.addEventListener('mousemove', (e) => {
    // Get the height of the window
    const windowHeight = window.innerHeight;

    // Calculate the middle range of the window
    const middleStart = windowHeight / 3; // Start of middle third
    const middleEnd = (windowHeight / 3) * 2; // End of middle third

    // Update the position of the backspace element to follow the mouse
    backspace.style.left = `${e.pageX}px`;
    backspace.style.top = `${e.pageY}px`;
    backspace.style.position = 'absolute'; // Ensure the position is absolute

    // Check if the mouse is in the middle part of the window
    if (e.pageY >= middleStart && e.pageY <= middleEnd) {
        backspace.style.display = 'none'; // Hide the backspace element
    } else {
        backspace.style.display = 'block'; // Show the backspace element
    }
});

let items = document.querySelectorAll('.slider .item1, .item2, .item3, .item4, .item5, .item6, .item7, .item8');

let active = 3;

function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    
}
loadShow();

window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        active = active + 1 < items.length ? active + 1 : active;
    } else {
        active = active - 1 >= 0 ? active - 1 : active;
    }
    loadShow();
});
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        active = active + 1 < items.length ? active + 1 : active;
    } else if (event.key === 'ArrowLeft') {
        active = active - 1 >= 0 ? active - 1 : active;
    }
    loadShow();
});
document.addEventListener('mousemove', function(e) {
    const fluidTrail = document.createElement('div');
    fluidTrail.classList.add('fluid-trail');
    
    // Random size for variation in fluid effect
    const size = Math.random() * 25 + 10;
    
      luidTrail.style.width = `${size}px`;
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
// ... (rest of the code remains the same)

// Add swipe gesture support
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(event) {
  touchStartX = event.touches[0].pageX;
  touchStartY = event.touches[0].pageY;
});

document.addEventListener('touchmove', function(event) {
  touchEndX = event.touches[0].pageX;
  touchEndY = event.touches[0].pageY;
});

document.addEventListener('touchend', function(event) {
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Swipe gesture detected
    if (deltaX > 50) {
      // Swipe right
      active = active - 1 >= 0 ? active - 1 : active;
    } else if (deltaX < -50) {
      // Swipe left
      active = active + 1 < items.length ? active + 1 : active;
    }
    loadShow();
  }
});

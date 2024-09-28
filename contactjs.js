const eye = document.querySelector('.eye');
const pupil = document.querySelector('.pupil');

document.addEventListener('mousemove', (event) => {
    const eyeRect = eye.getBoundingClientRect();
    
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(event.pageX - eyeCenterX, event.pageY - eyeCenterY);

    const pupilDistance = Math.min(eyeRect.width / 4, eyeRect.height / 4);

    const x = Math.sin(angle) * pupilDistance;
    const y = Math.cos(angle) * pupilDistance;

    pupil.style.transform = `translate(${x}px, ${y}px)`;
});

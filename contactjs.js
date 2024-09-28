const eye = document.querySelector('.eye');
const pupil = document.querySelector('.pupil');

document.addEventListener('mousemove', (event) => {
    const eyeRect = eye.getBoundingClientRect();
    
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(event.pageX - eyeCenterX, event.pageY - eyeCenterY);

    const pupilDistance = Math.min(eyeRect.width / 7, eyeRect.height / 7);

    const x = Math.sin(angle) * pupilDistance;
    const y = Math.cos(angle) * pupilDistance;

    pupil.style.transform = `translate(${x}px, ${y}px)`;
});
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  function rand(min, max){
      return Math.random() * (max - min) + min;
  }
  
  var i = 0;
  var points = [];
  var cnv = document.getElementById("canvas");
  var ctx = cnv.getContext("2d");
  var Point = function(r){
      this.r = rand(1,20);
      this.s = rand(8,50);
      this.c = rand(4,50);
      this.vx = rand(50, 80+r*.1);
      this.vy = rand(50, 80+r*.1);
      this.x = 0;
      this.y = 0;
      this.o = Math.random()*.2;
  };
  cnv.width = 400;
  cnv.height = 400;
  Point.prototype = {
      move: function(i){
          this.x = this.vx * Math.cos( i/this.s ) + 200;
          this.y = this.vy * Math.sin( i/this.s ) + 200;
          this.draw();
      },
      draw: function(){
          ctx.fillStyle = 'rgba(255, 60, ' + Math.ceil(this.c) + ', '+this.o+')';
          ctx.globalCompositeOperation = 'lighter';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
          ctx.fill();
      }
  };
  points = [];
  
  for( k = 0 ; k < 1500; k++ ){
      points.push( new Point(k) );
  }
  
  function render(){
      ctx.clearRect(0,0,500,500);
      i++;
      for( k = 0 ; k < points.length; k++ ){
          points[k].move( i );
      }
  }
  
  (function animloop(){
      requestAnimFrame(animloop);
      render();
  })();
var countDownDate = localStorage.getItem('startDate');
if (countDownDate) {
    countDownDate = new Date(countDownDate);
} else {
    countDownDate = new Date();
    localStorage.setItem('startDate', countDownDate);
}
  
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = now - countDownDate.getTime();

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("seconds").innerHTML = seconds + "s";
    document.getElementById("minutes").innerHTML = minutes + "m";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("days").innerHTML = days + "d";
}, 1000);

// Reset button to reset the timer
document.getElementById("btn").addEventListener("click", function(){
    // Reset Timer
    countDownDate = new Date();
    // Update localstorage so timer doesn't reset upon reload
    localStorage.setItem('startDate', countDownDate);
    // Confetti fall from top of page to bottom (Need to set a timer so it will not run non-stop)
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  
    var mp = 1000; //max particles
    var particles = [];
    for (var i = 0; i < mp; i++) {
      particles.push({
        x: Math.random() * W, //x-coordinate
        y: Math.random() * H, //y-coordinate
        r: Math.random() * 18 + 1, //radius
        d: Math.random() * mp, //density
        color: "rgba(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", 0.8)",
        tilt: Math.floor(Math.random() * 5) - 5
      });
    }
  
    //Lets draw the flakes
    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < mp; i++) {
        var p = particles[i];
        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color; // Green path
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.tilt + p.r / 2, p.y + p.tilt);
        ctx.stroke(); // Draw it
      }
  
      update();
    }
  
    var angle = 0;
  
    function update() {
      angle += 0.01;
      for (var i = 0; i < mp; i++) {
        var p = particles[i];
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 2;
        if (p.x > W + 5 || p.x < -5 || p.y > H) {
          if (i % 3 > 0) //66.67% of the flakes
          {
            particles[i] = {
              x: Math.random() * W,
              y: -10,
              r: p.r,
              d: p.d,
              color: p.color,
              tilt: p.tilt
            };
          }
        }
      }
    }
    setInterval(draw, 20);
});

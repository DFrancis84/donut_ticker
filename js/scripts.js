
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
    countDownDate = new Date();
    localStorage.setItem('startDate', countDownDate);
});
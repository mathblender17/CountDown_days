// Set the initial date
var countDownDate = new Date("May 17, 2024 00:00:01").getTime();

// Display the target date
var targetDate = new Date(countDownDate);
document.getElementById("target-date").innerHTML = "Target Date: " + targetDate.toDateString();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// Function to update the target date
function updateDate() {
    var newDate = document.getElementById("new-date").value;
    var updatedCountDownDate = new Date(newDate).getTime();

    // Check if the entered date is valid
    if (!isNaN(updatedCountDownDate)) {
        countDownDate = updatedCountDownDate;
        // Update the target date display
        targetDate = new Date(countDownDate);
        document.getElementById("target-date").innerHTML = "Target Date: " + targetDate.toDateString();
        // Update the countdown timer immediately
        updateCountdown();
    } else {
        alert("Please enter a valid date!");
    }
}

// Function to update the countdown timer immediately after the target date is updated
function updateCountdown() {
    // Remaining code to update the countdown timer
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}

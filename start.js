// Set the time limit for the test in seconds
var timeLimit = 200;

// Get the timer element
var timerEl = document.getElementById("timer");

// Set the initial timer value
timerEl.textContent = timeLimit;

// Decrement the timer value every second
var timerInterval = setInterval(function() {
  timeLimit--;
  timerEl.textContent = timeLimit;

  // If the timer reaches 0, submit the form
  if (timeLimit === 0) {
    clearInterval(timerInterval);
    document.getElementById("test-form").submit();
  }
}, 1000);

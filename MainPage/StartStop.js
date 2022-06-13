// when start button is hit, disable start button and enable stop button
function Start() {
  var currTime = 10;
  var countingDown = setInterval(function(){

      if(currTime <= 0){
          clearInterval(countingDown);
          document.getElementById("countdownTimer").innerHTML = "Blast Off!!";        // countdownTimer is in first.html, its the display section for this coding
    } else if (currTime <=5) {
          document.getElementById("countdownTimer").innerHTML = "Warning!! Less than halfway to launch. Time left: " + currTime + " seconds remaining";
    }
      else{
          document.getElementById("countdownTimer").innerHTML = currTime;
          }
      currTime -= 1;
  }, 1000);
  
  
    document.getElementById("Stop").disabled = false;
    document.getElementById("Start").disabled = true;
  }

  // when stop button is hit, disable stop button and enable start button
  function Stop() {
    document.getElementById("Stop").disabled = true;
    document.getElementById("Start").disabled = false;
  }


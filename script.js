window.onload = function(){
  let img = document.getElementById("amus1");
  let count = document.getElementById("body");
  let score = 0;
  let text = "Status: ";
  //let audio = new Audio("amusSound.mp3");

  img.addEventListener("mousedown", function(){
    increaseScore();
    updateStatus();
    img.src = "amus2.webp";
  });

  img.addEventListener("mouseup", function(){
    img.src = "amus1.webp";
    //audio.play()
  });

  function increaseScore(){
    score++;
    count.innerHTML = score;
  }

  function updateStatus(){
    if(score <= 4 && score >= 0){
      document.getElementById("status").innerHTML = text + "sus";
    }
    
    else if(score <= 9 && score >= 5){
      document.getElementById("status").innerHTML = text + "megasus";
    }

    else if(score <= 19 && score >= 10){
      document.getElementById("status").innerHTML = text + "supersus";
    }

    else if(score <= 50 && score >= 20){
      document.getElementById("status").innerHTML = text + "ultrasus";
    }
  }
}
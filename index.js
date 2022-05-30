function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

var p1 = 0;
var p2 = 0;

var complete = 0;

document.querySelector(".btn").addEventListener("click", run);

function run() {
  var randomNumber1 = randomNumber();
  var randomNumber2 = randomNumber();


  if(complete == 0){
  p1 += randomNumber1;
  p2 += randomNumber2;
  }else{
    p1 = 0;
    p2 = 0;
    complete = 0
    document.querySelector("h1").innerHTML = "🏁 Race!! 🏁";
  }


  if ((p1 > 101) & (p2 > 101)) {
    document.querySelector("h1").innerHTML = "Race is Draw";
    p1 = 101;
    p2 = 101;
    document
      .querySelector(".p1")
      .setAttribute("style", "margin-left: " + p1 + "%");
    document
      .querySelector(".p2")
      .setAttribute("style", "margin-left: " + p2 + "%");
    complete = 1;
  } else if (p1 > 101) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
    p1 = 101;
    document
      .querySelector(".p1")
      .setAttribute("style", "margin-left: " + p1 + "%");
    document
      .querySelector(".p2")
      .setAttribute("style", "margin-left: " + p2 + "%");
    complete = 1;
  } else if (p2 > 101) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
    p2 = 101;
    document
      .querySelector(".p1")
      .setAttribute("style", "margin-left: " + p1 + "%");
    document
      .querySelector(".p2")
      .setAttribute("style", "margin-left: " + p2 + "%");
    complete = 1;
  }

  if (complete == 0) {
    document
      .querySelector(".p1")
      .setAttribute("style", "margin-left: " + p1 + "%");
    document
      .querySelector(".p2")
      .setAttribute("style", "margin-left: " + p2 + "%");
    document
      .querySelector(".img1")
      .setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document
      .querySelector(".img2")
      .setAttribute("src", "images/dice" + randomNumber2 + ".png");

    document.querySelector(".btn").textContent = "Roll Again";

    console.log(randomNumber1, randomNumber2);
  }

  
}

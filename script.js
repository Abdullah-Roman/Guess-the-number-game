let box1 = document.querySelector(".one");
let box2 = document.querySelector(".two");
let box3 = document.querySelector(".three");
let box4 = document.querySelector(".four");
let box5 = document.querySelector(".five");

let input1 = document.querySelector(".player_one_name");
let input2 = document.querySelector(".player_one_number");
let input3 = document.querySelector(".player_two_name");
let input4 = document.querySelector(".player_two_number");

let err1 = document.querySelector(".name_01_err");
let err2 = document.querySelector(".number_01_err");
let err3 = document.querySelector(".name_02_err");
let err4 = document.querySelector(".number_02_err");

let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");

let show_name = document.querySelector(".show_player_one_name");
let show_name2 = document.querySelector(".show_player_two_name");
let chance_left = document.querySelector(".chance");
let result = document.querySelector(".result");
let chance = 5;

button1.addEventListener("click", () => {
  if (input1.value == "") {
    err1.innerHTML = "Please input a name 😴";
  } else {
    err1.innerHTML = "";
    box1.style.display = "none";
    box2.style.display = "flex";
    show_name.innerHTML = input1.value;
  }
});

button2.addEventListener("click", () => {
  if (input2.value == "") {
    err2.innerHTML = "please enter a number !";
  } else if (input2.value > 10 || input2.value <= 0) {
    err2.innerHTML = "";
    err2.innerHTML = "Enter a number between 1 to 10";
  } else {
    err2.innerHTML = "";
    box2.style.display = "none";
    box3.style.display = "flex";
  }
});

button3.addEventListener("click", () => {
  if (input3.value == "") {
    err3.innerHTML = "Please enter a name";
  } else {
    err3.innerHTML = "";
    box3.style.display = "none";
    box4.style.display = "flex";
    show_name2.innerHTML = input3.value;
  }
});

button4.addEventListener("click", () => {
  if (input2.value == input4.value) {
    result.innerHTML = `${input3.value} is winner 🎈`;
  } else {
    chance--;
    chance_left.innerHTML = `chance: ${chance}`;
    if (chance === 0) {
      result.innerHTML = `${input1.value} is winner 🎈`;
    }
  }
});

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //Manera corta de usar el event Listener
  //document.querySelector("#btn").addEventListener("click", function() {
  //document.getElementById("demo").innerHTML = Excuse();
  // });

  //Manera larga de usar el event Listener
  document.querySelector("#btn").addEventListener("click", asignarExcusa);

  function asignarExcusa() {
    document.getElementById("demo").innerHTML = excusa();
  }

  function excusa() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = [" ate", " peed", " crushed", " broke"];
    let what = [" my homework", " the keys", " the car"];
    let when = [
      " before the class",
      " right on time",
      " when I finished",
      " during my lunch",
      " while I was praying"
    ];

    let a = who[Math.floor(Math.random() * who.length)];

    let b = action[Math.floor(Math.random() * action.length)];

    let c = what[Math.floor(Math.random() * what.length)];

    let d = when[Math.floor(Math.random() * when.length)];

    console.log(a + b + c + d);

    return a + b + c + d;
  }
};

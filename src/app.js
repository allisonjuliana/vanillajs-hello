/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//write your code here
// console.log("Hello Rigo from the console!");
// };

let pronoun = ["yo", "tu", "esto"];
let adj = [
  "el más alto",
  "el más bajito",
  "el más fuerte",
  "el más ágil",
  "el más débil"
];
let noun = ["comerciante", "ciudadano", "atleta", "marido", "amante"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(`${pronoun[i]} ${adj[j]} ${noun[k]}.com`);
    }
  }
}

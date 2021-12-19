//@ts-nocheck

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

saveEl.textContent += " "; //compensates for Prettier's HTML whitespace rules

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  saveEl.textContent += count + " - ";
  count = 0;
  countEl.textContent = 0;
}

let container = document.querySelector(".container");
let title = document.createElement("h1");
let items = document.createElement("div");
let number = 0;

title.className = "title";
items.className = "items";

title.innerHTML = "0";

// items.onclick = "inc";

container.appendChild(title);
container.appendChild(items);

// for (i = 0; i < 3; i++) {
//   let button = document.createElement("button");
//   button.innerHTML = "plus";
//   button.className = "button";
//   items.appendChild(button);
// }

function inc() {
  number++;
  title.innerHTML = number;
}

function dec() {
  if (number > 0) {
    number--;
    title.innerHTML = number;
  }
}

function reset() {
  number = 0;
  title.innerHTML = number;
}

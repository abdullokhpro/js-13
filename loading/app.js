let container = document.querySelector(".container");
let title = document.createElement("h1");
let border = document.createElement("div");

title.className = "title";
border.className = "border";

title.innerHTML = "Loading";

container.appendChild(title);
container.appendChild(border);

function createLoad() {
  let item = document.createElement("div");
  item.className = "item";
  border.appendChild(item);
}

// function createCircle() {
//   let circle = document.createElement("div");
//   circle.className = "circle";
//   wrapper.appendChild(circle);
// }

// function removeCircle() {
//   wrapper.lastElementChild.remove();
// }

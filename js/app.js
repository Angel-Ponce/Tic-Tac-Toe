let tilesArray = [];
let circle = `<img src="./images/circle.svg">`;
let cross = `<img src="./images/cross.svg">`;
let count = 1;

for (let i = 1; i < 10; i++) {
  let tile = document.querySelector(`#tile-${i}`);
  tilesArray.push(tile);
}
for (let i = 0; i < 9; i++) {
  tilesArray[i].addEventListener("click", function () {
    if (count == 10) {
      count = 0;
    }
    if (this.innerHTML == "") {
      if (count % 2 == 0) {
        this.innerHTML = circle;
      } else {
        this.innerHTML = cross;
      }
      count++;
    }
  });
}

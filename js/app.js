let tilesArray = [];
let circle = `<img src="./images/circle.svg">`;
let cross = `<img src="./images/cross.svg">`;
let reset = document.querySelector("#btnReset");
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

reset.addEventListener("click", function () {
  count = 0;

  for (let i = 0; i < 9; i++) {
    tilesArray[i].classList.add("empty");
    tilesArray[i].innerHTML = "";
  }

  setTimeout(() => {
    for (let i = 0; i < 9; i++) {
      tilesArray[i].classList.remove("empty");
    }
  }, 1000);
});

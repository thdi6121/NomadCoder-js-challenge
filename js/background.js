const body = document.querySelector("body");
const bgList = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

function chooseBg() {
  const randomNum = Math.floor(Math.random() * bgList.length);
  body.style.backgroundImage = `url("./bg_img/${bgList[randomNum]}")`;
}

chooseBg();

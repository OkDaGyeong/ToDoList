//랜덤 배경이미지
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const body = document.querySelector("body");
const btnBack = document.querySelector("#btnBack");
function changeImg() {
  const randomNum = Math.floor(Math.random() * images.length);
  body.style.backgroundImage = "url('./images/" + images[randomNum] + "')";
}

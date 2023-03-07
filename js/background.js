//랜덤 배경이미지
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const body = document.querySelector("body");
const btnBack = document.querySelector("#btnBack");

let ImageNumber;
if (localStorage.getItem("randomImg") === null) {
  ImageNumber = 1;
} else {
  ImageNumber = parseInt(localStorage.getItem("randomImg"));
  body.style.backgroundImage = "url('./images/" + images[ImageNumber] + "')";
}
function changeImg() {
  ImageNumber = Math.floor(Math.random() * images.length);
  localStorage.setItem("randomImg", ImageNumber.toString());
  body.style.backgroundImage = "url('./images/" + images[ImageNumber] + "')";
}

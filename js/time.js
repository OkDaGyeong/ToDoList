const timer = document.querySelector("#timer");
//시계
function getClock() {
  const date = new Date();
  const nhour = date.getHours().toString().padStart(2, "0");
  const nMin = date.getMinutes().toString().padStart(2, "0");
  const nSec = date.getSeconds().toString().padStart(2, "0");

  timer.innerText = `${nhour}:${nMin}:${nSec}`;
}
getClock();
setInterval(getClock, 1000);

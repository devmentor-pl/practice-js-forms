const colorEl = document.querySelector('input[name="color"]');
// console.log(colorEl);
const rangeEl = document.querySelector('input[name="opacity"]');
// console.log(rangeEl);
const boxEl = document.querySelector(".box");

document.addEventListener("DOMContentLoaded", init);
colorEl.addEventListener("change", changeColor);
rangeEl.addEventListener("change", changeShadow);
rangeEl.addEventListener("mousemove", changeShadow);

function changeColor(e) {
  setBoxShadow(boxEl, e.target.value);
}

function changeShadow(e) {
  let opacity = rangeEl.value / 100;
  console.log(opacity);
  setBoxShadow(boxEl, colorEl.value, opacity);
}

function init() {
  const boxElement = document.querySelector(".box");
  setBoxShadow(boxElement, "#000000");
}

function setBoxShadow(element, colorInHex, opacity = 1) {
  const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, "red")}, 
        ${getChannelColor(colorInHex, "green")}, 
        ${getChannelColor(colorInHex, "blue")}, 
        ${opacity}
    )`;

  element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}

function getChannelColor(colorInHex, channelName) {
  let start;
  switch (channelName) {
    case "red":
      start = 1;
      break;
    case "green":
      start = 3;
      break;
    case "blue":
      start = 5;
      break;
  }

  const channelColorHex = colorInHex.substr(start, 2);
  const channelColorDec = parseInt(channelColorHex, 16);

  return channelColorDec;
}

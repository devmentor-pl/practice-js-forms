document.addEventListener("DOMContentLoaded", init);

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
const colorEl = document.querySelector('input[name="color"]');
colorEl.addEventListener("change", getBoxColor);

function getBoxColor(e) {
  const box = document.querySelector(".box");
  const color = e.target.value;
  setBoxShadow(box, color);
}

const opacityEl = document.querySelector('input[name="opacity"]');
opacityEl.addEventListener("change", getBoxShadow);
opacityEl.addEventListener("mousemove", getBoxShadow);

function getBoxShadow(e) {
  const box = document.querySelector(".box");
  const opacityValue = e.target.value / 100;
  setBoxShadow(box, colorEl.value, opacityValue);
}

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

const box = document.querySelector(".box");
const colorInput = document.querySelector('[name="color"]');
const opacityInput = document.querySelector('[name="opacity"]');

colorInput.addEventListener("change", function () {
  updateColor(box, colorInput.value, opacityInput.value);
});

opacityInput.addEventListener("change", function () {
  updateColor(box, colorInput.value, opacityInput.value);
});

function updateColor(box, color, opacity) {
  const oldValue = opacityInput.value;
  const newValue = ((oldValue - 0) / (100 - 0)) * (1 - 0) + 0;
  setBoxShadow(box, colorInput.value, newValue);
}

document.addEventListener("DOMContentLoaded", init);

const rangeInput = document.querySelector('input[type="range"]');
const colorInput = document.querySelector('input[type="color"]');

function init() {
  const boxElement = document.querySelector(".box");
  setBoxShadow(boxElement, "#000000");

  colorInput.addEventListener("change", function (e) {
    const chosenColor = e.target.value;
    setBoxShadow(boxElement, chosenColor);
  });

  rangeInput.addEventListener("change", function (e) {
    let boxOpacity = (boxElement.style.opacity = e.target.value / 100);
    setBoxShadow(boxElement, boxOpacity);
  });

  rangeInput.addEventListener("mousemove", function (e) {
    let boxOpacity = (boxElement.style.opacity = e.target.value / 100);
    setBoxShadow(boxElement, boxOpacity);
  });
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

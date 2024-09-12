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

const colorInput = document.querySelector("input[name=color]");
const opacityInput = document.querySelector("input[name=opacity]");

const getCurrentColor = function () {
  const color = document.querySelector("input[name=color]").value;
  return color;
};

const getCurrentOpacity = function () {
  const value = document.querySelector("input[name=opacity]").value;
  const opacity = Number(value) / 100;
  return opacity;
};

const changeBoxShadow = function (e) {
  const boxElement = document.querySelector(".box");
  const isMouseMoveEvent = e.type === "mousemove";
  console.log(isMouseMoveEvent);
  const isMouseLeftButtonPress = e.buttons === 1;
  console.log(isMouseLeftButtonPress);
  if ((isMouseMoveEvent && isMouseLeftButtonPress) || !isMouseMoveEvent) {
    setBoxShadow(boxElement, getCurrentColor(), getCurrentOpacity());
  }
};

colorInput.addEventListener("mousemove", changeBoxShadow);
opacityInput.addEventListener("mousemove", changeBoxShadow);
colorInput.addEventListener("change", changeBoxShadow);
opacityInput.addEventListener("change", changeBoxShadow);

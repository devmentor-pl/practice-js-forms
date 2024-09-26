document.addEventListener("DOMContentLoaded", init);

function init() {
  const boxElement = document.querySelector(".box");
  setBoxShadow(boxElement, "#00000");
}

function setBoxShadow(element, colorInHex, opacity = 1) {
  const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, "red")}, 
        ${getChannelColor(colorInHex, "green")}, 
        ${getChannelColor(colorInHex, "blue")}, 
        ${opacity}
    )`;

  element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
  //console.log(element);
  //console.log(colorInRGBA);
  //console.log(opacity);
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

const colorInput = document.querySelector("input");
const rangeInput = colorInput.nextElementSibling;

//rangeInput.addEventListener("mousemove", init);
function color() {
  val = colorInput.value;
  return val;
}

colorInput.addEventListener("change", color);
rangeInput.addEventListener("change", function (e) {
  const boxElement = document.querySelector(".box");
  const col = color();
  const opacity = rangeInput.value / 100;
  console.log(opacity);

  setBoxShadow(boxElement, col, opacity);
});

colorInput.addEventListener("change", function (e) {
  const boxElement = document.querySelector(".box");
  const col = color();
  setBoxShadow(boxElement, col);
});

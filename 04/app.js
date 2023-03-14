document.addEventListener("DOMContentLoaded", init);

function init(e) {
  const boxElement = document.querySelector(".box");
  setBoxShadow(boxElement, e.target.value);
}

function setBoxShadow(element, colorInHex, opacity = 1) {
  const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, "red")}, 
        ${getChannelColor(colorInHex, "green")}, 
        ${getChannelColor(colorInHex, "blue")}, 
        ${opacity}
    )`;

  element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
  console.log(element);
  console.log(colorInRGBA);
  console.log(opacity);
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
  console.log(channelColorDec);

  return channelColorDec;
}

const colorInput = document.querySelector("input");
const rangeInput = colorInput.nextElementSibling;

//rangeInput.addEventListener("mousemove", init);
rangeInput.addEventListener("change", init);
colorInput.addEventListener("change", init);

console.log(colorInput);
console.log(rangeInput);

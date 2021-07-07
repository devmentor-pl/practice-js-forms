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

/*const getCurrentColor = function () {
  const color = document.querySelector("input[name=color]").value;
  console.log(color);
  return color;
};

const getCurrentOpacity = function () {
  const value = document.querySelector("input[name=opacity]").value;
  const opacity = (Number(value) / 10).toFixed(0);
  return opacity;
};

podobny problem jak w 03, zaczelam pisac tym razem od funkcji i nie wiem jak w setBoxShadow(boxElement, color, opacity); dostac sie do zmiennych color i opacity
*/

const changeBoxShadow = function () {
  const color = document.querySelector("input[name=color]").value;
  const value = document.querySelector("input[name=opacity]").value;
  const opacity = "0." + value;
  console.log(opacity);
  const boxElement = document.querySelector(".box");
  setBoxShadow(boxElement, color, opacity);
};

colorInput.addEventListener("change", changeBoxShadow);
opacityInput.addEventListener("change", changeBoxShadow);

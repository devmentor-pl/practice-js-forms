document.addEventListener("DOMContentLoaded", init);

function init() {
  const boxElement = document.querySelector(".box");
  setBoxShadow(boxElement, "#000000");
  const colorInputElement = document.querySelector("input[name=color]");
  const opacityInputElement = document.querySelector("input[name=opacity]");

  colorInputElement.addEventListener("change", (e) => {
    setBoxShadow(
      boxElement,
      colorInputElement.value,
      opacityInputElement.value / 100
    );
  });
  opacityInputElement.addEventListener("input", (e) => {
    setBoxShadow(
      boxElement,
      colorInputElement.value,
      opacityInputElement.value / 100
    );
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

document.addEventListener("DOMContentLoaded", init);

function init() {
  const boxElement = document.querySelector(".box");
  const colorElement = document.querySelector("[name='color']");
  const opacityElement = document.querySelector("[name='opacity']");

  if (colorElement) {
    setBoxShadow(boxElement, colorElement.value);

    colorElement.addEventListener("change", function (e) {
      const colorValue = e.target.value;
      setBoxShadow(boxElement, colorValue);
    });
  } else {
    setBoxShadow(boxElement, "#000000");
  }

  if (opacityElement) {
    opacityElement.addEventListener("change", onOpacityChange);
    opacityElement.addEventListener("mousemove", onOpacityChange);
  }

  function onOpacityChange(e) {
    const value = e.target.value;
    const opacity = value / 100;
    const color = colorElement.value;

    setBoxShadow(boxElement, color, opacity);
  }
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

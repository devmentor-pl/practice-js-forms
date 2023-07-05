document.addEventListener("DOMContentLoaded", init);

function init() {
  const rangeEl = document.querySelector("input[type=range]");
  const colorEl = document.querySelector("input[type=color]");
  const boxElement = document.querySelector(".box");
  setBoxShadow(boxElement, "#000000");

  colorEl.addEventListener("change", (e) => setColor(e, boxElement));
  ["mousemove", "change"].forEach((UIEvent) => {
    rangeEl.addEventListener(UIEvent, (e) => showValue(e, boxElement, colorEl));
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

function setColor(e, element) {
  const color = e.target.value;
  setBoxShadow(element, color);
}

function showValue(e, element, colorEl) {
  const isMouseMoveEvent = e.type === "mousemove";
  const isMouseLeftButtonPress = e.buttons === 1;
  const color = colorEl.value;
  if ((isMouseMoveEvent && isMouseLeftButtonPress) || !isMouseMoveEvent) {
    const shadow = e.target.value / 100;
    setBoxShadow(element, color, shadow);
  }
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  const boxElement = document.querySelector(".box");
  setBoxShadow(boxElement, "#000000");
  const colorPicker = document.querySelector('input[type="color"]');
  console.log(colorPicker);
  const slider = document.querySelector('input[type="range"]');
  colorPicker.addEventListener("change", pickColor);
  slider.addEventListener("change", setOpacity);
  slider.addEventListener("mousemove", setOpacity);

  function pickColor(e) {
    const color = e.target.value;
    setBoxShadow(boxElement, color, slider.value / 100);
  }

  function setOpacity(e) {
    const isMouseMoveEvent = e.type === "mousemove";
    const isMouseLeftButtonPress = e.buttons === 1;
    if ((isMouseMoveEvent && isMouseLeftButtonPress) || !isMouseMoveEvent) {
      const value = e.target.value / 100;
      setBoxShadow(boxElement, colorPicker.value, value);
    }
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

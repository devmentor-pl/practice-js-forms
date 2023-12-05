document.addEventListener('DOMContentLoaded', init);

function init() {
  const boxElement = document.querySelector('.box');
  setBoxShadow(boxElement, '#000000');

  const colorEl = document.querySelector('input[type="color"]');
  colorEl.addEventListener('change', function (e) {
    getColor(boxElement, e);
  });
  const rangeEl = document.querySelector('input[type="range"]');
  rangeEl.addEventListener('change', function (e) {
    getOpacity(boxElement, e, colorEl);
  });
}

function setBoxShadow(element, colorInHex, opacity = 1) {
  const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;
  console.log(opacity);
  console.log(colorInRGBA);

  element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}

function getChannelColor(colorInHex, channelName) {
  let start;
  switch (channelName) {
    case 'red':
      start = 1;
      break;
    case 'green':
      start = 3;
      break;
    case 'blue':
      start = 5;
      break;
  }

  const channelColorHex = colorInHex.substr(start, 2);
  const channelColorDec = parseInt(channelColorHex, 16);

  return channelColorDec;
}

function getColor(boxElement, e) {
  const colorInHex = e.target.value;
  setBoxShadow(boxElement, colorInHex);
}

function getOpacity(boxElement, e, colorEl) {
  const opacity = e.target.value / 100;
  const colorInHex = colorEl.value;
  setBoxShadow(boxElement, colorInHex, opacity);
}

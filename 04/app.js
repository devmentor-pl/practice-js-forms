document.addEventListener('DOMContentLoaded', init);

const divBox = document.querySelector('.box');
const inputList = document.querySelectorAll('input');

let currColor = '#000000';

inputList[0].addEventListener('change', setColor);
function setColor(e) {
	currColor = e.target.value;
	divBox.style.boxShadow = setBoxShadow(divBox, currColor);
}

inputList[1].addEventListener('change', setOpacity);
function setOpacity(e) {
	const pickOpacity = (e.target.value / 100).toFixed(1);
	divBox.style.boxShadow = setBoxShadow(divBox, currColor, pickOpacity);
}

function init() {
	const boxElement = document.querySelector('.box');
	setBoxShadow(boxElement, '#000000');
}

function setBoxShadow(element, colorInHex, opacity = 1) {
	const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

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

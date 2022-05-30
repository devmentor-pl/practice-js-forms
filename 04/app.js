document.addEventListener('DOMContentLoaded', init);

function init() {
	const panel = document.querySelector('.panel');

	const boxElement = document.querySelector('.box');
	setBoxShadow(boxElement, '#000000');

	panel.addEventListener('mousemove', changeBox);
	panel.addEventListener('change', changeBox);
}

function changeBox(e) {
	const colorEl = document.querySelector('input[name="color"]');
	const opacityEl = document.querySelector('input[name="opacity"]');
	const boxElement = document.querySelector('.box');

	const isMouseMoveEvent = e.type === 'mousemove';
	const isMouseLeftButtonPress = e.buttons === 1;
	if ((isMouseMoveEvent && isMouseLeftButtonPress) || !isMouseMoveEvent) {
		const value = opacityEl.value;
		const opacity = value / 100;

		const colorInHex = colorEl.value;

		setBoxShadow(boxElement, colorInHex, opacity);
	}
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

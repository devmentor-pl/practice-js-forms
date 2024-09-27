document.addEventListener('DOMContentLoaded', init);

function init() {
	const boxElement = document.querySelector('.box');
	setBoxShadow(boxElement, '#000000');

	const colorInput = document.querySelector('[type="color"]');
	const opacityInput = document.querySelector('[type="range"]');

	colorInput.addEventListener('change', function () {
		setBoxShadow(boxElement, colorInput.value);
	});

	opacityInput.addEventListener('change', changeOpacity);
	opacityInput.addEventListener('mousemove', changeOpacity);

	function changeOpacity(e) {
		const isMouseEvent = e.type === 'mousemove';
		const isMouseLeftButtonPress = e.buttons === 1;

		if ((isMouseEvent && isMouseLeftButtonPress) || !isMouseEvent) {
			setBoxShadow(boxElement, colorInput.value, opacityInput.value / 100);
		}
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

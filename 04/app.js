document.addEventListener("DOMContentLoaded", init);
const boxElement = document.querySelector(".box");
const colorPicker = document.querySelector('input[name="color"]');
const rangePanel = document.querySelector('input[name="opacity"]');

function init() {
	setBoxShadow(boxElement, "#000000");
}

colorPicker.addEventListener("change", changeColor);
rangePanel.addEventListener("mousemove", changeOpacity);
rangePanel.addEventListener("change", changeOpacity);

function changeColor(e) {
	const color = e.target.value;
	setBoxShadow(boxElement, color, rangePanel.value / 100);
}

function changeOpacity(e) {
	const isMouseMoveEvent = e.type === "mousemove";
	const isMouseLeftButtonPress = e.buttons === 1;

	if ((isMouseMoveEvent && isMouseLeftButtonPress) || !isMouseMoveEvent) {
		const opacity = e.target.value / 100;
		setBoxShadow(boxElement, colorPicker.value, opacity);
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

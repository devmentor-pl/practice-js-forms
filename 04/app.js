document.addEventListener('DOMContentLoaded', init)

function init() {
	const boxElement = document.querySelector('.box')
	setBoxShadow(boxElement, '#000000')
}

function setBoxShadow(element, colorInHex, opacity = 1) {
	const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`

	element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`
}

function getChannelColor(colorInHex, channelName) {
	let start
	switch (channelName) {
		case 'red':
			start = 1
			break
		case 'green':
			start = 3
			break
		case 'blue':
			start = 5
			break
	}

	const channelColorHex = colorInHex.substr(start, 2)
	const channelColorDec = parseInt(channelColorHex, 16)

	return channelColorDec
}

const inpColor = document.querySelector('input[type="color"]')
const inpRange = document.querySelector('input[type="range"]')
inpColor.addEventListener('change', setColor)
inpRange.addEventListener('change', setOpacity)
inpRange.addEventListener('mousemove', setOpacity)

function setColor(e) {
	const boxElement = document.querySelector('.box')
	const colorValue = e.target.value
	setBoxShadow(boxElement, colorValue, inpRange.value / 100)
}

function setOpacity(e) {
	const boxElement = document.querySelector('.box')
	const opacityValue = e.target.value / 100

	const isMouseMoveEvent = e.type === 'mousemove'
	const isMouseLeftButtonPress = e.buttons === 1
	if ((isMouseMoveEvent && isMouseLeftButtonPress) || !isMouseMoveEvent) {
		setBoxShadow(boxElement, inpColor.value, opacityValue)
	}
}

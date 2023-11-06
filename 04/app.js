document.addEventListener('DOMContentLoaded', init)
const inputColor = document.querySelector('input[name="color"]')
const inputOpacity = document.querySelector('input[name="opacity"]')
const boxElement = document.querySelector('.box')

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

inputColor.addEventListener('change', () => {
	const selectedColor = inputColor.value
	setBoxShadow(boxElement, selectedColor)
})

inputOpacity.addEventListener('change', e => {
	let opacityValue = e.target.value / 100
	setBoxShadow(boxElement, inputColor.value, opacityValue)
})

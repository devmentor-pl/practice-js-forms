// W tym zadaniu wykorzystaj inputy typu `color` oraz `range`, aby zarządzać cieniem elementu o klasie `.box`.

// W pliku `app.js` masz już przygotowaną funkcję, która ustawia potrzebne style. Wystarczy, że polom formularza przypiszesz nasłuchiwanie na odpowiednie zdarzenia.

// Zauważ, że nasz input typu `range` przyjmuje zakres od 0 do 100, natomiast w `rgba()` zakres dla przeźroczystości określa się w przedziale od 1 do 0.


document.addEventListener('DOMContentLoaded', init);

const colorEl = document.querySelector('input[name="color"]');
const opacityEl = document.querySelector('input[name="opacity"]');
colorEl.addEventListener('change', changeColor);
opacityEl.addEventListener('change', changeColor);
opacityEl.addEventListener('mousemove', changeColor);


function changeColor(e) {
    const box = document.querySelector('.box');
    // console.log(box)
    const color = colorEl.value;
    // box.style.backgroundColor = color;
    const opacity = opacityEl.value / 100;
    setBoxShadow(box, color, opacity)

    const isMouseMoveEvent = e.type === 'mousemove';
    const isMouseLeftButtonPress = e.buttons === 1;
    if (
        isMouseMoveEvent && isMouseLeftButtonPress
        || !isMouseMoveEvent
    ) {
        spanEl.innerText = e.target.value;
    }
}

function changeOpacity(e) { }

// console.log(colorEl)
// console.log(opacityEl)



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



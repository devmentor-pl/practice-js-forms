document.addEventListener('DOMContentLoaded', init);

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

/*W tym przypadku musisz wykorzystać input-y typu color oraz range, aby zarządzać cieniem dla naszego elementu o klasie .box.

W pliku app.js masz już przygotowaną funkcję, która ustawia odpowiednie style. Wystarczy, że przypiszesz odpowiednie nasłuchiwania dla pól formularza.

Zauważ, że range przyjmuje zakres od 0 do 100, natomiast w rgba() należy zdefiniować zakres dla przeźroczystości od 1 do 0. */



function changeColor() {
    const nameColor = document.querySelector('[name="color"]');
    const nameOpacity = document.querySelector('[name="opacity"]');
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, nameColor.value, nameOpacity.value / 100 );
}

const inputEl = document.querySelectorAll('input');

inputEl.forEach(function (e) {
    e.addEventListener('change', changeColor);

});




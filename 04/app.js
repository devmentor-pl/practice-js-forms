document.addEventListener('DOMContentLoaded', init);  //?dev trochę się zatanawiam czemu akurat tak, ale w sumie okay - tzn. jest przejrzyście 

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    
    const pickerColorEl = document.querySelector('[type="color"]');
    if(pickerColorEl.addEventListener) {
        pickerColorEl.addEventListener('change', function(event) {      //?dev troche miałem z tym problem jak chciałem tą funkcję zrobić poza tym ddEventListener//
            const pickerColorValue = event.target.value;                 //*see rozumiem że trzeba by tu użyć jakkieś metody bind .... czy jak to inaczej ugryźć? 
            setBoxShadow(boxElement, pickerColorValue);
        });
    };
    const rangeEl = document.querySelector('[type="range"]');           //*see no pewnie to powtórzenie jest bezsensu ale już nie myślę - do przemyślenia 
    rangeEl.addEventListener('change', function opacityValue(event) {
        const opacity = (event.target.value)/100;
        setBoxShadow(boxElement, pickerColorEl.value, opacity);
    });
    rangeEl.addEventListener('mousemove', function(event) {
        const opacity = (event.target.value)/100;
        setBoxShadow(boxElement, pickerColorEl.value, opacity);
    });

    }; 

function setBoxShadow(element, colorInHex, opacity = 1) {   //?dev I tak mi trochę tu coś nie gra, bo jak ustawie suwak opacity na watość <1 a potem zmienie kolor, to i tak początkowo opacity tego nowego koloru jest na max tzn = 1. I chyba trochę nie wiem jak to uchwycić. 
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
    switch(channelName) {
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



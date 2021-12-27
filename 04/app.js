document.addEventListener('DOMContentLoaded', init);

const boxElement = document.querySelector('.box');
const pannelEl = document.querySelector('.panel');
const inputColor = document.querySelector('input[name="color"]');
const inputRange = document.querySelector('input[name="opacity"]');

function init() {
    // const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
}

function setBoxShadow(element, colorInHex, opacity=1) {
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')},
        ${getChannelColor(colorInHex, 'green')},
        ${getChannelColor(colorInHex, 'blue')},
        ${opacity}
    )`;
    console.log(opacity);
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

    const channelColorHex = colorInHex.substr(start, 2); // substr(start,lenght) - Zwraca określoną liczbę początkowych znaków w łańcuchu znaków w określonej lokalizacji.
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec;
}

//Działa cześciowo, nie moge zmienić shadow na kolorze początkowym i wydaje mi sie ze to rozwiązanie mozna lepiej napsiac ale nie mam juz pomysłu
pannelEl.addEventListener('change', function(e){
    let pickedRange;
    if(e.target.type ==='color'){
        pickedColor = e.target.value;
    }
    if(e.target.type ==='range'){
        pickedRange = Number(e.target.value)/100;
    }
    setBoxShadow(boxElement,pickedColor,pickedRange);
});


// inputColor.addEventListener('change', function(e){
//     pickedColor = e.target.value;
//     setBoxShadow(boxElement,pickedColor);
// });


// inputRange.addEventListener('change',function(e){
//     if(e.target.type ==='range'){
//         range = e.target.value;
//         console.log(range);
//     }
// });
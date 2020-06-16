document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    const inputColor = document.querySelector('[type=color]');
    const inputRange = document.querySelector('[type=range]');
    inputColor.addEventListener('change', handleChangeColor);
    inputRange.addEventListener('change', handleChangeColor);
    inputRange.addEventListener('mousemove', handleChangeColor);

    function handleChangeColor(e){
        //console.log(e, inputColor.value)
        setBoxShadow(boxElement, inputColor.value, inputRange.value*0.01) // a co z parametrem w tym przypadku?
    }

//     const inputColor = document.querySelector('[type=color]')
//     inputColor.addEventListener('change', function(){
//        setBoxShadow(boxElement, this.value, inputRange.value*0.01); 
//        //console.log(this)
       
//     })
//     const inputRange = document.querySelector('[type=range]')
//         console.log(inputRange)
//         inputRange.addEventListener('change', value)
//         inputRange.addEventListener('mousemove', value)

//         function value(e) {
//             const isMouseMoveEvent = e.type === 'mousemove';
//             const isMouseLeftButtonPress = e.buttons === 1;
//             if(
//                 isMouseMoveEvent && isMouseLeftButtonPress
//                 || !isMouseMoveEvent
//                 ) {
//                 console.log(e.target.value, boxElement, this.name)
//                     //boxElement.innerHTML= this.value *0.1
//                     setBoxShadow(boxElement, inputColor.value, this.value*0.01); 
//                 }       
//          }
                  
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



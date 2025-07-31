document.addEventListener("DOMContentLoaded", init);

function init() {
    const boxElement = document.querySelector(".box");
    const inputColor = document.querySelector("input[type=color]");
    const inputRange = document.querySelector("input[type=range");

    console.log(inputColor, inputRange);

    inputColor.addEventListener("change", function (e) {
        const color = inputColor.value;
        console.log(color);
        setBoxShadow(boxElement, color, inputRange.value);
    });

    inputRange.addEventListener("change", function (e) {
        const opacity = inputRange.value / 100;
        console.log(opacity);

        setBoxShadow(boxElement, inputColor.value, opacity);
    });

    inputRange.addEventListener("mousemove", function (e) {
        const opacity = inputRange.value / 100;
        console.log(opacity);

        setBoxShadow(boxElement, inputColor.value, opacity);
    });

    setBoxShadow(boxElement, "#000000");
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

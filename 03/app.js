const ulList = document.querySelector('.images-list');
// console.log(ulList)

const fileInput = document.querySelector('input');
// console.log(fileInput)


fileInput.addEventListener('change', showFile);




function showFile(e) {

    for (let i = 0; i < e.target.files.length; i++) {

        const file = e.target.files[i];


        const li = document.querySelector('.images-list__item').cloneNode(true);
        li.classList.remove('.images-list__item--prototype');

        if (file && file.type.includes('image')) {

            const reader = new FileReader();

            reader.onload = function (readerEvent) {
                const newImg = document.createElement('img');
                newImg.src = readerEvent.target.result;

                ulList.appendChild(newImg);


                const sizeText = document.querySelector('.images-list__item-size');
                const nameImg = document.querySelector('.images-list__item-name');

                fileSize = file.size;
                console.log(fileSize)
                fileName = file.name;
                console.log(fileName)





                var sizeInMB = (fileSize / (1024 * 1024)).toFixed(2) + 'mb';
                console.log(sizeInMB)

                sizeText.innerHTML = sizeInMB;
                ulList.appendChild(sizeText);

                nameImg.innerHTML = fileName;
                ulList.appendChild(nameImg)





            }
            reader.readAsDataURL(file)
        }
    }


}

document.querySelector('input').addEventListener('change', fileHandler);

function fileHandler(e) {

	e.preventDefault();
    let fileList = e.target.files;
    console.log(fileList.length)

    for (let i = 0; i < fileList.length; i++) {
        // console.log(fileList[i].name)
        // console.log(fileList[i].type)
        // console.log(fileList[i].size)
        if (fileList[i].type.includes('image')) {
            let li = document.querySelector('.images-list__item').cloneNode(true);
            li.classList.remove('images-list__item--prototype');
            li.querySelector('header').textContent = fileList[i].name;
            li.querySelector('img').src = (window.URL || window.webkitURL).createObjectURL(fileList[i]);
            // li.querySelector('footer').textContent = `${fileList[i].size} kB`;
            li.querySelector('footer').textContent = `${(fileList[i].size / (1024 * 1024)).toFixed(2)} MB`;
            document.querySelector('.images-list').appendChild(li);
        }
    }
}

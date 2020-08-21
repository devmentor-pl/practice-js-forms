// get .images-list
let imagesList = document.querySelector('.images-list');
let input = document.querySelector('input');

// event listener for _change event_
input.addEventListener('change', function (el) {
  // CHANGE event works properly

  // loop over all elements
  for (let i = 0; i < el.target.files.length; i++) {

    const file = el.target.files[i];

    // clone `.images-list__item--prototype`
    let newElement = document.querySelector('.images-list__item').cloneNode(true);
    // remove proto class
    newElement.classList.remove('images-list__item--prototype');

    // check if file type is _image_
    if (file && file.type.includes('image')) {

      const read = new FileReader();
      read.onload = function (reader) {
        const addImg = document.createElement('img');
        addImg.src = reader.target.result;

        // file size
        const size = reader.total;

        // convert to MB
        const sizeMB = (size / (1024 * 1024)).toFixed(2);
        console.log('size in MB: ' + sizeMB);

        // name
        const name = file.name;

        // render element and add to the webpage
        newElement.querySelector('header').innerText = 'File name: ' + name;
        newElement.querySelector('footer').innerText = 'Size in MB: ' + sizeMB;
        newElement.querySelector('.images-list__item-img').setAttribute('src', addImg.src);

        // append <li> to <ul images-list>
        imagesList.appendChild(newElement);
      }
      // document.body.appendChild(newElement) // adds the images to the page
      read.readAsDataURL(file);
    }
  }
});

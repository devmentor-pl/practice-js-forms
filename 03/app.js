document.addEventListener('DOMContentLoaded', initEvents);

function initEvents() {
  const fileInput = document.querySelector('input');
  fileInput.setAttribute('accept', 'image/*') //wybacz, obeszłam trochę polecenie, ale dla pewności poniżej zastosuję to, co sugerujesz sprawdzić (includes('image') ;) )
  fileInput.addEventListener('change', showImgs)
}

function showImgs(e) {
  const imgArr = e.target.files;
  const imgUl = document.querySelector('.images-list');

  for (const img of imgArr) {
    if (img.type.includes('image')) {
      const imgLi = document.createElement('li');
      imgLi.classList.add('images-list__item');
      const reader = new FileReader();

      reader.readAsDataURL(img);

      reader.onload = function (readEvent) {
        const imgHeader = document.createElement('header');
        const imgEl = document.createElement('img');
        const imgFooter = document.createElement('footer');

        imgHeader.classList.add('images-list__item-name');
        imgHeader.innerText = img.name;

        imgEl.classList.add('images-list__item-img');
        imgEl.setAttribute('src', readEvent.target.result);

        imgFooter.classList.add('images-list__item-size');
        imgFooter.innerText = `${(img.size / Math.pow(1024, 2)).toFixed(2)}MB`;

        imgLi.appendChild(imgHeader);
        imgLi.appendChild(imgEl);
        imgLi.appendChild(imgFooter)

        imgUl.appendChild(imgLi)
      }
    } else {
      alert('Can not read the file. The file is broken or is not an image')
    }
  }

}

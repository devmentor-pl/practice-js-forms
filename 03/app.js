const input = document.querySelector('input[type="file"]');
const list = document.querySelector('.images-list');
const prototype = document.querySelector('.images-list__item--prototype');

input.addEventListener('change', function (event) {
  const files = event.target.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (file.type.includes('image')) {
      const clone = prototype.cloneNode(true);
      clone.classList.remove('images-list__item--prototype');

      const name = clone.querySelector('.images-list__item-name');
      name.innerText = file.name;

      const img = clone.querySelector('.images-list__item-img');
      img.src = URL.createObjectURL(file);

      const size = clone.querySelector('.images-list__item-size');
      size.innerText = (file.size / (1024 * 1024)).toFixed(2) + ' MB';

      list.appendChild(clone);
    }
  }
});

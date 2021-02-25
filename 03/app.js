document.addEventListener('DOMContentLoaded', () => {

  function roundNumber(number) {
    return number.toFixed(2);
  }
  const inputEl = document.querySelector('input');
  const imagesList = document.querySelector('.images-list');
  const imageItemProto = imagesList.children[0];
  inputEl.addEventListener('change', e => {

    const filesList = e.target.files;
    const filesListArr = [...filesList];
    filesListArr.forEach(file => {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        const liEl = imageItemProto.cloneNode(true);
        liEl.classList.remove('images-list__item--prototype');
        [header, img, footer] = liEl.children;
        header.innerText = file.name;
        img.src = readerEvent.target.result;
        const fileSizeInMb = file.size / 1048576;

        footer.innerText = `${roundNumber(fileSizeInMb)}MB`;
        imagesList.appendChild(liEl);
      }
      reader.readAsDataURL(file);
    })
  })
})

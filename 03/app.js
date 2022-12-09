const inputEl = document.querySelector('input');
inputEl.addEventListener('change', handleChange);

function handleChange(e) {
    const prototype = document.querySelector('.images-list__item--prototype');
    const ulEl = document.querySelector('.images-list');
    const filesList = Array.from(e.target.files);
    filesList.forEach(function(file) {
        
        const liEl = prototype.cloneNode(true);
        const header = liEl.querySelector('header');
        const footer = liEl.querySelector('footer');
        const imgEl = liEl.querySelector('img');

        header.innerText = file.name;
        footer.innerText = file.size;
        liEl.classList.remove('.images-list__item--prototype')
        ulEl.appendChild(liEl);

        const reader = new FileReader();
        reader.addEventListener('load', function(e) {
            const img = e.target.result;
            imgEl.src = img;
        });

        reader.readAsDataURL(file);

    });
}
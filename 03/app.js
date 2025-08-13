const fileEl = document.querySelector('input');
const listEl = document.querySelector('.images-list')
const prototype = document.querySelector('.images-list__item--prototype')

fileEl.addEventListener('change', function (e) {

    const filesImg = e.target.files
    listEl.innerHTML = ''

    for (let i = 0; i < this.files.length; i++) {
        const file = filesImg[i];

        if (!file.type.includes('image')) continue // jeśli type file nie zawiera image pomiń

        const reader = new FileReader()

        reader.onload = function (eventImg) {

            const cloneProto = prototype.cloneNode(true)
            cloneProto.classList.remove('images-list__item--prototype')
            const header = cloneProto.querySelector('header')
            const footer = cloneProto.querySelector('footer')
            const img = cloneProto.querySelector('img')

            if (header) header.textContent = file.name;
            if (footer) footer.textContent = `${(file.size / 1024).toFixed(2)} KB`
            if (img) img.src = eventImg.target.result

            listEl.appendChild(cloneProto)
        }

        reader.readAsDataURL(file)
    }
})
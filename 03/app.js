const fileEl = document.querySelector('input')

fileEl.addEventListener('change', handleChange)

function handleChange(e) {
    const protoEl = document.querySelector('.images-list__item--prototype')
    const ulEl = document.querySelector('.images-list')

    const filesList = Array.from(e.target.files)

    filesList.forEach(function (file) {

        if (file.type.includes('image')) {
            const liEl = protoEl.cloneNode(true)
            const headerEl = liEl.querySelector('header')
            const imgEl = liEl.querySelector('img')
            const footerEl = liEl.querySelector('footer')

            const reader = new FileReader()

            reader.addEventListener('load', addFile)
            
            function addFile (e) {
                headerEl.innerText = file.name

                const newImg = e.target.result
                imgEl.src = newImg

                footerEl.innerText = (file.size / (1024 * 1024)).toFixed(2) + ' MB'

                liEl.classList.remove('images-list__item--prototype')

                ulEl.appendChild(liEl)
            }
            reader.readAsDataURL(file)
        } else {
            alert('Załadowany plik o nazwie '+ file.name +' nie jest plikiem graficznym')
        }
    })
}
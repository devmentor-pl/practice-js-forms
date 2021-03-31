/* program działa w przypadku wybrania plików z folderu projektu, nie mogłem pobrać pełnej ścieżki z input.value gdyż zwracała fakepath, a nie znalazłem mniej złożonego rozwiązania tego problemu w internecie, proszę o wskazówke lub rozwiązanie tego problemu */
const input = document.querySelector('input');

input.addEventListener('change', (e) => {
    for(let i = 0; i < input.files.length; i++){
        if(input.files[i].type.includes('image')) {
            const path = input.files[i].name;
            const li = document.createElement('li');
            li.setAttribute('class', 'images-list__item');
            const header = document.createElement('header');
            header.setAttribute('class', 'images-list__item-name');
            header.textContent = path;
            li.appendChild(header);
            const img = document.createElement('img');
            img.setAttribute('class', 'images-list__item-img');
            img.setAttribute('src', path);
            li.appendChild(img);
            const footer = document.createElement('footer');
            footer.setAttribute('class', 'images-list__item-size');
            footer.textContent = `${(input.files[i].size/1000).toFixed(2)} KB`;
            li.appendChild(footer);
            document.querySelector('ul').appendChild(li);
        } else console.log('zły rodzaj pliku');
    }
    e.target.value = '';
})
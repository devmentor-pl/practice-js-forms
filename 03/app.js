//W .image-list wyświetlenie wszystkich
//wybranych w polu <input> plików graficznych ('.type.includes 'image')
//Wykorzystaj event typu 'change'


//Wykorzytaj strukturę z elementu '.images-list__item--prototype'
//element o tej klasie jest niewidoczny

//'input' typu 'file' pozwala wybrać więcej niż jeden plik
//dlatego do prezentacji użyj pętli for

//Wyświetl rozmiar pliku w Mb z dwoma miejscami po przecinku oraz nazwę

//document.addEventListener('DOMContentLoaded' , init);

function init() {
    const elInput = document.querySelector('input');
    if(elInput) {
        elInput.addEventListener('change', handleChange);
    }
}


function handleChange(e) {
    console.log(e.target);
}
    
        
   


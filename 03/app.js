document.addEventListener('DOMContentLoaded', init);

function init() {
    const fileEl = document.querySelector('input');

    if(fileEl) {
        fileEl.addEventListener('change', handleChange);

        function handleChange(e){            
            const prototypeEl = document.querySelector('.images-list__item--prototype');
            const ulEl = document.querySelector('ul');
            const filesList = Array.from(e.target.files);

            filesList.forEach(function(file){
                if(file && file.type.includes('image')) {
                    const liEl = prototypeEl.cloneNode(true);
                    const headerEl = liEl.querySelector('header');
                    const footerEl = liEl.querySelector('footer');
                    headerEl.innerText = file.name;
                    footerEl.innerText = (file.size/(1024*1024)).toFixed(2)+' MB';
                    liEl.classList.remove('images-list__item--prototype');
                    
                    const reader = new FileReader();
                    reader.onload = function(e){
                        const imgEl = liEl.querySelector('img');
                        imgEl.src = e.target.result;
                    }
                    reader.readAsDataURL(file);                
                    
                    ulEl.appendChild(liEl);
                } else {
                    alert('Proszę wybrać plik z rozszerzeniem graficznym!')
                }
            });
        }   
    }
    
}
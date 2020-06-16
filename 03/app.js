const imagesList = document.querySelector('.images-list')
//console.log(imagesList);
const inputEl = document.querySelector('input');
//console.log(inputEl)
//const li = imagesList.querySelector('li')
//console.log(li)
inputEl.addEventListener('change', function(e)
{
  for(let i = 0; i<e.target.files.length; i++){
    const file = e.target.files[i];
    //console.log(file, file.type)
    const newLi = document.querySelector('li').cloneNode(true)
    newLi.classList.remove('images-list__item--prototype')
    //console.log(newLi)
    if(file && file.type.includes('image')){
        const reader = new FileReader();
        reader.onload = function(readerEvent) {
            const newImg = document.createElement('img');
            newImg.src = readerEvent.target.result;
            newLi.querySelector('.images-list__item-img').setAttribute('src', newImg.src)
           // console.log(newImg, imagesList, readerEvent, readerEvent.total)
           const size = readerEvent.total;
           //console.log(size)
           const megaBytes = 1024*1024;
           const convertToMB = (size/megaBytes).toFixed(2);
           //console.log(convertToMB + 'MB', file.name);
           const fileName = file.name
           newLi.querySelector('header').innerText = fileName
           newLi.querySelector('footer').innerText = convertToMB + 'MB'
           imagesList.appendChild(newLi)
           
           
          //  newLi.forEach(function(el){
          //    console.log(el)
          //  })
         
    }
    reader.readAsDataURL(file)
    //console.log('aa')
    }
  }
    
})
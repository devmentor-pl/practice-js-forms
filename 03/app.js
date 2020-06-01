const imagesList = document.querySelectorAll('.images-list')
console.log(imagesList);
const inputEl = document.querySelector('input');
console.log(inputEl)
//const li = imagesList.querySelector('li')
//console.log(li)
inputEl.addEventListener('change', function(e)
{
    
    const newLi = document.createElement('li');
    newLi.classList.add('images-list__item');
    newLi.classList.add('images-list__item--prototype')
    const newHeader = document.createElement('header');
    newHeader.classList.add('images-list__item-name');
    newLi.appendChild(newHeader);
    const newImg = document.createElement('img');
    newImg.classList.add('images-list__item-name');
    const newFooter = document.createElement('footer');
    newFooter.classList.add('images-list__item-size');
    newLi.appendChild(newImg);
    newLi.appendChild(newFooter);
    const file = e.target.files[0];
    console.log(file, file.type)
   if(file && file.type.includes('image')){
    const reader = new FileReader();
    reader.onload = function(readerEvent) {
            const newImg = document.createElement('img');
            newImg.src = readerEvent.target.result;
            document.querySelector('.images-list__item-img').setAttribute('src', newImg.src)
           // console.log(newImg, imagesList, readerEvent, readerEvent.total)
           const size = readerEvent.total;
           console.log(size)
           const megaBytes = 1024*1024;
           const convertToMB = (size/megaBytes).toFixed(2);
           console.log(convertToMB + 'MB');
         console.log(imagesList.length)
         
         
         
         
           imagesList.forEach(function(el)
           {
               console.log(el.lastElementChild, el.length++)
               /*if(el.firstElementChild === newLi)
               {el.appendChild(newLi)
                //el.setAttribute('src', newImg.src)
                   console.log(el)
                  // el.appendChild(newLi)
               }
               else {
                el.appendChild(newLi)
                
                   //el.setAttribute('src', newImg.src)
                   console.log('bb', el)}*/
               
           })
    }
    reader.readAsDataURL(file)
    console.log('aa')
    }
    
})
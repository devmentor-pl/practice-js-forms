document.addEventListener('DOMContentLoaded',init)


function init(){
    console.log('DOM')

const input=document.querySelector('input')


input.addEventListener('change',readFile);
}

const protoClon=document.querySelector('.images-list__item--prototype')
const headerEl=protoClon.querySelector('header')
const footerEl=protoClon.querySelector('footer')
const ulEl=document.querySelector('.images-list')
const imgEl=document.querySelector('img')
function readFile(e){
    const imgList=Array.from(e.target.files);
    
    imgList.forEach(img =>{
        console.log(img)
    })
    
    if(img && file.type.includes('image')){
        const reader= new FileReader();
        reader.onload=function(e){
            const newImg=e.target.result;
        imgEl.src=newImg;
       
        }
        reader.readAsDataURL(newImg)
    
    }
            const clone=protoClone.cloneNode(true)
            headerEl.innerText=file.name
            footerEl.innerText=file.size/(1024*1024).toFixed(2)
             clone.classList.remove('')
            ulEl.appendChild(clone)
    



































}
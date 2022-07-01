document.addEventListener('DOMContentLoaded',init)


function init(){
   const input=document.querySelector('input')
if(input){
    input.addEventListener('change',handleChange)
}
}



function handleChange(e){
const prototypeEl=document.querySelector('.images-list__item--prototype')


const ulEl=document.querySelector('.images-list')


    const fileList=Array.from(e.target.files);
fileList.forEach(file=>{
   console.log(file);
    if(file.type.indexOf('image') >=0){
const liElement=prototypeEl.cloneNode(true)
const headerEl=liElement.querySelector('header')
const footerEl=liElement.querySelector('footer')
const imgEl=liElement.querySelector('img')
headerEl.innerText=file.name;
footerEl.innerText=(file.size /(1024*1024)).toFixed(2)+'mb';
liElement.classList.remove('images-list__item--prototype')
ulEl.appendChild(liElement)  

const reader= new FileReader();
reader.addEventListener('load',function(e){

const image=e.target.result;
imgEl.src=image;
})
reader.readAsDataURL(file)
    }else{
        alert('no')
    }
})

}



































const form = document.querySelector('form');
const submit = document.querySelector('input[type=submit]');

const getValue = function(e) {
    e.preventDefault();
    let liContent = '';
    const ul = document.querySelector('.users-list');
    for(const el of form.elements){
      if(el.getAttribute('type') != 'submit'){
        liContent = `${liContent} ${el.value}`
        el.value = "";
      }   
    }
    const li = document.createElement('li');
    li.classList.add('user-list__person');
    li.textContent = liContent;
    ul.appendChild(li);
    console.log(liContent);
}
if(form)
{
    submit.addEventListener('click', getValue);
}

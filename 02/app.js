const formEl = document.querySelector('form');
console.log(formEl);
formEl.addEventListener('submit', function(e)
{
    e.preventDefault();
})

const handleChange = function(e) {
        console.log(        e.target.name,        e.target.value,    );
     } 
for(const el of formEl.elements)
 {    el.addEventListener('change', handleChange);   
  }

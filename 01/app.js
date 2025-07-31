    const btn = document.querySelector("input[type=submit]");
    const ul = document.querySelector("ul");
        
    btn.addEventListener('click', function(e){
        e.preventDefault();
        const firstName = document.querySelector("input[name=firstName]").value;
        const lastName = document.querySelector("input[name=lastName]").value;
        const newLi = document.createElement('li');
        newLi.textContent = firstName + " " + lastName;
        ul.appendChild(newLi);
        document.querySelector("form").reset()
    });

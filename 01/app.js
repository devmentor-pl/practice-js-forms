const formEl = document.querySelector('form');


const checkData = function (currElList, inputArr) {
    for (let i = 0; i < currElList.length - 1; i++) {
        const currEl = currElList[i];

        if (currEl.value.length === 0) {
            alert(`Wprowadziłeś błędne dane w polu ${currEl.previousSibling.textContent.trim().slice(0, -1)}`);
        } else {
            inputArr.push(currEl.value);
        }
    }
}

const printData = function (inputArr) {
    const usersList = document.querySelector('.users-list');
    const listItem = document.createElement('li');
    listItem.classList.add('users-list__person');

    listItem.innerText = `${inputArr.join(' ')}`;

    usersList.appendChild(listItem);
}

const clearInput = function (currElList) {
    for (let j = 0; j < currElList.length - 1; j++) {
        console.log(currElList[j]);
        currElList[j].value = '';
    }
}

const getData = function (e) {
    e.preventDefault();

    const currElList = this.elements;
    const inputArr = [];

    checkData(currElList, inputArr)
    if (inputArr.length === currElList.length - 1) {
        printData(inputArr);
        clearInput(currElList);
    }
}

formEl.addEventListener('submit', getData);
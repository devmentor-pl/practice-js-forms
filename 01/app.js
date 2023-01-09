const formEl = document.querySelector('form');


const checkData = function (currElList, inputArr) {
    for (let i = 0; i < currElList.length - 1; i++) {
        const currEl = currElList[i];
        const check = isNotEmpty(currEl);

        if (check) {
            inputArr.push(currEl.value);
            clearInput(currEl);
        }
    }
}

const isNotEmpty = function (currEl) {
    if (currEl.value.length === 0) {
        alert(`Wprowadziłeś błędne dane w polu ${currEl.previousSibling.textContent.trim().slice(0, -1)}`);
    } else {
        return true;
    }
}

const printData = function (inputArr) {
    const usersList = document.querySelector('.users-list');
    const listItem = document.createElement('li');
    listItem.classList.add('users-list__person');

    listItem.innerText = `${inputArr.join(' ')}`;

    usersList.appendChild(listItem);
}

const clearInput = function (currEl) {
    currEl.value = '';
}

const getData = function (e) {
    e.preventDefault();

    const currElList = this.elements;
    const inputArr = [];

    checkData(currElList, inputArr)
    if (inputArr.length === currElList.length - 1) {
        printData(inputArr);
    }
}

formEl.addEventListener('submit', getData);
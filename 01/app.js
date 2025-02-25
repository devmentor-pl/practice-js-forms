document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const usersList = document.querySelector('.users-list');

    form && form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(form);
        const firstName = formData.get('firstName')?.trim();
        const lastName = formData.get('lastName')?.trim();

        if (!firstName || !lastName) return;

        const li = userListItemFactory.create({firstName, lastName});
        usersList && usersList.appendChild(li);

        form.reset();
    });
});
class UserListItem {
    constructor({ firstName, lastName }) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    createElement() {
        const li = document.createElement('li');
        li.classList.add('users-list__person');
        li.textContent = `${this.firstName} ${this.lastName}`;
        return li;
    }
}

const userListItemFactory = {
    create(data) {
        const userItem = new UserListItem(data);
        return userItem.createElement();
    }
};
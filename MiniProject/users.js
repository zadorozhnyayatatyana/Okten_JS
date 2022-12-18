fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        let header = document.createElement('header');
        let h1 = document.createElement('h1');
        h1.innerText = 'Users';
        header.append(h1);
        document.body.append(header);
        document.body.append(divContainer);
        let divUsers = document.createElement('div');
        divUsers.classList.add('row');
        divContainer.append(divUsers);

        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.classList.add('column');
            divUser.classList.add('column2');
            divUser.innerText = `${user.id} ${user.name}`;
            let buttonUserDetails = document.createElement('button');
            buttonUserDetails.innerText = 'Details';
            buttonUserDetails.onclick = function () {
                window.location.href = `user-details.html?id=${user.id}`;
            };
            divUser.append(buttonUserDetails);
            divUsers.append(divUser);
        }
    })
let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then(user => {
        let container = document.createElement('div');
        container.classList.add('column');
        container.id = 'container';
        document.body.append(container);

        let inf = document.createElement('div');
        inf.id = 'inf';

        container.append(inf);

            UserDet(user);
            let button = document.createElement('button');
            button.innerText = 'Post of current user';
            button.onclick = function () {
                let divPostsDisplay = document.getElementById('divPostsAll').style.display;

                if (divPostsDisplay === 'none') {
                    document.getElementById('divPostsAll').style.display = '';

                } else {
                    document.getElementById('divPostsAll').style.display = 'none';
                }

            };
        container.append(button)

        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((response) => response.json())
            .then(posts => {
                let divPostsAll = document.createElement('div');
                divPostsAll.style.display = 'none';
                divPostsAll.id = 'divPostsAll'
                let divContainerPosts = document.createElement('div');

                divContainerPosts.classList.add('container');
                let header = document.createElement('header');
                let h1 = document.createElement('h1');
                h1.innerText = 'Posts';
                header.append(h1);
                divPostsAll.append(header);
                divPostsAll.append(divContainerPosts);
                let divPosts = document.createElement('div');
                divPosts.classList.add('row');
                divContainerPosts.append(divPosts);

                for (const post of posts) {
                    let divPost = document.createElement('div');
                    divPost.classList.add('column');
                    divPost.classList.add('column5');
                    divPost.innerText = `${post.title}`;
                    let buttonPostDetails = document.createElement('button');
                    buttonPostDetails.innerText = 'Details';
                    buttonPostDetails.onclick = function () {
                        window.location.href = `post-details.html?id=${post.id}`;
                    };
                    divPost.append(buttonPostDetails);
                    divPosts.append(divPost);

                }
                let container = document.getElementById('container');

                container.append(divPostsAll) }
            )
        }

    )



function UserDet(obj) {
    let infDiv = document.getElementById('inf');

    for (const key in obj) {
        let divKey = document.createElement('div');
        if (typeof obj[key] !== 'object') {
            divKey.innerText = `${key} - ${obj[key]}`;
            infDiv.append(divKey)
        } else {
            divKey.innerText = `${key}:`;
            infDiv.append(divKey)
            UserDet(obj[key]);
        }
    }
}
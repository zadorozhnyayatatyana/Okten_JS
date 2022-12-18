let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then(post => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('column');
            document.body.append(postDiv);

            for (let item in post) {
                let divElement = document.createElement('div');
                postDiv.append(divElement);
                if (item === 'body') {
                    divElement.textContent = 'body: ' + post.body
                } else {
                    divElement.innerText = `${item} : ${post[item]}`
                }
            }
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then((response) => response.json())
                .then(comments => {
                        let divCommentsAll = document.createElement('div');
                        let divContainerComments = document.createElement('div');

                        divContainerComments.classList.add('container');
                        let header = document.createElement('header');
                        let h1 = document.createElement('h1');
                        h1.innerText = 'Comments';
                        header.append(h1);
                        divCommentsAll.append(header);
                        divCommentsAll.append(divContainerComments);
                        let divComments = document.createElement('div');
                        divComments.classList.add('row');
                        divContainerComments.append(divComments);
                        document.body.append(divCommentsAll)

                        for (const comment of comments) {
                            let divComment = document.createElement('div');
                            divComment.classList.add('column');
                            divComment.classList.add('column4');
                            divComment.innerText = `email:  ${comment.email} \n ${comment.body} `;
                            divComments.append(divComment);
                        }
                    }
                )
        }
    )


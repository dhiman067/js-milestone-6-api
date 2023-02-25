fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => loadUsers(data))

function loadUsers(users){
    for(user of users){
        console.log(user)
        const comments = document.getElementById('comment-element')
        const div =document.createElement('div')
        div.classList.add('div-class')
        div.innerHTML = `
        <p>post id : ${user.postId}</p>
        <p>id : ${user.id}</p>
        <p>name : ${user.name}</p>
        <p>email : ${user.email}</p>
        <p>comments : ${user.body}</p>
        `
        comments.appendChild(div)
    }
}
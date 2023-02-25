function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => loadusers(data))
}

function loadusers(users) {
    for (user of users) {
        const id = user.id
        const userName = user.name
        const address = user.address.street



        const container = document.getElementById('new-element')
        const paragraph = document.createElement('p')
        paragraph.classList.add('p-class')
        paragraph.innerText = `id:${id} 
     name: ${userName}
     address: ${address}`
        container.appendChild(paragraph)
    }

}
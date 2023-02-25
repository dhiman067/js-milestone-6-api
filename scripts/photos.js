function photos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => loaduser(data))
}

function loaduser(users){
    for(user of users){
        const newElemets = document.getElementById('new-elemets')
        const div = document.createElement('div')
        div.classList.add('new-element-class')
        div.innerHTML = `
        <p>albumId: ${user.albumId}</p>
        <p>id: ${user.id}</p>
        <p>title: ${user.title} </p>
        <p>url:<a href="${user.url}">${user.url}</a> </p>
        <p>thumbnailUrl: ${user.thumbnailUrl}</p>
        `
        newElemets.appendChild(div)
    }
    
}

photos()
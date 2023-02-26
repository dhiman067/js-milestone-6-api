const loaddata = (mobileDynamic) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${mobileDynamic}`
    fetch(url)
        .then(res => res.json())
        .then(data => displyData(data.data))
}

const displyData = datas => {
    const infoCards = document.getElementById('info-cards')
    const emptyHeadderResult = document.getElementById('empty-result-header')
    
    if (datas.length == 0) {
        emptyHeadderResult.classList.remove('d-none')
    }
    else {
        emptyHeadderResult.classList.add('d-none')
    }

    infoCards.innerText = ''
    for (data of datas) {
        const div = document.createElement('div')
        div.innerHTML = `<div class="col">
<div class="card">
    <img class="p-5" src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${data.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</p>
            <button onclick = "launchmodal('${data.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  phone info
</button>
    </div>
</div>
</div>`


        infoCards.appendChild(div)
       
        console.log(data)
    }
    loadSpiner(false)
}


document.getElementById('search-btn').addEventListener('click', function () {
    loadSpiner(true)
    const searchField = document.getElementById('search-field').value
    loaddata(searchField)

})

function loadSpiner(isloading){
    const loader = document.getElementById('loader')
    if(isloading){
       loader.classList.remove('d-none')
    }
    else{
        loader.classList.add('d-none')
    }
}

function launchmodal(id){
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => loadinfo(data.data))
}
function loadinfo(info){
document.getElementById('exampleModalLabel').innerText = info.brand
document.getElementById('modal-body').innerHTML = `<img class = "img-fluid" src = "${info.image}">
<h4>produce name: ${info.name}</h4>`
}

loaddata('tab')
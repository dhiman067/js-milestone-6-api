const loadMeal = (data) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`
    fetch(url)
        .then(res => res.json())
        .then(data => mealdata(data.meals))
}

function mealdata(meals) {
    const divRow = document.getElementById('divrow')
    divRow.innerHTML = ''
    for (meal of meals) {
        console.log(meal)

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                    <button onclick="loadmealdetailid(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                  </button>
            </div>
        </div>
    </div>`

        divRow.appendChild(div)
    }


}


function getinputdata() {
    const inputField = document.getElementById('inputfield')
    const inputdata = inputField.value
    loadMeal(inputdata)

}

function loadmealdetailid(mealdetailsid) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealdetailsid}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaymealdata(data.meals))
}
function displaymealdata(mealdata) {
    document.getElementById('exampleModalLabel').innerText = `${mealdata[0].strMeal}`
    const mealBody = document.getElementById('meal-body')
    mealBody.innerHTML = `
    <img class = "img-fluid" src ="${mealdata[0].strMealThumb}" >
    <h3>area: ${mealdata[0].strArea}</h3>
    <h3>catagory: ${mealdata[0].strCategory}</h3>
    `
    console.log(mealdata)
}

loadMeal('rice')



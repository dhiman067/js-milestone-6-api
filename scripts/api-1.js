const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};
// const personstring = JSON.stringify(person)


// function loaddata(){
//     fetch('personstring')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
// loaddata()

const divrow = document.getElementById('row')
const div = document.createElement('div')
div.innerHTML= `
<div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">person name: ${person.result[0].name.common}</h5>
              <p class="card-text">Age: ${person.result[0].age}</p>
              <p class="card-text">street: ${person.result[0].address.street}</p>
              
            </div>
          </div>
        </div>
<div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">person name: ${person.result[1].name.common}</h5>
              <p class="card-text">Age: ${person.result[1].age}</p>
              <p class="card-text">street: ${person.result[1].address.street}</p>
              
            </div>
          </div>
        </div>

       
`
divrow.appendChild(div)

// console.log(person.result[0].name.common)
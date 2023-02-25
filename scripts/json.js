const product ={
    name: 'tata',
    type: 'car',
    milez: 235,
    price: {
        large: 250000000,
        smlall:120000000
    }
}
// con
const json = JSON.stringify(product)
console.log(json)
const productObj = JSON.parse(json)
console.log(productObj)
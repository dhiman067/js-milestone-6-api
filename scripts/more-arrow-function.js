
// arrow function a parameter 1st barket er moddhe thakbe ; jei take result hishebe dekhabo oita arrow er pore thakbe
const multiply = (a,b) => a*b
const result = multiply(5,8)
console.log(result)

// one pareameter arrow function
const num = x => x*5
const result2 = num(4)
console.log(result2)

// multi line arrow function
// you have to return in multiline arrow function

const multiLIneFunction = (x,y,z) => {
    const firstline = x+y
    const secondline = y+z
    const thirdline = firstline*secondline
    const result3 = thirdline/2
    return result3
}
console.log(multiLIneFunction(2,3,4))
// function getHighestValue(numbers) {
//     let largeNumber = 0
//     for (i = 0; i < numbers.length; i++) {
//         const number = numbers[i];
//         if (number > largeNumber) {
//             largeNumber = number
           

//         }

//     }

//     return largeNumber
// }
// const numbers = [12, 85, 999, 78]
// const result = getHighestValue(numbers)
// console.log(result)


const num = Math.max(20,30,100)
console.log(num)

//(...) spread operator
const numbers2 = [12, 85, 999, 78,5000,7]
const lgnum = Math.max(...numbers2)
console.log(lgnum)

// const numbers3 = [11,...numbers2]
// console.log(numbers3)

const num4 = [1,2,3,4,5]
const num5 = [...num4,...numbers2]
console.log(num5)


const numbers = [1,2,3,4,5]
const doubleNum = []
for (i=0; i<numbers.length; i++){
    const number = numbers[i]
    const doubleNumber = number*2
   doubleNum.push(doubleNumber)
}
console.log(doubleNum)



//we can do it easily usuing map
//map array er vitorer prottek ta elememt er sathe kichu kore then; oi reslt gulake akta array er moddhe return kore
const numbers2 = [6,7,8,9,10]
const getDouble = numbers2.map(num => num*2)
console.log(getDouble)
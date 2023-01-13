// Cursor Park (anyone not typing put your cursor here)


//Rewrite this function in Arrow form:

/* function sayHello(firstName, lastName) {
    console.log(`sayHello: Hello ${firstName} ${lastName}`)
}
*/
const sayHello = (firstName,lastName)=> console.log(`sayHello: Hello ${firstName} ${lastName}`)
sayHello('Tom','Carabine') 

// Rewrite this function in one-line terse arrow syntax:

function loadsaMoney(myWages) {
    return myWages * 10
} 

//TODO make lotsofMoney()
const lotsofMoney = (myWages=> myWages*10)
const resultSum = lotsofMoney(300) //3000
console.log(`resultSum: ${resultSum}`)

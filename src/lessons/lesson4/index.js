/*const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("My name is")
    }, 1000)
})

let result = ''

promise
    .then((res) => {
        result = res
    })


const onSuccess = (param) => {
    return result + " " + param
}


console.log(onSuccess("Nastassia"))

const print = (printParam) => {
    console.log(printParam)
}*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({message: "My name is"})
    }, 1000)
})

const onSuccess = (param) => {
    return param + "Nastassia"
}

const print = (parameter) => {
    console.log(parameter)
}

promise
    .then( (res) => {
        onSuccess(res.message)
    } )
    .then( (res) => {
        print(res.message)
    } )


/*
const promise1 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve({name: "Anna"})
    }, 2000)
} )

const promise2 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve({age: 16})
    }, 3000)
} )

const promise3 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve({city: ''})
    }, 4000)
} )

let result1 = {}

promise1
    .then((res)=> {
        result1 = { ...result1, name: res.name}
    })
promise2
    .then((res)=> {
        result1 = { ...result1, age: res.age}
    })
promise3
    .then((res)=> {
        result1 = { ...result1, city: res.city}
    })
*/


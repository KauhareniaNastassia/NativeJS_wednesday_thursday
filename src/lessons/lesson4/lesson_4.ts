console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
/*const promise = new Promise( () => {
    console.log("Promise is created")
} )
console.log(promise)*/


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
/*const promise = new Promise( (resolve, reject) => {
    resolve('Promise Data')
} )

promise.then
( (result)=> {
    console.log(result)} )
console.log(promise)*/

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
/*const promise = new Promise( (resolve, reject) => {
    reject('Promise Error')
} )

promise.catch
( (result)=> {
    console.log(result)} )
console.log(promise)*/

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
/*const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {resolve('Promise Data')}, 3000)
} )

promise
    .then((result)=> {
        console.log(result)
    })
console.log(promise)*/


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.
/*const handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (res) => {
        handlePromise.resolve(res)
        console.log(`Promise is resolved with data: ${res}`)},
    onError: (err) => {
        handlePromise.reject(err)
        console.log(`Promise is rejected with error: ${err}`)}
}


const onClickBtnHandler1 = () => {
    const promise1 = new Promise( (resolve, reject) => {
        handlePromise.resolve = resolve
        handlePromise.reject = reject
    })
    handlePromise.promise = promise1
    console.log(handlePromise.promise)
}
const onClickBtnHandler2 = () => {
    handlePromise.onSuccess("data")
    console.log(handlePromise.promise)
}
const onClickBtnHandler3 = () => {
    handlePromise.onError("error")
    console.log(handlePromise.promise)
}

console.log(handlePromise.promise)*/


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

/*const promise = new Promise((resolve, reject) => {
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
    } )*/


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
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


// just a plug
export default ()=>{};
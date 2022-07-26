console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum (num1: number) {
    return (num2: number) => {
        return (num1 + num2)
    }
}


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

let count = 0
const counter = () => {
    let makeCounter = () => {
        return ++count
    }
    return makeCounter()
}

const counter2 = () => {
    let count = 0
    let makeCounter = () => {
        return ++count
    }
    return makeCounter()
}

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;


const counter3 = (startCount: number) => {
    let userCount = {
        increase: function incFunc() {
            return ++startCount
        },
        decrease: function decFunc() {
            return --startCount
        },
        reset: function resFunc() {
            return startCount = 0
        },
        set: function setFunc(newValue:number) {
            return startCount = newValue
        }
    }
    return userCount
}

const counterWithObj = (num: number) => {
    return  {
        increase: () => ++num,
        decrease: () => --num,
        reset: () => num = 0,
        set: (newValue: number)=> num = newValue
    }
}


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n:number) {
    if (n === 0) return 0;
    if (n === 1) return (num: number) => num;

    let _arguments: number[] = [];

    function helper(...args: number[]) {
        _arguments = [..._arguments, ...args];
        if(_arguments.length >= n) {
            _arguments.length = n;
            return _arguments.reduce((acc, number) => acc + number)
        } else {
            return helper;
        }
    }
    return helper;
}

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

const sumTo1 = (num: number): number => {
    let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

const sumTo2 = (num: number): number => {
    if (num < 1) return 0;
    if (num === 1) return 1;
    return num + sumTo2(num - 1)
}

function sumTo3(n:number) {
    return n * (n + 1) / 2;
}

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

function flatten(arr: any): [] {
    if (Array.isArray(arr)) {
        return arr.reduce(function (done, curr) {
            return done.concat(flatten(curr));
        }, []);
    } else {
        return arr;
    }
}

// just a plug
export default () => {};
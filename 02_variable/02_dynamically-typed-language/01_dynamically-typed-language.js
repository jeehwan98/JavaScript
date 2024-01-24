/* 동적 타입 언어(dynamic / weak type language) */

var test;
console.log(typeof test); // undefined

test = 1;
console.log(typeof test); // number

test = 'JavaScript World';
console.log(typeof test); // String

test = true;
console.log(typeof test); // boolean

test = null;
console.log(typeof test); // null XX object O (JavaScript bug)

test = Symbol();
console.log(typeof test); // symbol

test = {};
console.log(typeof test); // object

test = [];
console.log(typeof test); // array > object

test = function(){};
console.log(typeof test); // function O
// type은 계속 바뀐다 == 동적 타입 언어
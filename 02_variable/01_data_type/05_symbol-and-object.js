/* 05. Symbol & object */

/* Symbol type */
/*
    ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다.
    다른 값과 중복되지 않는 유일무이란 값으로 , 객체의 유일한 property key를 만들기 위해 사용한다.
    Symbol 이외의 원시 값은 리터럴을 통해 생성하지만, Symbol 함수를 호출해 생성한다.
*/

var key = Symbol('key');
console.log(typeof key);

var obj = {};

obj[key] = 'value'; // property setting
console.log(obj[key]); // property get

/* object type */
/*
    JS의 data type은 크게 원시 타입과 객체 타입으로 분류한다.
    JS는 객체 기반의 언어이며, JS를 이루고 있는 거의 모든 것이 객체이다.
    number, string, boolean, undefined, null, symbol 6가지 data type
    이외의 값은 모두 객체 타입이다.
    (객체, 함수, 배열 등에 대해서 추후 하나씩 자세히 다룰 예정이다.)
*/

var testObj = {}; // object 객체 ... put property in {}
var testArr = [1, 2, 3, 4, 5]; // array

console.log(typeof testObj); // object
console.log(typeof testArr); // object
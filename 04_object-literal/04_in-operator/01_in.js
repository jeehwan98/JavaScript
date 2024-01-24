/* 01. in 연산자 */
// property existance 여부 확인 (프로퍼티 존재 여부)

var actor = {
    name : '서인국',
    age : 30,
    gender : 'M',
    company : undefined
};

// property existance 여부를 쉽게 확인을 할 수 있으나 완벽하지 않음
console.log(actor.name === undefined);      // false = 존재
console.log(actor.age === undefined);       // false = 존재
console.log(actor.drama === undefined);     // true = 존재하지 않음
console.log(actor.company === undefined);   // true = 존재하지만 프로퍼티 값이 undefined

// which is why we use in operator
// in 연산자 사용
console.log("name" in actor);
console.log('age' in actor);
console.log('drama' in actor);
console.log("company" in actor);
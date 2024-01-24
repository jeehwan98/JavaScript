/* 01. 비교 연산자 */
/*
    동등/일치 비교 연산자
    - 동등 비교(loose equality)와 일치 비교(strict equality)는 엄격성이 다르다.
    - 동등 비교 (==, !=) : 암묵적 타입 변환을 통해 같은 값인지 비교한다.
    - 일치 비교 (===, !==) : 타입과 값이 모두 일치하는지 비교한다.
*/

console.log(`1 == '1' : ${1 == '1'}`);                          // true
console.log(`1 == true : ${1 == true}`);                        // true
console.log(`1 === '1' : ${1 === '1'}`);                        // false
console.log(`1 === true : ${1 === true}`);                      // false

console.log("===== 숫자 0과 빈 문자열 '', 문자 '0', false 비교 =====")
console.log(`0 == '0' : ${0 == '0'}`);                          // true
console.log(`0 == '' : ${0 == ''}`);                            // true
console.log(`0 == false : ${0 == false}`);                      // true
console.log(`0 === '0' : ${0 === '0'}`);                        // false
console.log(`0 === '' : ${0 === ''}`);                          // false
console.log(`0 === false : ${0 === false}`);                    // false

console.log("===== null과 undefined 비교 =====")
console.log(`null == undefined : ${null == undefined}`);        // true (falsy = falsy, therefore, true)
console.log(`null === undefined : ${null === undefined}`);      // false (type이 다르다)

console.log("===== NaN과 NaN 비교 =====")
// NaN은 자신과 일차하지 않는 유일한 값이다.  <그냥 그렇다>
// 따라서 빌트인 함수 Number.isNaN을 사용해서 확인해야 한다.
console.log(`NaN == NaN : ${NaN == NaN}`);                      // true >> false
console.log(`NaN === NaN : ${NaN === NaN}`);                    // true >> false
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`);        // true

console.log(`'hello' === 'hello' : ${'hello' === 'hello'}`);    // true
console.log(`'hello' !== 'hello' : ${'hello' !== 'hello'}`);    // false

// 문자열 간 대소비교는 unicode 순으로 비교한다.
console.log(`'apple' < 'banana' : ${'apple' < 'banana'}`);      // true
console.log(`'apple' > 'banana' : ${'apple' > 'banana'}`);      // false
console.log(`'cat' <= 'Zoo' : ${'cat' <= 'Zoo'}`);              // false
console.log(`'cat' >= 'Zoo' : ${'cat' >= 'Zoo'}`);              // true (대문자가 소문자보다 작다))
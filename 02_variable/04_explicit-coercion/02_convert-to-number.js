/* explicit coercion (명시적 타입 변환) */

/* 02. 숫자 타입으로 변환 */

// 1. Number constructor 함수를 new 연산자 없이 호출
console.log(Number('10'));
console.log(Number('10.01'));
console.log(Number(true));      // 1
console.log(Number(false));     // 0

// 2. parseInt, parseFloat 함수 이용 (문자열 > 숫자만 가능)
console.log(parseInt('19'));
console.log(parseFloat('19'));
console.log(parseInt('1.24'));
console.log(parseFloat('1.24'));

// 3. 단항 산술 연산자 + 이용 - 암묵적 변환
// refer to >>>>> 03_implicit-coercion

// 4. 산술 연산자 * 이용
// converts type to number, then multiply
console.log('10' * 1); // '10' does not change
console.log(true * 1);
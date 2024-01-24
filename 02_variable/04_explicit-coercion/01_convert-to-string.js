/* explicit coercion (명시적 타입 변환) */

/* 01. 문자열 타입으로 변환 */

// 1. String 생성자 함수를 new 연산자 없이 호출
console.log(String(10)); // constructor made
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(true));
console.log(String(Symbol())); // Symbol도 String로 변환 시켜줌

// 2. Object.prototype.toString 메소드 사용
// have to put parenthesis () behing toString
console.log((10).toString()); 
console.log((NaN).toString());
console.log((Infinity).toString());
console.log((true).toString());
console.log((Symbol()).toString());

// 3. 문자열 연결 연산자(+) 이용 - 암묵적 변환
/* 04. nullish coalescing operator (null 병합 연산자) */
/*
    ??
    ES11(ECMAScript2020)에서 도입된 연산자로
    좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고
    그렇지 않으면 좌항의 피연산자를 반환한다.
    (변수에 기본 값을 설정할 때 유용하다.)
*/

var test = null ?? 'default';
console.log(test);

// var value = '' || 'default'; // 빈 문자열은 falsy이기 때문에 default가 출력이 된다.
var value = '' ?? 'default';
console.log(value);
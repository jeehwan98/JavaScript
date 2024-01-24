/* 03. optional chaining operator */
/* 
    ?.
    ES11 (ECMAScript2020)에서 도입된 연산자로
    좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고
    그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
*/


var obj = null;

// TypeError: Cannot read properties of null (reading 'value')
// var val = obj.value; // error > null에서 아무것도 없기 때문이다..!

var val = obj?.value;
console.log(val);

var str = '';
// var len = str && str.length;
len = str?.length;
console.log(len); // undefined

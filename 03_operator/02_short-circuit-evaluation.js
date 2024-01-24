/* 02. short circuit evaluation */
/* 표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것 */

/* 논리연산자 (logical operator)
    - || (OR)
    - && (AND)
    - ! (NOT)
 */

    // OR, AND 연산자 표현식의 결과는 boolean이 아닐 수도 있다.

// OR의 경우 'apple'이 이미 truthy 값이므로 true로 평가되고,
// 논리 연산의 결과를 결정한 첫 번째 피연산자 apple을 그대로 반환한다.
console.log('apple' || 'banana'); // >> apple
console.log(false || 'banana');   // >> banana (trusy한 값을 출력을 한다)
console.log('apple' || false);    // >> apple

// AND의 경우 좌항이 false가 아니면 좌항, 우항 모두 확인해야 하므로
// 논리 연산의 결과를 결정하는 2번째 피연선자 banana를 그대로 반환한다.
console.log('apple' && 'banana'); // >> banana
console.log(false && 'banana');   // false
console.log('apple' && false);    // false


// 단축 평가를 사용해 if문을 대체할 수 있다.
var num = 1;

if(num % 2 == 0) {
    console.log('짝수');
} else {
    console.log('홀수');
}

num % 2 == 0 && console.log('짝수');
num % 2 == 0 || console.log('홀수');




var obj = null;

// TypeError: Cannot read properties of null (reading 'value')
// var val = obj.value; // value를 하나 꺼낸다....
// therefore, need to check for null

var val = obj && obj.value;
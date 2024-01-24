/* 03. computed property name (계산된 프로퍼티 이름) */

/* ES5 */
// 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면
// object literal 외부에서 대괄호 표기법을 사용해야 한다.

var prefix = 'B';
var index = 1;

// make object first
var boardObj = {};

boardObj[prefix + '-' + index++] = "게시글 1";
boardObj[prefix + '-' + index++] = "게시글 2";
boardObj[prefix + '-' + index++] = "게시글 3";

console.log(boardObj);

/* ES6 */
// object literal 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다.
var prefix2 = "B";
var index2 = 0;

var boardObj2 = {
    [`${prefix2}-${index2++}`] : "게시물1",
    [`${prefix2}-${index2++}`] : "게시물2",
    [`${prefix2}-${index2++}`] : "게시물3"
};

console.log(boardObj2);
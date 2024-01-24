/* 03. property 접근 */

var teacher = {
    name: '다람쥐',
    work: function(subject) {
        console.log(`${this.name}선생님이 ${subject}를 열심히 가르쳐요!`) // ' 가 아닌 ` 로 넣어야 error가 뜨지 않는다
    }
};

// 마침표 표기법 (dot notation)
console.log(teacher.name);
teacher.work('JavaScript');

// 대괄호 표기법 (square bracket notation)
// ! property key는 반드시 따옴표로 감싼 문자열을 사용해야 한다..!
//ReferenceError: name is not defined
// console.log(teacher[name]);
console.log(teacher['name']);
teacher['work']('자바스크립트');


var testObj = {
    'dash-key' : 'dash-value',
    0 : 1
};

// property key가 식별자 naming rule을 준수하지 않는 경우 반드시 대괄호 표기법을 사용한다.
// console.log(testObj.dash-key);
// console.log(testObj.'dash-key');
// console.log(testObj[dash-key]);
console.log(testObj['dash-key']);

// console.log(testObj.0);
// console.log(testObj.'0');
console.log(testObj[0]);
console.log(testObj['0']);
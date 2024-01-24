/* 01. object */
// object literal을 통해 객체 생성 (중괄호 내 0개 이상의 property 정의)

var teacher = {
    // 키: 값 쌍으로 구성된 property
    // property = 객체의 상태를 나타내는 값 (data)
    name: '다람쥐',
    age: 900,


    // method = property를 참조하고 조작할 수 있는 동작
    getInfo: function() { // function() function : 내 자신을 가르키면서 property를 가져온다
        return `${this.name}은(는) ${this.age}세의 선생님입니다.`;
    }
};

console.log(typeof teacher);
console.log(teacher);

var teacher2 = {};
console.log(typeof teacher2);
console.log(teacher2);
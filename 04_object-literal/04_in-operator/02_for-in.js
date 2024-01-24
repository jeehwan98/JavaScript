/* 02. for in loop */
// object의 모든 키 순회

var teacher = {
    name : '다람쥐',
    age : 900,
    work : function() {
        return `${this.name} 선생님이 열심히 ${subject}를 가르칩니다!!`;
    }
};

for (var key in teacher) {
    console.log(`key : ${key}`);                    // property key
    console.log(`teacher[key] : ${teacher[key]}`);  // key에 해당하는 property value
}
/* 02. method */
/* 
    js의 함수는 object이다.
    함수는 값으로 취급할 수 있고, property 값으로 사용할 수 있다.
 */

var puppy = {
    name : '뽀삐',

    // method = 객체에 묶여있는 함수
    eat : function(food) {
        // 여기서 this = puppy를 가리킨다.
        console.log(`${this.name}은(는) ${food}를 냠냠 맛있게 먹어요~~`);
    }
};

puppy.eat('소고기');
/* 02. method shorthand (메소드 단축) */

/* E5 */
var squirrel1 = {
    name : '람쥐',
    eat : function(food) {
        console.log(`${this.name}은(는) ${food}를 갉아 먹어요~`);
    }
};

squirrel1.eat('도토리');

/* ES6 */
var squirrel2 = {
    name : '다람이',
    eat(food) {
        console.log(`${this.name}은(는) ${food}를 갉아 먹어요~`);
    }
};

squirrel2.eat('호두');
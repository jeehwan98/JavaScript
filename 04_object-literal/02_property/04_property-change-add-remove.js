/* 04. property value modify, add, delete */

var kitty = {
    name : '나비'
};

// property add
// if the values doesn't exist, it creates and adds properties to the object
kitty.age = 3; // 추가됨
kitty['like'] = '츄르';
console.log(kitty);

// 이미 존재하는 property에 값을 할당하면 property 값이 갱신된다,
// property modify
kitty.name = '먼지';
kitty['age'] = 4;
console.log(kitty);

// property delete
delete kitty.age;
delete kitty['like'];
console.log(kitty);
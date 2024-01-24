/* 01. property */
/* object = property의 집합이며, property consists of key and values */

var idol = {
    name: 'BTS', // property key = name
    count: 7,
}

console.log(idol);

var testObj = {
    normal : 'normal value',
    '@ s p a c e @' : 'space value',
    '' : '',                            // empty String key = 오류 발생하지 않지만 권잘하지 않는다
    0 : 1,                              // 0 = '0' number key > converted into a String
    var : 'var',                        // var is a reserved word... doesn't lead to an error but isn't recommended. (예약어 key = 오류 발생하지 않지만 권장하지 않는다.)
    normal : 'new normal value'         // normal's value gets overriden
};

var key = 'testKey';
testObj[key] = 'testValue';


console.log(testObj);
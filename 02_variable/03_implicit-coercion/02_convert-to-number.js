/* 02. 숫자 타입으로 변환 */


// + 빼고 다 가능
// 산술 연산자의 피연산자는 모두 숫자여야 하므로 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환
// (문자열 연결 연산 제외)
console.log(1 + '24'); // 124
console.log(1 - '24'); // -23
console.log(1 * '24'); // 24
console.log(1 / '24'); // .___ >> 0.041666666666666664
console.log(1 % '24'); // ? >> 1
console.log(1 % 'JavaScript'); // ? >> NaN

// 대소 비교 연산자로 크기를 비교할 피연산자는 모두 숫자여야 하므로
// 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환
console.log(100 > '25'); // 비교할 때도 숫자로 변환된다.

// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면
// 숫자 타입으로 암묵적 타입 변환 수행
console.log(+'');                   // "" >> 0 (아무것도 들어있지 않기 때문에)
console.log(+'1');                  // 1
console.log(+'JavaScript world');   // NaN
console.log(+true);                 // NaN >> 1
console.log(+false);                // NaN >> 0
console.log(+null);                 // null >> 0
console.log(+undefined);            // undefined >> 0
// console.log(+Symbol());             // NaN >> TypeError : cannot convert
console.log(+{});                   // 0 >> NaN
console.log(+[]);                   // 0
console.log(+function(){});         // function(){} >> NaN

/* 
     => 빈 문자열, 빈 배열, null, false = 0으로 암시적 형변환
        true는 1로 암시적 형변환,
        객체와 undefined, function은 변환되지 않아 NaN
*/
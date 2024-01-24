/* explicit coercion (명시적 타입 변환) */

/* 03. boolean type으로 변환 */

// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean(''));
console.log(Boolean('JavaScript'));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(Infinity)); // true
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean([]));

console.log('---');
// 2. ! 논리 부정 연산자 ! 를 두번 사용하는 방법
console.log(!!'JavaScript');
console.log(!!1);
console.log(!!0);
console.log(!!NaN);
console.log(!!Infinity);
console.log(!!null);
console.log(!!undefined);
console.log(!!{});
console.log(!![]);


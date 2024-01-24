/* 03. boolean type으로 변환 */

// JavaScript engine = boolean type이 아닌 값을 truthy 값(참으로 평가되는 값) 또는 falsy(거짓으로 평가되는 값)으로 구분함
// => truthy > true, falsy > false 암묵적 타입 변환
if(true) console.log("if(true)");                   // O
if(false) console.log("if(false)");                 // X
if(undefined) console.log("if(undefined)");         // O >> X
if(null) console.log("if(null)");                   // O >> X
if(0) console.log("if(0)");                         // O >> X
if(NaN) console.log("if(NaN)");                     // O >> X
if('') console.log("if('')");                       // X
if('JavaScript') console.log("if('JavaScript')");   // O


// false, undefined, null, 0, NaN, '' (빈 문자열) = falsy한 값이고 이외의 모든 값은 truthy 값이다
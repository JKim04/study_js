/**
 * Hoisting
 */
console.log("Hello");
console.log("World");

/**
 * var name = 'juhyeong'
 * console.log(name); //출력: juhyeong
 * 위에 console.log(name); 있으면 다른 언어에서는 에러가 나지만
 * JS에서는 undefined 출력
 */
console.log(name); //출력: undefined
var name = "juhyeong";
console.log(name); //출력: juhyeong

// ==

var name;
console.log(name); //출력: undefined
name = "juhyeong";
console.log(name); //출력: juhyeong

/**
 * Hoisting이란?
 *
 * 모든 변수, 함수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */

// let, const 또한 hoisting 발생!!
console.log(hanna);
let hanna = "강한나";
// 에러: Cannot access 'hanna' before initialization / hanna라는 변수를 초기화 하기 전에 접근할 수 없다.

// - 그럼 let은 hosting이 발생하지 않는 건가?
// - ㄴㄴㄴ

console.log(hanna);
// 에러: hanna is not defined / hanna라는 변수는 정의되지 않았다.
/**
 * console.log(hanna); 입력시 hanna라는 변수가 존재하게 됨. (undefined ... hoisting 발생)
 * 그래서
 * let hanna = '강한나'; 입력시 hanna라는 변수에 접근할 수 없게 됨.
 *
 * 이렇게 let, const는 hoisting을 발생하면 에러로 막아줌!! (var을 사용하지 않는 이유)
 */

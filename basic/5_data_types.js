/**
 * Data Types
 *
 * 6개의 Primitive Type
 *  1) Number
 *  2) String
 *   - Template Literal
 *  3) Boolean
 *  4) undefined
 *  5) null
 *  6) Symbol
 *       +
 * 1개의 Object Type
 *  Object (객체): Function, Array, Object
 */

/**
 * Escaping Character
 *
 * 1) newline -> \n
 * 2) tap -> \t
 * 3) 백슬래시 스트링 표현 -> \\
 * 4) 따옴표 스트링 표현 -> \', \"
 *
 * 위가 귀찮아서 생긴 것이 Template Literal
 * - 백틱 사이에 입력하면 보이는 그대로 출력 가능
 * - 변수 입력 시에는 ${} 사용
 */
const groupName = "ive";
console.log(groupName + " yujin");
console.log(`${groupName} yujin`);

/**
 * undefined
 *
 * - 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 * - undefined로 직접 값을 초기화 절대 X
 * - 값 / type 모두 undefined
 * e.g.
 * let noinit = undefined; (X)
 * let noinit; (O)
 */

/**
 * null
 *
 * - undefined와 마찬가지로 갑이 없다는 뜻이나 JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때 사용
 */
let init = null;
console.log(init); // 출력: null
console.log(typeof init); // 출력: object -> 공식적인 버그

/** Symbol
 *
 * - 유일무이한 값을 생설할 때 사용.
 * - 다른 primitive 값들과 다르게 Symbol 함수를 호출해서 사용
 */
const test1 = "1";
const test2 = "1";
console.log(test1 === test2); // 출력: true

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");
console.log(symbol1 === symbol2); // 출력: false -> 유일무이한 값이기 때문에

/**
 * Object
 *
 * - key:value
 * - python의 dictionary와 비슷
 *
 */
const dictionary = {
  red: "빨강",
  blue: "파랑",
  black: "검정",
};
console.log(dictionary); // 출력: { red: '빨강', blue: '파랑', black: '검정' }
/**
 * key로 value 찾기
 * console.log(dictionary['red'])
 * 출력: 빨강
 */

/**
 * Array
 *
 * python의 list와 비슷
 */
const iveMembersArray = ["장원영", "안유진", "레이", "이서", "가을", "리즈"];
console.log(iveMembersArray); //출력: ['장원영', '안유진', '레이', '이서', '가을', '리즈']
//index로 가져오기
console.log(iveMembersArray[0]); //출력: 장원영
//indedx로 값 변경
iveMembersArray[0] = "김주형";
console.log(iveMembersArray); //출력: ['김주형', '안유진', '레이', '이서', '가을', '리즈']

console.log(typeof iveMembersArray); //출력: object

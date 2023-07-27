//51
//병합정렬 알고리즘
//1. 리스트의 길이가 0또는 1이면 이미 정렬된 것으로 본다.
//2. 정렬되지 않은 리스트를 절반으로 갈라 비슷한 크기로 나눈다
//3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
//4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

//*** 합병 정렬에서 실제 정렬이 이루어지는 시점은 2개의 리스트를
//합병하는 과정이다.
//mergeSort(arr): 반으로 나눠주는 함수
//merge(left, right ): 반으로 나누어준 함수를 갖고 정렬하여
//새로운 배열로 만들어주는 함수

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //중간점 mid로 니누기
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  //left, right 두분으로 나눈 것을 또 절반으로 나눠서
  //배열의 길이가 1이 될때까지 나눈다.
  //나눠진 두 숫자를 left, right로 분류해 비교해서 합친다.
  return merge(mergeSort(left), mergeSort(right));
}

//두 숫자를 합병한다.
//이때 정렬이 된다.
//가장 앞의 숫자를 비교한다(그 배열의 가장 작은 숫자임)
//더 작은 숫자가 포함된 배열(left,right)의 가장 앞 숫자
//(가장 작은 숫자를 ) result배열에다가 넣는다.
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}
const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(mergeSort(array));

//52
//퀵 sort 알고리즘
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //가장 앞의 수가 기준수임
  const pivot = arr[0];
  const left = [];
  const right = [];

  //기준수보다 작으면 left, 크면 right로 넣어주기
  for (let i; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  //left, 기준수, right 차례대로 합치기
  return quickSort(left).concat(pivot, quickSort(right));
}
const array1 = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(quickSort(array1));

//53

function mathBrackets(e) {
  let count = 0;

  //괄호 개수가 같지 않으면 false
  for (let i = 0; i < e.length; i++) {
    if (e[i] === "(") {
      count++;
    }
    if (e[i] === ")") {
      count--;
    }
  }
  if (count !== 0) {
    return false;
  }

  //열린괄호를 만날때마다 스택에 push, 닫힌 괄호를 만날때마다
  //스택에서 pop한다. 만약 pop할 괄호가 없는 상태에서 닫힌 괄호를
  //만나면 괄호의 짝이 맞지 않으므로 false를 반환한다.
  //괄호의 짝이 다 맞으면 true를 반환한다.
  let 괄호 = [];
  //순회해서 (열린괄호면 '괄호'에 push한다.
  for (let i in e) {
    if (e[i] === "(") {
      괄호.push("(");
    }

    //닫힌 괄호일때 '괄호'에 아무것도 없으면 false를 반환한다
    //(이것은 짝이 안맞는다는 소리)
    //있으면 pop을 하여 괄호의 열린괄호(를 삭제한다.
    if (e[i] === ")") {
      if (괄호.length === 0) {
        return false;
      }
      괄호.pop();
    }
  }
  return true;
}

const n = prompt("입력해주세요.").split("");

if (mathBrackets(n) === true) {
  console.log("YES");
} else {
  console.log("NO");
}

//54 연속되는 수
function sol(arr) {
  let sort = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < sort.length - 1; i++) {
    if (sort[i] + 1 !== sort[i + 1]) {
      return "No";
    }
  }
  return "Yes";
}
console.log(sol([1, 2, 3, 4, 5]));
console.log(sol([1, 3, 5, 3, 8]));

//55 하노이의 탑
const route = [];
//탑이 1층이면 바로 올려준다, 경유지 필요x
function hanoi(num, start, end, temp) {
  if (num === 1) {
    route.push([start, end]);
    return NaN;
  }
  //n-1개의 탑을 경유기둥으로 옮긴다(재귀함수)
  hanoi(num - 1, start, temp, end);
  //가장 큰 기둥을 목표기둥으로 옮긴다
  route.push([start, end]);
  //n-1개의 완성된 탑을 목표기둥으로 올린다.
  hanoi(num - 1, temp, end, start);
}
hanoi(3, "A", "B", "C");
console.log(route);
console.log(route.length); //7

//56 객체의 함수 응용
const nationWidth = {
  korea: 220877,
  Russia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};
//모든 객체를 순회하여 한국의 value와 빼서 가장
//차가 작은 객체의 key를 구한다
//0인것을 제외하고 가장 작은 값을 구한다.
let min = nationWidth["England"];
delete nationWidth["korea"];
for (let key in nationWidth) {
  if (
    nationWidth["korea"] - nationWidth[key] < min &&
    nationWidth["korea"] - nationWidth[key] !== 0
  ) {
    min = [key, Math.abs(nationWidth["korea"] - nationWidth[key])];
  }
}
console.log(min);

//57 1의 개수
//10씩 쪼개서 1이면 1더하기
const obj = {};
for (let i = 0; i <= 1000; i++) {
  let tmp = i;
  while (tmp > 0) {
    //10으로 나눈 나머지가 num
    let num = tmp % 10;
    //obj에 num이 있으면 value를 올림
    if (obj[num]) {
      obj[num]++;
    } else {
      //없으면 1을 넣어줌
      obj[num] = 1;
    }
    tmp = parseInt(tmp / 10, 10);
  }
}

//정규표현식
let a = "";
for (let i = 0; i <= 1000; i++) {
  a += i;
}
console.log(a);
console.log(a.match(/1/g).length);

//for in 사용
let b = " ";
for (let i = 0; i <= 1000; i++) {
  b += i;
}
for (let j in b) {
  if (b[j] == 1) {
    count++;
  }
}
console.log(count);
//for of 사용
let s = "";
for (let i = 0; i <= 1000; i++) {
  s += i;
}
let count = 0;
for (let j of s) {
  if (j === 1) {
    count++;
  }
}
console.log(count);

//58 콤마 찍기
let num = 12341234;
let numArr = [...String(num)];
let reversed = numArr.reverse();
for (let i = 0; i < reversed.length; i++) {
  if (i % 4 === 3) {
    reversed.splice(i, 0, ",");
  }
}
let answer = reversed.reverse().join("");
console.log(answer);

//답지
//내장함수 사용법
const g = prompt("숫자입력");
parseInt(g, 10);
console.log(g.toLocaleString());
//재귀함수 사용법
function comma(s) {
  if (s.length <= 3) {
    return s;
  } else {
    //끝에서 3개 사이에 ,를 넣는다
    //앞에숫자가 3개 이하가 될때까지 이 과정을 반복한다.
    return comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
  }
}
const m = 12345;
console.log(comma(m));

//빈칸 채우기
//50개를 = 로 채우고
//입력한 값의 length만큼 가운데에 것을
//splice로 삭제 후 넣어주기

let str = "11333";
let sliceLength = str.length / 2;
let repeated = "=".repeat(25 - sliceLength);
let left = [...repeated];
let right = [...repeated];
let arr = [...left, ...str, ...right];
let answer1 = arr.join("");
console.log(answer1);
console.log(answer1.length);

//답지답안
const string = prompt("문자열입력");
const number = 2 + parseInt(str.length / 2, 10);
//길이가 n이 될때까지 앞의 빈칸을 "="로 채움
const fillanswer = string.padStart(n, "=");
console.log(fillanswer.padEnd(50, "="));

//padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
//padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움

//60
const students = [
  "강은지",
  "김유정",
  "박현서",
  "최성훈",
  "홍유진",
  "박지호",
  "권윤일",
  "김채리",
  "한지호",
  "김진이",
  "김민호",
  "강채연",
];
const sorted = students.sort();
sorted.forEach((student, index) => {
  console.log(`번호 : ${index + 1} 이름 : ${student}`);
});

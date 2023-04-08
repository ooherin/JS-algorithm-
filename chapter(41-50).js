//41
//자기자신을 루트 씌운걸로 계속 나눈다
function 소수(number) {
  let max = 1;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      max = i;
    }
  }
  return max === 1 ? console.log("Yes") : console.log("NO");
}

//42
function 요일알려줌(a, b) {
  let totaldays = b;
  let days = 0;
  const dayName = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];
  for (let i = 1; i < a; i++) {
    switch (i) {
      case 2:
        days = 29;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      default:
        days = 31;
    }
    totaldays += days;
  }
  return dayName[(totaldays % 7) + 2];
}
console.log(요일알려줌(1, 1));

//43
//2의 n제곱보다 작으면 그 수를 뺀다
//2의 n-1제곱보다 작으면 그 수를 뺀다
function 이진수메이커(number) {
  let hex = number.toString(2);
  return hex;
}
console.log(이진수메이커(16));

//답안
// let a = prompt("10진수 입력");
let b = [];
let result = "";

while (a) {
  //a를 2로 나눈 나머지를 b에다가 넣는다.
  //a가 10이면 b에는 0이 들어감
  //a가 5이면 b에는 1이 들어감
  //a가 2이면 b에는 0이 들어감
  //a가 1이면 b에는 1이 들어감
  b.push(a % 2);
  //a는 2로나눈 몫이 된다.
  //a가 10이면 5가 된다.
  //a가 5이면 2가 된다.
  //a가 2이면 1이 된다.
  a = parseInt(a / 2, 10);
}
//b = [0101]
//a를 계속 2로 나눠 나머지를 b라는 배열에 넣는것이다.
//처음은 2, 그 다음은 4 , 그 다음은 8로 나눈 나머지를 넣는 효과이므로 이것을 뒤집어야 한다.
//while문은 a가 0이 되어 false가 될 때까지 반복한다.
b.reverse();
b.forEach((n) => {
  result += n;
});
// console.log(result);

//44
let sum = 0;
let number = 12345;
let arr = [...String(number)];
for (let e of arr) {
  sum += Number(e);
}
console.log(sum);

//답안
let n = prompt("숫자 입력");
let Sum = 0;
while (n !== 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}
console.log(sum);

//45 (x)
let now = new Date();
let year = d.getTime();
year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970;

//46
function sumNum(start, end) {
  let answer = 0;
  for (let i = start; i <= end; i++) {
    let arr = [...String(i)];
    answer += arr.reduce((acc, cur) => acc + cur * 1, 0);
  }
  return answer;
}
console.log(sumNum(1, 20)); //102

//47 (x)
const people = [
  ("미나", "1"),
  ("지나", "2"),
  ("유나", "3"),
  ("혜나", "4"),
  ("미나", "1"),
  ("미나", "1"),
];
const peopleList = new Set(people);
console.log(peopleList.size);

//답안
let Result = new Set();
for (let key in Result) {
  Result.add(people[key]);
}
console.log(result.size);

//48
const input = "StAr";
let answer = "";
let strArr = [...input];
console.log(strArr);
for (let a of strArr) {
  if (a.toUpperCase() === a) {
    answer += a.toLowerCase();
  } else {
    answer += a.toUpperCase();
  }
}
console.log(answer);

//49
let numberInput = "10 9 12 42 100 3";
let numarr = numberInput.split(" ");
let newarr = [];
for (let num of numarr) {
  newarr.push(num * 1);
}
Math.max(newarr);

//답안
let numbers = prompt("10개 숫자 입력")
  .split(" ")
  .map((e) => {
    return parseInt(e, 10);
  });
number.sort((a, b) => b - a);
console.log(number[0]);

//50 : 버블정렬 (x)
function bubble(arr) {
  let result = arr.slice(); // 원본 배열 복사

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
        //디스트럭쳐 문법
        // [result[j], result[j+1]] = [result[j+1],result[j]];
      }
    }
  }
  return result;
}

const items = prompt("입력해주세요.")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

console.log(bubble(items));

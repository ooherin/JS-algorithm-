//61 문자열 압축하기
//aaabbbcdddd => a3b4c1d4
let str = "aaabbbbcdddd";
let answer = "";

let arr = [...str];
let obj = {};
//객체에다가 1씩 증가시킨다
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] + 1 || 1;
}
//키와 value를 순회하며 answer에 더해준다
for (let key in obj) {
  answer += key;
  answer += obj[key];
}
console.log(answer);
//a3b4c1d4

//62(pass)

//63 줄임말 만들기
//띄어쓰기 앞자리만 뽑아서 줄임말 만들기
let words = "복잡한 세상 편하게 살자";
let words2 = "마음의 상처";
let splited = words2.split(" ");
let answer1 = "";
for (let word of splited) {
  answer1 += word[0];
}
console.log(answer1); //복세편살 //마상

//답안 (splice 이용)
let splited2 = words2.split(" ");
let result = "";
for (let word of splited2) {
  result += word.slice(0, 1);
}

//64 이상한 엘리베이터
//7,3으로 정량을 최소단위로 맞추기
//정량이 안되면 -1출력

//7로 나누어서 나머지가 0이면 바로 리턴
//나머지가 3,6이면 리턴
//그외의 나머지이면 7을 하나씩 더해서 3으로 나눠보기
//자기자신보다 크면 안됨
function elevator(weight) {
  let seven나머지 = weight % 7;
  let seven몫 = Math.floor(weight / 7);
  if (seven나머지 === 0) {
    return seven몫;
  }
  if (seven나머지 % 3 === 0) {
    return seven몫 + seven나머지 / 3;
  }
  while (seven몫 >= 0) {
    seven몫 -= 1;
    seven나머지 += 7;
    if (seven나머지 % 3 === 0) {
      return seven나머지 / 3;
    }
  }
  return -1;
}

console.log(elevator(7)); //1
console.log(elevator(17)); //3
console.log(elevator(20)); //4

//답안
let result2 = 0;
while (true) {
  //7로 나누어떨어지면 몫 반환하고 break
  if (N % 7 === 0) {
    result += parseInt(N / 7, 10);
    console.log(result);
    break;
  }
  //3을 빼고 result에 1을 한번씩 늘린다.
  //0이 될때까지 반복한다.
  N -= 3;
  result += 1;
  //0이하이면 -1를 반환한다.
  if (N < 0) {
    console.log(-1);
    break;
  }
}
//65 변형된 리스트
//a=[1,2,3,4] b=[a,b,c,d] 일떄 [[1,a],[2,b],[3,c],[4,d]]출력
const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];
let answer2 = [];
for (let i = 0; i < a.length; i++) {
  if (i % 2 === 0) {
    answer2.push([a[i], b[i]]);
  } else {
    answer2.push([b[i], a[i]]);
  }
}
console.log(answer2);

//답안(map 사용)
a.map((e, index) => {
  if (index % 2 === 0) {
    return [a[i], b[i]];
  }
  return [b[i], a[i]];
});

//66 블럭탑쌓기
const 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const 규칙 = "ABD";
//ABD만 남기기
//규칙에서 남긴게 include 되어 있으면 '가능', 아니면 '불가능'

let filtered = [];
for (let ele of 탑) {
  for (let i = 0; i < ele.length; i++) {
    if (규칙.includes(ele[i])) {
      filtered[i].push(ele[i]);
    }
  }
}
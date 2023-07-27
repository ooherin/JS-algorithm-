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

// let newArr = [];
// let answer3 = [];
// for (let ele of 탑) {
//   let filtered = "";
//   for (let i = 0; i < ele.length; i++) {
//     if (규칙.includes(ele[i])) {
//       filtered += ele[i];
//     }
//   }
//   newArr.push(filtered);
// }
// console.log(newArr);
// for (let ele of newArr) {
//   if (규칙.includes(ele)) {
//     answer.push("가능");
//   } else {
//     answer.push("불가능");
//   }
// }
// console.log(answer);

//67 민규의 악수
let totalShakes = 59;
let sum = 0;
let person = 2;
while (totalShakes > sum) {
  sum = (person * (person - 1)) / 2;
  person++;
}
let totalMember = person - 1;
console.log(totalMember); //12
let HavetoHandCount = (totalMember * (totalMember - 1)) / 2; //66
//부족한 handcount
MinusHandCount = HavetoHandCount - totalhand; //
//민수가 한 handcount
console.log(totalMember - 1 - MinusHandCount);
answer = [totalMember, totalMember - 1 - MinusHandCount];

//답안
function solution(n) {
  let person = 0;
  let totalShake = 0;
  let temp = 0;
  //break문 필요 => n이 totalShake보다 작을 때 break
  //person을 1씩 증가시키면서
  while (true) {
    totalShake - parseInt((person * (person - 1)) / 2, 10);
    if (n < totalShake) {
      break;
    }
    temp = totalShake;
    person += 1;
  }
  return [parseInt(n - temp, 10), person];
}
const shakeCount = 59;
console.log(solution(shakeCount));

//68 버스 시간표
// ["12:30", "13:20", "14:13"]
// "12:40"
// ['지나갔습니다', '00시간 40분', '01시간 33분']

let currentTime = "12:40".split(":").map((e) => e / 1);
let answer3 = [];

let currentMinutes = currentTime[0] * 60 + currentTime[1];
console.log(currentMinutes);
let timeArr = ["12:30", "13:20", "14:13"];
for (let time of timeArr) {
  time = time.split(":").map((e) => e / 1);
  let minutes = time[0] * 60 + time[1];
  //기준시간과 현재시간의 차이를 계산
  let 차이 = minutes - currentMinutes;
  if (차이 > 60) {
    let hour = Math.floor(차이 / 60);
    let minute = 차이 % 60;
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    answer3.push(`${hour}시간 ${minute}분`);
  } else if (차이 > 0) {
    answer3.push(`00시간 ${차이}분`);
  } else {
    answer3.push(`지나갔습니다.`);
  }
}

console.log(answer3);

//69 골드바흐의 추측
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % 2 === 0) {
      return false;
    }
    return true;
  }
}

function 골드바흐(n) {
  let answer = [];
  let 소수 = [];
  //n보다 작은 소수를 구하고
  //n에서 그 소수를 빤 값이 소수라면
  //answer에 집어넣는다.
  //n까지 반복문
  for (let i = 2; i <= n; i++)
    //소수인지 판별
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        소수.push(j);
      }
    }
  소수.forEach((num) => {
    if (isPrime(i - num)) answer.push(i);
  });
}

console.log(answer);

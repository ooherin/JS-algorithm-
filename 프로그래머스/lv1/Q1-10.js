//Q1. 기사단원의 무기(완)
//number의 각 약수를 배열로 구해서
//약수가 limit보다 크면 power로 바꿔서
//그 약수들의 합을 구하는 문제

//첫번째 풀이
function solution(number, limit, power) {
  let divNum = new Array(number).fill(1);
  for (let i = 1; i <= number; i++) {
    //약수는 자기자신을 제외하고 2로 나눈 값보다 작다.
    //fill을 1로(자기자신 포함)채운이유
    for (let j = 1; j <= i / 2; j++) {
      i % j === 0 ? divNum[i - 1]++ : 0;
    }
  }
  let answer = 0;
  //약수개수가 limit보다 크면 power 아니면 자기자신을 더한다.
  divNum.forEach((e) => {
    e > limit ? (answer += power) : (answer += e);
  });
  return answer;
}

//두번째 풀이 : 최적화 답안
function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    //각각의 약수를 count로 지정
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      //제곱수가 i이면 약수+1
      if (j * j === i) {
        count++;
        //일반 약수이면 약수+2(자기자신과 i를 자기자신으로 나눈 수)
      } else if (i % j === 0) {
        count += 2;
      }
    }
    if (count > limit) {
      answer += power;
    } else {
      answer += count;
    }
  }
  return answer;
}

//Q2. 카드 뭉치(완)
//카드 뭉치 2개(card1, card2)에서 '앞에서부터' 차례대로 goal에 있는 단어들을 뽑아
//끝까지 완성할 수 있으면 yes, 아니면 no를 반환
function solution(cards1, cards2, goal) {
  for (let word of goal) {
    if (cards1.indexOf(word) === 0) {
      cards1.shift();
    } else if (cards2.indexOf(word) === 0) {
      cards2.shift();
    }
    //한번이라도 막히는 경우 NO를 바로 반환한다.(효율성 업)
    else {
      return "No";
    }
  }
  //모두 완료된다면 yes를 반환한다.
  return "Yes";
}

//Q3.수포자문제(미완)
//패턴을 공식으로 만들어 푸는 방법(정답률70%)
//왜 안되는지 모르겠음 => 다음에
function solution(answers) {
  //answers를 하나씩 순회하면서
  //맞으면 +1, 안맞으면 +1을 하지 않는다
  //수포자1은 index+1을 5로 나누었을 때 나머지
  //수포자2는 index가 짝수일때는 2, 홀수일때는 [1,3,4,5]반복?
  //수포자3은[3,3,1,1,2,2,4,4,5,5]
  let answer1 = 0;
  let answer2 = 0;
  let answer3 = 0;
  answers.forEach((e, index) => {
    let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    if ((index + 1) % 5 === e) {
      answer1++;
    } else {
    }
    if (index % 2 === 0 && e === 2) {
      answer2++;
    } else if (index % 2 === 1) {
      let newIndex = ((index - 1) / 2) % 4;
      let num = [1, 3, 4, 5][newIndex];
      if (num === e) {
        answer2++;
      }
    }
    if (arr3[index % 10] === e) {
      answer3++;
    } else {
    }
  });
  return val_return(answer1, answer2, answer3);
}

//반복패턴으로 푸는 방법(정답률100%)
function solution(answers) {
  let stu1 = [1, 2, 3, 4, 5];
  let stu2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let stu3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let answer1 = 0;
  let answer2 = 0;
  let answer3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === stu1[i % 5]) {
      answer1++;
    }
    if (answers[i] === stu2[i % 8]) {
      answer2++;
    }
    if (answer[i] === stu3[i % 10]) {
      answer3++;
    }
  }
  answers = val_return(answer1, answer2, answer3);
  return answers;
}
//answer1,answer2, answer3의 key를 각각 1,2,3으로 지정한
//객체를 만든다
//value를 비교하여 가장 큰 key값을 배열로 반환한다.

// function val_return(a, b, c) {
//   let val = [];

//   if (a > b && a > c) val = [1];
//   if (a > b && a === c) val = [1, 3];
//   if (a > b && a < c) val = [3];

//   if (a === b && a > c) val = [1, 2];
//   if (a === b && a === c) val = [1, 2, 3];
//   if (a === b && a < c) val = [3];

//   if (a < b && b < c) val = [3];
//   if (a < b && b === c) val = [2, 3];
//   if (a < b && b > c) val = [2];

//   if (a === 0 && b === 0 && c === 0) val = [];

//   return val;
// }

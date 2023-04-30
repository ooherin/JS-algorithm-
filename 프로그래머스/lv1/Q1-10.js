//Q1. 기사단원의 무기
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

//Q2. 카드 뭉치
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

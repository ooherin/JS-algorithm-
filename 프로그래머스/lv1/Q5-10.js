//Q5
//과일장수
function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score.sort((a, b) => b - a); //가장 큰 점수부터 정렬
  let arr = []; //m개씩 나눠서 넣을 배열 만들기
  for (let i = 0; i <= sortedScore.length; i += m) {
    const sliced = sortedScore.slice(i, i + m); //m개씩 잘라서 sliced에 넣음
    arr.push(sliced); //arr에 중첩배열로 들어감
  }
  arr.forEach((item) => {
    //arr에서 길이가 m이면 가격을 더하고 아니면 0리턴
    if (item.length === m) return (answer += item[m - 1] * m);
    return 0;
  });
  return answer;
}

//Q6
//숫자 짝꿍
function solution(X, Y) {
  //x와 y를 잘라서 공통부분을 추출한다.
  //가장 큰 부분붙어 붙인다.
  let common = [];
  const splitedX = [...X];
  const splitedY = [...Y];
  splitedX.map((num) => {
    const targetIndex = splitedY.indexOf(num);
    if (targetIndex >= 0) {
      common.push(num);
      splitedY.splice(targetIndex, 1);
    }
  });
  if (!common.length) {
    return "-1";
  }
  const answer = common.sort((a, b) => b - a);
  if (answer[0] == 0) {
    return "0";
  }
  return answer.join("");
}
//런타임 에러 발생
//=> X,Y의 max가 3백만까지 가능하기 때문

//풀이2
function solution(X, Y) {
  //x와 y를 잘라서 공통부분을 추출한다.
  //가장 큰 부분붙어 붙인다.
  const splitedX = [...X].sort((a, b) => b - a);
  const splitedY = [...Y];
  const objY = {};
  let answer = "";
  splitedY.map((num) => {
    if (objY[num] === undefined) {
      return (objY[num] = 1);
    } else {
      return objY[num]++;
    }
  });
  splitedX.forEach((num) => {
    if (objY[num] !== undefined && objY[num] > 0) {
      answer += num;
      objY[num]--;
    }
  });
  if (!answer.length) {
    return "-1";
  }
  if (answer[0] == 0) {
    return "0";
  }
  return answer;
}

//Y의 숫자를 모두 객체로 분해 ex) "5331" => {5 : 1, 3 : 2, 1: 1}
//정렬된 X를 하나씩 순회하여 객체에 있고 숫자가 1이상일 경우에만 answer에 추가하고 객체에서 1씩 뺌
//예외 처리 => answer
//a를 큰 순서대로 정렬했기 때문에 0이 가장 먼저 있다면 그 answer는 모두 0으로 이루어져 있다는 뜻

//Q7
//옹알이
// function solution(babbling) {
//   var answer = 0;
//   const babyword = ["aya","ye","woo","ma"];
//   //만약 able에 해당 word가 포함되어 있다면 바로 +1
//   //포함되어 있지 않아도, 같은 첫글자의 개수인 글자로 splcie를 계속해서 length가 0이 되면 +1
//   babbling.map((word)=>{
//      if(babyword.includes(word)){
//       return answer += 1;}
//       babyword.map((ableword)=>{
//         if (word.indexOf(ableword) > 0 ){
//              word.splice(word.indexOf(ableword),ableword.length)
//          }
//         })})
//       if(word.length == 0 ){
//           return answer += 1;
//       }
//   return answer;
// }
function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  // 주어진 단어를 하나씩 테스트 해봅니다.
  babbling.map((babyword) => {
    let progress = true;
    let before = "";

    while (progress) {
      for (let i = 0; i < words.length; i++) {
        // 단어의 맨 앞이 머쓱이가 읽을 수 있는 부분인가?
        if (babyword.indexOf(words[i]) == 0) {
          // 읽을 수 있더라도 연속하지는 않는가?
          if (before != words[i]) {
            before = words[i];
            babyword = babyword.slice(words[i].length);
            break;
          } else {
            progress = false;
            break;
          }
        } else {
          if (i == words.length - 1) {
            progress = false;
            break;
          }
        }
      }
      // 한 차례 판별이 끝난 후, 끝까지 다 읽었다면 발음 가능한 단어의 수(answer) + 1
      if (babyword.length == 0) {
        answer++;
        progress = false;
      }
    }
  });
  return answer;
}

//Q7
//문자열 나누기
function solution(s) {
  let string = [...s];
  let answer = 0;
  let answerArr = [];
  while (string.length !== 0) {
    let i = 0;
    if (string[i] !== string[i + 1]) {
      answer++;
      const arr = string.splice(i, i + 2);
      answerArr.push(arr);
      i++;
    } else {
      let startNum = string[i];
      let count = [1, 0];
      while (count[0] !== count[1]) {
        if (startNum === string[i + 1]) {
          count[0]++;
          i++;
        } else {
          count[1]++;
          i++;
        }
      }
      answer++;
      const arr = string.splice(0, count[0] * 2);
      answerArr.push(arr);
    }
  }
  return answer;
}

//대충 만든 자판
function solution(keymap, targets) {
  //키 맵 당 최소 index를 구하는 함수 생성
  const minObj = {};
  const answer = Array(targets.length).fill(0);
  keymap.map((key) => {
    const keyArr = [...key];
    keyArr.forEach((ele, index) => {
      if (minObj[ele]) {
        minObj[ele] = Math.min(minObj[ele], index + 1);
      } else {
        minObj[ele] = index + 1;
      }
    });
  });

  const unFilterAnswer = targets.map((target) =>
    target.split("").reduce((acc, val) => {
      return acc + minObj[val];
    }, 0)
  );

  const filterAnswer = unFilterAnswer.map((minTried) => {
    return isNaN(minTried) ? -1 : minTried;
  });
  return filterAnswer;
}

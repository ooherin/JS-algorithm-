// //옹알이
function solution1(babbling) {
  let answer = babbling.length;

  //정규표현식으로 숫자로 바꿈
  const replaced = babbling.map((v) => {
    return v
      .replace(/aya/g, 1)
      .replace(/ye/g, 2)
      .replace(/woo/g, 3)
      .replace(/ma/g, 4);
  });

  //숫자로 안ㅂ바뀐 경우에는 answer에서 지우기
  replaced.map((v) => {
    if (isNaN(v / 1)) {
      answer -= 1;
      return false;
    }

    let arr = [...v];
    //겹치는 숫자가 있늕니 확인하는 로직
    for (let currentIdx = 0; currentIdx < arr.length - 1; currentIdx++) {
      if (arr[currentIdx] === arr[currentIdx + 1]) {
        answer -= 1;
        break;
      }
    }
    return true;
  });

  return answer;
}

// console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));

//체육복
//sort를 해서 정렬을 해줘야함
//잃어버렸는데 여유분이 있는 경우가 있다. => 이 경우에는 남한테 못빌려줌
function solution2(n, lost, reserve) {
  let copy = [...reserve];
  let answer = n - lost.length;
  lost = lost.sort((a, b) => a - b);
  copy = copy.sort((a, b) => a - b);
  lost.forEach((num) => {
    if (copy.includes(num - 1) && !lost.includes(num - 1)) {
      answer++;
      copy = copy.filter((e) => e !== num - 1);
    } else if (copy.includes(num + 1) && !lost.includes(num + 1)) {
      answer++;
      copy = copy.filter((e) => e !== num + 1);
    } else if (copy.includes(num)) {
      answer++;
      copy = copy.filter((e) => e !== num);
    } else {
    }
  });
  return answer;
}

//시저 암호
function solution(s, n) {
  //65 ~ 90
  //97 ~ 122
  //charCodeAt / fromCharCode
  let answer = "";
  [...s].forEach((e, idx) => {
    if (e === " ") {
      return (answer += " ");
    }
    let originalNum = s.charCodeAt(idx);
    let nextNum = s.charCodeAt(idx) + n;

    if (originalNum <= 90) {
      if (nextNum > 90) {
        nextNum = nextNum -= 26;
      }
      return (answer += String.fromCharCode(nextNum));
    } else {
      if (nextNum > 122) {
        nextNum = nextNum -= 26;
      }
      return (answer += String.fromCharCode(nextNum));
    }
  });
  return answer;
}

function solution(dartResult) {
  let oneTurnArr = [];
  let temp = [];
  let arr = [...dartResult, 0];
  arr.forEach((e, i) => {
    if (!isNaN(e)) {
      //숫자일때
      if (!temp.length) {
        temp.push(e); ///첫번째숫자일때
      } else {
        //두번째 숫자일때
        //10인 경우
        if (arr[i - 1] == 1 && e == 0) {
          return (temp = ["10"]); //얼리리턴
        } else {
          oneTurnArr.push(temp);
        }
        temp = [];
        temp.push(e);
      }
    } else {
      //문자일때
      temp.push(e);
    }
  });
  let arrlength = oneTurnArr.length;
  let oneTurnScore = Array.from({ length: arrlength }, () => 0);
  //점수 구하기
  oneTurnArr.forEach((turn, index) => {
    let secondArr = ["S", "D", "T"];
    let secondNum = secondArr.indexOf(turn[1]) + 1;
    let currentScore = Math.pow(turn[0] / 1, secondNum);

    if (turn.length > 2) {
      if (turn[2] === "*") {
        oneTurnScore[index] = currentScore * 2;
        if (index > 0) {
          oneTurnScore[index - 1] = oneTurnScore[index - 1] * 2;
        }
      } else {
        oneTurnScore[index] = -currentScore;
      }
    } else {
      oneTurnScore[index] = currentScore;
    }
  });
  let score = oneTurnScore.reduce((acc, cur) => (acc += cur));
  return oneTurnArr;
}
console.log(solution("1S2D*3T"));

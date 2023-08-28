function solution(board, moves) {
  //move를 순회해서 board앞부터 해당 index에 있는 숫자를 꺼내서 stack에 넣음.
  //꺼내진 곳은 0이되버림
  //원래 있던 stack에 이전 숫자와 같으면 두 숫자를 지우고 result + 2
  //줄별로 스택을 만들기?b
  let basket = [];
  let answer = 0;
  const stacks = Array.from({ length: board.length }, () => []);
  //현재 세로줄
  for (let i = 0; i < board.length; i++) {
    [...board].forEach((line) => {
      if (line[i] > 0) {
        stacks[i].push(line[i]);
      } else {
      }
    });
  }

  moves.forEach((move) => {
    let idx = move - 1;
    if (stacks[idx].length > 0) {
      //basket의 경우 가장 위에서 부터 꺼내는 것임
      if (basket[basket.length - 1] == stacks[idx][0] && basket.length > 0) {
        answer += 2;
        basket.pop();
        stacks[idx].shift();
      } else {
        basket.push(stacks[idx][0]);
        stacks[idx].shift();
      }
    } else {
    }
  });
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

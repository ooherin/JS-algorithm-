//📝 달리기 경주
//✅ 내 풀이 방법
function solution(players, callings) {
  let copy_players = [...players];
  callings.forEach((call) => {
    let myRank = copy_players.indexOf(call);
    if (myRank > 0) {
      let frontPerson = copy_players[myRank - 1];
      copy_players[myRank - 1] = call;
      copy_players[myRank] = frontPerson;
    }
  });
  return copy_players;
}
// ✅ player의 최대 크기 :  50,000, callings의 최대 크기 : 1,000,000
//이 알고리즘은 forEach, indexOf로 순회하는 것
//50,000 * 1,000,000 => 시간 복잡도 높다.

//시간 복잡도 개선 방법
//객체를 2개만든다.
//calling을 순회하여 두 객체의 값을 바꿔준다.

function solution(players, callings) {
  let keyRank = {};
  let keyName = {};
  players.forEach((player, index) => {
    const rank = index + 1;
    keyRank[rank] = player;
    keyName[player] = rank;
  });
  callings.forEach((calling) => {
    let frontPlayer = keyRank[keyName[calling] - 1];
    keyRank[keyName[calling]] = frontPlayer;
    keyRank[keyName[frontPlayer]] = calling;
    keyName[calling] -= 1;
    keyName[frontPlayer] += 1;
  });
  return Object.values(keyRank);
}

//📝 햄버거 만들기
//✅ 처음에 푼 방법
//50번째 줄 index를 while문 안에 넣어줘야 했음
function solution(ingredient) {
  //1 2 3 1
  let ingredientJoin = ingredient.join("");
  let result = 0;
  let end = false;
  while (!end && ingredientJoin.length >= 4) {
    let index = ingredientJoin.indexOf("1231");
    if (index === -1) {
      end = true;
    } else {
      ingredientJoin = ingredientJoin.replace("1231", "");
      result += 1;
    }
  }
  return result;
}
//시간복잡도가 높았던 이유 => indexOf로 1231이 있는지를 계속 찾았음
//이를 while문안에서 계속 반복하였음.
//참고로 ingredient의 길이는 1,000,000

//✅ 시간 복잡도 고려한 정답 풀이
//스택으로 만듦
function solution(ingredient) {
  let stack = [];
  let answer = 0;
  ingredient.forEach((item) => {
    stack.push(item);
    let length = stack.length;
    if (
      stack[length - 1] === 1 &&
      stack[length - 2] === 3 &&
      stack[length - 3] === 2 &&
      stack[length - 4] === 1
    ) {
      stack.splice(-4);
      answer += 1;
    } else {
      return answer;
    }
  });
  return answer;
}

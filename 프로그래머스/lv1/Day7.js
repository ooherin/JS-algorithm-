//완주하지 못한 선수
function solution(participant, completion) {
  var answer = "";
  const participantObj = participant.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  completion.forEach((e) => {
    if (e in participantObj) {
      participantObj[e] -= 1;
    }
  });
  for (let i in participantObj) {
    if (participantObj[i] === 1) {
      answer = i;
    }
  }

  return answer;
}

//해시의 정석 : map을 사용한 풀이법
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return map;
}

console.log(solution(["지형", "혜린"], ["지형"]));

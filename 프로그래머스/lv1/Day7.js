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

//폰켓몬
function solution(nums) {
  const obj = nums.reduce((acc, cur) => {
    acc[String(cur)] = (acc[String(cur)] || 0) + 1;
    return acc;
  }, {});
  const length = Object.keys(obj);
  //const arr = [...new Set(nums)];

  if (nums.length / 2 >= length.length) {
    return length.length;
  }
  return nums.length / 2;
}

//다른 풀이
function solution(nums) {
  const arr = [...new Set(nums)]; //고유한 숫자 개수 구하기
  return Math.min(nums.length / 2, arr.length);
  //고유한 숫자 개수보다 폰켓몬 개수가 작으면, 폰켓몬 개수
  //고유한 숫자가 더 작으면, 고유한 숫자 개수
}

//체육복 빌려주기

function solution(n, lost, reserve) {
  let answer = n;
  let Obj = {};
  for (let i = 1; i <= n; i++) {
    Obj[i.toString()] = 1;
  }
  reserve.forEach((e) => {
    if (Obj[e.toString()] > 0) {
      Obj[e.toString()] += 1;
    }
  });

  lost.forEach((e, idx) => {
    let prev = idx > 0 ? idx - 1 : false;
    let next = idx < n ? idx + 1 : false;

    if (Obj[e.toString()] > 0) {
      Obj[e.toString()] -= 1;
    } else if (Obj[prev.toString()] > 0) {
      Obj[prev.toString()] -= 1;
    } else if (Obj[next.toString()] > 0) {
      Obj[next.toString()] -= 1;
    } else {
      answer -= 1;
    }
  });
  return answer;
}
//=> 배열로도 충분히 풀 수 있따.!
//정답 풀이

function solution(n, lost, reserve) {
  let answer = n;
  let students = Array.from({ length: n }, () => 1); // Initialize all students with 1 (have a uniform)

  // Distribute extra uniforms
  reserve.forEach((student) => {
    students[student - 1]++;
  });

  // Process lost students
  lost.forEach((student) => {
    if (students[student - 1] > 1) {
      // If student has an extra uniform, use it
      students[student - 1]--;
    } else if (student > 1 && students[student - 2] > 1) {
      // Borrow from previous student if available
      students[student - 2]--;
    } else if (student < n && students[student] > 1) {
      // Borrow from next student if available
      students[student]--;
    } else {
      // No available uniforms, reduce the answer
      answer--;
    }
  });

  return answer;
}

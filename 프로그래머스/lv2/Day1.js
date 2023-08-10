//Q1 연속된 부분 수열의 합
//난이도 ⭐️⭐️, 참고 O
function solution(sequence, k) {
  var arr = [];
  let left = 0;
  let right = 0;
  let sum = sequence[0];
  while (right < sequence.length) {
    //right이 0부터 실행하여 끝까지 이동
    if (sum < k) {
      right++; //오른쪽 이동
      sum += sequence[right];
    } else if (sum > k) {
      sum -= sequence[left];
      left++;
    } else {
      arr.push([left, right]);
      right++;
      sum += sequence[right];
    }
  }

  let answer = arr[0];
  arr.forEach((el) => {
    if (answer[1] - answer[0] > el[1] - el[0]) {
      answer = el;
    }
  });
  return answer;
}

//뒤에 있는 큰 수 찾기
//난이도 ⭐️⭐️, 시간초과 => 스택을 사용하여 풀어야 함.
function solution(numbers) {
  var answer = [];
  numbers.map((ele, idx) => {
    let i = idx;
    while (i <= numbers.length) {
      i++;
      if (numbers[i] > numbers[idx]) {
        return answer.push(numbers[i]);
        break;
      }
    }
    return answer.push(-1);
  });
  return answer;
}

//정답 풀이(다시 보기)
function solution(numbers) {
  let answer = Array(numbers.length);
  let check = [0];
  //첫번쨰 숫자부터 시작함. number[i]를 순회하며 더 작으면 answer에 number[i]가 들어감.
  //numbers의 첫숫자부터 마지막 숫자까지, 인덱스가 들어감.
  for (let i = 1; i < numbers.length; i++) {
    while (check.length && numbers[check[check.length - 1]] < number[i]) {
      answer[check.pop()] = numbers[i];
    }
    check.push(i);
  }
  while (check.length) {
    answer[check.pop()] = -1; //check에 숫자가 남아있으면 -1을 넣기
  }
}

// //푸드 파이트 대회
function solution(food) {
  let result = "";
  for (let i = 1; i < food.length; i++) {
    for (let j = 1; j <= food[i] / 2; j++) {
      result += i;
    }
  }
  let reversed = [...result].reverse();
  result += 0;
  result += reversed.join("");
  return result;
}

//덧칠하기
function solution(n, m, section) {
  let answer = 0; //정답 개수
  let i = 0; //i를 while문 밖에서 선언하여 0으로 초기화 되지 못하도록 만든다.
  while (section.length > 0) {
    //섹션이 없어질 때가지 반복
    let diff = section[i] - section[0]; //첫번째 인자와 뒤 인자의 차이
    if (diff < m) {
      //차이가 m 보다 작으면
      i++; //i를 하나더 늘린다.
    } else {
      answer += 1; //차이가 m이랑 같거나 크면
      section = section.slice(i); //앞에서 i의 개수의 숫자를 자른다.
      i = 0; //i를 0으로 다시 만든다.
    }
  }
  return answer;
}

//바탕화면 정리
//첫시도(실패)
function solution(wallpaper) {
  let y = [0, wallpaper[0].length]; //모든 1번째 자리가 .이면 +1
  let arr = [];

  const X = checkX(wallpaper);

  let DotNumStart = [];
  let DotNumEnd = [];
  wallpaper.forEach((el) => {
    arr = el.split("#");
    DotNumStart.push(arr[0].length);
    DotNumEnd.push(arr[arr.length - 1].length);
  });

  y[0] = Math.min(...DotNumStart);
  y[1] = y[1] - Math.min(...DotNumEnd);

  return X;
}

//참고용 풀이(성공)
//처음 만난 좌표를 시작점으로 해서 min의 경우 전보다 작은것을, max의 경우 전보다 큰 것을 값르로 한다.
//반복문 * 2 로 모든 좌표를 순회한다.
//first_count라는 첫 #을 찾는 게 포인트
function solution(wallpaper) {
  let Xmin = 0,
    Xmax = 0,
    Ymin = 0,
    Ymax = 0;
  let first_contact = true;
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === "#") {
        if (first_contact) {
          Xmin = i;
          Xmax = i + 1;
          Ymin = j;
          Ymax = j + 1;
          first_contact = false;
        } else {
          Xmin = Math.min(Xmin, i);
          Xmax = Math.max(Xmax, i + 1);
          Ymin = Math.min(Ymin, j);
          Ymax = Math.max(Ymax, j + 1);
        }
      }
    }
  }
  return [Xmin, Ymin, Xmax, Ymax];
}

//다른 사람 풀이
//아예 모든 #의 좌표를 저장하여 최소, 최댓값을 구해 배열을 완성한다.
function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}
//두 풀이다 #을 발견하면 해당 좌표를 저장하는 것이 포인트 => 개별적으로 보는 것

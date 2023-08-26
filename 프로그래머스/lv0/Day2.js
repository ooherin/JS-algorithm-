//기울기 (10분)
function solution(dots) {
  const sortedDots = dots.sort((a, b) => a[0] - b[0]);
  const xDiff = sortedDots[1][0] - sortedDots[0][0];
  const yDiff = sortedDots[1][1] - sortedDots[0][1];
  const 기울기 = yDiff / xDiff;
  answer =
    기울기 ==
    (sortedDots[3][1] - sortedDots[2][1]) /
      (sortedDots[3][0] - sortedDots[2][0]);
  return answer / 1;
}

//평행 10분 (40분+ )
function solution(lines) {
  const maxSorted = lines.sort((a, b) => a[1] - b[1]);
  const minSorted = lines.sort((a, b) => a[0] - b[0]);
  const max = maxSorted[lines.length - 1][1];
  const min = minSorted[0][0];
  let overlapArr = [];
  let answer = 0;

  for (let i = min; i <= max; i++) {
    let count = 0;
    lines.forEach((line, index) => {
      [x, y] = line;
      if (i >= x && i <= y) {
        count += 1;
        if (index < line.length && y == lines[index + 1][0]) {
          count -= 1;
        }
      }
    });
    if (count >= 2) {
      overlapArr.push(i);
    }
  }

  overlapArr.forEach((e, i) => {
    if (i < overlapArr.length && e + 1 == overlapArr[i + 1]) {
      answer += 1;
    }
  });
  return answer;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9], //3 4 5
  ])
);

//안전지대 1시간
function solution(board) {
  //지뢰가 숨겨진 지역 구하기
  let sideLength = board.length;
  let answer = sideLength * sideLength;
  let dangerousSet = new Set();

  const addDangerousZone = (i, j) => {
    let minX = Math.max(0, i - 1);
    let maxX = Math.min(sideLength - 1, i + 1);
    let minY = Math.max(0, j - 1);
    let maxY = Math.min(sideLength - 1, j + 1);
    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        dangerousSet.add(`${x},${y}`);
      }
    }
    return dangerousSet;
  };

  for (let i = 0; i < sideLength; i++) {
    for (let j = 0; j < sideLength; j++) {
      if (board[i][j] == 1) {
        addDangerousZone(i, j);
      }
    }
  }
  return answer - dangerousSet.size;
}

//역으로 생각 => 1을 구해서 뺴는 것이 아니라, 1이 아닌 것들만 구하기
//다른 풀이
function solution2(board) {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;

  board.forEach((row, y, self) =>
    row.forEach((it, x) => {
      if (it === 1) return false;
      //some은 배열의 어떤 요소라도 주어진 팔별함수를 통과하는지 테스트
      //위험지대에 하나라도 걸리는게 없어야 safezone에 +1 이 되는 것이다.
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
        ? false
        : safezone++;
    })
  );

  return safezone;
}

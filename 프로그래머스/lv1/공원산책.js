function solution(park, routes) {
  //E : X+, W: X-, N:Y-, S:Y+
  let splitedPark = park.map((line) => {
    return line.split("");
  });
  let start = findStartSpot(park);
  //도착하는 좌표에 해당하는 park의 O X 유무를 확인
  //0면 가고 아니면 무시
  let arr = [];
  routes.forEach((route) => {
    let after = changeSpot(start, route);
    start = isValidSpot(start, after, splitedPark);
    arr.push(start);
  });
  return arr;
}

function isValidSpot(start, after, splitedPark) {
  const [x, y] = after;
  if (splitedPark[x][y] === "X") {
    return start;
  }
  return after;
}

function changeSpot(start, route) {
  let moved = [...start];
  let splitedRoute = route.split(" ");
  if (splitedRoute[0] === "E") {
    moved[1] += splitedRoute[1] / 1;
  } else if (splitedRoute[0] === "W") {
    moved[1] -= splitedRoute[1] / 1;
  } else if (splitedRoute[0] === "N") {
    moved[0] -= splitedRoute[1] / 1;
  } else {
    moved[0] += splitedRoute[1] / 1;
  }
  return moved;
}

function findStartSpot(park) {
  let route = [0, 0];
  park.forEach((line, xindex) => {
    if (line.includes("S")) {
      return (route[0] = xindex);
    }
  });
  [...park[route[0]]].forEach((spot, index) => {
    if (spot === "S") {
      return (route[1] = index);
    }
  });
  return route;
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));

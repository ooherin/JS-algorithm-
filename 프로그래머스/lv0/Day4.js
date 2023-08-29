//주사위 게임3
function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  const obj = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const Numlength = Object.keys(obj).length;
  if (Numlength === 1) {
    return a * 1111;
  } else if (Numlength === 2) {
    if (obj[a] == 2) {
      const [x, y] = Object.keys(obj);
      return (+x + +y) * Math.abs(+x - +y);
    } else {
      const [x, y] = Object.keys(obj);
      let bigger, smaller;
      if (obj[x] == 1) {
        [bigger, smaller] = [y, x];
      } else {
        [bigger, smaller] = [x, y];
      }
      return (+bigger * 10 + +smaller) ** 2;
    }
  } else if (Numlength === 3) {
    const keys = [...Object.keys(obj)];
    const arr = [];
    keys.forEach((key) => {
      if (obj[key] == 1) {
        arr.push(key);
      }
    });

    return arr[0] * arr[1];
  } else {
    return Math.min(a, b, c, d);
  }
}

//먼저 sort를 하면 좋다.
function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  const obj = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const sorted = arr.sort((a, b) => obj[b] - obj[a]);
  const Numlength = Object.keys(obj).length;
  if (Numlength === 1) {
    return a * 1111;
  } else if (Numlength === 2) {
    if (obj[a] == 2) {
      const [x, y] = Object.keys(obj);
      return (+x + +y) * Math.abs(+x - +y);
    } else {
      const [bigger, x, y, smaller] = sorted;
      return (+bigger * 10 + +smaller) ** 2;
    }
  } else if (Numlength === 3) {
    const [x, y, z, w] = sorted;
    return z * w;
  } else {
    return Math.min(a, b, c, d);
  }
}

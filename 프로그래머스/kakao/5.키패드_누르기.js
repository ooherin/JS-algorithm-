//25분
function solution(numbers, hand) {
  var answer = "";
  let [left, right] = [
    [3, 0],
    [3, 2],
  ];
  const Location = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  const leftSection = [1, 4, 7];
  const rightSection = [3, 6, 9];
  numbers.forEach((number) => {
    const target = Location[number];
    let [x, y] = target;

    if (leftSection.includes(number)) {
      answer += "L";
      left = target;
    } else if (rightSection.includes(number)) {
      answer += "R";
      right = target;
    } else {
      let Llength = Math.abs(left[0] - x) + Math.abs(left[1] - y);
      let Rlength = Math.abs(right[0] - x) + Math.abs(right[1] - y);

      if (Llength < Rlength) {
        answer += "L";
        left = target;
      } else if (Llength > Rlength) {
        answer += "R";
        right = target;
      } else {
        if (hand === "left") {
          answer += "L";
          left = target;
        } else {
          answer += "R";
          right = target;
        }
      }
    }
  });
  return arr;
}

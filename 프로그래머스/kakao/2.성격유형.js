function solution(survey, choices) {
  var answer = "";
  //선택한 숫자가 4보다 작으면 왼쪽 +, 4보다 크면 오른쪽 +
  const categoryArr = ["R", "T", "C", "F", "J", "M", "A", "N"];

  //객체 만들기
  let obj = {};
  for (const key of categoryArr) {
    obj[key] = 0;
  }

  //서브 카테고리 만들기
  const subcategoryArr = [];
  while (categoryArr.length) {
    const sub = categoryArr.slice(0, 2);
    categoryArr.splice(0, 2);
    subcategoryArr.push(sub);
  }

  survey.forEach((e, i) => {
    let eleArr = [...e];
    let left = eleArr[0];
    let right = eleArr[1];
    if (choices[i] < 4) {
      obj[left] += 4 - choices[i];
    } else if (choices[i] > 4) {
      obj[right] += choices[i] - 4;
    }
  });
  subcategoryArr.forEach((category) => {
    if (obj[category[0]] >= obj[category[1]]) {
      return (answer += category[0]);
    }
    return (answer += category[1]);
  });
  return answer;
}
console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));

function solutions(survey, choices) {
  const types = ["RT", "CF", "JM", "AN"];
  const MBTI = {};
  types.forEach((type) => {
    type.split("").forEach((char) => (MBTI[char] = 0));
  });
  choices.forEach((choice, index) => {
    //불만족, 만족 알파벳을 survey에서 받음.
    const [disagree, agree] = survey[index];
    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });
  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a.join("")));
}

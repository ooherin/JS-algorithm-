//모든 달은 28일

function solution(today, terms, privacies) {
  var answer = [];

  const termObj = terms.reduce((acc, cur) => {
    const [termName, termLong] = cur.split(" ");
    acc[termName] = +termLong;
    return acc;
  }, {});

  privacies.forEach((privacy, index) => {
    const [date, term] = privacy.split(" ");
    const [year, month, day] = date.split(".");
    const newMonth = +month + +termObj[term];
    while (+newMonth <= 12) {
      newMonth = newMonth - 12;
      year = year + 1;
    }
    answer.push([year, newMonth, day]);
  });
  return answer;
}

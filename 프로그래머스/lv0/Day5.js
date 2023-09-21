function solution(arr, query) {
  let copy_arr = [...arr];
  query.forEach((q, i) => {
    if (i % 2 == 1) {
      copy_arr = copy_arr.slice(q);
    } else {
      copy_arr = copy_arr.slice(0, q + 1);
    }
  });
  return copy_arr;
}

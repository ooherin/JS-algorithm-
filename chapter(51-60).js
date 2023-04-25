//51
//병합정렬 알고리즘
//1. 리스트의 길이가 0또는 1이면 이미 정렬된 것으로 본다.
//2. 정렬되지 않은 리스트를 절반으로 갈라 비슷한 크기로 나눈다
//3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
//4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

//*** 합병 정렬에서 실제 정렬이 이루어지는 시점은 2개의 리스트를
//합병하는 과정이다.
//mergeSort(arr): 반으로 나눠주는 함수
//merge(left, right ): 반으로 나누어준 함수를 갖고 정렬하여
//새로운 배열로 만들어주는 함수

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //중간점 mid로 니누기
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  //left, right 두분으로 나눈 것을 또 절반으로 나눠서
  //배열의 길이가 1이 될때까지 나눈다.
  //나눠진 두 숫자를 left, right로 분류해 비교해서 합친다.
  return merge(mergeSort(left), mergeSort(right));
}

//두 숫자를 합병한다.
//이때 정렬이 된다.
//가장 앞의 숫자를 비교한다(그 배열의 가장 작은 숫자임)
//더 작은 숫자가 포함된 배열(left,right)의 가장 앞 숫자
//(가장 작은 숫자를 ) result배열에다가 넣는다.
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}
const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(mergeSort(array));

//52
//퀵 sort 알고리즘
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //가장 앞의 수가 기준수임
  const pivot = arr[0];
  const left = [];
  const right = [];

  //기준수보다 작으면 left, 크면 right로 넣어주기
  for (let i; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  //left, 기준수, right 차례대로 합치기
  return quickSort(left).concat(pivot, quickSort(right));
}
const array1 = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(quickSort(array1));

//53

function mathBrackets(e) {
  let count = 0;

  //괄호 개수가 같지 않으면 false
  for (let i = 0; i < e.length; i++) {
    if (e[i] === "(") {
      count++;
    }
    if (e[i] === ")") {
      count--;
    }
  }
  if (count !== 0) {
    return false;
  }

  //열린괄호를 만날때마다 스택에 push, 닫힌 괄호를 만날때마다
  //스택에서 pop한다. 만약 pop할 괄호가 없는 상태에서 닫힌 괄호를
  //만나면 괄호의 짝이 맞지 않으므로 false를 반환한다.
  //괄호의 짝이 다 맞으면 true를 반환한다.
  let 괄호 = [];
  //순회해서 (열린괄호면 '괄호'에 push한다.
  for (let i in e) {
    if (e[i] === "(") {
      괄호.push("(");
    }

    //닫힌 괄호일때 '괄호'에 아무것도 없으면 false를 반환한다
    //(이것은 짝이 안맞는다는 소리)
    //있으면 pop을 하여 괄호의 열린괄호(를 삭제한다.
    if (e[i] === ")") {
      if (괄호.length === 0) {
        return false;
      }
      괄호.pop();
    }
  }
  return true;
}

const n = prompt("입력해주세요.").split("");

if (mathBrackets(n) === true) {
  console.log("YES");
} else {
  console.log("NO");
}

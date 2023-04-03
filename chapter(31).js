//31
//3 5(slice includes)

//32
const str = prompt('문자열 입력')
const arr = str.split(' ');
console.log(arr.length); //4

//33
const input = '5 3 2 1';
const arr1 = [...input];
console.log(arr1.reverse().join(' '));

//답지 풀이
const data = prompt('숫자 입력').split(' ').reverse();
const result = '';
for(let i = 0 ; i < data.length; i++){
    result += data[i];
}
console.log(result)

//34 (x)
const unsorted = "10 20 40 30";
let sorted = unsorted.split(' ').sort((a,b)=> a-b).join(' ');
(unsorted === sorted)?console.log('YES') : console.log('NO');

//35 (0)
function one(n){
    function two(a){
      return a**n;
    }
    return two;
}

//36 (0)
const num = 2;
let answer = [];
for(let i = 1 ; i <= 9 ; i++){
    answer.push(i * num);
}
console.log(answer.join(' '));

//37 (x) ==> 다시
const array = prompt('이름을 입력해주세요.').split(' ');
let result11 = {};
let winner = "";

for(let index in array){
  let val = array[index];
  result11[val] = result11[val] === undefined ? 1 : result[val] = result[val] + 1;
}

winner = Object.keys(result).reduce(function(a, b){
  return result111[a] > result11[b] ? a : b
});

console.log(`${winner}(이)가 총 ${result11[winner]}표`);

//38 (0)
//sort
const scores = "97 86 75 66 55 97 85 97 97 95";
const scoreArr = scores.split(' ').sort((a,b)=>b-a);
console.log(scoreArr);
//4번쨰 학생을 구한다.
const uniqArr = new Set(scoreArr);
const answer1 = scoreArr.slice(0,scoreArr.indexOf([...uniqArr][3]));
console.log(answer1.length);

//답안지 풀이
scores.sort((a,b)=>{
    return a-b;
});
let countNum = 0;
let arrStudent = [];
while(arrStudent.length<3){
    let n = scores.pop();
    if(!arrStudent.includes(n)){
        arrStudent.push(n);
    }
    countNum += 1;
}
console.log(countNum);

//39 (0)
const str1 = 'qqeeqqee';
const regex = /[q]+/g
//const regex = /q/gi
console.log(str1.replace(regex, 'e'));

//40 (x)
let total = 0;
let count = 0;
const limit = prompt('제한 무게 입력');
const n = prompt('인원수 입력');
for(let i = 0; i <=n ; i++){
    total += prompt('무게 입력')/1;
    if(total <= limit){
        count = i;
    }
}
console.log(count);








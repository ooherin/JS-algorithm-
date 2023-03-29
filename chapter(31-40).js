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




//21
//3,5

//22
//2

//23
//x(3.0)

//24
const name = prompt('이름입력');
console.log(name.toUpperCase());

//25
//즉시실행함수로 만들어야 실행이 된다.
let radius = Number(prompt('반지름의 길이'));
let 넓이;
(function (){
    넓이 = radius * radius * 3.14;
    console.log(넓이);
}())

function Circle(n){
    return n * n * 3.14;
}

//26
const planets = {
    수성 : 'Mercury',
    금성 : 'Venus',
    지구 : 'Earth',
    화성 : 'Mars',
    목성 : 'Jupiter',
    토성 : 'Saturn',
    천왕성 : 'Uranus', 
    해왕성 : 'Neptune',

}
let choice11 = prompt('행성 이름?');
function printPlanet(){
    if(planets[choice11] === undefined)
    return '이 행성은 없습니다!'; //얼리리턴
    return planets[choice11];
}
printPlanet();

//
let choice = prompt('행성 이름?');
const planetArr1 = ['수성','금성','지구','화성','목성','토성','천왕성','해왕성'];
const planetArr2 = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'];
let answer;
if(!planetArr1.includes(choice)){
answer =  '이 행성은 없습니다';}else{
    answer = planetArr2[planetArr1.indexOf(choice)];
}
console.log(answer)

//27
const keys = prompt('학생이름').split(' ');
const values = prompt('점수').split(' ');
const obj = {};
for(let i = 0; i < keys.length ; i++){
obj[nameArr[i]] = scoreArr[i];
}
console.log(obj);

//28
let str = prompt('문자열 입력');
for(let i = 0 ; i < str.length-1 ;i++){
    console.log(`${str[i]} ${str[i+1]}`)
}

//29
let alpa =  prompt('대문자 하나 입력');
console.log( (alpa === alpa.toUpperCase()) ? 'YES' : 'NO');

//30 (*)
let fullString = prompt('문자열 입력');
let findString = prompt('찾을 단어입력');
let arr = [];
arr.push(fullString.split(findString));

// console.log(arr[0].length +3);
console.log(arr[0][0].length);

//console.log(fullString.indexOf(findString));


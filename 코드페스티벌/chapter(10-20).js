//1  (0)
var nums = [100,200,300,400,500];
nums.splice(3,2);
console.log(nums);
//nums.pop();
//nums.pop();

//2 (0)
var arr = [200,100,300];
arr.splice(2,0,10000);
console.log(arr);

//3 (0)
//4번

//4 (0)
//2번

//5 (0)
//4번

//6 (0)
//2번

//7 (0)
//3번, 5번

//8 (0)
//84

//9 (0)
let year =  '2012';
let month = '04';
let day = '25';
let hour = '11';
let minute= '23';
let second = '25';
let arr1 = [year,month,day].join('/');
let arr2 = [hour,minute,second].join(':');
console.log(arr1.concat(arr2));

//10번 (0)
for(let i = 1 ; i <= 5; i++){
    console.log(' '.repeat(5-i),'*'.repeat(2*i-1));
}

//11번 (0)
let s = 0;
for(let i = 1 ; i <= 100; i++){
    s += i;
}
console.log(s);

//12번 (0)
class Wizard{
    constructor(health, mana, armor){
       this.health = health;
       this.mana = mana;
       this.armor = armor;
    }
    attach(){
        console.log('파이어볼');
    }
}
const x = new Wizard(545,210,10);
console.log(x.health, x.mana, x.armor);
x.attach();

//13번 (*)
const planets = ['수성','금성','지금','화성','목성','토성','천왕성',
                 '해왕성'];
const n = prompt('몇 번쨰 행성인가요?');
console.log(planets[n-1]);

//14번 (0)
let num = prompt('숫자를 입력하세요');
if( num % 3 === 0 ){
    console.log('짝');
}else{
    console.log(num);
}

//15번 (0)
const name = prompt('이름을 입력하세요');
console.log(`안녕하세요. 저는 ${name}입니다`); 

//16번 (0)
const 입력 = prompt('입력');
let arr5 = [...입력];
console.log(arr5.reverse().join(''));

//17번 (0)
const height = prompt("키를 입력하세요");
(height > 150 )? answer += 'YES' : answer+= 'N0';

//18번 (***)
let scores = prompt('세 과목의 점수를 입력하세요').split(' ');
let sum = 0 ;
for(let i = 0 ; i < scores.length; i++){
    sum += Number(scores[i]);
}
console.log(sum/scores.length);

//19번 (0)
let number = prompt(`두 숫자를 입력하세요`).split(' ');
console.log(parseInt(number[0])**parseInt(number[1]));
//console.log(Math.pow(parseInt(n[0],10),parseInt(n[1],10)))

//20번 (0)
let number1 = prompt().split(' ');
let 몫 = parseInt(number1[0]/number1[1]);
let 나머지 = number1[0]%number1[1];
console.log(몫,나머지);









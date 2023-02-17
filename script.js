/*
let js = 'amazing';
console.log(20 + 30 - 15);

console.log("Mina");
console.log(20);

let firstName = "Celine";
console.log(firstName);


let javasrciptIsFun = true;
console.log(javasrciptIsFun);

//console.log(typeof true);
console.log(typeof javasrciptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Mina');

javasrciptIsFun = 'Yes!';
console.log(typeof javasrciptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2023;
console.log(typeof year);

console.log(typeof null);


let age = 20;
age = 21;


const birthYear = 1996;
//birthYear = 1990;


var job = 'programmer'
job = 'teacher'

const now = 2037;
const ageMina = now - 1991;
const ageNina = now - 2001;
console.log(ageMina, ageNina);

// 2**3 = 2*2*2
console.log(ageMina * 2, ageNina / 2, 2 ** 3)

const firstName = 'Kim'
const lastName = 'minha'
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x+10 = 25
x *= 10; // x = x*10 = 250
x++; // x = x+1 = 251
x--; // x = x-1 = 250
console.log(x);

//Comparison operators
console.log(ageMina > ageNina); //>, <, >=, <=
console.log(ageMina >= 30)

const isFullAge = ageMina >= 30;

console.log(now - 1991 > now - 2001)


const now = 2037;
const ageMina = now - 1991;
const ageNina = now - 2001;

console.log(now - 1991 > now - 2001)

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

const averageAge = (ageMina + ageNina) / 2;
console.log(ageMina, ageNina, averageAge)


//coding challenge #1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBmi = massMark / heightMark ** 2;
const johhBmi = massJohn / (heightJohn * heightJohn);
const markHigherBMI = markBmi > johhBmi;

console.log(markBmi, johhBmi, markHigherBMI);


const firstName = 'Mina';
const job = 'programmer';
const birthYear = 1996;
const year = 2037;

const mina = "I'm " + firstName + ', a '
    + (year - birthYear) + 'years old ' + job + '!';
console.log(mina);

const minaNew = `I'm ${firstName}, a ${year -
    birthYear} year old ${job}!`;
console.log(minaNew);
console.log(`Just a regular string..`);

console.log('String with \n\multiple \nlines');
console.log(`String with
multiple
lines`);


const age = 16;

if (age >= 18) {
    console.log(`Sarah can start driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2005;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//coding challenge #2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBmi = massMark / heightMark ** 2;
const johhBmi = massJohn / (heightJohn * heightJohn);

if (markBmi > johhBmi) {
    console.log(`Mark's BMI(${markBmi}) is highter than John's(${johhBmi})!`)
} else {
    console.log(`John's BMI(${johhBmi}) is highter than Mark's(${markBmi})!`)
}


//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('mm'))
console.log(typeof NaN);

console.log(String(22), 22);

//type coercion
console.log('I am ' + 23 + ' years old'); //문자열
console.log('23' + '10' + 3); //문자열 23103
console.log('23' - '10' - 3); //숫자 10
console.log('23' * 2); //숫자 46
console.log('23' / 2); //숫자 11.5

let n = '1' + 1; //'11'
n = n - 1; // - 연산자는 숫자로 변환
console.log(n);

// 2+3+4+'5' -> 95
// '10'-'4'-'3'- 2 + '5' -> 15


//5 falsy values : 0, '', undefined, null, NaN
// -> boolean으로 변환시 거짓

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('')); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //빈 개체 true

const money = 0; //5 falsy values. 0 이 아닐시 참
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job')
}

//let height = 180; //참
//let height = 0; //거짓
let height; //정확히 정의되지 않은 변수(undefined) -> 거짓
if (height) {
    console.log('defined')
} else {
    console.log('undefined')
}


// equality operators
const age = '18';
if (age === 18) console.log('you just became an adult(strict)');

if (age == 18) console.log('you just became an adult(loose)');
// -> 문자열 '18'이 느슨한 연산자로 인해서 동일하게 인식
// -> 값을 비교할 때는 엄격한 연산자인 === 사용 추천! 

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

// if (favorite == 23) { // '23' == 23
//     console.log('Cool! 23 is amazing number!')
// }
if (favorite === 23) { // '23' == 23
    console.log('Cool! 23 is amazing number!')
} else if (favorite === 7) {
    console.log('7 is also cool number')
} else if (favorite === 9)
    console.log('9 is also cool number')
else {
    console.log('Number is not 23 or 7 or 9')
}

if (favorite !== 23) console.log('why not 23?');


const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); //AND
console.log(hasDriversLicense || hasGoodVision); //OR
console.log(!hasDriversLicense); //NOT

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drvie..')
}

const isTired = true; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drvie..')
}

//coding challenge #3
const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage) {
    console.log('dolphins Win');
} else if (dolphinsAverage < koalasAverage) {
    console.log('koalas Win');
} else {
    console.log('draw!');
}


//Bonus 1
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 123) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log('dolphins Win');
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log('koalas Win');
} else {
    console.log('draw!');
}


//Bonus 2
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log('dolphins Win');
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log('koalas Win');
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log('both win the trophy');
}
else {
    console.log('no one wins the trophy');
}

const day = 'thursday';

//switch문으로 작성
switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('play games');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');

}

//if-else문으로 작성
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
    console.log('play games');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy the weekend');
} else {
    console.log('Not a valid day!');
}
*/

const age = 15;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water')

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

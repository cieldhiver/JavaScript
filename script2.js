"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //변수에 s를 생략시켜 의도적으로 오류를 발생시킨다
if (hasDriversLicense) console.log('I can drive');

//const interface = 'Audio';
//const private = 534;
// -> Uncaught SyntaxError: Unexpected strict mode reserved word


//Functions
function logger() {
    console.log('My name is mina');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)

//Function Declarations
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//Function Expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

//Arrow Functions 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'mina'));

//Other Functions
function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

//Reviewing Functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

//Coding Challenge #1
//Data 1
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No teams wins..");
  }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

//Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

//const years = new Array(1991, 1984, 1996, 2020);
console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]); //Peter : 마지막 요소

friends[2] = "Jay"; //const라도 배열 요소는 변경 가능
console.log(friends);
// friends = ["Bob", "Alice"];
// -> Uncaught TypeError: Assignment to constant variable.

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

//Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];

// 추가 메소드
const newLength = friends.push("Jay"); //배열의 마지막에 추가하는 메소드
console.log(friends);
console.log(newLength);

friends.unshift("John"); //배열의 처음에 추가하는 메소드
console.log(friends);

//제거 메소드
const popped = friends.pop(); // 배열의 마지막 요소를 제거
console.log(popped); //jay -> 제거된 요소가 저장된다
console.log(friends);

friends.shift(); // 배열의 첫번째 요소를 제거
console.log(friends);

console.log(friends.indexOf("Steven")); //1 인덱스 번호
console.log(friends.indexOf("Bob")); //-1

friends.push(23);
console.log(friends.includes("Steven")); //true
console.log(friends.includes("Bob")); //false
console.log(friends.includes(23)); //true

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}

// Coding Challenge #2

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

// Objects
// Dot vs. Bracket Notation(괄호 표기법)
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]); //Jonas
console.log(jonas["last" + nameKey]); //Schmedtmann

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
//console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request!");
}

jonas.location = "Portugal";
jonas["twitter"] = "@hihi";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

// Object Methods
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  //개체 속성으로 function 가능
  //#1
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  //#2
  // calcAge: function () {
  //   //console.log(this); //this는 jonas의 모든 객체
  //   return 2037 - this.birthYear;
  // }

  //#3
  calcAge: function () {
    //새로운 속성 추가
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas["calcAge"](1991));

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());

// Coding Challenge #3
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
//Loop
//#1
console.log("Lifting weights repetition 1 🏋️‍♀️");
console.log("Lifting weights repetition 2 🏋️‍♀️");
console.log("Lifting weights repetition 3 🏋️‍♀️");
console.log("Lifting weights repetition 4 🏋️‍♀️");
console.log("Lifting weights repetition 5 🏋️‍♀️");
console.log("Lifting weights repetition 6 🏋️‍♀️");
console.log("Lifting weights repetition 7 🏋️‍♀️");
console.log("Lifting weights repetition 8 🏋️‍♀️");
console.log("Lifting weights repetition 9 🏋️‍♀️");
console.log("Lifting weights repetition 10 🏋️‍♀️");

//#2
for (let i = 1; i < 11; i++) {
  console.log(`Lifting weights repetition ${i} 🏋️‍♀️`);
}

//Looping Arrays
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]); //빈 배열에 push한다.
}

console.log(types);

//****
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
//****

//Continue : 조건 해당 코드는 실행하지 않고 다음 코드로 넘어가서 끝까지 실행
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

//Break : 조건 실행시 종료
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

// Looping Backwards
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

//Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

// The while Loop : loop 몇 번 반복될지 모르는 상황에서 사용
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE : Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop end!");
}
*/
// Coding Challenge #4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

test
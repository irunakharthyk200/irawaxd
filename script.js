let integerNum = 10;
let floatNum = 5.5;
let str = "Hello";
let boolVal = true;

console.log(typeof integerNum, integerNum);
console.log(typeof floatNum, floatNum);
console.log(typeof str, str);
console.log(typeof boolVal, boolVal);

integerNum = "20";
floatNum = false; 
str = 15 + "text"; 
boolVal = Number(boolVal); 

console.log(typeof integerNum, integerNum);
console.log(typeof floatNum, floatNum);
console.log(typeof str, str);
console.log(typeof boolVal, boolVal);

let numFromString = Number("123");
let stringFromNumber = String(456);
let boolFromString = Boolean("false"); 
let numFromBool = Number(false); 

console.log(numFromString, typeof numFromString);
console.log(stringFromNumber, typeof stringFromNumber);
console.log(boolFromString, typeof boolFromString);
console.log(numFromBool, typeof numFromBool);

let person = {
    name: "ira",
    age: 17,
    isStudent: true,
    hobbies: ["reading", "gaming"],
};

console.log(JSON.stringify(person, null, 2));

let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));
let num3 = Number(prompt("Введіть третє число:"));

let average = (num1 + num2 + num3) / 3;
console.log("Середнє арифметичне:", average);

console.log("Модуль першого числа:", Math.abs(num1));
console.log("Округлення в більшу сторону:", Math.ceil(average));
console.log("Округлення в меншу сторону:", Math.floor(average));
console.log("Піднесення першого числа до другого степеня:", Math.pow(num1, num2));

console.log("Чи ділиться без залишку на 5?", average % 5 === 0);
console.log("Чи ділиться без залишку на 7?", average % 7 === 0);

if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
    console.log("Трикутник існує");
} else {
    console.log("Трикутник НЕ існує");
}

let a = Number(prompt("Введіть перше число:"));
let b = Number(prompt("Введіть друге число:"));
let c = Number(prompt("Введіть третє число:"));

let max = Math.max(a, b, c);
let min = Math.min(a, b, c);

console.log("Найбільше число:", max);
console.log("Найменше число:", min);

let isEven = a % 2 === 0 % 2 === 0;
console.log("Чи хоча б одне число парне?", isEven);

let condition = a > b && b < c;
console.log("Перша змінна більше другої і друга менше третьої?", condition);

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(`Число ${a} є простим?`, isPrime(a));
console.log(`Число ${b} є простим?`, isPrime(b));
console.log(`Число ${c} є простим?`, isPrime(c));

let userName = prompt("ірина");
let birthYear = Number(prompt("2008"));
let city = prompt("луцьк");

const currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log(`Вам ${age} років.`);

// 3. Визначення вікової групи
let ageGroup;
if (age < 12) {
    ageGroup = "дитина";
} else if (age < 18) {
    ageGroup = "підліток";
} else if (age < 60) {
    ageGroup = "дорослий";
} else {
    ageGroup = "літня людина";
}
console.log(`Ви належите до групи: ${ageGroup}`);

let capitals = {
    "Україна": "Київ",
    "США": "Вашингтон",
    "Велика Британія": "Лондон",
    "Франція": "Париж"
};

let country = "Україна";
if (city === capitals[country]) {
    console.log(`${city} є столицею ${country}`);
} else {
    console.log(`${city} не є столицею ${country}`);
}

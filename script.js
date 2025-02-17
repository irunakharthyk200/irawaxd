let age = parseInt(prompt("Будь ласка, введіть ваш вік:"));
    if (age < 18) {
        alert("Вам заборонено вхід.");
    }else if (age <=65) {
        alert("Ласкаво просимо!");
    }else if (age >65){
        alert("Будь ласка, будьте обережні!");
}

let n = parseInt(prompt("Введіть число n:"));
if (!isNaN(n) && n >= 2) {
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
} else {
    console.log("введіть число більше або рівне 2.");
}

 let num = parseInt(prompt("Введіть число для обчислення факторіалу:"), 10);
   if (!isNaN(num) && num >= 0) {
            let factorial = 1;
            let i = 1;

            while (i <= num) {
                factorial *= i;
                i++;
            }
          console.log("Факторіал числа " + num + " дорівнює " + factorial);
        } else {
            console.log("введіть невід’ємне числоs");
        }
let a = parseFloat(prompt("Введіть перше число:"));
        let b = parseFloat(prompt("Введіть друге число:"));
        let operation = prompt("Введіть операцію (+, -, *, /):");

        if (!isNaN(a) && !isNaN(b)) {
            let result;

            switch (operation) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "/":
                    if (b !== 0) {
                        result = a / b;
                    } else {
                        result = "Помилка: ділення на нуль!";
                    }
                    break;
                default:
                    result = "Невірна операція!";
            }

            alert("Результат: " + result);
        } else {
            alert("Будь ласка, введіть коректні числа.");
        }
        let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
   
    guess = parseInt(prompt("Вгадайте число від 1 до 100: "), 10);
    if (guess < secretNumber) {
        alert("Загадане число більше");
    } else if (guess > secretNumber) {
        alert("Загадане число менше");
    } else {
        alert("Вітаємо! Ви вгадали число!");
    }
} while (guess !== secretNumber);
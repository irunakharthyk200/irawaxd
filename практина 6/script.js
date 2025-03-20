function getRandomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            resolve(randomNumber);
        }, 1000);
    });
}

async function processNumber() {
    try {
        const number = await getRandomNumber();
        console.log(`Згенероване число: ${number}`);

        if (number < 50) {
            return Promise.resolve(number + 20);
        } else {
            return Promise.reject("Занадто велике число!");
        }
    } catch (error) {
        return "Оброблено помилку";
    }
}

document.getElementById("run").addEventListener("click", async () => {
    const result = await processNumber();
    document.getElementById("result").textContent = 'Результат: ${result}'s;
});
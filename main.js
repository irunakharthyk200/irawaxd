document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const restoreButton = document.getElementById("restoreData");
    const responseMessage = document.getElementById("responseMessage");

    restoreButton.addEventListener("click", () => {
        const savedData = JSON.parse(localStorage.getItem("formData"));
        if (savedData) {
            nameInput.value = savedData.name || "";
            emailInput.value = savedData.email || "";
            responseMessage.textContent = "Дані відновлено!";
        } else {
            responseMessage.textContent = "Немає збережених даних.";
        }
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (!name || !email || !email.includes("@")) {

    showMessage("Будь ласка, введіть коректні дані!", "red");
    return;
}

        const userData = { name, email };

        localStorage.setItem("formData", JSON.stringify(userData));

        try {
            const response = await fetch("https://reqres.in/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            const result = await response.json();

            if (response.ok) {
                responseMessage.textContent = 'Успіх!  ID користувача: ${result.id}';
                responseMessage.style.color = "green";
            } else {
                responseMessage.textContent = "Помилка від сервера!";
                responseMessage.style.color = "red";
            }
        } catch (error) {
            responseMessage.textContent = "Помилка з'єднання!";
            responseMessage.style.color = "red";
        }
    });
});
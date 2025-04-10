<?php
function required($value) {
    return trim($value) !== '' ? null : 'Це поле є обовʼязковим.';
}

function isValidEmail($value) {
    return filter_var($value, FILTER_VALIDATE_EMAIL) ? null : 'Некоректний email.';
}

function minLength($value, $min) {
    return mb_strlen(trim($value)) >= $min ? null : "Мінімальна довжина — {$min} символів.";
}

// Основна функція валідації
function validateForm(array $data, array $rules): array {
    $errors = [];

    foreach ($rules as $field => $callbacks) {
        foreach ($callbacks as $callback) {
            $error = call_user_func($callback, $data[$field] ?? '');
            if ($error !== null) {
                $errors[$field] = $error;
                break;
            }
        }
    }

    return $errors;
}

$errors = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formData = [
        'name' => $_POST['name'] ?? '',
        'email' => $_POST['email'] ?? '',
        'password' => $_POST['password'] ?? ''
    ];

    $rules = [
        'name' => [
            fn($v) => required($v),
            fn($v) => minLength($v, 2)
        ],
        'email' => [
            fn($v) => required($v),
            fn($v) => isValidEmail($v)
        ],
        'password' => [
            fn($v) => required($v),
            fn($v) => minLength($v, 6)
        ]
    ];

    $errors = my_code($formData, $rules);

    if (empty($errors)) {
        echo "<p style='color: green;'>Успішна реєстрація!</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Реєстрація</title>
    <style>
        body { font-family: sans-serif; padding: 20px; max-width: 500px; margin: auto; }
        input { display: block; margin-bottom: 10px; width: 100%; padding: 8px; }
        .error { color: crimson; font-size: 0.9em; margin-top: -8px; margin-bottom: 10px; }
    </style>
</head>
<body>
    <h2>Форма реєстрації</h2>
    <form method="post">
        <label>Ім’я:
            <input type="text" name="name" value="<?= htmlspecialchars($_POST['name'] ?? '') ?>">
            <?php if (!empty($errors['name'])): ?><div class="error"><?= $errors['name'] ?></div><?php endif; ?>
        </label>

        <label>Email:
            <input type="email" name="email" value="<?= htmlspecialchars($_POST['email'] ?? '') ?>">
            <?php if (!empty($errors['email'])): ?><div class="error"><?= $errors['email'] ?></div><?php endif; ?>
        </label>

        <label>Пароль:
            <input type="password" name="password">
            <?php if (!empty($errors['password'])): ?><div class="error"><?= $errors['password'] ?></div><?php endif; ?>
        </label>

        <button type="submit">Зареєструватися</button>
    </form>
</body>
</html>
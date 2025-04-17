<?php
$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = trim($_POST['login']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if (!filter_var($login, FILTER_VALIDATE_REGEXP, ["options" => ["regexp" => "/^[a-zA-Z0-9]+$/"]])) {
        $message = 'Логін може містити тільки латиницю та цифри.';
    }
    elseif ($password !== $confirm_password) {
        $message = 'Паролі не співпадають.';
    }
    else {
        $message = 'Реєстрація успішна!';
    }
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Реєстрація користувача</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        form { max-width: 300px; }
        input { display: block; margin-bottom: 10px; padding: 8px; width: 100%; }
        .message { margin-top: 10px; font-weight: bold; }
    </style>
</head>
<body>

<h2>Реєстрація користувача</h2>

<form method="post">
    <input type="text" name="login" placeholder="Логін" required>
    <input type="password" name="password" placeholder="Пароль" required>
    <input type="password" name="confirm_password" placeholder="Підтвердьте пароль" required>
    <button type="submit">Зареєструватися</button>
</form>

<?php if ($message): ?>
    <div class="message"><?= htmlspecialchars($message) ?></div>
<?php endif; ?>

</body>
</html>
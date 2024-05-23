const express = require("express");
const app = express();

// Устанавливаем EJS как шаблонизатор
app.set("view engine", "ejs");

// Настройка директории для статических файлов
app.use(express.static(__dirname + "/public"));

// Обработка запроса на главную страницу
app.get("/", (req, res) => {
  const data = {
    title: "Заголовок письма",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum distinctio tenetur vero aliquid possimus vel debitis ipsa doloribus quisquam, esse fugit nulla sapiente quidem neque utvoluptates! Non voluptates atque odio rem.",
  };
  res.render("index", data);
});

// Запуск сервера
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

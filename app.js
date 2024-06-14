const express = require("express");
const app = express();
const router = express.Router();

// Устанавливаем EJS как шаблонизатор
app.set("view engine", "ejs");

// Настраиваем рендер страниц
router.get("/default-letter", (req, res, next) => {
  const data = {
    title: "Заголовок письма",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum distinctio tenetur vero aliquid possimus vel debitis ipsa doloribus quisquam, esse fugit nulla sapiente quidem neque utvoluptates! Non voluptates atque odio rem.",
  };
  res.render("default-letter", data);
});

router.get("/confirmation-code", (req, res, next) => {
  const data = {
    code: "230672",
  };
  res.render("confirmation-code", data);
});

router.get("/confirmation-email", (req, res, next) => {
  res.render("confirmation-email");
});

// Настройка директории для статических файлов
app.use(router, express.static(__dirname + "/public"));

// Обработка запроса на главную страницу

// Запуск сервера
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

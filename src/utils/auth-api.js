const BASE_URL = "https://auth.nomoreparties.co";

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: "somepassword",
      email: "email-5@yandex.ru",
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.log(`Ошибка регистрации: ${err.message}`));
};

export const authorize = () => {

}

// register();
//
//
//
//
//
//
// 4. Реализуйте аутентификацию пользователя
// Базовый URL: https://auth.nomoreparties.co.
// Параметры запроса для регистрации в нашем сервисе:
// Эндпоинт: /signup
// Метод: POST
// Заголовки:
// "Content-Type": "application/json"
// Тело запроса:
// "password": "somepassword",
// "email": "email@yandex.ru"
// Успешный ответ:
// {
//     "data": {
//         "_id": "5f5204c577488bcaa8b7bdf2",,
//         "email": "email@yandex.ru"
//     }
// }
// Коды ошибок:
// 400 - некорректно заполнено одно из полей
// Параметры запроса для авторизации в нашем сервисе:
// Эндпоинт: /signin
// Метод: POST
// Заголовки:
// "Content-Type": "application/json"
// Тело запроса:
// {
//     "password": "dsfsdfsdfsdf",
//     "email": "email@email.ru"
// }
// Пример успешного ответа:
// {
//     "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjUxNDhlNWJiODhmZGNhOTIxYjZhYzciLCJpYXQiOjE1OTkyMTExNzN9.Q3DVLh7t0f0BjyG9gh3UlUREYQxl2chdGTGy701lF6I"
// }
// Коды ошибок:
// 400 - не передано одно из полей
// 401 - пользователь с email не найден
// Параметры запроса для проверки валидности токена и получения email для вставки в шапку сайта:
// Эндпоинт: /users/me
// Метод:  GET
// Заголовки:
// {
//     "Content-Type": "application/json",
//     "Authorization" : `Bearer ${ВАШ JWT}`
// }
// Пример успешного ответа:
// {
//     "_id":"1f525cf06e02630312f3fed7",
//     "email":"email@email.ru"
// }
// Коды ошибок:
// # Если токен не передан или передан без Bearer
// 400 — Токен не передан или передан не в том формате

// # Если передан некорректный токен
// 401 — Переданный токен некорректен

const BASE_URL = "https://auth.nomoreparties.co";


export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: "somepassword",
      email: "email-15@yandex.ru",
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
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: "somepassword",
      email: "email-15@yandex.ru",
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      localStorage.setItem("jwt", res.token);
      return res;
    })
    .catch((err) => console.log(`Ошибка авторизации: ${err.message}`));
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(`Ошибка проверки токена: ${err.message}`);
    });
};

// register();
// authorize();
// checkToken();
//
//


const BASE_URL = "https://auth.nomoreparties.co";

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: "somepassword",
      email: "email-19@yandex.ru",
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.statusText}`);
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const authorize = () => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: "somepassword",
      email: "email-19@yandex.ru",
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.statusText}`);
    })
    .then((data) => {
      localStorage.setItem("jwt", data.token);
      return data;
    })
    .catch((err) => console.log(err));
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
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.statusText}`);
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};

// register();
// authorize();
// checkToken();
//
//

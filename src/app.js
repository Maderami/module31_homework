import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import taskFieldTemplate from "./templates/taskField.html";
import noAccessTemplate from "./templates/noAccess.html";
import {User} from "./models/User";
import {generateTestUser} from "./utils";
import {State} from "./state";
import {authUser} from "./services/auth";
import MD5 from "crypto-js/md5";
import db from "../db";

export const appState = new State();

db.pool.connect((error) => {
  if (error) throw error;
  console.log('Успешное подключение к базе данных');
});

const loginForm = document.querySelector("#app-login-form");

generateTestUser(User);

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const login = formData.get("login");
  const password = MD5(formData.get("password"));

  document.querySelector("#content").innerHTML = authUser(login, password)
      ? taskFieldTemplate
      : noAccessTemplate;
});


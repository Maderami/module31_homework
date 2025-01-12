import { appState } from "../app";
import { User } from "../models/User";
import MD5 from "crypto-js/md5";

export const authUser = function (login, password) {
  const user = new User(login, password);
  if (!user.hasAccess) return false;
  appState.currentUser = user;
  return true;
};

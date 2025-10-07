const REGISTERED_USERS_KEY = "registered_users";
const ACTIVE_USER = "active_user";

export interface IUserModel {
  name: string;
  username: string;
  password: string;
}

const addUser = (user: IUserModel) => {
  var usersStr = localStorage.getItem(REGISTERED_USERS_KEY) || "[]";
  var users = JSON.parse(usersStr) as IUserModel[];
  users.push(user);

  localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
};

const isUsernameExists = (username: string): boolean => {
  var usersStr = localStorage.getItem(REGISTERED_USERS_KEY) || "[]";
  var users = JSON.parse(usersStr) as IUserModel[];

  var user = users.find((x) => x.username == username);
  return user != null;
};

const getUser = (username: string, password: string) => {
  var usersStr = localStorage.getItem(REGISTERED_USERS_KEY) || "[]";
  var users = JSON.parse(usersStr) as IUserModel[];

  return users.find((x) => x.username == username && x.password == password);
};

const updateActiveUser = (user: IUserModel) => {
  localStorage.setItem(ACTIVE_USER, JSON.stringify(user));
};

const getActiveUser = () => {
  var usersStr = localStorage.getItem(ACTIVE_USER) || null;
  if (usersStr == null) return null;

  var user = JSON.parse(usersStr) as IUserModel;
  return user;
};

const removeActiveUser = () => {
  localStorage.removeItem(ACTIVE_USER);
};

export {
  REGISTERED_USERS_KEY,
  addUser,
  getUser,
  isUsernameExists,
  updateActiveUser,
  getActiveUser,
  removeActiveUser,
};

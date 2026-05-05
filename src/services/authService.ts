// import { loginApi } from "../api/authApi";
import { getUsers } from "../api/authApi";

import { User } from "@/types/auth";
export const login = async (
  clientid: string,
  password: string,
): Promise<User[]> => {
  const user = await getUsers(clientid, password);
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user[0]));

  return user;
  // const { user, token } = await loginApi(email, password);
  // localStorage.setItem("user", JSON.stringify(user));
  // localStorage.setItem("token", token);
  // return user;
};

export const logout = (): void => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

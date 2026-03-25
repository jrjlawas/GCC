import { loginApi } from "../api/authApi";
import { User } from "../types/auth";

export const login = async (email: string, password: string): Promise<User> => {
  const { user, token } = await loginApi(email, password);

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);

  return user;
};

export const logout = (): void => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

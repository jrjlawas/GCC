import { users } from "../mock/users";
import { LoginResponse } from "../types/auth";
import { apiClient } from "./client";

const USE_MOCK = true;

// MOCK

const mockLogin = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  const user = users.find(
    (u) => u.clientid === email && u.password === password,
  );

  if (!user) throw new Error("Invalid credentials");

  return {
    user,
    token: "mock-jwt-token",
  };
};

// (AWS API Gateway)
const realLogin = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  return apiClient<LoginResponse>("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export const loginApi = (email: string, password: string) => {
  return USE_MOCK ? mockLogin(email, password) : realLogin(email, password);
};

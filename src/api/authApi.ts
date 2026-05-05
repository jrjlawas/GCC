// import { users } from "../mock/users";
// import { LoginResponse } from "../types/auth";
// import { apiClient } from "./client";

import { GET_USER_BY_CREDENTIALS } from "@/graphql/users/users_queries";
import { client } from "@/lib/apolloClient";
import { ListUsersResponse, User } from "@/types/auth";

// const USE_MOCK = true;

// MOCK

// const mockLogin = async (
//   email: string,
//   password: string
// ): Promise<LoginResponse> => {
//   const user = users.find(
//     (u) => u.clientid === email && u.password === password
//   );

//   if (!user) throw new Error("Invalid credentials");

//   return {
//     user,
//     token: "mock-jwt-token",
//   };
// };

// (AWS API Gateway)--Original
// const realLogin = async (
//   email: string,
//   password: string
// ): Promise<LoginResponse> => {
//   return apiClient<LoginResponse>("/login", {
//     method: "POST",
//     body: JSON.stringify({ email, password }),
//   });
// };

export const getUsers = async (
  clientid: string,
  password: string,
): Promise<User[]> => {
  const { data } = await client.query<ListUsersResponse>({
    query: GET_USER_BY_CREDENTIALS,
    variables: {
      clientid,
      password,
    },
  });
  const users = data?.listGbsAccounts?.items ?? [];
  if (users.length === 0) {
    throw new Error("Invalid credentials");
  }
  return users;
};

// export const loginApi = (email: string, password: string) => {
//   return USE_MOCK ? mockLogin(email, password) : realLogin(email, password);
// };

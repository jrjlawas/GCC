import { GET_USER_BY_CREDENTIALS } from "@/graphql/users/users_queries";
import { client } from "@/lib/apolloClient";
import { ListUsersResponse, User } from "@/types/auth";

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
    throw new Error("Invalid credentials!");
  }
  return users;
};

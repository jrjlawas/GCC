export interface User {
  id: number;
  nickname: string;
  firstname: string;
  lastname: string;
  email: string;
  clientid: string;
  password: string;
  role?: string;
}

export interface ListUsersResponse {
  listGbsAccounts: {
    items: User[];
  };
}

export interface LoginResponse {
  user: User;
  token: string;
}

// export interface WebApplications {
//   id: number;
//   webname: string;
//   desc?: string;
// }

export interface User {
  id: number;
  nickname: string;
  firstname: string;
  lastname: string;
  clientid: string;
  role?: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

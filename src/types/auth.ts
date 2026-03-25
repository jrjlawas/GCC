export interface User {
  id: number;
  name: string;
  clientid: string;
  role?: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

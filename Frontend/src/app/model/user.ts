export interface IUserForRegister {
  userName: string;
  userEmail: string;
  password: string;
  userMobile: number;
}

export interface IUserForLogin {
  userName: string;
  password: string;
  token: string;
}

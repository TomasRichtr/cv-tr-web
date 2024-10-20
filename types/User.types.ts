export interface User {
  id: string;
  name: string;
  password: string;
}

export enum UserCols {
  Id = 'id',
  Name = 'name',
  Password = 'password',
}

export interface Message {
  id: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export enum MessagesCols {
  Id = 'id',
  Name = 'name',
  Company = 'company',
  Email = 'email',
  Phone = 'phone',
  Message = 'message',
}

export interface Message {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  message: string;
  read: 0 | 1 | boolean | null;
}

export enum MessagesCols {
  Id = 'id',
  Name = 'name',
  Company = 'company',
  Email = 'email',
  Phone = 'phone',
  Message = 'message',
  Read = 'read',
}

export type NewMessage = Omit<Message, 'id'>;

export interface Message {
  id: string;
  name: string | null;
  company: string | null;
  email: string | null;
  phone: string | null;
  message: string | null;
}

export enum MessagesCols {
  Id = 'id',
  Name = 'name',
  Company = 'company',
  Email = 'email',
  Phone = 'phone',
  Message = 'message',
}

export type NewMessage = Omit<Message, 'id'>;

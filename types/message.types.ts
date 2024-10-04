export interface Message {
  id: string;
  name: string;
  company?: string | null;
  email: string;
  phone?: string | null;
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

export type NewMessage = Omit<Message, 'id'>;

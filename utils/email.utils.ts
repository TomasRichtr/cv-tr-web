import nodemailer from 'nodemailer';
import type { Message } from '../types/message.types';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.emailLogin,
    pass: process.env.emailPassword,
  },
});

export const sendEmail = async (from: string, subject: string, text: string) => {
  const mailOptions = {
    from,
    to: 't.richtr@email.cz',
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info.response;
  }
  catch (error) {
    console.error('Error sending email: ', error);
    throw error;
  }
};

export const buildSubject = (id: number, message: Omit<Message, 'id'>) => {
  let messageSubject = `from: ${message.email}, ${message.name}, id: ${id}`;
  if (message.company) messageSubject = messageSubject + ` / ${message.company}`;
  if (message.phone) messageSubject = messageSubject + ` / ${message.phone}`;
  return messageSubject;
};

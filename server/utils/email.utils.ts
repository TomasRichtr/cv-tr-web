import nodemailer from 'nodemailer';

const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.public.emailLogin,
    pass: config.public.emailPassword,
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

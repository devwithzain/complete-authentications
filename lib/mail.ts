import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendverificationEmail = async (email: string, token: string) => {
   const confirmLink = `http://localhost:3000/new-verification?token=${token}`;

   await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Confirm your email',
      html: `
         <p>Please confirm your email by clicking the link below:</p>
         <a href="${confirmLink}">Confirm Email</a>
      `,
   });
};
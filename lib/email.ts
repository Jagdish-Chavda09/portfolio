import nodemailer from "nodemailer";
import { Resend } from "resend";

interface EmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: EmailParams) {
  const recipient = process.env.CONTACT_RECEIVER_EMAIL || "ahirj864@gmail.com";
  const subject = `Portfolio Contact from ${name}`;

  // 1. Try Resend if configured
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const result = await resend.emails.send({
        from: "Portfolio Form <onboarding@resend.dev>",
        to: recipient,
        replyTo: email,
        subject: subject,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h2 style="color: #0D9488; border-bottom: 2px solid #0D9488; padding-bottom: 8px;">New Portfolio Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 4px; white-space: pre-wrap; font-style: italic;">
              ${message}
            </div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 12px; color: #6b7280; text-align: center;">Submitted from Jagdish B Chavda's portfolio website</p>
          </div>
        `,
      });
      if (result.error) {
        console.error("Resend API returned error:", result.error);
      } else {
        return { success: true, provider: "resend", data: result.data };
      }
    } catch (error: any) {
      console.error("Resend delivery failed, falling back...", error);
    }
  }

  // 2. Try Nodemailer (SMTP) if configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: recipient,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h2 style="color: #0D9488; border-bottom: 2px solid #0D9488; padding-bottom: 8px;">New Portfolio Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 4px; white-space: pre-wrap; font-style: italic;">
              ${message}
            </div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 12px; color: #6b7280; text-align: center;">Submitted from Jagdish B Chavda's portfolio website</p>
          </div>
        `,
      });

      return { success: true, provider: "nodemailer", data: info };
    } catch (error: any) {
      console.error("Nodemailer SMTP failed...", error);
      throw new Error(`Email delivery failed: ${error.message}`);
    }
  }

  // 3. Dev fallback (writes to console when credentials aren't set)
  console.log("--- DEVELOPMENT EMAIL SIMULATION ---");
  console.log(`To: ${recipient}`);
  console.log(`From: ${name} <${email}>`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log("-------------------------------------");

  return { success: true, provider: "console_simulation" };
}

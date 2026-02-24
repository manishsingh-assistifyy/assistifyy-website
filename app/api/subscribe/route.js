import nodemailer from "nodemailer";
import { emailTemplate } from "@/app/email-templates/waitList-emailTemplate";

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: process.env.MAILTRAP_PORT,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    await transporter.sendMail({
      from: process.env.MAILTRAP_FROM_EMAIL,
      to: email,
      subject: "Welcome to Assistifyy",
      html: emailTemplate(),
    });

    return Response.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}

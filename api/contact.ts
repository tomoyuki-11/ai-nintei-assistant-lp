import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const TO_EMAIL = "itcaremanagement.001@gmail.com";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, message } = (req.body ?? {}) as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    res.status(400).json({ error: "必須項目が入力されていません" });
    return;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailAppPassword) {
    console.error("GMAIL_USER or GMAIL_APP_PASSWORD is not configured");
    res.status(500).json({ error: "サーバー設定エラーが発生しました" });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  try {
    await transporter.sendMail({
      from: `AI認定調査アシスタント <${gmailUser}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `【お問い合わせ】${name}様より`,
      text: `お名前：${name}\nメールアドレス：${email}\n\nお問い合わせ内容：\n${message}`,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Gmail send failed", err);
    res.status(502).json({ error: "送信に失敗しました" });
  }
}

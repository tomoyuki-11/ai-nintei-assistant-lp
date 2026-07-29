import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "itcaremanagement.001@gmail.com";

export async function POST(req: NextRequest) {
  const { name, email, message } = (await req.json().catch(() => ({}))) as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "必須項目が入力されていません" }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailAppPassword) {
    console.error("GMAIL_USER or GMAIL_APP_PASSWORD is not configured");
    return NextResponse.json({ error: "サーバー設定エラーが発生しました" }, { status: 500 });
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
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Gmail send failed", err);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 502 });
  }
}

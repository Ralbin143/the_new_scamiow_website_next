import { NextResponse } from "next/server";

const SALES_EMAIL = "sales@skaj.co.in";

type QuoteBody = {
  name?: string;
  phone?: string;
  email?: string;
  car?: string;
  film?: string;
  message?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: QuoteBody;
  try {
    body = (await request.json()) as QuoteBody;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const email = body.email?.trim();
  const car = body.car?.trim();
  const film = body.film?.trim();
  const message = body.message?.trim() ?? "";

  if (!name || !phone || !email || !car || !film) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 503 },
    );
  }

  const from =
    process.env.RESEND_FROM?.trim() ||
    "SKAJ Website <onboarding@resend.dev>";

  const text = [
    "New quote request (SKAJ website)",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Car: ${car}`,
    `Film: ${film}`,
    ...(message ? [`Message: ${message}`] : []),
  ].join("\n");

  const html = `
    <h2 style="font-family:system-ui,sans-serif;font-size:18px;">Quote request</h2>
    <table style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5;border-collapse:collapse;">
      <tr><td style="padding:4px 12px 4px 0;color:#666;">Name</td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#666;">Phone</td><td>${escapeHtml(phone)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#666;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#666;">Car</td><td>${escapeHtml(car)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#666;">Film</td><td>${escapeHtml(film)}</td></tr>
      ${
        message
          ? `<tr><td style="padding:4px 12px 4px 0;vertical-align:top;color:#666;">Message</td><td>${escapeHtml(message).replace(/\n/g, "<br/>")}</td></tr>`
          : ""
      }
    </table>
  `.trim();

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [SALES_EMAIL],
      subject: `Quote request — ${name.slice(0, 60)}`,
      text,
      html,
      reply_to: email,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Resend API error:", res.status, errText);
    return NextResponse.json(
      { error: "Could not send your request. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

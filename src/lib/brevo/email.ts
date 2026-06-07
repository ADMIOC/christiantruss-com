type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

export async function sendBrevoEmail({ to, subject, html }: EmailPayload) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    return { ok: false, reason: "BREVO_API_KEY is not configured." };
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        email: process.env.BREVO_SENDER_EMAIL || "hello@christiantruss.com",
        name: process.env.BREVO_SENDER_NAME || "Christian Truss",
      },
      to: [{ email: to }],
      subject,
      htmlContent: html,
    }),
  });

  return { ok: response.ok, status: response.status };
}

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Wszystkie pola są wymagane.' }), { status: 400 });
    }

    // Konfiguracja SMTP OVH
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',       // OVH SMTP server
      port: 465,                  // lub 465 dla SSL
      secure: true,              // true jeśli port 465
      auth: {
        user: 'mateusz.wawro4@gmail.com', // Twój email OVH
        pass: 'rowq kmdh pfvn xwjh',          // Hasło do skrzynki
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,        // kto wysyła
      to: 'mateusz@wawro.ovh',         // do kogo
      subject: `[Kontakt z portfolio] ${subject}`,
      text: message,
      html: `<p>${message}</p><p>Od: ${name} (${email})</p>`,
    });

    return new Response(JSON.stringify({ message: 'Wiadomość wysłana!' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Coś poszło nie tak.' }), { status: 500 });
  }
}

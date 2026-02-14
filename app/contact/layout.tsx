import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Skontaktuj się z Mateuszem Wawro - DevOps Engineer. Formularz kontaktowy, email, telefon. Chętnie porozmawiam o współpracy.",
  openGraph: {
    title: "Kontakt | Mateusz Wawro",
    description: "Formularz kontaktowy - napisz do mnie w sprawie współpracy lub projektu.",
    url: "https://portfolio.wawro.ovh/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

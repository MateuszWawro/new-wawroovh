import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Cookies",
  description: "Polityka plików cookie na stronie portfolio Mateusza Wawro. Informacje o wykorzystywanych plikach cookie i prywatności.",
  openGraph: {
    title: "Polityka Cookies | Mateusz Wawro",
    description: "Jakie pliki cookie wykorzystujemy i jak zarządzamy Twoją prywatnością.",
    url: "https://portfolio.wawro.ovh/cookies",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

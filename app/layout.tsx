import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Mateusz Wawro - DevOps Engineer",
  description: "DevOps Engineer & IT Infrastructure Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
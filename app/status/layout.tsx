import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homelab Status",
  description: "Status usług w homelab Mateusza Wawro - monitoring dostępności serwerów, CI/CD, bezpieczeństwa i infrastruktury w czasie rzeczywistym.",
  openGraph: {
    title: "Homelab Status | Mateusz Wawro",
    description: "Monitoring dostępności usług homelab w czasie rzeczywistym.",
    url: "https://portfolio.wawro.ovh/status",
  },
};

export default function StatusLayout({ children }: { children: React.ReactNode }) {
  return children;
}

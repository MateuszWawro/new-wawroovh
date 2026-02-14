import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O mnie",
  description: "Mateusz Wawro - DevOps Engineer z Elbląga. Doświadczenie w Docker, Kubernetes, CI/CD, Ansible, Terraform i monitoringu. Poznaj moją historię i umiejętności.",
  openGraph: {
    title: "O mnie | Mateusz Wawro",
    description: "DevOps Engineer - doświadczenie, edukacja, umiejętności techniczne i certyfikaty.",
    url: "https://portfolio.wawro.ovh/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekty",
  description: "Portfolio projektów DevOps i IT - strony internetowe, infrastruktura homelab, aplikacje. Docker, GitLab CI/CD, Proxmox, monitoring i automatyzacja.",
  openGraph: {
    title: "Projekty | Mateusz Wawro",
    description: "Portfolio projektów DevOps - homelab, strony WWW, aplikacje i automatyzacja infrastruktury.",
    url: "https://portfolio.wawro.ovh/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

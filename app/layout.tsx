import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.wawro.ovh'),
  title: {
    default: "Mateusz Wawro - DevOps Engineer & IT Infrastructure Specialist",
    template: "%s | Mateusz Wawro"
  },
  description: "DevOps Engineer specjalizujący się w Docker, Kubernetes, GitLab CI/CD, Ansible, Terraform, monitoringu Zabbix i bezpieczeństwie infrastruktury IT. Portfolio projektów i homelab.",
  keywords: [
    "DevOps",
    "Infrastructure",
    "Docker",
    "Kubernetes",
    "GitLab CI/CD",
    "Ansible",
    "Terraform",
    "Wazuh",
    "Prometheus",
    "Grafana",
    "Zabbix",
    "IT Infrastructure",
    "Automation",
    "Security",
    "Homelab",
    "Elbląg",
    "Mateusz Wawro"
  ],
  authors: [{ name: "Mateusz Wawro" }],
  creator: "Mateusz Wawro",
  publisher: "Mateusz Wawro",
  alternates: {
    canonical: 'https://portfolio.wawro.ovh',
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    alternateLocale: "en_US",
    url: "https://portfolio.wawro.ovh",
    siteName: "Mateusz Wawro - DevOps Engineer",
    title: "Mateusz Wawro - DevOps Engineer & IT Infrastructure Specialist",
    description: "Portfolio DevOps Engineer - Docker, Kubernetes, CI/CD, Infrastructure as Code, Monitoring i Security",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mateusz Wawro - DevOps Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateusz Wawro - DevOps Engineer",
    description: "DevOps Engineer - Docker, Kubernetes, CI/CD, Infrastructure as Code",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "", // Dodaj kod z Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
  <link rel="canonical" href="https://portfolio.wawro.ovh" />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mateusz Wawro",
          "url": "https://portfolio.wawro.ovh",
          "jobTitle": "DevOps Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "OPEGIEKA Sp. z o.o."
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Elbląg",
            "addressCountry": "PL"
          },
          "sameAs": [
            "https://github.com/yourusername",
            "https://linkedin.com/in/yourusername"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Mateusz Wawro - DevOps Engineer",
          "url": "https://portfolio.wawro.ovh",
          "description": "Portfolio DevOps Engineer - Docker, Kubernetes, CI/CD, Infrastructure as Code",
          "inLanguage": ["pl-PL", "en-US"]
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://portfolio.wawro.ovh" },
            { "@type": "ListItem", "position": 2, "name": "About", "item": "https://portfolio.wawro.ovh/about" },
            { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://portfolio.wawro.ovh/blog" },
            { "@type": "ListItem", "position": 4, "name": "Projects", "item": "https://portfolio.wawro.ovh/projects" },
            { "@type": "ListItem", "position": 5, "name": "Contact", "item": "https://portfolio.wawro.ovh/contact" }
          ]
        }
      ])
    }}
  />
</head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <CookieBanner />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
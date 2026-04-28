export type Lang = 'pl' | 'en';

export const translations = {
  pl: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'O mnie',
      blog: 'Blog',
      projects: 'Projekty',
      status: 'Status',
      contact: 'Kontakt',
    },

    // Hero
    hero: {
      typewriterTexts: [
        'DevOps Engineer',
        'Automation Enthusiast',
        'CI/CD Builder',
        'Homelab Architect',
        'ISTQB Certified Tester',
        'Websites Creator',
      ],
      subtitle: 'Buduję infrastrukturę, która działa szybciej niż deadline\'y się zbliżają ⚙️',
      contactBtn: 'Skontaktuj się',
      aboutBtn: 'O mnie',
    },

    // HomeHighlights
    highlights: {
      statsTitle: 'Portfolio w liczbach',
      statsSubtitle: 'Doświadczenie i realizacje',
      yearsExp: 'Lat doświadczenia',
      technologies: 'Technologii',
      projects: 'Projektów',
      services247: 'Usługi 24/7',
      whatIDo: 'Co robię?',
      specializations: 'Specjalizacje i obszary działania',
      cicdDesc: 'GitLab CI/CD, GitHub Actions, automatyzacja deploymentów i testów',
      iacDesc: 'Terraform, Ansible, Proxmox',
      securityDesc: 'Wazuh, Trivy, DefectDojo',
      observabilityDesc: 'Prometheus, Grafana, Zabbix',
      seeProjects: 'Zobacz projekty',
    },

    // About
    about: {
      title: 'O mnie',
      subtitle: 'Poznaj moją drogę w świecie DevOps, edukację i technologie, które stosuję na co dzień',
      yearsExp: 'Lat doświadczenia',
      technologies: 'Technologii',
      positions: 'Stanowiska',
      itCompanies: 'Firmy IT',
      education: 'Wykształcenie',
      thesisTopic: 'Temat pracy:',
      experience: 'Doświadczenie zawodowe',
      currently: 'Obecnie',
      techStack: 'Stack Technologiczny',
      educationData: [
        {
          degree: 'Magister',
          field: 'Zarządzanie procesami i usługami IT',
          school: 'WSB Merito Gdańsk',
          years: '2024 - 2026',
          status: 'Ukończone',
          thesis: 'Czynniki determinujące skuteczność zarządzania zespołem testerskim w różnych modelach pracy na przykładzie przedsiębiorstwa OPEGIEKA',
        },
        {
          degree: 'Inżynier',
          field: 'Grafika i Multimedia',
          school: 'Akademia Nauk Stosowanych w Elblągu',
          years: '2016 - 2022',
          status: 'Ukończone',
          thesis: 'Skanowanie Fotogrametryczne obiektów architektonicznych na podstawie Wojewódzkiego Szpitala Zespolonego w Elblągu',
        },
      ],
      experienceData: [
        {
          title: 'Junior DevOps/SysOps',
          company: 'OPEGIEKA Sp. z o.o.',
          location: 'Elbląg',
          type: 'Hybrydowa',
          period: 'Październik 2024 - obecnie',
          current: true,
          responsibilities: [
            'Zarządzanie procesami CI/CD (GitLab, GitHub Actions)',
            'Konteneryzacja aplikacji (Docker, Kubernetes)',
            'Automatyzacja infrastruktury (Ansible, Terraform)',
            'Monitoring i bezpieczeństwo (Zabbix, Wazuh, Trivy)',
            'Testy wydajności i bezpieczeństwa',
            'Administracja serwerami Linux/Ubuntu',
          ],
        },
        {
          title: 'Junior QA Engineer',
          company: 'OPEGIEKA Sp. z o.o.',
          location: 'Elbląg',
          type: 'Hybrydowa',
          period: 'Marzec 2023 - Wrzesień 2024',
          current: false,
          responsibilities: [
            'Automatyzacja testów (Cypress, Playwright, JavaScript)',
            'Testy wydajnościowe (JMeter)',
            'Testowanie modułów GIS',
            'Praca w Scrum',
            'Konfiguracja CI/CD dla testów',
            'Wsparcie powdrożeniowe',
          ],
        },
        {
          title: 'Informatyk',
          company: 'Wojewódzki Szpital Zespolony',
          location: 'Elbląg',
          type: 'Stacjonarna',
          period: 'Listopad 2019 - Marzec 2023',
          current: false,
          responsibilities: [
            'Administracja systemami HIS/LIS/ERP/PACS',
            'Zarządzanie infrastrukturą sieciową',
            'Integracja systemów medycznych',
            'Administracja serwerem UNIX',
            'Szkolenie personelu medycznego',
            'Dokumentacja techniczna',
          ],
        },
        {
          title: 'Partner / Fotograf',
          company: 'Wawro Photography',
          location: 'Elbląg',
          type: 'Freelance',
          period: 'Styczeń 2014 - obecnie',
          current: true,
          responsibilities: [
            'Fotografia nieruchomości komercyjnych',
            'Fotografia i wideo z drona',
            'Tworzenie stron WWW',
            'Produkcja wideo i montaż',
            'Fotografia sferyczna 360°',
          ],
        },
      ],
    },

    // Blog
    blog: {
      title: 'Blog',
      subtitle: 'Moje przemyślenia o DevOps, automatyzacji i infrastrukturze IT',
      backToBlog: 'Powrót do bloga',
    },

    // Projects
    projectsPage: {
      title: 'Moje Projekty',
      subtitle: 'Strony internetowe, infrastruktura homelab i aplikacje webowe, które stworzyłem',
      all: 'Wszystkie',
      websites: 'Strony WWW',
      homelab: 'Homelab',
      apps: 'Aplikacje',
      visitSite: 'Odwiedź stronę',
      homelabInfra: 'Homelab Infrastructure',
      homelabDesc: 'Profesjonalna infrastruktura oparta o Proxmox i VPS, z pełną automatyzacją i monitoringiem',
      additionalTools: 'Dodatkowe Narzędzia',
      inDevelopment: 'W rozwoju',
      projectsData: [
        {
          title: 'OzonSir.pl',
          description: 'Strona internetowa dla organizacji zajmującej się sportem osób niepełnosprawnych. Responsywny design, kalendarz wydarzeń, galeria zajęć sportowych i formularz kontaktowy dla zainteresowanych uczestników.',
          category: 'Strony WWW',
        },
        {
          title: 'Ruczaj Elbląg',
          description: 'Strona centrum odnowy biologicznej Ruczaj w Elblągu. Prezentacja oferty odnowy, masaży, saun i zabiegów relaksacyjnych. System rezerwacji online i galeria zdjęć ośrodka.',
          category: 'Strony WWW',
        },
        {
          title: 'Piastowo55.pl',
          description: 'Strona zespołu domków letniskowych Piastowo 55 do wynajęcia. Prezentacja obiektów, infrastruktury sportowej (boiska, place zabaw), cennik i system rezerwacji. Idealne miejsce na aktywny wypoczynek.',
          category: 'Strony WWW',
        },
        {
          title: 'Reumatologia Elbląg',
          description: 'Strona gabinetu reumatologicznego w Elblągu. Informacje o usługach, cennik, możliwość umówienia wizyty online.',
          category: 'Strony WWW',
        },
        {
          title: 'Wawro Photography',
          description: 'Portfolio fotograficzne - fotografia nieruchomości, wideo z drona, zdjęcia 360°. Galeria projektów, cennik usług i formularz kontaktowy.',
          category: 'Strony WWW',
        },
        {
          title: 'Agnieszka Wawro Portfolio',
          description: 'Strona portfolio dla architekta. Prezentacja projektów architektonicznych, realizacji i koncepcji. Portfolio zawiera galerię wykonanych prac, opis usług oraz formularz kontaktowy dla potencjalnych klientów.',
          category: 'Strony WWW',
        },
        {
          title: 'Dam-Rob - Strona Testowa',
          description: 'Strona testowa hostowana w homelab. Wykorzystywana do testowania nowych funkcjonalności, deploymentów i konfiguracji CI/CD przed wdrożeniem produkcyjnym.',
          category: 'Homelab',
        },
        {
          title: 'Dam-Rob - Strona Produkcyjna',
          description: 'Produkcyjna wersja strony dam-rob.com.pl. Strona firmowa zbudowana w Vue.js, wdrożona na środowisko produkcyjne po przejściu przez pipeline CI/CD oparty o homelab.',
          category: 'Strony WWW',
        },
        {
          title: 'Homelab Infrastructure',
          description: 'Kompleksowa infrastruktura homelab oparta o Proxmox VE oraz VPS. Self-hosted GitLab do zarządzania kodem, Semaphore UI do automatyzacji z Ansible, Wazuh SIEM do monitoringu bezpieczeństwa, stack Prometheus + Grafana do observability. Infrastructure as Code z Terraform. Wszystko konteneryzowane w Docker i zarządzane przez GitLab CI/CD pipelines.',
          category: 'Homelab',
        },
        {
          title: 'Family App',
          description: 'Rozwijana aplikacja rodzinna hostowana w homelab. Prywatna platforma do zarządzania wydarzeniami rodzinnymi, udostępniania zdjęć i organizacji spotkań. Projekt w aktywnym rozwoju z planami rozbudowy o kolejne funkcjonalności.',
          category: 'Aplikacje',
          status: 'W rozwoju',
        },
      ],
    },

    // Contact
    contact: {
      title: 'Kontakt',
      subtitle: 'Skontaktuj się ze mną',
      contactInfo: 'Informacje kontaktowe',
      email: 'Email',
      phone: 'Telefon',
      location: 'Lokalizacja',
      locationValue: 'Elbląg, Polska',
      sendMessage: 'Wyślij wiadomość',
      nameLabel: 'Imię i nazwisko',
      namePlaceholder: 'Jan Kowalski',
      emailLabel: 'Email',
      emailPlaceholder: 'jan@example.com',
      subjectLabel: 'Temat',
      subjectPlaceholder: 'Temat wiadomości',
      messageLabel: 'Wiadomość',
      messagePlaceholder: 'Twoja wiadomość...',
      sendBtn: 'Wyślij wiadomość',
      sending: 'Wysyłanie...',
      successMessage: 'Wiadomość wysłana pomyślnie! Odpowiem najszybciej jak to możliwe.',
      errorDefault: 'Wystąpił błąd. Spróbuj ponownie.',
      errorNetwork: 'Nie udało się wysłać wiadomości. Sprawdź połączenie internetowe.',
    },

    // Status
    status: {
      title: 'Homelab Status',
      subtitle: 'Status moich projektów',
      allSystemsOk: 'Wszystkie systemy działają',
      systemsOnline: 'systemów online',
      refresh: 'Odśwież',
      checking: 'Sprawdzanie statusu...',
    },

    // Cookie Banner
    cookieBanner: {
      title: '🍪 Prywatność i pliki cookie',
      description: 'Ta strona korzysta z plików cookie wyłącznie do zapamiętania Twoich preferencji (np. motyw). Nie zbieramy danych analitycznych ani nie udostępniamy ich stronom trzecim.',
      essential: 'Niezbędne',
      essentialDesc: '— preferencje motywu, zgoda cookie',
      analytics: 'Analityczne',
      analyticsDesc: '— nie używamy',
      advertising: 'Reklamowe',
      advertisingDesc: '— nie używamy',
      readPolicy: 'Przeczytaj pełną politykę cookies →',
      showDetails: 'Pokaż szczegóły',
      hideDetails: 'Ukryj szczegóły',
      reject: 'Odrzuć',
      accept: 'Akceptuję',
    },

    // Cookies page
    cookiesPage: {
      title: 'Polityka Cookies',
      subtitle: 'Dowiedz się, jak i dlaczego korzystamy z plików cookie na tej stronie.',
      whatAreCookies: 'Czym są pliki cookie?',
      whatAreCookiesDesc: 'Pliki cookie to małe pliki tekstowe przechowywane na Twoim urządzeniu przez przeglądarkę internetową. Służą do zapamiętywania Twoich preferencji i ustawień, co pozwala na wygodniejsze korzystanie ze strony przy kolejnych wizytach. Ta strona korzysta wyłącznie z plików cookie niezbędnych do jej prawidłowego działania.',
      whatWeUse: 'Jakie pliki cookie wykorzystujemy?',
      cookieConsentName: 'cookieConsent',
      cookieConsentDesc: 'Zapamiętuje Twój wybór dotyczący zgody na pliki cookie.',
      cookieConsentLifetime: 'Typ: localStorage · Czas życia: bezterminowo',
      themeName: 'theme',
      themeDesc: 'Zapamiętuje Twój preferowany motyw strony (jasny lub ciemny).',
      themeLifetime: 'Typ: localStorage · Czas życia: bezterminowo',
      analyticsCookies: 'Cookie analityczne',
      analyticsCookiesDesc: 'Nie korzystamy z Google Analytics, Hotjar ani żadnych innych narzędzi analitycznych. Twoja aktywność nie jest śledzona.',
      adCookies: 'Cookie reklamowe / trzecich stron',
      adCookiesDesc: 'Nie wyświetlamy reklam i nie udostępniamy Twoich danych żadnym stronom trzecim.',
      howToManage: 'Jak zarządzać plikami cookie?',
      howToManageDesc: 'Możesz w każdej chwili usunąć pliki cookie z poziomu ustawień swojej przeglądarki, lub skorzystać z poniższego przycisku, aby zresetować zgodę na tej stronie. Po resecie baner cookie pojawi się ponownie.',
      resetConsent: 'Resetuj zgodę na cookies',
      contactSection: 'Kontakt',
      contactDesc: 'Jeśli masz pytania dotyczące polityki cookie lub prywatności na tej stronie, skontaktuj się ze mną pod adresem',
      lastUpdated: 'Ostatnia aktualizacja: 14 lutego 2026 r.',
    },

    // Footer
    footer: {
      cookiePolicy: 'Polityka cookies',
    },
  },

  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      blog: 'Blog',
      projects: 'Projects',
      status: 'Status',
      contact: 'Contact',
    },

    // Hero
    hero: {
      typewriterTexts: [
        'DevOps Engineer',
        'Automation Enthusiast',
        'CI/CD Builder',
        'Homelab Architect',
        'ISTQB Certified Tester',
        'Websites Creator',
      ],
      subtitle: 'I build infrastructure that works faster than deadlines approach ⚙️',
      contactBtn: 'Get in touch',
      aboutBtn: 'About me',
    },

    // HomeHighlights
    highlights: {
      statsTitle: 'Portfolio in numbers',
      statsSubtitle: 'Experience and achievements',
      yearsExp: 'Years of experience',
      technologies: 'Technologies',
      projects: 'Projects',
      services247: '24/7 Services',
      whatIDo: 'What I do?',
      specializations: 'Specializations and areas of expertise',
      cicdDesc: 'GitLab CI/CD, GitHub Actions, deployment & test automation',
      iacDesc: 'Terraform, Ansible, Proxmox',
      securityDesc: 'Wazuh, Trivy, DefectDojo',
      observabilityDesc: 'Prometheus, Grafana, Zabbix',
      seeProjects: 'See projects',
    },

    // About
    about: {
      title: 'About me',
      subtitle: 'Discover my journey in the world of DevOps, education and technologies I use daily',
      yearsExp: 'Years of experience',
      technologies: 'Technologies',
      positions: 'Positions',
      itCompanies: 'IT Companies',
      education: 'Education',
      thesisTopic: 'Thesis topic:',
      experience: 'Work experience',
      currently: 'Current',
      techStack: 'Tech Stack',
      educationData: [
        {
          degree: 'Master\'s',
          field: 'IT Process and Service Management',
          school: 'WSB Merito Gdańsk',
          years: '2024 - 2026',
          status: 'Completed',
          thesis: 'Factors determining the effectiveness of test team management in different work models based on the OPEGIEKA company',
        },
        {
          degree: 'Engineer',
          field: 'Graphics and Multimedia',
          school: 'University of Applied Sciences in Elbląg',
          years: '2016 - 2022',
          status: 'Completed',
          thesis: 'Photogrammetric scanning of architectural objects based on the Regional Hospital in Elbląg',
        },
      ],
      experienceData: [
        {
          title: 'Junior DevOps/SysOps',
          company: 'OPEGIEKA Sp. z o.o.',
          location: 'Elbląg',
          type: 'Hybrid',
          period: 'October 2024 - present',
          current: true,
          responsibilities: [
            'CI/CD process management (GitLab, GitHub Actions)',
            'Application containerization (Docker, Kubernetes)',
            'Infrastructure automation (Ansible, Terraform)',
            'Monitoring and security (Zabbix, Wazuh, Trivy)',
            'Performance and security testing',
            'Linux/Ubuntu server administration',
          ],
        },
        {
          title: 'Junior QA Engineer',
          company: 'OPEGIEKA Sp. z o.o.',
          location: 'Elbląg',
          type: 'Hybrid',
          period: 'March 2023 - September 2024',
          current: false,
          responsibilities: [
            'Test automation (Cypress, Playwright, JavaScript)',
            'Performance testing (JMeter)',
            'GIS module testing',
            'Working in Scrum',
            'CI/CD configuration for tests',
            'Post-deployment support',
          ],
        },
        {
          title: 'IT Specialist',
          company: 'Regional Hospital',
          location: 'Elbląg',
          type: 'On-site',
          period: 'November 2019 - March 2023',
          current: false,
          responsibilities: [
            'HIS/LIS/ERP/PACS systems administration',
            'Network infrastructure management',
            'Medical systems integration',
            'UNIX server administration',
            'Medical staff training',
            'Technical documentation',
          ],
        },
        {
          title: 'Partner / Photographer',
          company: 'Wawro Photography',
          location: 'Elbląg',
          type: 'Freelance',
          period: 'January 2014 - present',
          current: true,
          responsibilities: [
            'Commercial real estate photography',
            'Drone photography and video',
            'Website development',
            'Video production and editing',
            '360° spherical photography',
          ],
        },
      ],
    },

    // Blog
    blog: {
      title: 'Blog',
      subtitle: 'My thoughts on DevOps, automation and IT infrastructure',
      backToBlog: 'Back to blog',
    },

    // Projects
    projectsPage: {
      title: 'My Projects',
      subtitle: 'Websites, homelab infrastructure and web applications I\'ve built',
      all: 'All',
      websites: 'Websites',
      homelab: 'Homelab',
      apps: 'Applications',
      visitSite: 'Visit site',
      homelabInfra: 'Homelab Infrastructure',
      homelabDesc: 'Professional infrastructure based on Proxmox and VPS, with full automation and monitoring',
      additionalTools: 'Additional Tools',
      inDevelopment: 'In development',
      projectsData: [
        {
          title: 'OzonSir.pl',
          description: 'Website for an organization dedicated to sports for people with disabilities. Responsive design, event calendar, sports gallery and contact form for interested participants.',
          category: 'Websites',
        },
        {
          title: 'Ruczaj Elbląg',
          description: 'Website for the Ruczaj wellness center in Elbląg. Presentation of wellness offers, massages, saunas and relaxation treatments. Online booking system and photo gallery.',
          category: 'Websites',
        },
        {
          title: 'Piastowo55.pl',
          description: 'Website for the Piastowo 55 vacation cottages for rent. Presentation of properties, sports infrastructure (courts, playgrounds), pricing and reservation system. Perfect place for active recreation.',
          category: 'Websites',
        },
        {
          title: 'Reumatologia Elbląg',
          description: 'Website for a rheumatology clinic in Elbląg. Information about services, pricing and online appointment booking.',
          category: 'Websites',
        },
        {
          title: 'Wawro Photography',
          description: 'Photography portfolio - real estate photography, drone video, 360° photos. Project gallery, service pricing and contact form.',
          category: 'Websites',
        },
        {
          title: 'Agnieszka Wawro Portfolio',
          description: 'Portfolio website for an architect. Presentation of architectural projects, implementations and concepts. Portfolio includes a gallery of completed works, service description and contact form for potential clients.',
          category: 'Websites',
        },
        {
          title: 'Dam-Rob - Test Site',
          description: 'Test site hosted in homelab. Used for testing new features, deployments and CI/CD configurations before production deployment.',
          category: 'Homelab',
        },
        {
          title: 'Dam-Rob - Production Site',
          description: 'Production version of the dam-rob.com.pl website. A company site built with Vue.js, deployed to the production environment after passing through a homelab-based CI/CD pipeline.',
          category: 'Websites',
        },
        {
          title: 'Homelab Infrastructure',
          description: 'Comprehensive homelab infrastructure based on Proxmox VE and VPS. Self-hosted GitLab for code management, Semaphore UI for Ansible automation, Wazuh SIEM for security monitoring, Prometheus + Grafana stack for observability. Infrastructure as Code with Terraform. Everything containerized in Docker and managed by GitLab CI/CD pipelines.',
          category: 'Homelab',
        },
        {
          title: 'Family App',
          description: 'Family application hosted in homelab under active development. Private platform for managing family events, sharing photos and organizing meetings. Project in active development with plans for further features.',
          category: 'Applications',
          status: 'In development',
        },
      ],
    },

    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with me',
      contactInfo: 'Contact information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'Elbląg, Poland',
      sendMessage: 'Send a message',
      nameLabel: 'Full name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'john@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Message subject',
      messageLabel: 'Message',
      messagePlaceholder: 'Your message...',
      sendBtn: 'Send message',
      sending: 'Sending...',
      successMessage: 'Message sent successfully! I will reply as soon as possible.',
      errorDefault: 'An error occurred. Please try again.',
      errorNetwork: 'Failed to send message. Check your internet connection.',
    },

    // Status
    status: {
      title: 'Homelab Status',
      subtitle: 'Service status in my homelab',
      allSystemsOk: 'All systems operational',
      systemsOnline: 'systems online',
      refresh: 'Refresh',
      checking: 'Checking status...',
    },

    // Cookie Banner
    cookieBanner: {
      title: '🍪 Privacy & Cookies',
      description: 'This site uses cookies only to remember your preferences (e.g. theme). We do not collect analytics data or share it with third parties.',
      essential: 'Essential',
      essentialDesc: '— theme preference, cookie consent',
      analytics: 'Analytics',
      analyticsDesc: '— not used',
      advertising: 'Advertising',
      advertisingDesc: '— not used',
      readPolicy: 'Read full cookie policy →',
      showDetails: 'Show details',
      hideDetails: 'Hide details',
      reject: 'Reject',
      accept: 'Accept',
    },

    // Cookies page
    cookiesPage: {
      title: 'Cookie Policy',
      subtitle: 'Learn how and why we use cookies on this site.',
      whatAreCookies: 'What are cookies?',
      whatAreCookiesDesc: 'Cookies are small text files stored on your device by the web browser. They are used to remember your preferences and settings, allowing for a more comfortable experience on subsequent visits. This site only uses cookies essential for its proper functioning.',
      whatWeUse: 'What cookies do we use?',
      cookieConsentName: 'cookieConsent',
      cookieConsentDesc: 'Remembers your cookie consent choice.',
      cookieConsentLifetime: 'Type: localStorage · Lifetime: indefinite',
      themeName: 'theme',
      themeDesc: 'Remembers your preferred site theme (light or dark).',
      themeLifetime: 'Type: localStorage · Lifetime: indefinite',
      analyticsCookies: 'Analytics cookies',
      analyticsCookiesDesc: 'We do not use Google Analytics, Hotjar or any other analytics tools. Your activity is not tracked.',
      adCookies: 'Advertising / third-party cookies',
      adCookiesDesc: 'We do not display ads and do not share your data with any third parties.',
      howToManage: 'How to manage cookies?',
      howToManageDesc: 'You can delete cookies at any time from your browser settings, or use the button below to reset consent on this site. After reset, the cookie banner will appear again.',
      resetConsent: 'Reset cookie consent',
      contactSection: 'Contact',
      contactDesc: 'If you have questions about the cookie or privacy policy on this site, contact me at',
      lastUpdated: 'Last updated: February 14, 2026',
    },

    // Footer
    footer: {
      cookiePolicy: 'Cookie policy',
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];

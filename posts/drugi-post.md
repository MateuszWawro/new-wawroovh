---
title: "Monitoring bezpieczeństwa z Wazuh SIEM"
date: "2024-01-20"
excerpt: "Jak wdrożyłem Wazuh SIEM do monitoringu bezpieczeństwa infrastruktury i integracji z Rocket.Chat."
author: "Mateusz Wawro"
tags: ["Security", "Wazuh", "SIEM", "Monitoring"]
---

# Monitoring bezpieczeństwa z Wazuh SIEM

Wazuh to potężne narzędzie do monitoringu bezpieczeństwa. Oto jak je wdrożyłem.

## Instalacja z Docker

Używam Docker Compose do deploymentu Wazuh:
```yaml
version: '3'
services:
  wazuh:
    image: wazuh/wazuh:latest
    ports:
      - "1514:1514"
```

## Integracja alertów

Skonfigurowałem webhook do Rocket.Chat dla natychmiastowych powiadomień o incydentach bezpieczeństwa.

## Rezultaty

System działa stabilnie i wykrywa anomalie w czasie rzeczywistym!
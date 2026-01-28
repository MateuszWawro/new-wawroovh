import { NextResponse } from 'next/server';

// Lista usług do monitorowania
const services = [
  {
    name: 'GitLab',
    url: 'https://gitlab.wawro.ovh',
    category: 'DevOps',
  },
  {
    name: 'Grafana',
    url: 'https://obs.wawro.ovh',
    category: 'Monitoring',
  },
  {
    name: 'Dam-Rob',
    url: 'https://dam-rob.wawro.ovh',
    category: 'Testowe',
  },
  {
    name: 'Family-Calendar',
    url: 'https://family.wawro.ovh',
    category: 'Produkcja',
  },
];

async function checkServiceStatus(url: string): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const response = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      headers: {
        'User-Agent': 'StatusChecker/1.0',
      },
    });

    clearTimeout(timeoutId);
    return response.ok; // true jeśli status 200-299
  } catch (error) {
    return false;
  }
}

export async function GET() {
  try {
    const statusChecks = await Promise.all(
      services.map(async (service) => {
        const isOnline = await checkServiceStatus(service.url);
        return {
          ...service,
          status: isOnline ? 'online' : 'offline',
          checkedAt: new Date().toISOString(),
        };
      })
    );

    return NextResponse.json({
      services: statusChecks,
      lastCheck: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to check services' },
      { status: 500 }
    );
  }
}
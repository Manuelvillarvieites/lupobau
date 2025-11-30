import type { Metadata } from 'next';

const BASE_URL = 'https://lupobau.li';

type PageType = 'home' | 'uber-uns' | 'leistungen' | 'kontakt' | 'impressum' | 'datenschutz';

interface MetadataConfig {
  path: string;
  noIndex?: boolean;
  title: { de: string; en: string };
  description: { de: string; en: string };
}

const pageConfigs: Record<PageType, MetadataConfig> = {
  home: {
    path: '',
    title: {
      de: 'Strassenbau Liechtenstein | Pflästerungen | LupoBau AG',
      en: 'Road Construction Liechtenstein | Paving | LupoBau AG',
    },
    description: {
      de: 'Professioneller Strassenbau in Liechtenstein. Hochwertige Pflästerungen & Belagsarbeiten vom lokalen Experten. ✓ 4-köpfiges Team ✓ Qualität seit Jahren.',
      en: 'Professional road construction in Liechtenstein. High-quality paving & road surfacing from local experts. ✓ 4-person team ✓ Quality for years.',
    },
  },
  'uber-uns': {
    path: '/uber-uns',
    title: {
      de: 'Über uns – Strassenbauunternehmen | LupoBau AG',
      en: 'About Us – Road Construction Company | LupoBau AG',
    },
    description: {
      de: 'Lernen Sie LupoBau AG kennen: Ihr lokales Strassenbauunternehmen in Liechtenstein. 4-köpfiges Expertenteam. "Die Qualität bestimmt unseren Erfolg."',
      en: 'Meet LupoBau AG: Your local road construction company in Liechtenstein. 4-person expert team. "Quality determines our success."',
    },
  },
  leistungen: {
    path: '/leistungen',
    title: {
      de: 'Pflästerungen & Belagsarbeiten Liechtenstein | LupoBau AG',
      en: 'Paving & Road Surfacing Liechtenstein | LupoBau AG',
    },
    description: {
      de: 'Umfassende Strassenbau-Leistungen in Liechtenstein: Pflästerungen, Belagsarbeiten, Instandhaltung. ✓ Hochwertige Materialien ✓ Erfahrenes Team ✓ Lokal.',
      en: 'Comprehensive road construction services in Liechtenstein: Paving, road surfacing, maintenance. ✓ High-quality materials ✓ Experienced team ✓ Local.',
    },
  },
  kontakt: {
    path: '/kontakt',
    title: {
      de: 'Kontakt – Strassenbau Liechtenstein | LupoBau AG',
      en: 'Contact – Road Construction Liechtenstein | LupoBau AG',
    },
    description: {
      de: 'Kontaktieren Sie LupoBau AG für Strassenbau-Projekte in Liechtenstein. Schnelle Reaktionszeit, persönliche Beratung. ✓ Telefon ✓ E-Mail ✓ Formular.',
      en: 'Contact LupoBau AG for road construction projects in Liechtenstein. Fast response time, personal consultation. ✓ Phone ✓ Email ✓ Form.',
    },
  },
  impressum: {
    path: '/impressum',
    noIndex: true,
    title: {
      de: 'Impressum | LupoBau AG',
      en: 'Imprint | LupoBau AG',
    },
    description: {
      de: 'Rechtliche Informationen und Kontaktdaten der LupoBau AG gemäß TMG.',
      en: 'Legal information and contact details of LupoBau AG according to TMG.',
    },
  },
  datenschutz: {
    path: '/datenschutz',
    noIndex: true,
    title: {
      de: 'Datenschutzerklärung | LupoBau AG',
      en: 'Privacy Policy | LupoBau AG',
    },
    description: {
      de: 'Datenschutzerklärung der LupoBau AG – Informationen zur Datenerhebung und -verarbeitung.',
      en: 'Privacy policy of LupoBau AG – Information on data collection and processing.',
    },
  },
};

export async function generatePageMetadata(
  page: PageType,
  locale: string
): Promise<Metadata> {
  const config = pageConfigs[page];
  const title = config.title[locale as 'de' | 'en'] || config.title.de;
  const description = config.description[locale as 'de' | 'en'] || config.description.de;
  const canonicalPath = `/${locale}${config.path}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}${canonicalPath}`,
      languages: {
        de: `${BASE_URL}/de${config.path}`,
        en: `${BASE_URL}/en${config.path}`,
        'x-default': `${BASE_URL}/de${config.path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${canonicalPath}`,
      siteName: 'LupoBau AG',
      locale: locale === 'de' ? 'de_LI' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-image${config.path === '' ? '-home' : config.path.replace(/\//g, '-')}.jpg`,
          width: 1200,
          height: 630,
          alt: 'LupoBau AG',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/twitter-image${config.path === '' ? '-home' : config.path.replace(/\//g, '-')}.jpg`],
    },
    robots: config.noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

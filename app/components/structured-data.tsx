interface StructuredDataProps {
  locale: string;
  page?: 'home' | 'uber-uns' | 'leistungen' | 'kontakt' | 'impressum' | 'datenschutz';
}

const BASE_URL = 'https://lupobau.li';

export function StructuredData({ locale, page = 'home' }: StructuredDataProps) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LupoBau AG',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      locale === 'de'
        ? 'Professioneller Strassenbau, Pflästerungen und Belagsarbeiten in Liechtenstein'
        : 'Professional road construction, paving and surfacing in Liechtenstein',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+423-XXX-XXXX',
      contactType: 'customer service',
      areaServed: 'LI',
      availableLanguage: ['de', 'en'],
    },
    sameAs: [],
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: 'LupoBau AG',
    description:
      locale === 'de'
        ? 'Professioneller Strassenbau, Pflästerungen und Belagsarbeiten in Liechtenstein. Ihr lokaler Experte mit 4-köpfigem Team.'
        : 'Professional road construction, paving and surfacing in Liechtenstein. Your local expert with 4-person team.',
    url: `${BASE_URL}/${locale}`,
    telephone: '+423-XXX-XXXX',
    email: 'info@lupobau.li',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'LI',
      addressLocality: 'Vaduz',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.141,
      longitude: 9.5209,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Liechtenstein',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'de' ? 'Strassenbau-Leistungen' : 'Road Construction Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'de' ? 'Pflästerungen' : 'Paving',
            description:
              locale === 'de'
                ? 'Hochwertige Pflästerungen mit Naturstein, Verbundstein und Betonpflaster'
                : 'High-quality paving with natural stone, interlocking pavers and concrete',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'de' ? 'Belagsarbeiten' : 'Road Surfacing',
            description:
              locale === 'de'
                ? 'Professionelle Asphaltierung und Belagsarbeiten für Strassen und Wege'
                : 'Professional asphalt and surfacing work for roads and paths',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'de' ? 'Strasseninstandhaltung' : 'Road Maintenance',
            description:
              locale === 'de'
                ? 'Wartung und Instandhaltung von Strassen und Pflästerungen'
                : 'Maintenance and upkeep of roads and paving',
          },
        },
      ],
    },
  };

  const breadcrumbLabels: Record<string, Record<string, string>> = {
    de: {
      home: 'Startseite',
      'uber-uns': 'Über uns',
      leistungen: 'Leistungen',
      kontakt: 'Kontakt',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
    },
    en: {
      home: 'Home',
      'uber-uns': 'About',
      leistungen: 'Services',
      kontakt: 'Contact',
      impressum: 'Imprint',
      datenschutz: 'Privacy Policy',
    },
  };

  const pageRoutes: Record<string, string> = {
    home: '',
    'uber-uns': '/uber-uns',
    leistungen: '/leistungen',
    kontakt: '/kontakt',
    impressum: '/impressum',
    datenschutz: '/datenschutz',
  };

  const getBreadcrumb = () => {
    const items = [
      {
        '@type': 'ListItem',
        position: 1,
        name: breadcrumbLabels[locale]?.home || 'Home',
        item: `${BASE_URL}/${locale}`,
      },
    ];

    if (page !== 'home') {
      items.push({
        '@type': 'ListItem',
        position: 2,
        name: breadcrumbLabels[locale]?.[page] || page,
        item: `${BASE_URL}/${locale}${pageRoutes[page]}`,
      });
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };
  };

  const schemas = [organization, localBusiness, getBreadcrumb()];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

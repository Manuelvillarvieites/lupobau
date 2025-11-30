import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { routing } from '../i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Navbar22 } from '@/components/navbar22';
import { Footer24 } from '@/components/footer24';

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <header>
        <Navbar22 />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer24 />
      </footer>
    </>
  );
}

import { generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { Hero175 } from '@/components/hero175';
import { Feature33 } from '@/components/feature33';
import { Contact11 } from '@/components/contact11';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('impressum', locale);
}

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <StructuredData locale={locale} page="impressum" />
      <div className="w-full">
      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Hero175 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Feature33 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Contact11 />
        </div>
      </section>
      </div>
    </>
  );
}

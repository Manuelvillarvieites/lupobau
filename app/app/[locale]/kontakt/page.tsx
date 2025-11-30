import { generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { Hero2 } from '@/components/hero2';
import { Contact9 } from '@/components/contact9';
import { Team13 } from '@/components/team13';
import { Faq14 } from '@/components/faq14';
import { Stats17 } from '@/components/stats17';
import { Contact16 } from '@/components/contact16';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('kontakt', locale);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <StructuredData locale={locale} page="kontakt" />
      <div className="w-full">
      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Hero2 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Contact9 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Team13 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Faq14 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Stats17 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Contact16 />
        </div>
      </section>
      </div>
    </>
  );
}

import { generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { Hero229 } from '@/components/hero229';
import { Stats19 } from '@/components/stats19';
import { About16 } from '@/components/about16';
import { Timeline10 } from '@/components/timeline10';
import { Team1 } from '@/components/team1';
import { Feature10 } from '@/components/feature10';
import { Testimonial8 } from '@/components/testimonial8';
import { Contact11 } from '@/components/contact11';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('uber-uns', locale);
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <StructuredData locale={locale} page="uber-uns" />
      <div className="w-full">
      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Hero229 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Stats19 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <About16 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Timeline10 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Team1 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Feature10 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Testimonial8 />
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

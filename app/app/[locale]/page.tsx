import { generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { Hero129 } from '@/components/hero129';
import { Stats17 } from '@/components/stats17';
import { Services6 } from '@/components/services6';
import { Feature124 } from '@/components/feature124';
import { Process1 } from '@/components/process1';
import { Testimonial19 } from '@/components/testimonial19';
import { Cta21 } from '@/components/cta21';
import { Faq5 } from '@/components/faq5';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('home', locale);
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <StructuredData locale={locale} page="home" />
      <div className="w-full">
        <section className="flex justify-center w-full">
          <div className="w-full max-w-6xl px-4">
            <Hero129 />
          </div>
        </section>

        <section className="flex justify-center w-full">
          <div className="w-full max-w-6xl px-4">
            <Stats17 />
          </div>
        </section>

        <section className="flex justify-center w-full">
          <div className="w-full max-w-6xl px-4">
            <Services6 />
          </div>
        </section>

        <section className="flex justify-center w-full">
          <div className="w-full max-w-6xl px-4">
            <Feature124 />
          </div>
        </section>

        <section className="flex justify-center w-full">
          <div className="w-full max-w-6xl px-4">
            <Process1 />
          </div>
        </section>

        <section className="flex justify-center w-full">
          <div className="w-full max-w-6xl px-4">
            <Testimonial19 />
          </div>
        </section>

        <section className="flex justify-center w-full">
          <div className="w-full max-w-6xl px-4">
            <Cta21 />
          </div>
        </section>

        <section className="flex justify-center w-full">
          <div className="w-full max-w-6xl px-4">
            <Faq5 />
          </div>
        </section>
      </div>
    </>
  );
}

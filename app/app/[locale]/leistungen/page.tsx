import { generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { Hero58 } from '@/components/hero58';
import { Services4 } from '@/components/services4';
import { Feature2 } from '@/components/feature2';
import { Process2 } from '@/components/process2';
import { Projects6 } from '@/components/projects6';
import { Testimonial25 } from '@/components/testimonial25';
import { Stats17 } from '@/components/stats17';
import { Cta21 } from '@/components/cta21';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('leistungen', locale);
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <StructuredData locale={locale} page="leistungen" />
      <div className="w-full">
      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Hero58 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Services4 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Feature2 title="Leistungen" imageSrc="/placeholder.png" imageAlt="Services" buttonPrimary={{text: "Mehr Infos", href: "#"}} buttonSecondary={{text: "Kontakt", href: "#"}} />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Process2 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Projects6 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Testimonial25 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Stats17 />
        </div>
      </section>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Cta21 />
        </div>
      </section>
      </div>
    </>
  );
}

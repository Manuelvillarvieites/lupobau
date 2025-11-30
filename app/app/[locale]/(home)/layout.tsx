import { generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('home', locale);
}

export default function HomeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <StructuredData locale={params.then((p) => p.locale)} page="home" />
      {children}
    </>
  );
}

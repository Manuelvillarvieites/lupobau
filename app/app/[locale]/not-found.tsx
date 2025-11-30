import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] py-16">
      <h1 className="text-4xl font-bold mb-4">404 - Seite nicht gefunden</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        Die Seite, die Sie suchen, existiert nicht.
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90"
        aria-label="Zur Startseite"
      >
        Zur Startseite
      </Link>
    </div>
  );
}

'use client';

import { useTranslations } from 'next-intl';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('common');

  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] py-16">
      <h1 className="text-4xl font-bold mb-4">Etwas ist schiefgelaufen</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        {error.message || 'Ein unerwarteter Fehler ist aufgetreten.'}
      </p>
      <button
        onClick={reset}
        className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90"
        aria-label="Erneut versuchen"
      >
        Erneut versuchen
      </button>
    </div>
  );
}

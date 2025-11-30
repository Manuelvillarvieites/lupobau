export default function Loading() {
  return (
    <div className="container flex justify-center items-center min-h-[60vh] py-16">
      <div className="flex flex-col items-center gap-4">
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
          aria-label="Laden"
          role="status"
        />
        <p className="text-muted-foreground">Wird geladen...</p>
      </div>
    </div>
  );
}

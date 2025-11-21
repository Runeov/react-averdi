export function TrustStrip() {
  const trustItems = [
    "25+ års erfaring",
    "Personlig service",
    "Autorisert regnskapsfører",
    "Lokal ekspertise",
  ];

  return (
    <section className="py-10 bg-secondary/30 border-y">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-sm text-muted-foreground font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
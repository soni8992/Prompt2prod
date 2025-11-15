export function TrustedBy() {
  const companies = [
    'Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Tesla', 'Apple', 'Spotify'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A1647]/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-white/50 text-sm font-medium mb-8 uppercase tracking-wider">
          Trusted by 3000+ companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {companies.map((company) => (
            <div
              key={company}
              className="text-white/40 hover:text-white/70 transition-colors text-xl font-semibold"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

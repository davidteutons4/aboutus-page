const Partners = () => {
  const partners = [
    'Cosmos', 'Sui', 'Injective', 'Aptos', 'Celestia', 'Osmosis',
    'Stride', 'Kujira', 'Neutron', 'Archway', 'Juno', 'Stargaze',
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16 fade-up">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Our Partners and Clients
        </h2>
        <p className="text-foreground-secondary max-w-2xl mx-auto">
          We build long-term collaborations with ecosystems and leading technology partners.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div
            key={partner}
            className={`glass-card-hover p-6 flex items-center justify-center fade-up fade-up-${(index % 6) + 1}`}
          >
            <span className="text-lg font-display font-semibold text-foreground-secondary">
              {partner}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;

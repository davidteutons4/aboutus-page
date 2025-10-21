const MissionVision = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16 fade-up">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Leading with Vision,
          <br />
          <span className="text-foreground-secondary">Building with Purpose.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        {/* Mission */}
        <div className="glass-card p-8 md:p-12 space-y-4 fade-up fade-up-1">
          <div className="inline-block px-3 py-1 bg-surface-elevated rounded-full">
            <span className="text-sm font-medium text-accent">Mission</span>
          </div>
          <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed">
            Empowering builders to shape the decentralized future through open, scalable, and intelligent systems.
          </p>
        </div>

        {/* Vision */}
        <div className="glass-card p-8 md:p-12 space-y-4 fade-up fade-up-2">
          <div className="inline-block px-3 py-1 bg-surface-elevated rounded-full">
            <span className="text-sm font-medium text-accent">Vision</span>
          </div>
          <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed">
            To bridge Web3, AI, and digital transformation — making advanced technologies usable, transparent, and impactful for real-world adoption.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 h-px bg-border" />
    </section>
  );
};

export default MissionVision;

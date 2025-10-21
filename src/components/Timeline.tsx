const Timeline = () => {
  const milestones = [
    { year: '2019', achievement: 'Founding team established in Vietnam.' },
    { year: '2020', achievement: 'Built first blockchain prototype.' },
    { year: '2021', achievement: 'Expanded into validator & DeFi infrastructure.' },
    { year: '2022', achievement: 'Global hackathon wins (Cosmos, Sui, Aptos).' },
    { year: '2023', achievement: 'AI systems integrated into quant trading products.' },
    { year: '2025', achievement: 'Launched cross-chain market-making stack and ecosystem partnerships in Asia.' },
  ];

  return (
    <section className="section-container overflow-hidden">
      <div className="text-center mb-16 fade-up">
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Our Journey
        </h2>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border hidden md:block" />

        {/* Milestones */}
        <div className="grid md:grid-cols-6 gap-8 md:gap-4">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className={`relative fade-up fade-up-${index + 1}`}>
              {/* Node */}
              <div className="flex flex-col items-center md:items-center space-y-4">
                <div className="relative z-10 w-4 h-4 rounded-full bg-accent shadow-glow" />
                <div className="text-center space-y-2">
                  <div className="text-2xl font-display font-bold text-accent">
                    {milestone.year}
                  </div>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {milestone.achievement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

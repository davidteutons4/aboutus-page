const Achievements = () => {
  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Team Members' },
    { number: '20+', label: 'Blockchain Integrations' },
    { number: '🏆', label: 'Hackathon-Winning Team' },
  ];

  return (
    <section className="section-container">
      <div className="glass-card p-12 md:p-16">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Our Awards and Achievements
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center space-y-2 fade-up fade-up-${index + 1}`}
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-accent">
                {stat.number}
              </div>
              <div className="text-foreground-secondary text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

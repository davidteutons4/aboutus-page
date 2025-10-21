import { Users, Lightbulb, GitBranch, Zap, Shield, Network } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: Users,
      title: 'Builder-First Culture',
      description: 'Collaboration and curiosity drive everything we build.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation with Purpose',
      description: "We don't chase trends; we solve real problems.",
    },
    {
      icon: GitBranch,
      title: 'Open-Source Contribution',
      description: 'Sharing knowledge to strengthen the global builder ecosystem.',
    },
    {
      icon: Zap,
      title: 'Agility & Excellence',
      description: 'Delivering fast without compromising quality.',
    },
    {
      icon: Shield,
      title: 'Integrity & Trust',
      description: 'Transparency in every project and partnership.',
    },
    {
      icon: Network,
      title: 'Cross-Chain & Multi-Stack Expertise',
      description: 'From Cosmos SDK to AI systems, we connect technology silos.',
    },
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16 fade-up">
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Our Core Values
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={value.title}
              className={`glass-card-hover p-6 space-y-4 fade-up fade-up-${index + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold">{value.title}</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreValues;

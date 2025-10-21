import { Linkedin } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: 'Jacky Tran',
      role: 'CEO',
      description: 'Brings 10+ years of experience in Web3 infrastructure and global product delivery. Leads strategic direction and partnerships.',
      linkedin: '#',
    },
    {
      name: 'Matthew Bui',
      role: 'CPO',
      description: 'Drives product strategy with a background in AI and automation. Focused on creating scalable systems and user-centered design.',
      linkedin: '#',
    },
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16 fade-up">
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Leadership Team
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {leaders.map((leader, index) => (
          <div
            key={leader.name}
            className={`glass-card-hover p-8 md:p-10 space-y-6 fade-up fade-up-${index + 1}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold mb-1">{leader.name}</h3>
                <p className="text-accent font-medium">{leader.role}</p>
              </div>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-surface-elevated rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5 text-foreground-secondary" />
              </a>
            </div>
            <p className="text-foreground-secondary leading-relaxed">
              {leader.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;

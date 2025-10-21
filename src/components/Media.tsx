import { ExternalLink } from 'lucide-react';

const Media = () => {
  const articles = [
    {
      title: 'AnyAxis Labs Expands Cross-Chain Infrastructure',
      excerpt: 'Leading the way in interoperable blockchain solutions with innovative validator technology...',
      url: '#',
    },
    {
      title: 'Building the Future of Decentralized Finance',
      excerpt: 'How AnyAxis Labs is reshaping DeFi with AI-powered quant trading systems...',
      url: '#',
    },
    {
      title: 'Hackathon Winners: Cosmos Ecosystem Recognition',
      excerpt: 'Team recognition for groundbreaking contributions to cross-chain communication protocols...',
      url: '#',
    },
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16 fade-up">
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          AnyAxis Labs in the Media
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={article.title}
            className={`glass-card-hover p-6 space-y-4 fade-up fade-up-${index + 1}`}
          >
            {/* Placeholder Image */}
            <div className="aspect-video bg-surface-elevated rounded-lg" />
            
            <div className="space-y-2">
              <h3 className="text-xl font-display font-semibold line-clamp-2">
                {article.title}
              </h3>
              <p className="text-foreground-secondary text-sm line-clamp-2">
                {article.excerpt}
              </p>
            </div>

            <a
              href={article.url}
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors group"
            >
              <span>Read More</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;

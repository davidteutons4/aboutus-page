import { Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const expertise = [
    'Blockchain Infrastructure',
    'AI & Agentic Systems',
    'Quant Trading',
    'Web2 → Web3 Integration',
  ];

  const about = ['Team', 'Events', 'Media', 'FAQs'];

  return (
    <footer className="border-t border-border bg-surface-elevated/20">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-display font-bold">
              AnyAxis<span className="text-foreground-secondary">.Labs</span>
            </div>
            <p className="text-sm text-foreground-secondary">
              By Builders, For Builders
            </p>
          </div>

          {/* Our Expertise */}
          <div>
            <h4 className="font-display font-semibold mb-4">Our Expertise</h4>
            <ul className="space-y-2">
              {expertise.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground-secondary hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {about.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground-secondary hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:info@anyax.is" className="block text-sm text-foreground-secondary hover:text-foreground transition-colors">
                info@anyax.is
              </a>
              <div className="flex gap-3">
                <a href="#" className="p-2 hover:bg-surface-elevated rounded-lg transition-colors">
                  <MessageCircle className="w-5 h-5 text-foreground-secondary" />
                </a>
                <a href="#" className="p-2 hover:bg-surface-elevated rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5 text-foreground-secondary" />
                </a>
                <a href="#" className="p-2 hover:bg-surface-elevated rounded-lg transition-colors">
                  <Twitter className="w-5 h-5 text-foreground-secondary" />
                </a>
                <a href="#" className="p-2 hover:bg-surface-elevated rounded-lg transition-colors">
                  <Facebook className="w-5 h-5 text-foreground-secondary" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-foreground-muted text-center">
            © 2025 AnyAxis Labs — By Builders, For Builders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

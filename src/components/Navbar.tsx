import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-display font-bold tracking-tight">
              AnyAxis<span className="text-foreground-secondary">.Labs</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#" className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium">
              Case Studies
            </a>
            <a href="#" className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium">
              About
            </a>
            <a href="#" className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium">
              Blog
            </a>
          </div>

          {/* CTA Button */}
          <div>
            <Button className="bg-primary text-primary-foreground hover:bg-accent font-medium">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(200, 207, 217, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Geometric Logo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10 animate-parallax">
        <div className="w-full h-full border border-accent/20 rounded-full" />
        <div className="absolute inset-8 border border-accent/20 rounded-full" />
        <div className="absolute inset-16 border border-accent/20 rounded-full" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 fade-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
            By Builders.
            <br />
            <span className="text-foreground-secondary">For Builders.</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            We turn ideas into impact through blockchain infrastructure, AI systems, and quant-driven innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent font-medium text-base px-8">
              Join Our Team
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-surface-elevated font-medium text-base px-8">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

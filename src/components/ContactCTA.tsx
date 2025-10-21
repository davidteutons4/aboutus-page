import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactCTA = () => {
  return (
    <section className="section-container bg-surface-elevated/30">
      <div className="glass-card p-8 md:p-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Branding */}
          <div className="space-y-6 fade-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to create something
                <br />
                <span className="text-accent">awesome together?</span>
              </h2>
              <p className="text-foreground-secondary">
                Talk directly with our builders — no sales fluff, just expertise.
              </p>
            </div>

            {/* Geometric Logo */}
            <div className="relative w-48 h-48 opacity-20">
              <div className="absolute inset-0 border border-accent/30 rounded-full" />
              <div className="absolute inset-6 border border-accent/30 rounded-full" />
              <div className="absolute inset-12 border border-accent/30 rounded-full" />
            </div>
          </div>

          {/* Right - Form */}
          <div className="space-y-6 fade-up fade-up-1">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground-secondary">Full Name</label>
              <Input 
                placeholder="John Doe" 
                className="bg-surface border-border text-foreground placeholder:text-foreground-muted"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground-secondary">Email</label>
              <Input 
                type="email" 
                placeholder="john@example.com"
                className="bg-surface border-border text-foreground placeholder:text-foreground-muted"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground-secondary">Message</label>
              <Textarea 
                placeholder="Tell us about your project..."
                rows={4}
                className="bg-surface border-border text-foreground placeholder:text-foreground-muted resize-none"
              />
            </div>

            <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-accent font-medium">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

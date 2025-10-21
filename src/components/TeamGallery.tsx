const TeamGallery = () => {
  const photos = [
    { caption: 'R&D Team', span: 'col-span-1 row-span-1' },
    { caption: 'Design Sprint', span: 'col-span-1 row-span-2' },
    { caption: 'Hackathon Night', span: 'col-span-1 row-span-1' },
    { caption: 'Team Building', span: 'col-span-2 row-span-1' },
    { caption: 'Office Culture', span: 'col-span-1 row-span-1' },
    { caption: 'Conference', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section className="section-container bg-background-alt/50">
      <div className="text-center mb-8 fade-up">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Our Team in Action
        </h2>
        <p className="text-foreground-secondary max-w-3xl mx-auto">
          The heart of AnyAxis Labs — a diverse crew of engineers, researchers, and builders working across Vietnam, Singapore, and Korea.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`group relative ${photo.span} fade-up fade-up-${(index % 6) + 1}`}
          >
            <div className="glass-card-hover aspect-[4/3] overflow-hidden">
              <div className="w-full h-full bg-surface-elevated flex items-center justify-center relative">
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-elevated to-surface" />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-sm font-medium px-4 py-2 bg-surface/90 rounded-lg backdrop-blur-sm">
                    {photo.caption}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center fade-up">
        <p className="text-sm text-foreground-muted">
          By builders, for builders — meet the people who make it real.
        </p>
      </div>
    </section>
  );
};

export default TeamGallery;

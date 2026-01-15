const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/10 rounded-full" />
      </div>

      <div className="text-center px-6 relative z-10 animate-fade-in">
        {/* Institution info */}
        <p className="text-primary-foreground/70 text-sm md:text-base font-sans tracking-wide mb-2">
          Instituto Federal de Educação, Ciência e Tecnologia do Piauí
        </p>
        <p className="text-primary-foreground/60 text-xs md:text-sm font-sans tracking-wide mb-8">
          Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas
        </p>
        
        {/* Gold decorative line */}
        <div className="w-24 h-0.5 bg-accent mx-auto mb-8" />
        
        {/* Main title */}
        <p className="text-accent tracking-[0.4em] uppercase text-sm md:text-base font-sans font-medium mb-4">
          Convite
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground font-medium leading-tight mb-6">
          Banca Avaliadora
        </h1>
        
        <p className="text-primary-foreground/80 text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          Projeto de Extensão Curricular I: Tecnologia, Reintegração e Acolhimento: uma parceria com a Fundação Terapêutica Monte Tabor
        </p>
        
        {/* Gold decorative line */}
        <div className="w-24 h-0.5 bg-accent mx-auto mt-8" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

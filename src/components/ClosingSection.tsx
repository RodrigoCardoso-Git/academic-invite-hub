const ClosingSection = () => {
  return (
    <section className="hero-gradient py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="w-16 h-0.5 bg-accent mx-auto mb-10" />
        
        <div className="space-y-6 text-primary-foreground/90 text-lg leading-relaxed font-light">
          <p>
            O momento representa a{" "}
            <span className="text-accent font-medium">
              consolidação das atividades
            </span>{" "}
            realizadas ao longo das aulas em sala e em campo.
          </p>
          
          <p className="text-xl font-serif italic text-primary-foreground">
            Contamos com sua presença para enriquecer este momento acadêmico
            com suas contribuições e avaliações.
          </p>
        </div>
        
        <div className="w-16 h-0.5 bg-accent mx-auto mt-10" />
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/60 text-sm">
            Tecnologia, Reintegração e Acolhimento
          </p>
          <p className="text-primary-foreground/40 text-xs mt-2">
            Projeto Acadêmico • 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;

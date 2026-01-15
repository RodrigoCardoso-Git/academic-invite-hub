const IntroductionSection = () => {
  return (
    <section className="section-container">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl md:text-2xl font-serif text-primary mb-8 italic">
          Prezados(as) Professores(as),
        </p>
        
        <div className="space-y-6 text-foreground/80 text-lg leading-relaxed font-light">
          <p>
            Temos a honra de convidá-los para compor a{" "}
            <span className="font-medium text-foreground">Banca Avaliadora</span>{" "}
            da apresentação do Projeto Extensionista{" "}
            <span className="gold-accent font-medium">
              "Tecnologia, Reintegração e Acolhimento: uma parceria com a Fundação Terapêutica Monte Tabor"
            </span>
            , desenvolvido sob a supervisão da{" "}
            <span className="font-medium text-foreground">
              Prof.ª Dra. Joselma Ferreira Lima e Silva
            </span>{" "}
            e a orientação do{" "}
            <span className="font-medium text-foreground">
              Prof. Me. Jeferson do Nascimento Soares
            </span>.
          </p>
          
          <p>
            O projeto possui caráter{" "}
            <span className="font-medium text-foreground">educacional e extensionista</span>
            , com foco na inclusão digital, na reintegração social e no fortalecimento institucional.
          </p>
        </div>
        
        <div className="section-divider mt-12" />
      </div>
    </section>
  );
};

export default IntroductionSection;

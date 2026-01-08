import { FileText, Route, Award } from "lucide-react";

const contentItems = [
  {
    icon: FileText,
    title: "O produto desenvolvido",
    description: "Apresentação do resultado final do projeto",
  },
  {
    icon: Route,
    title: "O percurso metodológico da pesquisa",
    description: "Detalhamento das etapas e métodos utilizados",
  },
  {
    icon: Award,
    title: "A defesa técnica dos resultados obtidos",
    description: "Análise e discussão dos resultados alcançados",
  },
];

const PresentationContentSection = () => {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="section-container !py-0">
        <h2 className="section-title">Conteúdo da Apresentação</h2>
        <p className="text-center text-muted-foreground mb-12">
          Será apresentado:
        </p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className="info-card text-center group hover:border-accent/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentationContentSection;

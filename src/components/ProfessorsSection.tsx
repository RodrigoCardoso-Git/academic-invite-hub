import { GraduationCap } from "lucide-react";

const professors = [
  "Prof. Dr. Ricardo Moura Sekeff Budaruiche",
  "Prof. Me. Jonathas Jivago de Almeida Cruz",
  "Prof. Dr. Wanderson de Vasconcelos Rodrigues da Silva",
  "Prof. Dr. Iallen Gabio de Sousa Santos",
  "Prof. Me. Mayllon Veras da Silva",
  "Prof. Me. Maykol Livio Sampaio Vieira Santos",
  "Prof. Me. Jeferson do Nascimento Soares",
];

const ProfessorsSection = () => {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="section-container !py-0">
        <h2 className="section-title">Professores(as) Convidados(as)</h2>
        
        <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
          {professors.map((professor, index) => (
            <div key={index} className="professor-card">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">{professor}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessorsSection;

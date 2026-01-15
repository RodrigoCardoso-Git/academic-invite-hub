const teamMembers = [
  { initials: "FI", name: "Francisco Igor Silva Santos" },
  { initials: "IH", name: "Íkaro Herbert Vasconcelos Gomes" },
  { initials: "SF", name: "Savyo Francisco Barbosa Nascimento" },
  { initials: "CA", name: "Carlos André Sampaio do Nascimento" },
  { initials: "MS", name: "Mardone Silva Pereira" },
  { initials: "RC", name: "Rodrigo Cardoso de Farias" },
];

const TeamSection = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Equipe do Projeto</h2>
      
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member group">
            <div className="team-initials group-hover:bg-accent transition-colors duration-300">
              {member.initials}
            </div>
            <span className="text-foreground font-medium">{member.name}</span>
          </div>
        ))}
      </div>
      
      <div className="section-divider mt-16" />
    </section>
  );
};

export default TeamSection;

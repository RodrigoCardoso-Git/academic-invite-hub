import { Calendar, Clock, MapPin } from "lucide-react";

const eventDetails = [
  {
    icon: Calendar,
    label: "Data",
    value: "05 de fevereiro",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "18h00",
  },
  {
    icon: MapPin,
    label: "Local",
    value: "Auditório",
  },
];

const EventInfoSection = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Informações do Evento</h2>
      
      <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
        {eventDetails.map((detail, index) => (
          <div
            key={index}
            className="info-card text-center"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <detail.icon className="w-5 h-5 text-accent" />
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
              {detail.label}
            </p>
            <p className="text-xl font-serif font-medium text-foreground">
              {detail.value}
            </p>
          </div>
        ))}
      </div>
      
      <div className="section-divider mt-16" />
    </section>
  );
};

export default EventInfoSection;

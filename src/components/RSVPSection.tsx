import { useState } from "react";
import { Check, Send, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const RSVPSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("rsvps")
        .insert([{ name: name.trim(), email: email.trim().toLowerCase() }]);

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Email já confirmado",
            description: "Este email já confirmou presença no evento.",
          });
          setIsConfirmed(true);
        } else {
          throw error;
        }
      } else {
        setIsConfirmed(true);
        toast({
          title: "Presença confirmada!",
          description: "Obrigado por confirmar sua presença no evento.",
        });
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      toast({
        title: "Erro ao confirmar",
        description: "Ocorreu um erro ao confirmar sua presença. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-container">
      <h2 className="section-title">Confirme sua Presença</h2>
      
      <div className="max-w-md mx-auto">
        {isConfirmed ? (
          <div className="info-card text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">
              Presença Confirmada!
            </h3>
            <p className="text-muted-foreground">
              Obrigado por confirmar sua presença. Esperamos você no evento!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="info-card space-y-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Nome completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Confirmando..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Confirmar Presença
                </>
              )}
            </Button>
          </form>
        )}
      </div>
      
      <div className="section-divider mt-16" />
    </section>
  );
};

export default RSVPSection;

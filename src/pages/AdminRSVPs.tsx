import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Users, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface RSVP {
  id: string;
  name: string;
  email: string;
  confirmed_at: string;
}

const AdminRSVPs = () => {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRSVPs = async () => {
      const { data, error } = await supabase
        .from("rsvps")
        .select("*")
        .order("confirmed_at", { ascending: false });

      if (error) {
        console.error("Error fetching RSVPs:", error);
      } else {
        setRsvps(data || []);
      }
      setLoading(false);
    };

    fetchRSVPs();

    // Subscribe to realtime updates
    const channel = supabase
      .channel("rsvps-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "rsvps",
        },
        (payload) => {
          setRsvps((prev) => [payload.new as RSVP, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Convite
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-medium text-foreground">
              Confirmações de Presença
            </h1>
            <p className="text-muted-foreground">
              {rsvps.length} {rsvps.length === 1 ? "confirmação" : "confirmações"}
            </p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-muted-foreground">
            Carregando...
          </div>
        ) : rsvps.length === 0 ? (
          <div className="info-card text-center py-12">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Nenhuma confirmação de presença ainda.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {rsvps.map((rsvp) => (
              <div
                key={rsvp.id}
                className="info-card flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-medium text-sm">
                    {rsvp.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{rsvp.name}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {rsvp.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(rsvp.confirmed_at)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminRSVPs;

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Zap, Server, Globe, Database } from "lucide-react";

const technologies = [
  {
    icon: Shield,
    name: "AES-256 Encryption",
    description: "Military-grade encryption standard",
  },
  {
    icon: Lock,
    name: "Zero-Trust Architecture",
    description: "Never trust, always verify",
  },
  {
    icon: Zap,
    name: "Edge Computing",
    description: "Lightning-fast response times",
  },
  {
    icon: Server,
    name: "Redundant Infrastructure",
    description: "Multi-region failover systems",
  },
  {
    icon: Globe,
    name: "Global VPN Network",
    description: "Secure access from anywhere",
  },
  {
    icon: Database,
    name: "Encrypted Cloud Storage",
    description: "SOC 2 & ISO 27001 compliant",
  },
];

export default function TechStack() {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Powered by Advanced Technology
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade infrastructure designed for maximum security and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card
                key={index}
                className="relative group overflow-hidden hover-elevate transition-all border-primary/20"
                data-testid={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 relative">
          <Card className="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/30">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary font-mono">256-bit</div>
                  <div className="text-sm text-muted-foreground">Encryption Standard</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary font-mono">15ms</div>
                  <div className="text-sm text-muted-foreground">Average Latency</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary font-mono">50+</div>
                  <div className="text-sm text-muted-foreground">Global Data Centers</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary font-mono">100%</div>
                  <div className="text-sm text-muted-foreground">Data Redundancy</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}

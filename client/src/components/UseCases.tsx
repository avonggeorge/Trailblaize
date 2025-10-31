import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, ArrowRight } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Private Home Security",
    subtitle: "For High-Profile Clients",
    description: "Ultra-high-net-worth individuals require the highest level of security. Our private home solutions provide military-grade protection with seamless integration.",
    features: [
      "24/7 remote monitoring from anywhere globally",
      "Private VPN for secure camera access",
      "Motion detection with instant alerts",
      "Encrypted cloud storage for all footage",
    ],
    stats: { metric: "99.99%", label: "Threat Prevention" },
  },
  {
    icon: Building2,
    title: "Enterprise IT Acceleration",
    subtitle: "For Business Leaders",
    description: "Transform your business infrastructure with blazing-fast systems, zero downtime, and enterprise-grade security that scales with your growth.",
    features: [
      "Hardware optimization & upgrades",
      "Secure cloud backup & redundancy",
      "Network segmentation & access control",
      "Compliance-ready infrastructure",
    ],
    stats: { metric: "10x", label: "Performance Boost" },
  },
];

export default function UseCases() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built for Your World
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored solutions for distinct security needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden hover-elevate transition-all group"
                data-testid={`usecase-${useCase.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500"></div>
                <CardContent className="relative p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="mb-2">
                    <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                      {useCase.subtitle}
                    </p>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  <ul className="space-y-3 mb-8">
                    {useCase.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-4xl font-bold text-primary font-mono mb-1">
                        {useCase.stats.metric}
                      </div>
                      <div className="text-sm text-muted-foreground">{useCase.stats.label}</div>
                    </div>
                    <Button variant="ghost" className="group/btn">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

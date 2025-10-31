import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, FileCheck, Globe } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    name: "SOC 2 Type II",
    description: "Security & availability controls verified",
    badge: "Certified",
  },
  {
    icon: Lock,
    name: "ISO 27001",
    description: "Information security management",
    badge: "Certified",
  },
  {
    icon: FileCheck,
    name: "GDPR Compliant",
    description: "European data protection standards",
    badge: "Compliant",
  },
  {
    icon: Globe,
    name: "CCPA Ready",
    description: "California consumer privacy act",
    badge: "Compliant",
  },
];

export default function SecurityCompliance() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Security & Compliance First
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Certified and audited by industry-leading security standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className="text-center hover-elevate transition-all border-primary/20"
                data-testid={`cert-${cert.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                  <Badge variant="outline" className="border-chart-2/30 text-chart-2">
                    {cert.badge}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/30">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Privacy-First Architecture
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Zero-Knowledge Encryption</h4>
                    <p className="text-sm text-muted-foreground">
                      We cannot access your data - only you hold the encryption keys
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Opt-In Data Collection</h4>
                    <p className="text-sm text-muted-foreground">
                      You control what data we collect and how it's used
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Regular Security Audits</h4>
                    <p className="text-sm text-muted-foreground">
                      Quarterly penetration testing and annual third-party audits
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Global Data Residency</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose where your data is stored to meet local regulations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

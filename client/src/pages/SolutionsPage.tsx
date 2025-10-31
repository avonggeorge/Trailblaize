import { Shield, Lock, Scan, Cloud, Wifi } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const detailedSolutions = [
  {
    icon: Shield,
    title: "Home Security & Monitoring",
    description: "Complete perimeter defense with firewall-enabled routers, AES-256 encryption, and policy-based access control.",
    features: [
      "Firewall-enabled router deployment",
      "AES-256 encryption standard",
      "Real-time threat monitoring",
      "Policy-based access control",
      "Intrusion detection systems",
      "24/7 security operations center",
    ],
  },
  {
    icon: Lock,
    title: "Secure Remote Access & VPN",
    description: "Private VPN infrastructure tailored to your devices and ISP for seamless global connectivity.",
    features: [
      "Custom VPN architecture",
      "End-to-end encryption",
      "Multi-device support",
      "Geo-stable access",
      "Split-tunnel capabilities",
      "Zero-log policy",
    ],
  },
  {
    icon: Scan,
    title: "Intrusion Detection & Alerting",
    description: "Advanced motion sensors with instant mobile notifications for real-time threat awareness.",
    features: [
      "Smart motion sensors",
      "Mobile push notifications",
      "Customizable alert zones",
      "AI-powered threat detection",
      "Integration with alarm systems",
      "Historical event logging",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Backup & Fast Recovery",
    description: "Secure cloud backups with hardware upgrades for lightning-fast business operations.",
    features: [
      "Automated cloud backups",
      "Hardware performance optimization",
      "Redundant storage systems",
      "Point-in-time recovery",
      "Disaster recovery planning",
      "Zero data loss guarantee",
    ],
  },
  {
    icon: Wifi,
    title: "Network Segmentation & Guest Access",
    description: "Isolated guest Wi-Fi networks protecting your sensitive resources while providing easy access.",
    features: [
      "Dedicated guest networks",
      "VLAN segmentation",
      "Bandwidth management",
      "Access time controls",
      "Network monitoring",
      "Compliance ready",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-16">
      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Solutions</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security and IT services designed for the most demanding requirements
            </p>
          </div>

          <div className="space-y-12">
            {detailedSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="hover-elevate transition-all" data-testid={`solution-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl mb-3">{solution.title}</CardTitle>
                        <p className="text-lg text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {solution.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" data-testid={`button-learn-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More About {solution.title}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

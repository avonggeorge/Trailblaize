import PricingCard from "./PricingCard";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    tier: "Standard",
    description: "Cost-effective, reliable, simple",
    price: "$2,499",
    priceSubtext: "per month",
    features: [
      "Firewall-enabled router with AES-256",
      "Basic VPN access (5 devices)",
      "Motion sensor integration",
      "Standard cloud backup (1TB)",
      "Guest Wi-Fi segmentation",
      "Email support (24h response)",
    ],
    idealFor: "Homeowners and small businesses seeking robust security basics",
    expectedOutcome: "Reliable protection with 99.9% uptime",
    isPremium: false,
  },
  {
    tier: "Premium",
    description: "Advanced, customized, high-performance",
    price: "Custom",
    priceSubtext: "pricing",
    features: [
      "All Standard features",
      "Custom VPN architecture (unlimited devices)",
      "Advanced threat detection with AI",
      "Unlimited cloud backup + redundancy",
      "Dedicated security operations team",
      "24/7 priority support (15min response)",
      "Quarterly security audits",
      "Hardware upgrade consultation",
    ],
    idealFor: "Ultra-high-net-worth individuals and enterprise clients",
    expectedOutcome: "Maximum security, zero compromise, 99.999% uptime",
    isPremium: true,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Choose Your Tier</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing designed to match your security requirements and scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={index}
              {...tier}
              onCtaClick={() => console.log(`Selected ${tier.tier} tier`)}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom enterprise solution? Let's discuss your specific requirements.
          </p>
          <Button variant="outline" size="lg" data-testid="button-custom-quote">
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

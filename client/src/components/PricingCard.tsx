import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingCardProps {
  tier: string;
  description: string;
  price: string;
  priceSubtext: string;
  features: string[];
  idealFor: string;
  expectedOutcome: string;
  isPremium?: boolean;
  onCtaClick?: () => void;
}

export default function PricingCard({
  tier,
  description,
  price,
  priceSubtext,
  features,
  idealFor,
  expectedOutcome,
  isPremium = false,
  onCtaClick,
}: PricingCardProps) {
  return (
    <Card
      className={`h-full flex flex-col ${isPremium ? "border-t-4 border-t-chart-2 bg-card/80" : ""} hover-elevate transition-all`}
      data-testid={`card-pricing-${tier.toLowerCase()}`}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-3xl">{tier}</CardTitle>
          {isPremium && (
            <Badge variant="outline" className="border-chart-2/30 text-chart-2">
              Most Popular
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex-1 space-y-6">
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-5xl font-bold">{price}</span>
            <span className="text-muted-foreground">{priceSubtext}</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase mb-3 text-muted-foreground">Features</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPremium ? "text-chart-2" : "text-primary"}`} />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-border">
          <h4 className="text-sm font-semibold uppercase mb-2 text-muted-foreground">Ideal For</h4>
          <p className="text-foreground">{idealFor}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase mb-2 text-muted-foreground">Expected Outcome</h4>
          <p className="text-foreground">{expectedOutcome}</p>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          variant={isPremium ? "default" : "outline"}
          className="flex-1"
          onClick={onCtaClick}
          data-testid={`button-select-${tier.toLowerCase()}`}
        >
          {isPremium ? "Get Started" : "Contact Sales"}
        </Button>
      </CardFooter>
    </Card>
  );
}

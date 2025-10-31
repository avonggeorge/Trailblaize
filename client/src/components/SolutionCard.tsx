import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, LucideIcon } from "lucide-react";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  benefits: string[];
  outcome: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function SolutionCard({
  icon: Icon,
  title,
  problem,
  solution,
  benefits,
  outcome,
  ctaText = "Learn More",
  onCtaClick,
}: SolutionCardProps) {
  return (
    <Card className="h-full flex flex-col hover-elevate transition-all duration-300 border-primary/20">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Problem</h4>
          <p className="text-foreground">{problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Solution</h4>
          <p className="text-foreground">{solution}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Benefits</h4>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <Badge variant="outline" className="border-chart-2/30 text-chart-2" data-testid={`badge-outcome-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {outcome}
        </Badge>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          className="w-full group"
          onClick={onCtaClick}
          data-testid={`button-cta-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {ctaText}
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}

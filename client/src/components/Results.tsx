import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Results() {
  const [uptime, setUptime] = useState(0);
  const [mttr, setMttr] = useState(0);
  const [dataProtection, setDataProtection] = useState(0);

  useEffect(() => {
    const uptimeInterval = setInterval(() => {
      setUptime((prev) => (prev < 99.999 ? prev + 0.001 : 99.999));
    }, 10);

    const mttrInterval = setInterval(() => {
      setMttr((prev) => (prev < 15 ? prev + 1 : 15));
    }, 50);

    const dataInterval = setInterval(() => {
      setDataProtection((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);

    return () => {
      clearInterval(uptimeInterval);
      clearInterval(mttrInterval);
      clearInterval(dataInterval);
    };
  }, []);

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">The Result?</h2>
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-xl text-foreground">Total peace of mind</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-xl text-foreground">Robust home & business security</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-xl text-foreground">Blazing-fast systems at work with zero downtime</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover-elevate transition-all" data-testid="metric-uptime">
            <CardContent className="pt-6">
              <div className="text-5xl font-bold text-primary mb-2 font-mono">
                {uptime.toFixed(3)}%
              </div>
              <p className="text-sm text-muted-foreground">System Uptime</p>
            </CardContent>
          </Card>
          <Card className="text-center hover-elevate transition-all" data-testid="metric-mttr">
            <CardContent className="pt-6">
              <div className="text-5xl font-bold text-primary mb-2 font-mono">
                {mttr}<span className="text-2xl">min</span>
              </div>
              <p className="text-sm text-muted-foreground">Mean Time to Response</p>
            </CardContent>
          </Card>
          <Card className="text-center hover-elevate transition-all" data-testid="metric-data">
            <CardContent className="pt-6">
              <div className="text-5xl font-bold text-primary mb-2 font-mono">
                {dataProtection}%
              </div>
              <p className="text-sm text-muted-foreground">Data Loss Prevention</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50 border-primary/20">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">Enterprise Client Success Story</h3>
                <p className="text-muted-foreground">
                  A Fortune 500 financial services firm reduced security incidents by 95% and achieved sub-15-minute incident response times after implementing our comprehensive security suite. Their executive team now enjoys seamless global access to critical systems while maintaining SOC 2 compliance.
                </p>
              </div>
              <Button variant="outline" className="flex-shrink-0" data-testid="button-read-case-study">
                Read Full Story
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

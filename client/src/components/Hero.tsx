import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Activity, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Security_dashboard_hero_image_d86fd096.png";

export default function Hero() {
  const handleScrollToSolutions = () => {
    const solutionsSection = document.getElementById("solutions");
    solutionsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <Badge variant="outline" className="mb-6 border-primary/30 text-primary backdrop-blur-md" data-testid="badge-tagline">
          Blazing-fast security, global access, zero downtime
        </Badge>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          Total Peace of Mind,
          <br />
          <span className="text-primary">Everywhere You Are.</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Ultra-modern IT services delivering private-home security, secure remote access, and blazing-fast enterprise systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="text-lg px-8" data-testid="button-get-secure-assessment">
            Get Your Secure Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 backdrop-blur-md"
            onClick={handleScrollToSolutions}
            data-testid="button-view-solutions"
          >
            View Solutions
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-card/50 border border-primary/20 rounded-lg p-4 hover-elevate transition-all" data-testid="trust-aes256">
            <Shield className="w-8 h-8 text-primary mb-2 mx-auto" />
            <p className="text-sm font-semibold">AES-256 Encryption</p>
          </div>
          <div className="backdrop-blur-md bg-card/50 border border-primary/20 rounded-lg p-4 hover-elevate transition-all" data-testid="trust-uptime">
            <Activity className="w-8 h-8 text-primary mb-2 mx-auto" />
            <p className="text-sm font-semibold">99.999% Uptime</p>
          </div>
          <div className="backdrop-blur-md bg-card/50 border border-primary/20 rounded-lg p-4 hover-elevate transition-all" data-testid="trust-vpn">
            <Lock className="w-8 h-8 text-primary mb-2 mx-auto" />
            <p className="text-sm font-semibold">Global VPN Coverage</p>
          </div>
          <div className="backdrop-blur-md bg-card/50 border border-primary/20 rounded-lg p-4 hover-elevate transition-all" data-testid="trust-monitoring">
            <Shield className="w-8 h-8 text-primary mb-2 mx-auto" />
            <p className="text-sm font-semibold">24/7 Monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
}

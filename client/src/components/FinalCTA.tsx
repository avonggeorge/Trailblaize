import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-chart-2/20 to-primary/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-xl flex items-center justify-center mx-auto mb-8 border border-primary/30">
          <Shield className="w-10 h-10 text-primary" />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Secure Your Digital Future?
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join hundreds of ultra-high-net-worth individuals and Fortune 500 companies who trust TrailBlaize with their most critical infrastructure.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="text-lg px-8" data-testid="button-final-cta-assessment">
            Get Your Free Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 backdrop-blur-md" data-testid="button-final-cta-contact">
            Talk to Our Team
          </Button>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-chart-2 animate-pulse"></div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-chart-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span>24/7 support available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-chart-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span>15-minute response time</span>
          </div>
        </div>
      </div>
    </section>
  );
}

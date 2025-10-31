import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe, Zap, Users, Award } from "lucide-react";
import aboutImage from "@assets/generated_images/Professional_office_environment_8a72c866.png";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Every decision we make prioritizes your data protection and privacy",
  },
  {
    icon: Award,
    title: "Reliability",
    description: "99.999% uptime backed by redundant infrastructure and 24/7 monitoring",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge technology and continuous improvement in security protocols",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Seamless access to your systems from anywhere in the world",
  },
  {
    icon: Users,
    title: "Personalization",
    description: "Tailored solutions designed specifically for your unique requirements",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About TrailBlaize</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering ultra-modern IT services for those who demand excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                TrailBlaize IT Services exists to provide total peace of mind through blazing-fast security solutions. We serve ultra-high-net-worth individuals and enterprise clients who require the highest levels of protection, accessibility, and performance.
              </p>
              <p className="text-lg text-muted-foreground">
                Our commitment to zero downtime, global access, and military-grade security has made us the trusted partner for those who cannot afford compromise.
              </p>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="TrailBlaize office environment"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.slice(0, 3).map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover-elevate transition-all" data-testid={`value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
              {values.slice(3).map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover-elevate transition-all" data-testid={`value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Growing Network</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Trusted by Fortune 500 companies and high-profile individuals worldwide
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99.999%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Global Support</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15min</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

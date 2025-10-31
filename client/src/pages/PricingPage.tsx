import Pricing from "@/components/Pricing";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the Standard tier?",
    answer: "The Standard tier includes firewall-enabled router with AES-256, basic VPN access for 5 devices, motion sensor integration, 1TB cloud backup, guest Wi-Fi segmentation, and email support with 24-hour response time.",
  },
  {
    question: "How does Premium tier pricing work?",
    answer: "Premium tier pricing is customized based on your specific requirements, number of locations, devices, and support needs. Contact our team for a personalized quote tailored to your security infrastructure.",
  },
  {
    question: "Can I upgrade from Standard to Premium?",
    answer: "Yes, you can upgrade at any time. We'll ensure a seamless transition and credit any remaining time on your Standard subscription toward your Premium plan.",
  },
  {
    question: "What's your uptime guarantee?",
    answer: "Standard tier offers 99.9% uptime SLA, while Premium tier provides 99.999% uptime guarantee with dedicated failover systems and redundant infrastructure.",
  },
  {
    question: "Do you offer enterprise contracts?",
    answer: "Yes, we offer customized enterprise agreements with volume discounts, multi-year commitments, and specialized SLAs. Contact our enterprise sales team for details.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-16">
      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your security needs and budget
            </p>
          </div>

          <Pricing />

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left" data-testid={`accordion-trigger-${index}`}>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground" data-testid={`accordion-content-${index}`}>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Results from "@/components/Results";
import UseCases from "@/components/UseCases";
import TechStack from "@/components/TechStack";
import SecurityCompliance from "@/components/SecurityCompliance";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <Results />
      <UseCases />
      <TechStack />
      <SecurityCompliance />
      <Pricing />
      <FinalCTA />
    </>
  );
}

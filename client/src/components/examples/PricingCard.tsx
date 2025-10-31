import PricingCard from '../PricingCard'

export default function PricingCardExample() {
  return (
    <div className="p-8 max-w-md">
      <PricingCard
        tier="Premium"
        description="Advanced, customized, high-performance"
        price="Custom"
        priceSubtext="per month"
        features={[
          "All Standard features",
          "Custom VPN architecture",
          "Dedicated security team",
          "24/7 priority support",
          "Advanced threat intelligence"
        ]}
        idealFor="Enterprise clients and ultra-high-net-worth individuals"
        expectedOutcome="Maximum security, zero compromise"
        isPremium={true}
        onCtaClick={() => console.log('Premium selected')}
      />
    </div>
  )
}

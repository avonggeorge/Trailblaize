import SolutionCard from '../SolutionCard'
import { Shield } from 'lucide-react'

export default function SolutionCardExample() {
  return (
    <div className="p-8 max-w-md">
      <SolutionCard
        icon={Shield}
        title="Firewall Router"
        problem="Block unauthorized access; protect private networks"
        solution="Deploy firewall-enabled router + AES-256; policy-based access control; ongoing threat monitoring"
        benefits={[
          "Strong perimeter defense",
          "Reduced attack surface",
          "Compliant encryption"
        ]}
        outcome="+99.999% availability"
        ctaText="Learn More"
        onCtaClick={() => console.log('CTA clicked')}
      />
    </div>
  )
}

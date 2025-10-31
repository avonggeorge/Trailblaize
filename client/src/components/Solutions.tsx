import SolutionCard from "./SolutionCard";
import { Shield, Lock, Scan, Cloud, Wifi } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Firewall-Enabled Router",
    problem: "Block unauthorized access; protect private networks",
    solution: "Deploy firewall-enabled router + AES-256; policy-based access control; ongoing threat monitoring",
    benefits: [
      "Strong perimeter defense",
      "Reduced attack surface",
      "Compliant encryption",
    ],
    outcome: "+99.999% availability, reduced intrusion risk",
  },
  {
    icon: Lock,
    title: "Private VPN Access",
    problem: "Remote monitoring of home cameras securely from anywhere",
    solution: "Private VPN tailored to client devices/ISP",
    benefits: [
      "End-to-end encryption",
      "Geo-stable access",
      "Scalable infrastructure",
    ],
    outcome: "Secure global access from any location",
  },
  {
    icon: Scan,
    title: "Motion Sensor Alerts",
    problem: "Real-time detection and notification",
    solution: "Motion sensors + alarms + mobile push notifications",
    benefits: [
      "Immediate awareness",
      "Remote responsiveness",
      "Customizable alert zones",
    ],
    outcome: "Zero-delay threat detection",
  },
  {
    icon: Cloud,
    title: "Cloud Backup + Hardware",
    problem: "Slow systems; data loss risk",
    solution: "Secure cloud backups + hardware upgrades; performance optimization",
    benefits: [
      "Lightning-fast operations",
      "Zero data loss",
      "Automated redundancy",
    ],
    outcome: "100% data recovery guarantee",
  },
  {
    icon: Wifi,
    title: "Guest Wi-Fi Isolation",
    problem: "Private network exposure via guests",
    solution: "Dedicated guest Wi-Fi with strict segmentation",
    benefits: [
      "Protects sensitive resources",
      "Easy guest access",
      "Network monitoring",
    ],
    outcome: "Complete network isolation",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tailored Solutions for Your Security
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive protection designed for ultra-high-net-worth individuals and enterprise clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              {...solution}
              onCtaClick={() => console.log(`Learn more about ${solution.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

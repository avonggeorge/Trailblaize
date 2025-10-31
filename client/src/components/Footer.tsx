import { Link } from "wouter";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">TrailBlaize</span>
                <span className="text-xs text-muted-foreground leading-none">IT Services</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Blazing-fast security, global access, zero downtime.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home Security
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                  Secure Remote Access
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cloud Backup
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                  Network Segmentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Security & Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} TrailBlaize IT Services. All rights reserved. GDPR & CCPA Compliant.
          </p>
        </div>
      </div>
    </footer>
  );
}

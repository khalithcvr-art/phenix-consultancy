import { Mail, Phone, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

const serviceLinks = [
  { label: "Project Management", href: "/services/project-management" },
  { label: "Procurement Consulting", href: "/services/procurement-consulting" },
  { label: "Process Optimization", href: "/services/process-optimization" },
  { label: "Laboratory Setup", href: "/services/laboratory-setup" },
  { label: "ICP-OES Training", href: "/services/icp-training" },
  { label: "World-class Standards", href: "/services/world-class-standards" },
];

const companyLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/40 py-16 relative">
      <Reveal className="absolute top-0 left-0 right-0">
        <div className="footer-line h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
      </Reveal>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="/" className="flex items-center gap-3 mb-4">
              <span className="shine-loop rounded-xl"><img src="/logo.png" alt="Phenix Logo" className="h-12 w-12" /></span>
              <span className="font-bold">Phenix Consultancy</span>
            </a>
            <p className="text-sm text-foreground/55">Precision consulting for precious metal refineries across UAE and GCC.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/55">
              {serviceLinks.map(l => (
                <li key={l.href}><a href={l.href} className="link-underline hover:text-accent transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/55">
              {companyLinks.map(l => (
                <li key={l.href}><a href={l.href} className="link-underline hover:text-accent transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-foreground/55">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:operations@phenix.info" className="link-underline text-accent">operations@phenix.info</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+971528955780" className="link-underline hover:text-accent transition-colors">+971 52 895 5780</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Amber Gem Tower, 26th Floor,<br />Ajman, UAE</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/55 gap-4">
          <p>&copy; 2026 Phenix Consultancy FZC LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="link-underline hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="link-underline hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

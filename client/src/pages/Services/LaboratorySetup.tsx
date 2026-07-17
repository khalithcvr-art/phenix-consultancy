import { Button } from "@/components/ui/button";
import { ArrowRight, CircleCheck as CheckCircle, Beaker, Zap, Shield } from "lucide-react";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

const coreFunctions = [
  "Gold, silver, platinum, palladium, rhodium testing",
  "Incoming scrap and feedstock evaluation",
  "Refining control and process monitoring",
  "Final quality control and certification",
  "Traceability and chain-of-custody support"
];

const essentialEquipment = [
  {
    name: "XRF Spectrometer",
    description: "Rapid non-destructive screening for multi-element analysis"
  },
  {
    name: "Fire Assay Setup",
    description: "Furnaces, muffle furnaces, cupels, crucibles, tongs for reference-grade determination"
  },
  {
    name: "Analytical Balances",
    description: "High-precision weighing and hydrostatic density measurements"
  },
  {
    name: "ICP-OES Instrument",
    description: "Advanced wet-chemistry analysis for trace elements and alloying elements"
  },
  {
    name: "Ventilation & Environmental Control",
    description: "Fume hoods, filtration, humidity/temperature control for data integrity and safety"
  },
  {
    name: "Data Management System",
    description: "LIMS for sample tracking, results reporting, and compliance documentation"
  }
];

const roadmapSteps = [
  {
    step: "1. Define Testing Scope",
    detail: "Assay only, hallmarking support, refinery QC, or full analytical service"
  },
  {
    step: "2. Choose Methods",
    detail: "XRF for speed, fire assay for reference results, ICP for advanced analysis"
  },
  {
    step: "3. Build Safety First",
    description: "Design ventilation, process controls, chemical storage, and compliance into day-one operations"
  },
  {
    step: "4. Validate Methods",
    detail: "Use reference materials, trained staff, and accreditation-ready protocols before routine operation"
  },
  {
    step: "5. Scale Progressively",
    detail: "Add automation, increase throughput, and expand capabilities as demand grows"
  }
];

export default function LaboratorySetup() {
  return (
    <div className="min-h-screen bg-background text-foreground page-enter">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-20 mx-auto">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Phenix Logo" className="h-16 w-16" />
              <span className="text-xl font-bold text-foreground">Phenix Consultancy</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-sm text-foreground/70 hover:text-accent transition-colors">Services</a>
            <a href="/#about" className="text-sm text-foreground/70 hover:text-accent transition-colors">About</a>
            <a href="/#contact" className="text-sm text-foreground/70 hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="w-full h-full opacity-100"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=2000&q=95')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed"
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/40 z-1" />

        <div className="container relative z-10 mx-auto">
          <div className="max-w-3xl mb-8">
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                <p className="text-sm text-accent font-medium">Laboratory Services</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Laboratory Setup & <span className="text-accent">Development</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Laboratory planning, standard practices, ISO method validation, reference material production, and reliable analytical workflows for precious metals testing and certification.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Core Lab Functions */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=95" alt="Core Laboratory Functions" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Capabilities</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Core Laboratory Functions
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              A well-designed precious metals lab supports testing across gold, silver, platinum, palladium, and rhodium, plus scrap evaluation, refining control, and quality certification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreFunctions.map((func, index) => (
              <Reveal key={index} delay={(index % 2) * 120}>
                <div className="flex items-start gap-4 bg-card/50 border border-border/30 rounded-lg p-6 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 h-full">
                  <Beaker className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground/80 leading-relaxed">{func}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Essential Equipment */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1600&q=95" alt="Essential Lab Equipment" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Equipment & Infrastructure</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Essential Lab Equipment & Setup
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Modern precious metals labs combine non-destructive screening (XRF) with reference-grade assay methods (fire assay, ICP-OES) to deliver fast, accurate results with proven traceability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {essentialEquipment.map((item, index) => (
              <Reveal key={index} delay={(index % 2) * 120} flip>
                <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Optimal Lab Layout */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=95" alt="Optimal Lab Design" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Optimal Lab Design & Workflow
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mb-8">
              A well-designed lab separates receiving, sample prep, assay, and reporting areas to minimize contamination, fumes, and sample mix-ups while supporting secure sample tracking and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-4">Layout Zones</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong>Receiving:</strong> Secure sample intake and documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong>Sample Prep:</strong> Grinding, weighing, splitting with dust control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong>Assay Area:</strong> Fire assay furnaces and wet chemistry workstations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong>Instruments:</strong> XRF, ICP-OES in dedicated, climate-controlled spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong>Reporting:</strong> Data management and QC documentation hub</span>
                </li>
              </ul>
            </div>
            </Reveal>

            <Reveal delay={150}>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-4">Control Systems</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong>Sample Tracking:</strong> LIMS barcode chain-of-custody</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong>Reference Materials:</strong> Certified standards and control samples</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong>Safety:</strong> Acid storage, fume hoods, emergency response</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong>Compliance:</strong> Accreditation-ready documentation and audit trails</span>
                </li>
              </ul>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Development Roadmap */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://i.pinimg.com/1200x/16/81/1a/16811a9933e76da3cfc970d543f7467a.jpg" alt="Proven Methodology" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Implementation Path</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Five-Stage Development Roadmap
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              A sensible approach to building a capable lab that delivers trusted results and supports your refinery's quality, compliance, and certification goals.
            </p>
          </div>

          <div className="space-y-6">
            {roadmapSteps.map((item, index) => (
              <Reveal key={index} delay={index * 90}>
                <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent/20 border border-accent/40">
                        <span className="text-lg font-bold text-accent">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{item.step}</h3>
                      <p className="text-foreground/70 leading-relaxed">{item.detail || item.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Business Applications */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=95" alt="Business Applications" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who Benefits from a Precious Metals Lab
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Refiners, jewelers, hallmarking centers, recycling operations, and trading companies that need trusted purity verification, lot control, and certification to support operations and sales.
            </p>
          </div>

          <Reveal delay={100}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">Refineries</h3>
              <p className="text-foreground/70 leading-relaxed">
                On-site assay for feed evaluation, process control, and bullion certification to support operations and market-grade certification.
              </p>
            </div>

            <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">Jewelry & Manufacturing</h3>
              <p className="text-foreground/70 leading-relaxed">
                Incoming material verification, alloy composition analysis, and finished-product certification to ensure quality and customer confidence.
              </p>
            </div>

            <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">Recycling Operations</h3>
              <p className="text-foreground/70 leading-relaxed">
                Scrap assessment, mixed-lot evaluation, and refined-product verification to maximize recovery and support customer confidence.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <div className="gold-divider" />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Build a world-class laboratory for your operation
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Phenix Consultancy provides comprehensive lab design, equipment selection, method validation, and staff training to deliver trusted analytical results and support your certification and compliance goals.
            </p>
            <Button asChild className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold rounded-lg transition-all hover:scale-105 active:scale-95">
              <a href="/#contact">Plan Your Lab Setup <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /></a>
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

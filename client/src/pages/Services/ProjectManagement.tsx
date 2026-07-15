import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Calendar, Users, Shield, Zap, TrendingUp } from "lucide-react";

const phases = [
  {
    phase: "1. Feasibility & Business Case",
    duration: "2–4 months",
    details: [
      "Market analysis and feedstock sourcing options",
      "ROI and time-to-payback estimates",
      "Regulatory, export, and certification requirements",
      "Preliminary CAPEX/OPEX modeling"
    ]
  },
  {
    phase: "2. Metallurgical Test Work & Flowsheet Selection",
    duration: "2–4 months",
    details: [
      "Representative assay and bench testing",
      "Pilot test campaigns for process validation",
      "Flowsheet definition (leaching, smelting, electrorefining, etc.)",
      "Recovery rates and co-product characterization"
    ]
  },
  {
    phase: "3. Detailed Design & HSE/Permitting",
    duration: "2–4 months",
    details: [
      "P&IDs, layouts, and materials selection",
      "Emissions and effluent treatment design",
      "Environmental and operating permit preparation",
      "Hazardous-materials handling protocols"
    ]
  },
  {
    phase: "4. Procurement & Contractors",
    duration: "3–6 months",
    details: [
      "Performance-spec development tied to metallurgical outcomes",
      "Vendor prequalification and evaluation",
      "Long-lead item procurement (furnaces, electrorefining cells)",
      "Contractor coordination and quality assurance"
    ]
  },
  {
    phase: "5. Construction, Installation & QA",
    duration: "4–8 months",
    details: [
      "Quality control for critical welds and installations",
      "Refractory and containment verification",
      "Analytical lab commissioning",
      "Documented punchlist process"
    ]
  },
  {
    phase: "6. Commissioning, Validation & Ramp-up",
    duration: "1–3 months",
    details: [
      "Progressive commissioning (utilities → circuits → process)",
      "Trial feedstock runs with mass balance verification",
      "Assay method calibration and validation",
      "Commercial throughput ramp-up"
    ]
  },
  {
    phase: "7. Operations Handover & Certification",
    duration: "Ongoing",
    details: [
      "Operator training and SOP implementation",
      "Quality and traceability systems",
      "ISO certification (e.g., ISO 17025)",
      "Bullion acceptance and export readiness"
    ]
  }
];

const controls = [
  {
    title: "Material Accounting & Security",
    description: "Continuous weighing, chain-of-custody records, CCTV/security, and frequent independent assays to minimize shrinkage and theft."
  },
  {
    title: "Environmental & Safety Controls",
    description: "Effluent treatment, acid/emission controls, safe storage for reagents, and high-temperature operation safety systems."
  },
  {
    title: "Quality Assurance for Assays",
    description: "Accredited lab capability (or contracted), standard reference materials, blind samples, and routine instrument calibration."
  },
  {
    title: "Financial Controls",
    description: "Contingency budgets (10–25%), staged CAPEX release tied to milestones, and working capital for bullion cycles."
  }
];

export default function ProjectManagement() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
              backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=2000&q=95')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed"
            }}
          />
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=95')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              mixBlendMode: "overlay"
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/40 z-1" />

        <div className="container relative z-10 mx-auto">
          <div className="max-w-3xl mb-8">
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                <p className="text-sm text-accent font-medium">Project Management</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Precious Metal Refinery <span className="text-accent">Project Management</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Structured project guidance from concept to commissioning, with disciplined coordination between technical, operational, and investment stakeholders. Protect value, minimize losses, ensure regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Seven-Phase Plan */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Proven Methodology</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Seven-Phase Project Delivery
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Each phase is designed with clear milestones, stage-gate reviews, and risk controls to deliver a world-class refinery on schedule and within budget.
            </p>
          </div>

          <div className="space-y-6">
            {phases.map((item, index) => (
              <div key={index} className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent/20 border border-accent/40">
                      <span className="text-lg font-bold text-accent">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{item.phase}</h3>
                      <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full w-fit">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span className="text-sm text-accent font-semibold">{item.duration}</span>
                      </div>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                          <span className="text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent/10 border border-accent/30 rounded-lg p-8">
            <p className="text-lg text-foreground/80 leading-relaxed">
              <strong className="text-accent">Typical Timeline:</strong> Feasibility & testing 2–4 months → Detailed design 2–4 months → Procurement 3–6 months → Construction & installation 4–8 months → Commissioning 1–3 months → Total project duration typically 12–27 months depending on capacity and scope.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Critical Controls */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Risk Management</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Critical Controls & Risk Mitigation
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Protect your investment through integrated systems for accountability, safety, quality, and financial discipline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {controls.map((control, index) => (
              <div key={index} className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="h-6 w-6 text-accent flex-shrink-0" />
                  <h3 className="text-xl font-bold text-foreground">{control.title}</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">{control.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Team & Governance */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <p className="text-sm text-accent font-semibold uppercase tracking-wider">Execution Excellence</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Recommended Team & Governance
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                A world-class refinery project requires a multidisciplinary core team with clear roles, regular stage-gate reviews, and measurable KPIs to track progress and manage risk.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Core Team Roles</h4>
                    <p className="text-sm text-foreground/70">Project manager, process/metallurgical engineer, mechanical/electrical engineers, HSE/permitting lead, procurement lead, commissioning lead, QA/QC lab lead, security manager.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Key Performance Indicators</h4>
                    <p className="text-sm text-foreground/70">Recovery rate, throughput, material loss, safety incidents, schedule variance, budget variance, and regulatory compliance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Stage-Gate Reviews</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Pre-feasibility approval</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Pre-procurement release</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Pre-construction sign-off</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Pre-commissioning validation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
                <p className="text-foreground/80 leading-relaxed">
                  Each gate includes technical validation, budget review, schedule confirmation, and risk assessment to ensure project success and stakeholder confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to build your world-class refinery?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Phenix Consultancy provides end-to-end project management, from feasibility through commissioning, protecting your investment at every stage.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold rounded-lg transition-all hover:scale-105 active:scale-95">
            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight, CircleCheck as CheckCircle, TrendingUp, ChartBar as BarChart3, Shield, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Procurement Strategy & Category Plans",
    description: "Develop targeted sourcing strategies aligned with your operational goals, cost targets, and risk appetite.",
    icon: "📊"
  },
  {
    title: "Tender Document Development",
    description: "Create comprehensive, technically rigorous tender specifications that attract qualified vendors and ensure competitive bids.",
    icon: "📋"
  },
  {
    title: "Technical Evaluation & Scoring",
    description: "Conduct independent technical compliance review and scoring against published, objective criteria before financial evaluation.",
    icon: "✓"
  },
  {
    title: "Vendor Qualification & Due Diligence",
    description: "Prequalify suppliers based on capability, quality systems, regulatory compliance, and experience with precious metals operations.",
    icon: "🔍"
  },
  {
    title: "Equipment Selection & Specification",
    description: "Match vendor proposals to your metallurgical requirements, performance specs, and operational constraints with technical rigor.",
    icon: "⚙️"
  },
  {
    title: "Negotiation Support & Award Recommendation",
    description: "Facilitate commercial discussions, finalize terms, and provide defensible award recommendations based on best value.",
    icon: "🤝"
  }
];

const processSteps = [
  {
    step: "1. Procurement Strategy",
    details: "Define sourcing approach, category plans, supplier segmentation, and cost/quality/risk balance."
  },
  {
    step: "2. Tender Preparation",
    details: "Draft technical specs, commercial terms, evaluation criteria, and scoring matrices."
  },
  {
    step: "3. Technical Evaluation",
    details: "Review mandatory compliance, score rated criteria independently, identify deviations."
  },
  {
    step: "4. Financial Evaluation",
    details: "Compare pricing, lifecycle costs, and commercial terms for compliant bids."
  },
  {
    step: "5. Supplier Comparison & Recommendation",
    details: "Present findings, negotiate final terms, and recommend award based on best value."
  },
  {
    step: "6. Contract & Delivery Management",
    details: "Support contract execution, monitor supplier performance, and manage changes."
  }
];

export default function ProcurementConsulting() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1553531088-d9b66f66f89f?w=2000&q=95')",
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
                <p className="text-sm text-accent font-medium">Procurement Consulting</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Procurement Consulting & <span className="text-accent">Technical Evaluation</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Vendor review, equipment selection, specification comparison, calibration standards procurement, and investment-grade purchasing support. Ensure best value and technical fit for every critical acquisition.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Services Overview */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=95" alt="Procurement Solutions" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <Reveal>
            <div className="mb-16">
              <div className="inline-block mb-4">
                <p className="text-sm text-accent font-semibold uppercase tracking-wider">Our Services</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                End-to-End Procurement Solutions
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Reveal key={index} delay={(index % 3) * 120} flip>
                <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Process Steps */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://i.pinimg.com/1200x/16/81/1a/16811a9933e76da3cfc970d543f7467a.jpg" alt="Proven Methodology" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <Reveal>
            <div className="mb-16">
              <div className="inline-block mb-4">
                <p className="text-sm text-accent font-semibold uppercase tracking-wider">Methodology</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Six-Stage Procurement Process
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl">
                A rigorous, transparent process that delivers best value, minimizes risk, and ensures supplier compliance with your technical and commercial requirements.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {processSteps.map((item, index) => (
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
                      <p className="text-foreground/70 leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Key Benefits */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=95" alt="Technical Evaluation" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Technical Evaluation Matters
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <BarChart3 className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Risk Mitigation</h3>
              <p className="text-foreground/70 leading-relaxed">
                Identify non-compliant, underspec, or high-risk suppliers early, before financial commitment. Avoid costly equipment failures, warranty disputes, and performance shortfalls.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <TrendingUp className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Best Value</h3>
              <p className="text-foreground/70 leading-relaxed">
                Compare technical capability, quality, support, and lifecycle cost alongside price to select the optimal supplier and avoid lowest-cost traps.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <Shield className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Defensibility</h3>
              <p className="text-foreground/70 leading-relaxed">
                Documented, objective evaluation criteria and transparent scoring ensure audit-ready procurement and stakeholder confidence in award decisions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <Zap className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Speed & Efficiency</h3>
              <p className="text-foreground/70 leading-relaxed">
                Structured evaluation process accelerates decision-making, reduces rework, and keeps procurement timelines on track.
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
              Get strategic procurement guidance for your next acquisition
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Phenix Consultancy delivers technical rigor, vendor expertise, and commercial acumen to help you make confident purchasing decisions.
            </p>
            <Button className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold rounded-lg transition-all hover:scale-105 active:scale-95">
              Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

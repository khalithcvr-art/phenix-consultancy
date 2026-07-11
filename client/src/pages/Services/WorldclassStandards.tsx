import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, TrendingUp, Award } from "lucide-react";

const coreStandards = [
  {
    title: "Global Precious Metals Code",
    description: "Sets best-practice expectations for ethics, governance, compliance, risk management, information sharing, and business conduct in the global precious metals market."
  },
  {
    title: "Responsible Gold Mining Principles",
    description: "Defines expectations for responsible mining across environmental, social, and governance (ESG) issues and sustainable value creation."
  },
  {
    title: "Conflict-Free Gold Standard",
    description: "Addresses links between gold and unlawful armed conflict, aligning with international responsible sourcing guidance and due diligence frameworks."
  },
  {
    title: "LBMA Responsible Sourcing Guidance",
    description: "Supports due diligence and ethical supply-chain controls for gold and silver trading, refining, and certification at global market standards."
  }
];

const improvementPillars = [
  {
    title: "Strong Due Diligence",
    description: "Rigorous supplier and refiner vetting, source verification, conflict-free documentation, and ongoing compliance monitoring."
  },
  {
    title: "Clear Traceability",
    description: "End-to-end chain-of-custody from source through production to finished product, with documented handoffs and assay verification."
  },
  {
    title: "Regular Audits & Assurance",
    description: "Internal audit programs, third-party verification, regulatory compliance checks, and corrective action tracking."
  },
  {
    title: "Staff Training & Culture",
    description: "Continuous education on conduct, compliance, responsible sourcing, and ethical decision-making embedded in daily operations."
  },
  {
    title: "Measurable KPIs",
    description: "Targets for waste reduction, energy efficiency, safety, ethical sourcing, and transparency with regular review and improvement."
  },
  {
    title: "Corrective Action Systems",
    description: "Root-cause analysis, preventive measures, and systemic improvements rather than just symptom treatment."
  }
];

const simpleFramework = [
  {
    stage: "Comply",
    description: "Meet the standard's requirements through documented systems, procedures, and controls",
    icon: "✓"
  },
  {
    stage: "Verify",
    description: "Prove compliance through audits, documentation, and independent assurance",
    icon: "✔"
  },
  {
    stage: "Improve",
    description: "Use audit findings and KPI data to raise performance, reduce risk, and sustain growth year after year",
    icon: "↗"
  }
];

export default function WorldclassStandards() {
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
            className="w-full h-full opacity-40 animate-pulse"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80')",
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
                <p className="text-sm text-accent font-medium">Compliance & Excellence</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              World-Class Standards & <span className="text-accent">Continuous Improvement</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Tailor-made consulting for reliable operations, cost-effective solutions, and refinery systems built for sustainable, ethical, and certified growth. Not a one-time compliance check—a living culture of excellence.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Core Standards */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Global Benchmarks</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Key International Standards
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Market integrity, responsible sourcing, and quality assurance—aligned with global best-practice expectations for precious metals operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreStandards.map((standard, index) => (
              <div key={index} className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
                <Award className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{standard.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Improvement Pillars */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Implementation Framework</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Six Pillars of Excellence
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              A precious metals company aiming for world-class performance focuses on these integrated systems that work together to build trust, reduce risk, and drive sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {improvementPillars.map((pillar, index) => (
              <div key={index} className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Three-Step Framework */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Strategic Approach</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comply, Verify, Improve Framework
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              A practical way to build a culture of continuous improvement: meet the standard, prove it with audits, then use findings to raise performance year after year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {simpleFramework.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
                <div className="text-5xl font-bold text-accent mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.stage}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card/80 border border-accent/30 rounded-lg p-8">
            <p className="text-lg text-foreground/80 leading-relaxed">
              This cycle is <strong>never done</strong>—each compliance cycle, each audit, and each KPI review feeds into the next iteration. The best companies treat standards not as checklist items, but as foundations for building trust, reducing risk, and creating competitive advantage.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Continuous Improvement */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Continuous Improvement Means
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Companies pursuing world-class performance don't just meet standards once—they keep tightening controls, training staff, and auditing processes over time. This reflects the market's recognition that excellence is a journey, not a destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
              <TrendingUp className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Metrics & Monitoring</h3>
              <ul className="space-y-3 text-foreground/70">
                <li>✓ Annual compliance audits with trend analysis</li>
                <li>✓ KPI dashboards tracking waste, safety, ethics</li>
                <li>✓ Corrective actions linked to root causes</li>
                <li>✓ Regular review cycles with stakeholder feedback</li>
              </ul>
            </div>

            <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
              <Award className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Market Recognition</h3>
              <ul className="space-y-3 text-foreground/70">
                <li>✓ Trusted by buyers and investors</li>
                <li>✓ Premium positioning in ethical markets</li>
                <li>✓ Reduced supply-chain risk and regulatory exposure</li>
                <li>✓ Enhanced reputation and stakeholder confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Our Support */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Phenix Supports Your Excellence Journey
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Standards Gap Analysis</h3>
                  <p className="text-foreground/70">Audit your current systems against global standards and identify priority areas for improvement.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Process Design & Implementation</h3>
                  <p className="text-foreground/70">Design compliant systems for due diligence, documentation, supply-chain traceability, and quality assurance.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Staff Training & Certification</h3>
                  <p className="text-foreground/70">Build team capability on standards, responsible sourcing, and ethical decision-making through tailored training programs.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Audit & Certification Support</h3>
                  <p className="text-foreground/70">Prepare for and support third-party audits, accreditation, and certification (ISO 17025, LBMA approval, etc.).</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Continuous Improvement Coaching</h3>
                  <p className="text-foreground/70">Establish KPI frameworks, conduct regular audits, and drive corrective actions to sustain and raise performance year-over-year.</p>
                </div>
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
            Build a culture of world-class compliance and excellence
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Phenix Consultancy helps precious metals companies audit current practices, design robust systems, train teams, and sustain continuous improvement aligned with global standards and market expectations.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold rounded-lg transition-all hover:scale-105 active:scale-95">
            Audit Your Standards <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

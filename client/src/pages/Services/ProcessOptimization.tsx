import { Button } from "@/components/ui/button";
import { ArrowRight, CircleCheck as CheckCircle, Zap, TrendingUp, Target } from "lucide-react";

const optimizationSteps = [
  {
    step: "1. Define Objectives & Baseline",
    description: "Set measurable KPIs (recovery %, yield, reagent consumption, cycle time, energy use) and establish baseline performance from 30–90 days of operational data."
  },
  {
    step: "2. Improve Sampling & Mass Balance",
    description: "Create tight sampling plans, perform reconciliation (daily/weekly), and identify loss points. Target >95% mass balance closure."
  },
  {
    step: "3. Lab Testwork & Mechanism Studies",
    description: "Characterize feed (assays, mineralogy, XRD), run bench tests (leaching, adsorption, precipitation), and obtain kinetic data for scale-up."
  },
  {
    step: "4. Reagent & Process Optimization",
    description: "Use Design of Experiments (DoE) and Response Surface Modeling (RSM) to optimize dosages, pH, temperature, and residence time for maximum recovery and minimum reagent use."
  },
  {
    step: "5. Circuit Configuration & Unit-Operation Tuning",
    description: "Optimize grinding, classification, adsorption kinetics, and smelting/refining parameters to reduce losses and improve throughput."
  },
  {
    step: "6. Metallurgical Accounting & Control Systems",
    description: "Implement real-time data collection, Statistical Process Control (SPC) charts, and process control loops to stabilize operations."
  },
  {
    step: "7. Pilot Testing & Scale-up",
    description: "Validate optimized conditions at pilot scale, update economics, and prepare for plant implementation."
  },
  {
    step: "8. Implementation & Continuous Improvement",
    description: "Roll out in phases with training, updated SOPs, and Plan–Do–Check–Act loops for sustained improvement."
  }
];

const quickWins = [
  "Tighten sampling and reconcile losses to identify major loss points quickly",
  "Optimize grind size to balance liberation vs energy costs",
  "Reduce reagent over-dosing with stepwise titration or inline analyzers",
  "Improve carbon/resin handling to reduce fines and entrainment losses",
  "Optimize elution cycles to increase throughput"
];

export default function ProcessOptimization() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=2000&q=95')",
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
                <p className="text-sm text-accent font-medium">Process Optimization</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Production & Chemical <span className="text-accent">Process Optimization</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Production process planning, chemical process improvement, troubleshooting, and operational performance enhancement for existing refineries. Unlock hidden value through rigorous metallurgical analysis and control optimization.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Optimization Program */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://i.pinimg.com/1200x/16/81/1a/16811a9933e76da3cfc970d543f7467a.jpg" alt="Proven Methodology" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Proven Methodology</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Eight-Step Optimization Program
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Increase metal recovery and throughput, reduce reagent cost and losses, lower environmental footprint, and improve product quality and consistency.
            </p>
          </div>

          <div className="space-y-6">
            {optimizationSteps.map((item, index) => (
              <div key={index} className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent/20 border border-accent/40">
                      <span className="text-lg font-bold text-accent">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.step}</h3>
                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Quick Wins */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=95" alt="Quick Wins" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Fast-Track Improvements</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quick Wins: Low Cost, High Impact
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Start generating returns immediately with targeted improvements that require minimal capital investment but deliver measurable performance gains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {quickWins.map((win, index) => (
              <div key={index} className="bg-card/50 border border-border/30 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 flex items-start gap-4">
                <Zap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground/80 leading-relaxed">{win}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Core Methods */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=95" alt="Advanced Analytical Tools" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Advanced Analytical Tools
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mb-12">
              We deploy rigorous scientific methods to uncover opportunities and validate improvements before plant implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4">Metallurgical Accounting</h3>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• Mass balance closure analysis</li>
                <li>• Loss point identification</li>
                <li>• Daily/weekly reconciliation</li>
                <li>• Recovery tracking</li>
              </ul>
            </div>

            <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4">Design of Experiments</h3>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• Factorial designs</li>
                <li>• Response surface modeling</li>
                <li>• Optimization of multiple variables</li>
                <li>• Statistical validation</li>
              </ul>
            </div>

            <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4">Process Modeling</h3>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• Heat & mass transport</li>
                <li>• Kinetic analysis</li>
                <li>• Kinetics data generation</li>
                <li>• Scale-up simulation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Example Case */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1600&q=95" alt="Real-World Example" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Real-World Example
            </h2>
          </div>

          <div className="bg-card/80 border border-accent/30 rounded-lg p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Gold Refining Recovery Challenge</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Baseline recovery: 85% | Known issue: losses from coarse floating particles and fine slimes
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Investigation</h4>
                    <p className="text-sm text-foreground/70">Split tail sampling by size fraction, liberation tests, surface analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Optimization</h4>
                    <p className="text-sm text-foreground/70">Tune grinding/classification, add scavenger stage, optimize residence time</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Results</h4>
                    <p className="text-sm text-foreground/70">3–7% recovery uplift, lower reagent consumption per oz, reduced tails</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Environmental Considerations */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Environmental & Safety Integration
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Optimization programs include hazard control, closed-loop water/reagent circuits, effluent treatment, emissions tracking, and life-cycle assessment to ensure sustainable, compliant operations.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unlock hidden recovery and reduce costs
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Phenix Consultancy delivers systematic process optimization that generates measurable, sustainable improvements to your refinery's productivity and profitability.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold rounded-lg transition-all hover:scale-105 active:scale-95">
            Start Your Optimization <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

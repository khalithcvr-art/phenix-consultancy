import { Button } from "@/components/ui/button";
import { ArrowRight, CircleCheck as CheckCircle, Users, BookOpen, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";


const staffRoles = [
  {
    role: "Analysts & Technicians",
    focus: "Daily operation, QC routine, hands-on skills"
  },
  {
    role: "Supervisors",
    focus: "Method control, traceability, performance monitoring"
  },
  {
    role: "Lab Managers & Specialists",
    focus: "Workflow design, training oversight, method investigation"
  }
];

export default function ICPTraining() {
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
            className="w-full h-full opacity-100 transition-opacity duration-1200"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1576086213369-97a306d36557?w=2000&q=95')",
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
                <p className="text-sm text-accent font-medium">Technical Training</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              ICP-OES Training & <span className="text-accent">Technical Staff Development</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Practical training programs that strengthen operator capability, laboratory reliability, and long-term technical independence. Build competent teams that run, maintain, troubleshoot, and validate ICP-OES methods reliably.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Training Overview */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=95" alt="Training Program Overview" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Program Overview</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Training Goals & Expected Outcomes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8 h-full">
              <BookOpen className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Training Goals</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>• Build competent operators confident in instrument operation</li>
                <li>• Enable method development and optimization</li>
                <li>• Develop troubleshooting and maintenance skills</li>
                <li>• Ensure QA/QC and data integrity practices</li>
                <li>• Support accreditation and compliance readiness</li>
              </ul>
            </div>
            </Reveal>

            <Reveal delay={150}>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8 h-full">
              <Zap className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Expected Outcomes</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>✓ Safe instrument operation and maintenance</li>
                <li>✓ Method development and optimization skills</li>
                <li>✓ Interference recognition and correction</li>
                <li>✓ Routine QC and performance monitoring</li>
                <li>✓ Professional competency certification</li>
              </ul>
            </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* Hands-On Exercises */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=95" alt="Hands-On Practical Exercises" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hands-On Practical Exercises
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Real-world skills developed through supervised practice with actual instruments, samples, and precious metals matrices to ensure confidence and competency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal flip>
            <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">Practical Drills</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Prepare standards and precious metal solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Optimize nebulizer flow and plasma settings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Identify and correct spectral overlap</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Repair and replace nebulizer and pump tubing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Perform performance check and calculate MDL</span>
                </li>
              </ul>
            </div>
            </Reveal>

            <Reveal delay={150} flip>
            <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">Assessment</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Short quizzes after theory modules</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Practical competency checklist & sign-off</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Final practical test (run unknowns, produce report)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Professional competency certificate</span>
                </li>
              </ul>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Staff Roles */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=95" alt="Role-Based Training Paths" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Tailored Learning</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Role-Based Training Paths
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Different team members need different depth of knowledge. We customize training to match each role's responsibilities and career path.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {staffRoles.map((item, index) => (
              <Reveal key={index} delay={index * 120} flip>
                <div className="bg-card/50 border border-border/30 rounded-lg p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 h-full">
                  <Users className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.role}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Delivery Options */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=95" alt="Training Delivery Options" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Training Delivery Options
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Choose the delivery format that best fits your team's availability, learning preferences, and operational constraints.
            </p>
          </div>

          <Reveal delay={100}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Public Vendor Courses</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Manufacturer-specific training at vendor sites. Fast, structured, and certificate-included. 1–5 days.
              </p>
              <p className="text-sm text-accent font-semibold">Best for: Instrument-specific deep dives</p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">On-Site Customized Training</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Tailored program delivered at your lab using your equipment, samples, and procedures. 2–6 weeks.
              </p>
              <p className="text-sm text-accent font-semibold">Best for: Operational relevance & team cohesion</p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Hybrid Approach</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Combine vendor fundamentals with site-specific advanced topics and method validation. Flexible.
              </p>
              <p className="text-sm text-accent font-semibold">Best for: Maximum efficiency & depth</p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Key Skills */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=95" alt="Skills Development" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills You'll Develop
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Safe instrument operation and startup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Sample introduction and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Method development and validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Troubleshooting and maintenance</span>
                </li>
              </ul>
            </div>
            </Reveal>

            <Reveal delay={150}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Professional Skills</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">QA/QC and performance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Data documentation and integrity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Accreditation and compliance readiness</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Professional certification and competency</span>
                </li>
              </ul>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Build a trained, competent team
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Phenix Consultancy designs and delivers customized ICP-OES training programs that build operator confidence, lab reliability, and technical independence for your team.
            </p>
            <Button className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold rounded-lg transition-all hover:scale-105 active:scale-95">
              Design Training Program <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { Card, Badge, AuditModal } from "@/components/ui";
import {
  Search,
  FileText,
  Paintbrush,
  Rocket,
  BarChart3,
  RefreshCw,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/ahmedkhawaja-assets/30min";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Audit",
    duration: "Week 1",
    description:
      "We begin with a comprehensive audit of your current email program, tech stack, and customer journey. This includes analyzing your existing flows, campaigns, deliverability metrics, and competitor strategies.",
    deliverables: [
      "Full Email Program Audit",
      "Competitor Analysis Report",
      "Tech Stack Assessment",
      "Customer Journey Mapping",
      "Quick Win Opportunities",
    ],
    color: "sky",
  },
  {
    step: "02",
    icon: FileText,
    title: "Strategy Development",
    duration: "Week 2",
    description:
      "Based on our findings, we develop a customized retention strategy aligned with your brand goals. This includes flow architecture, campaign calendar, segmentation strategy, and KPI targets.",
    deliverables: [
      "Retention Strategy Document",
      "Email Flow Architecture",
      "90-Day Campaign Calendar",
      "Segmentation Framework",
      "KPI & Goal Setting",
    ],
    color: "violet",
  },
  {
    step: "03",
    icon: Paintbrush,
    title: "Design & Build",
    duration: "Weeks 2-3",
    description:
      "Our design team creates stunning, conversion-optimized email templates that reflect your brand identity. Simultaneously, our developers build and configure your automated flows.",
    deliverables: [
      "Master Email Templates",
      "Flow Email Designs",
      "Campaign Templates",
      "Mobile-Responsive Layouts",
      "Brand Style Guide (Email)",
    ],
    color: "emerald",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Implementation & Launch",
    duration: "Week 3-4",
    description:
      "We set up your flows in your ESP, configure triggers and conditions, implement segmentation, and conduct thorough QA testing before going live.",
    deliverables: [
      "ESP Setup & Configuration",
      "Flow Implementation",
      "Segmentation Setup",
      "Deliverability Optimization",
      "QA Testing & Launch",
    ],
    color: "amber",
  },
  {
    step: "05",
    icon: BarChart3,
    title: "Monitor & Optimize",
    duration: "Ongoing",
    description:
      "Post-launch, we continuously monitor performance metrics, conduct A/B tests, and make data-driven optimizations to improve results over time.",
    deliverables: [
      "Weekly Performance Reports",
      "A/B Testing Program",
      "Revenue Attribution",
      "Flow Optimization",
      "Strategic Recommendations",
    ],
    color: "rose",
  },
  {
    step: "06",
    icon: RefreshCw,
    title: "Scale & Expand",
    duration: "Ongoing",
    description:
      "As your program matures, we identify opportunities to expand your retention ecosystem with additional flows, channels, and advanced strategies.",
    deliverables: [
      "Advanced Flow Expansion",
      "New Channel Integration",
      "Loyalty Program Design",
      "Seasonal Strategies",
      "Growth Roadmap Updates",
    ],
    color: "cyan",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  sky: { bg: "bg-sky-500/20", text: "text-sky-400", border: "border-sky-500/30", gradient: "from-sky-500/20" },
  violet: { bg: "bg-violet-500/20", text: "text-violet-400", border: "border-violet-500/30", gradient: "from-violet-500/20" },
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30", gradient: "from-emerald-500/20" },
  amber: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/30", gradient: "from-amber-500/20" },
  rose: { bg: "bg-rose-500/20", text: "text-rose-400", border: "border-rose-500/30", gradient: "from-rose-500/20" },
  cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/30", gradient: "from-cyan-500/20" },
};

const expectations = [
  {
    title: "Week 1-2",
    subtitle: "Foundation",
    description: "Audit complete, strategy approved, design concepts presented",
  },
  {
    title: "Week 3-4",
    subtitle: "Implementation",
    description: "Flows built, templates created, testing complete, launch ready",
  },
  {
    title: "Month 2",
    subtitle: "Optimization",
    description: "First results visible, initial optimizations made, campaigns live",
  },
  {
    title: "Month 3+",
    subtitle: "Growth",
    description: "Significant revenue lift, expanded flows, strategic scaling",
  },
];

export default function ProcessPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-persian-blue/10 rounded-full blur-[200px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge variant="primary" className="mb-6">
                <Sparkles className="w-3 h-3 mr-1.5" />
                Our Process
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                From Strategy to Success
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
                A proven, systematic approach to building retention systems that drive predictable revenue. 
                Innovation with purpose. Delivery with consistency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-persian-blue/50 via-white/10 to-transparent hidden lg:block" />

              <div className="space-y-12">
                {processSteps.map((step, index) => {
                  const colors = colorClasses[step.color];
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={step.step}
                      variants={itemVariants}
                      className="relative"
                    >
                      {/* Step Number Circle - Desktop */}
                      <div className="absolute left-0 w-16 h-16 rounded-full bg-oxford-blue border-2 border-white/10 flex items-center justify-center z-10 hidden lg:flex">
                        <span className={`text-xl font-bold ${colors.text}`}>{step.step}</span>
                      </div>

                      {/* Content Card */}
                      <div className={`lg:ml-24`}>
                        <Card
                          variant="glass"
                          className="p-8 hover:border-white/20 transition-all duration-300"
                          whileHover={{ y: -4 }}
                        >
                          <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left Side - Info */}
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-4">
                                {/* Mobile Step Number */}
                                <div className={`lg:hidden w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                                  <span className={`text-lg font-bold ${colors.text}`}>{step.step}</span>
                                </div>
                                <div
                                  className={`hidden lg:flex w-12 h-12 rounded-xl ${colors.bg} items-center justify-center`}
                                >
                                  <step.icon className={`w-6 h-6 ${colors.text}`} />
                                </div>
                                <div>
                                  <h3 className="text-xl font-semibold text-white">
                                    {step.title}
                                  </h3>
                                  <p className={`text-sm ${colors.text}`}>{step.duration}</p>
                                </div>
                              </div>

                              <p className="text-white/60 leading-relaxed">
                                {step.description}
                              </p>
                            </div>

                            {/* Right Side - Deliverables */}
                            <div className="lg:w-72 flex-shrink-0">
                              <p className="text-xs tracking-[0.15em] text-white/40 uppercase font-medium mb-3">
                                Deliverables
                              </p>
                              <ul className="space-y-2">
                                {step.deliverables.map((deliverable) => (
                                  <li
                                    key={deliverable}
                                    className="flex items-center gap-2 text-sm"
                                  >
                                    <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                                    <span className="text-white/70">{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Expectations */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What to Expect
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                A clear timeline of milestones and results you can expect from our partnership.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {expectations.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < expectations.length - 1 && (
                    <div className="absolute top-8 left-full w-full h-px bg-gradient-to-r from-persian-blue/50 to-transparent hidden lg:block" />
                  )}

                  <Card
                    variant="glass"
                    className="p-6 h-full text-center hover:border-persian-blue/30 transition-all"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-persian-blue/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-persian-blue">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-persian-blue text-sm mb-3">{item.subtitle}</p>
                    <p className="text-white/50 text-sm">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Badge variant="outline" className="mb-6">
                Our Philosophy
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Operational Excellence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <Card variant="glass" className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Innovation with Purpose</h3>
                  <p className="text-white/50">
                    We don&apos;t chase trends for the sake of it. Every strategy and tactic we implement 
                    is purposefully chosen to drive measurable results for your brand.
                  </p>
                </Card>
                <Card variant="glass" className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Delivery with Consistency</h3>
                  <p className="text-white/50">
                    Reliable execution is our hallmark. We maintain high standards across every 
                    deliverable, ensuring quality and timeliness in everything we do.
                  </p>
                </Card>
                <Card variant="glass" className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Partnership Mindset</h3>
                  <p className="text-white/50">
                    We see ourselves as an extension of your team. Your success is our success, 
                    and we&apos;re committed to building long-term relationships built on trust.
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-white/50 mb-8 max-w-2xl mx-auto">
                Book a discovery call and let&apos;s explore how Retenda can help you build 
                clarity, predictable revenue, and long-term customer loyalty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-persian-blue text-white font-semibold rounded-xl hover:bg-persian-blue/90 transition-all shadow-lg shadow-persian-blue/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-5 h-5" />
                  Book a Meeting
                </motion.a>
                <motion.button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="w-5 h-5" />
                  Request Free Audit
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Audit Modal */}
      <AuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
      />
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, MousePointerClick, LayoutTemplate, Zap, ShieldCheck, 
  Layers, Cpu, Globe, Terminal, CheckCircle2, ChevronRight, 
  HelpCircle, Rocket, Code2, Users, Lock, CreditCard,
  Eye, Monitor, Fingerprint, Activity, Box
} from "lucide-react";
import { PageTransition } from "@/src/components/PageTransition";
import { motion } from "framer-motion";

const PageContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const letters = title.split("");
  
  return (
    <PageTransition>
      <div className="pt-40 pb-32 px-6 max-w-6xl mx-auto relative">
        <Link to="/" className="absolute top-8 left-6 font-display font-bold text-2xl tracking-tighter text-black">
          DivCraft
        </Link>
        <div className="flex flex-col mb-12 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-black uppercase overflow-hidden flex flex-wrap justify-center lg:justify-start">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.03,
                  type: "spring",
                  stiffness: 150,
                  damping: 25,
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto lg:mx-0" />
        </div>
        {children}
      </div>
    </PageTransition>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered }) => (
  <div className={`mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
    <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">{title}</h3>
    {subtitle && <p className="text-gray-500 text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

export const CapturePage = () => (
  <PageContainer title="Capture">
    <div className="space-y-48">
      {/* Hero Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
            <Activity size={12} /> Live Engine v2.4
          </div>
          <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tight">The world's most accurate DOM analysis engine.</h2>
          <p className="text-gray-500 text-xl leading-relaxed">DivCraft doesn’t just copy code—it understands it. Our capture engine performs a deep architectural audit, translating computed browser states into clean, semantic React & Tailwind components.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-5 bg-black text-white font-bold tracking-widest uppercase rounded-full hover:scale-105 transition-all flex items-center gap-2 shadow-2xl">
              Add to Chrome <ArrowRight size={16} />
            </button>
            <button className="px-10 py-5 bg-white text-black border border-gray-100 font-bold tracking-widest uppercase rounded-full hover:bg-gray-50 transition-colors shadow-sm">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="bg-gray-50 aspect-square rounded-[3.5rem] border border-gray-100 flex items-center justify-center p-12 shadow-inner relative overflow-hidden group">
           <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
           <MousePointerClick size={160} className="text-black opacity-10 group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
        </div>
      </div>

      {/* Visual Demo Gallery (Before & After) */}
      <section className="space-y-16">
        <SectionHeader 
          centered 
          title="From Inspiration to Production" 
          subtitle="Stop recreating the same buttons, cards, and layouts. Capture any element in its natural state and get pure code instantly."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
             <div className="h-[400px] bg-gray-100 rounded-[2.5rem] border border-gray-200 overflow-hidden relative group cursor-crosshair">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center transition-all duration-700 group-hover:grayscale group-hover:opacity-70" />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-white text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Live Browser</div>
                <div className="absolute bottom-8 right-8 w-40 h-1 bg-white/20 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="h-full bg-blue-500 w-full animate-progress-fast" />
                </div>
             </div>
             <p className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center">Step 01: Select any site element</p>
          </div>
          <div className="space-y-6">
             <div className="h-[400px] bg-neutral-900 rounded-[2.5rem] border border-white/5 overflow-hidden relative group">
                <div className="absolute inset-0 p-8 font-mono text-xs sm:text-sm text-neutral-400 overflow-hidden">
                  <p><span className="text-blue-400">export default function</span> <span className="text-yellow-400">CapturedModule</span>() {"{"}</p>
                  <p className="pl-4"><span className="text-blue-400">return</span> (</p>
                  <p className="pl-8">{"<div className=\"grid grid-cols-3 gap-8 py-20 px-12 bg-black border border-white/5 shadow-2xl rounded-[3rem]\">"}</p>
                  <p className="pl-12">{"{/* Pure, functional Tailwind 4 code */}"}</p>
                  <p className="pl-8">{"</div>"}</p>
                  <p className="pl-4">);</p>
                  <p>{"}"}</p>
                </div>
                <div className="absolute top-8 left-8 bg-blue-600 px-4 py-2 rounded-xl text-white text-[10px] font-bold tracking-widest uppercase shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">React + Tailwind Export</div>
                <div className="absolute inset-0 bg-blue-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </div>
             <p className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center">Step 02: One-click export</p>
          </div>
        </div>
      </section>

      {/* Advanced Extraction Protocol */}
      <section className="bg-gray-50 rounded-[4rem] p-12 md:p-24 border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-8">
              <SectionHeader 
                title="Professional Protocol" 
                subtitle="We've handled the edge cases so you don't have to worry about broken layouts or missing styles."
              />
              <div className="space-y-12">
                 {[
                   { icon: <Monitor />, title: "Hover & Focus Sync", desc: "Our engine triggers and captures pseudo-class styles like :hover, :focus, and :active states across complex nested hierarchies." },
                   { icon: <Box />, title: "Asset Auto-Ingestion", desc: "Instantly extract images, SVGs, and font references. We even optimize your assets on the fly for production use." },
                   { icon: <Layers />, title: "Modular Mapping", desc: "Instead of one giant block of code, DivCraft intelligently splits complex elements into functional React sub-components." }
                 ].map((feat, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm group-hover:scale-110 transition-transform group-hover:text-blue-600">{feat.icon}</div>
                       <div className="space-y-2">
                          <h4 className="text-xl font-bold text-gray-900 leading-tight">{feat.title}</h4>
                          <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-[3.5rem] blur-3xl" />
              <div className="relative h-full w-full bg-white rounded-[3.5rem] border border-gray-200 shadow-2xl flex items-center justify-center p-12">
                 <Cpu size={140} className="text-black opacity-5" />
                 <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8 opacity-40">
                    {[1,2,3,4].map(i => <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl" />)}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* The IDE Bridge */}
      <section className="text-center space-y-20">
         <div className="space-y-4 max-w-2xl mx-auto">
            <h3 className="text-4xl font-bold">The Bridge.</h3>
            <p className="text-gray-500 text-lg">Hit "Capture" in your browser and see the module appear instantly in your favorite editor. No manual file management required.</p>
         </div>
         <div className="relative max-w-4xl mx-auto group">
            <div className="bg-gray-200 aspect-video rounded-[3rem] border border-gray-300 shadow-2xl overflow-hidden relative transition-all duration-1000 group-hover:grayscale group-hover:opacity-80">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-8 items-center bg-white/80 backdrop-blur-xl px-12 py-6 rounded-[2.5rem] shadow-2xl border border-white/50">
                     <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white"><Globe size={32} /></div>
                     <ArrowRight size={24} className="text-gray-300 animate-bounce-horizontal" />
                     <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center text-white"><Terminal size={32} /></div>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-10 -right-10 md:w-64 p-8 bg-white border border-gray-100 shadow-2xl rounded-3xl hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 text-left">Real-time Feedback</p>
               <p className="text-xs text-gray-900 font-medium text-left leading-relaxed">Socket connection active. Component sync complete in 12ms.</p>
            </div>
         </div>
      </section>

      {/* Technical Reliability & Privacy */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-40">
         <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 flex gap-8 items-start">
            <ShieldCheck size={40} className="text-blue-600 shrink-0" />
            <div className="space-y-4">
               <h4 className="text-xl font-bold">Corporate Privacy</h4>
               <p className="text-gray-500 text-sm leading-relaxed">DivCraft respects your intellectual property. All extraction data is processed in a non-persistent environment and is never used for model training without explicit team consent.</p>
            </div>
         </div>
         <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 flex gap-8 items-start">
            <Fingerprint size={40} className="text-emerald-600 shrink-0" />
            <div className="space-y-4">
               <h4 className="text-xl font-bold">Encrypted Assets</h4>
               <p className="text-gray-500 text-sm leading-relaxed">Every asset extracted—from brand logos to custom SVG icons—is locally cached and encrypted to prevent external data leaks during the development process.</p>
            </div>
         </div>
      </section>
    </div>
  </PageContainer>
);

export const PricingPage = () => (
  <PageContainer title="Pricing">
    <div className="space-y-32">
      {/* Tier Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-8">
        {[
          { name: "Starter", price: "Free", desc: "For hobbyists exploring inspiration.", features: ["50 extractions / month", "HTML/CSS Export", "Community Support", "Basic Templates"] },
          { name: "Pro", price: "$24", featured: true, desc: "For builders who ship professional sites.", features: ["Unlimited extractions", "Tailwind + React Export", "Priority AI Support", "Advanced CLI Sync", "Private Dashboard"] },
          { name: "Enterprise", price: "Custom", desc: "For teams growing at scale.", features: ["All Pro features", "Custom AI Models", "SSO & Security", "Team Collaboration", "API Access"] }
        ].map((tier, i) => (
          <div key={i} className={`p-10 rounded-[2.5rem] border ${tier.featured ? 'bg-black text-white border-transparent shadow-2xl scale-105 z-10' : 'bg-white text-black border-gray-100 shadow-sm'} flex flex-col`}>
            {tier.featured && <div className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit mb-6">Recommended</div>}
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter">{tier.name}</h3>
            <p className={`text-sm mb-8 ${tier.featured ? 'text-gray-400' : 'text-gray-500'}`}>{tier.desc}</p>
            <div className="text-6xl font-bold mb-10 tracking-tighter">{tier.price}{tier.name !== "Enterprise" && <span className="text-sm font-normal opacity-50 ml-2">/mo</span>}</div>
            
            <ul className="space-y-4 mb-12 flex-1">
              {tier.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 size={16} className={tier.featured ? "text-blue-500" : "text-blue-600"} /> {f}
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-5 rounded-full font-bold tracking-widest uppercase text-[12px] transition-all hover:scale-[1.02] ${tier.featured ? 'bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.2)]' : 'bg-black text-white hover:bg-gray-800'}`}>
              Select Plan
            </button>
          </div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div className="bg-white border border-gray-100 rounded-[3rem] overflow-hidden shadow-sm">
        <div className="p-12 border-b border-gray-100">
          <SectionHeader title="Compare all features" subtitle="Find the perfect fit for your development needs." />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                <th className="px-12 py-6">Feature</th>
                <th className="px-12 py-6 text-center">Starter</th>
                <th className="px-12 py-6 text-center">Pro</th>
                <th className="px-12 py-6 text-center text-blue-600">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {[
                { name: "Monthly Extractions", s: "50", p: "Unlimited", e: "Unlimited" },
                { name: "Code Format", s: "HTML", p: "React/TSX", e: "Custom" },
                { name: "Style Framework", s: "Inline CSS", p: "Tailwind 4", e: "Unified Design System" },
                { name: "Support", s: "Community", p: "Priority", e: "Dedicated Manager" },
                { name: "Sync to CLI", s: "-", p: "✓", e: "✓" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-12 py-6 font-bold text-gray-900">{row.name}</td>
                  <td className="px-12 py-6 text-center text-gray-500">{row.s}</td>
                  <td className="px-12 py-6 text-center text-gray-900 font-medium">{row.p}</td>
                  <td className="px-12 py-6 text-center text-gray-900 font-bold">{row.e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trust & Billing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center pb-24 border-t border-gray-100 pt-32">
        <div className="flex flex-col items-center gap-4">
          <CreditCard className="text-gray-400" />
          <h4 className="font-bold">Secure Billing</h4>
          <p className="text-sm text-gray-500">Powered by Stripe. All major credit cards accepted.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Users className="text-gray-400" />
          <h4 className="font-bold">Team Ready</h4>
          <p className="text-sm text-gray-500">Easily add seats and collaborate on captured boards.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Lock className="text-gray-400" />
          <h4 className="font-bold">SSO & SAML</h4>
          <p className="text-sm text-gray-500">Enterprise auth integrations for large organizations.</p>
        </div>
      </div>
    </div>
  </PageContainer>
);

export const DocsPage = () => (
  <PageContainer title="Docs">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 text-black">
      {/* Sidebar Navigation */}
      <div className="col-span-1 border-r border-gray-100 pr-12 space-y-12 shrink-0">
        <div>
           <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-6">Getting Started</h4>
           <nav className="flex flex-col gap-4 text-sm font-medium">
             <a href="#" className="text-blue-600 font-bold border-l-2 border-blue-600 pl-4">Installation</a>
             <a href="#" className="text-gray-500 hover:text-black transition-colors pl-4">Core Concepts</a>
             <a href="#" className="text-gray-500 hover:text-black transition-colors pl-4">Architecture</a>
           </nav>
        </div>
        <div>
           <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-6">Feature Guides</h4>
           <nav className="flex flex-col gap-4 text-sm font-medium">
             <a href="#" className="text-gray-500 hover:text-black transition-colors pl-4">Advanced Extraction</a>
             <a href="#" className="text-gray-500 hover:text-black transition-colors pl-4">Tailwind Config Sync</a>
             <a href="#" className="text-gray-500 hover:text-black transition-colors pl-4">Custom AI Prompts</a>
           </nav>
        </div>
        <div>
           <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-6">Integrations</h4>
           <nav className="flex flex-col gap-4 text-sm font-medium">
             <a href="#" className="text-gray-500 hover:text-black transition-colors pl-4">Next.js Setup</a>
             <a href="#" className="text-gray-500 hover:text-black transition-colors pl-4">Vite / React.js</a>
             <a href="#" className="text-gray-500 hover:text-black transition-colors pl-4">Remix Plugin</a>
           </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="col-span-3 space-y-20 pb-32">
        <section className="space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">Technical Overview</h2>
          <p className="text-xl text-gray-500 leading-relaxed">DivCraft provides a high-performance bridge between rendered DOM elements and production-ready source code. Learn how to optimize your workflow for maximum accuracy.</p>
          
          <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3"><Terminal size={20} /> Installation via CLI</h3>
            <p className="text-gray-600">Add the DivCraft core synchronization tool to your local development environment to start receiving components directly into your source tree.</p>
            <div className="bg-neutral-900 p-8 rounded-2xl border border-white/5 font-mono text-sm leading-relaxed shadow-lg">
              <p className="text-gray-500"># Install globally</p>
              <p className="text-white mt-1">npm install -g <span className="text-blue-400">@divcraft/cli</span></p>
              <p className="text-gray-500 mt-6"># Initialize in your project</p>
              <p className="text-white mt-1">divcraft <span className="text-yellow-400">init</span> --token <span className="text-gray-400">dc_abc123...</span></p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-bold">Framework Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { logo: <Rocket />, name: "Next.js", desc: "Optimized server-side component generation with full App Router support." },
              { logo: <Code2 />, name: "Vite + React", desc: "Fast, modular component exports structured for modern JS bundlers." }
            ].map((lib, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-xl transition-all group cursor-pointer">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{lib.logo}</div>
                <h4 className="text-lg font-bold mb-2">{lib.name}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{lib.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest">
                  Read Setup Guide <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Helper */}
        <div className="p-12 bg-blue-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
           <div className="space-y-4">
              <h3 className="text-3xl font-bold">Need more help?</h3>
              <p className="opacity-80 text-lg">Join 2,000+ developers in our official community Discord.</p>
           </div>
           <button className="px-10 py-5 bg-white text-black font-bold tracking-widest uppercase rounded-full hover:scale-105 transition-transform flex items-center gap-2">
              Join Discord <Users size={18} />
           </button>
        </div>
      </div>
    </div>
  </PageContainer>
);

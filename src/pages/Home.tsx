import { Link } from "react-router-dom";
import { BackgroundPaths } from "@/src/components/ui/background-paths";
import { ArrowRight, MousePointerClick, Blocks, Code2, Zap, LayoutTemplate, Wand2, Layers, Paintbrush, Smartphone, Sparkles, PlaySquare, Star, Target, Cpu, Box, Terminal, Rocket, Check } from "lucide-react";
import { motion } from "framer-motion";
import { LogoCloud } from "@/src/components/ui/logo-cloud-3";
import { InfiniteSlider } from "@/src/components/ui/infinite-slider";
import DigitalLoomBackground from "@/src/components/ui/digital-loom-background";
import { PageTransition } from "@/src/components/PageTransition";

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia Logo" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase Logo" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI Logo" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso Logo" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel Logo" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub Logo" },
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI Logo" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk Logo" },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="bg-white text-black">
      {/* Hero Section - Keep its dark internal context as requested */}
      <section className="p-4 md:p-6 pt-32">
        <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/5 bg-black dark text-white">
          <Link to="/" className="absolute top-8 left-8 z-20 font-display font-bold text-2xl tracking-tighter text-white">
            DivCraft
          </Link>
          <BackgroundPaths 
            title="Magic Websites"
            description="Build fast, capture anything, and convert DOM elements into structured code instantly."
            buttonText="Get DivCraft"
            buttonLink="/pricing"
          />
        </div>
      </section>

      {/* Logo Cloud - Revert to Light */}
      <section className="py-24 px-6 border-b border-black/5">
        <h2 className="text-center text-[11px] font-medium tracking-[0.3em] uppercase mb-12 opacity-40">
          <span className="font-semibold text-black">Used by the leaders.</span>
        </h2>
        <LogoCloud logos={logos} />
      </section>

      {/* Benefits Section [White Theme] */}
      <section className="relative mx-auto max-w-6xl py-32 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left: Dashboard Mockup */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center perspective-[1000px] group">
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative w-full max-w-sm mx-auto h-[500px] bg-neutral-900 rounded-3xl shadow-2xl border border-white/5 overflow-hidden flex flex-col transform lg:-rotate-y-[10deg] lg:rotate-x-[5deg] lg:-rotate-z-[2deg] transition-all hover:rotate-0 hover:scale-[1.02] duration-700">
              <div className="h-14 border-b border-white/5 flex items-center px-5 gap-3 bg-neutral-900/50 backdrop-blur-sm z-10">
                <div className="w-8 h-8 bg-white rounded-[0.6rem] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-sm bg-black" />
                </div>
                <div className="flex-1"><div className="h-1 w-20 bg-neutral-800 rounded-full" /></div>
              </div>

              <div className="flex-1 p-6 flex flex-col gap-6 bg-neutral-950">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-neutral-900 p-4 rounded-xl border border-white/5 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10" />
                      <div className="flex-1 space-y-2">
                        <div className="h-2 w-24 bg-neutral-800 rounded-full" />
                        <div className="h-1.5 w-full bg-neutral-900 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Details */}
          <div className="flex flex-col">
            <h2 className="text-5xl font-medium tracking-tight text-black leading-tight">
              Capture your<br />vision instantly.
            </h2>
            <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-md">
              Extract raw DOM structures and convert them into beautifully formatted React components. No more manual CSS reproduction.
            </p>
            
            <div className="mt-16 grid grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Code2 size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Clean Code</h3>
                <p className="text-xs text-gray-450 leading-relaxed">Generated with semantic Tailwind classes.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Zap size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Fast Sync</h3>
                <p className="text-xs text-gray-450 leading-relaxed">One-click copy straight to your IDE.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features capabilities Section [White Theme] */}
      <section className="relative py-32 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-6 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-8">Unmatched Capabilities.</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">We've built the ultimate toolkit for modern web developers to bridge the gap between inspiration and implementation.</p>
        </div>
          
        <div className="relative w-full overflow-hidden flex pb-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee-infinite w-[max-content]">
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex gap-8 px-4 text-left">
                {[
                  { icon: <Blocks />, title: "DOM Parsing", desc: "Advanced tree analysis for nested elements." },
                  { icon: <LayoutTemplate />, title: "Layout Mapping", desc: "Intelligent grid and flexbox detection." },
                  { icon: <Smartphone />, title: "Responsive Control", desc: "Automatic breakpoint generation." },
                  { icon: <Wand2 />, title: "AI Polishing", desc: "Refines messy code into modular structures." },
                  { icon: <Layers />, title: "Deep Inspection", desc: "Captures pseudo-elements and animations." },
                  { icon: <Paintbrush />, title: "Styles Sync", desc: "Perfectly maps colors and typography." },
                ].map((feature, i) => (
                  <div key={`${loopIndex}-${i}`} className="w-[320px] md:w-[400px] shrink-0 p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 border border-gray-200 text-black">{feature.icon}</div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section [White Theme] */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-2xl relative overflow-hidden group">
                <div className="h-full bg-neutral-950 p-6 font-mono text-xs sm:text-sm text-neutral-400 rounded-[2rem] border border-white/5">
                  <p><span className="text-blue-400">export default function</span> <span className="text-yellow-400">FeatureBlock</span>() {"{"}</p>
                  <p className="pl-4"><span className="text-blue-400">return</span> (</p>
                  <p className="pl-8">{"<div className=\"flex flex-col p-8 bg-black rounded-3xl\">"}</p>
                  <p className="pl-12">{"<h2 className=\"text-4xl font-bold\">Capture anything</h2>"}</p>
                  <p className="pl-8">{"</div>"}</p>
                  <p className="pl-4">);</p>
                  <p>{"}"}</p>
                </div>
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <h2 className="text-4xl font-medium tracking-tight text-black">Tailored for your team.</h2>
            <div className="space-y-4">
              {[
                { persona: "Developers", desc: "Eliminate manual styling math. Focus on the core logic while DivCraft handles the layout translation." },
                { persona: "Designers", desc: "Bridge the gap between mocks and production. Export functional components straight from your live browser." },
                { persona: "Agencies", desc: "Deliver 2x faster by leveraging a library of captured components and standardized templates." },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white border border-gray-100 hover:bg-gray-50 transition-colors cursor-default shadow-sm text-black">
                  <h3 className="text-lg font-semibold mb-2">{item.persona}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section [White Theme] */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-medium mb-20 uppercase tracking-widest opacity-40 text-black">Proof of Impact.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white border border-gray-100 text-left italic text-lg text-gray-700 leading-relaxed shadow-sm relative">
              <span className="absolute -top-4 -left-2 text-6xl text-black/5 font-serif">"</span>
              DivCraft has fundamentally changed how we scaffold our landing pages. We go from inspiration to deployment in minutes, not hours.
              <div className="mt-8 flex items-center gap-4 not-italic">
                <div className="w-10 h-10 rounded-full bg-blue-500/10" />
                <div>
                  <p className="text-sm font-bold text-black">Rahman</p>
                  <p className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase mt-1">Founder</p>
                </div>
              </div>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white border border-gray-100 text-left italic text-lg text-gray-700 leading-relaxed shadow-sm relative">
              <span className="absolute -top-4 -left-2 text-6xl text-black/5 font-serif">"</span>
              The cleanest React code I've ever seen from an extraction tool. It actually understands Flex and Grid layout patterns.
              <div className="mt-8 flex items-center gap-4 not-italic">
                <div className="w-10 h-10 rounded-full bg-purple-500/10" />
                <div>
                  <p className="text-sm font-bold text-black">Sarah Jenkins</p>
                  <p className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase mt-1">Lead Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Loom Animated Section [Fixed Dark Card] */}
      <section className="p-4 md:p-6 py-24">
        <div className="relative w-full rounded-[2.5rem] shadow-2xl overflow-hidden bg-black text-white min-h-[500px] border border-white/5 group">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-40 pointer-events-none transition-opacity duration-1000">
            <DigitalLoomBackground backgroundColor="transparent" threadColor="rgba(255, 255, 255, 0.4)" threadCount={65} />
          </div>
          <div className="relative z-10 p-16 flex flex-col items-center justify-center text-center space-y-8 min-h-[500px]">
             <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-2xl leading-tight">Weave complex UIs into clean modules.</h2>
             <Link to="/pricing" className="px-10 py-5 bg-white text-black font-bold tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-2xl">Start Extracting Now</Link>
          </div>
        </div>
      </section>

      {/* How it works section [White Theme] */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl font-medium mb-24 text-black">Simple, powerful workflow.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
             {[
               { icon: <MousePointerClick />, step: "01", title: "Select", desc: "Open the extension on any website and click the element you want." },
               { icon: <Cpu />, step: "02", title: "Convert", desc: "Our AI analyzes the DOM tree and maps it to clean React classes." },
               { icon: <Rocket />, step: "03", title: "Ship", desc: "Copy the module and drop it straight into your VSCode environment." },
             ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-white shadow-xl rounded-[2rem] border border-gray-100 flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform text-black">
                    <span className="absolute -top-2 -right-2 text-[10px] font-bold text-gray-400">{item.step}</span>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-black">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed px-4">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final Call-to-action section [Transition to Black for impact] */}
      <div className="px-4 md:p-6 pb-24 text-white">
        <section className="relative py-32 md:py-48 rounded-[2.5rem] bg-black text-center px-6 overflow-hidden border border-white/5">
           {/* Subtle background glow removed for pure black aesthetic */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
             <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9]">Start building at the speed of thought.</h2>
             <Link to="/pricing" className="inline-flex items-center justify-center gap-2 px-12 py-6 bg-white text-black text-[13px] font-bold tracking-widest uppercase rounded-full hover:scale-105 transition-all shadow-2xl">
                 Get Early Access <ArrowRight size={18} />
              </Link>
          </div>
        </section>
      </div>

      </div>
    </PageTransition>
  );
}

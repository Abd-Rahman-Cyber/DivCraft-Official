import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, Code2, Copy, ExternalLink, Check } from 'lucide-react';
import { cn } from '../lib/utils';

export const ProductDemo = () => {
  const [step, setStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [format, setFormat] = useState<'html' | 'jsx'>('html');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % 5);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (step === 0) {
      setIsHovered(false);
      setIsSelected(false);
      setFormat('html');
    } else if (step === 1) {
      setIsHovered(true);
      setIsSelected(false);
    } else if (step === 2) {
      setIsHovered(true);
      setIsSelected(true);
    } else if (step === 3) {
      setFormat('jsx');
    } else if (step === 4) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }, [step]);

  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-[2rem] overflow-hidden border border-white/10 bg-[#050505] shadow-2xl">
      {/* Mock Website Background */}
      <div className="absolute inset-0 p-12 flex flex-col gap-8 opacity-30 grayscale pointer-events-none">
        <div className="h-12 w-48 bg-white/10 rounded-lg" />
        <div className="grid grid-cols-3 gap-6">
          <div className="h-64 bg-white/5 rounded-2xl" />
          <div className={cn(
            "h-64 rounded-2xl transition-all duration-500 border-2",
            isHovered ? "border-white/60 bg-white/10" : "border-transparent bg-white/5"
          )} />
          <div className="h-64 bg-white/5 rounded-2xl" />
        </div>
        <div className="h-8 w-full bg-white/5 rounded-lg" />
      </div>

      {/* Virtual Cursor */}
      <motion.div
        animate={{
          x: step === 0 ? 100 : 450,
          y: step === 0 ? 100 : 250,
          scale: step === 2 ? 0.8 : 1
        }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="absolute z-50 pointer-events-none"
      >
        <MousePointer2 className="w-8 h-8 text-white fill-white/20 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
      </motion.div>

      {/* Floating Panel */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-8 right-8 w-72 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-40"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-white rounded-lg">
                <Code2 className="w-4 h-4 text-black" />
              </div>
              <span className="text-xs font-bold text-white">DivCraft</span>
            </div>

            <div className="space-y-4">
              {/* Format Toggle */}
              <div className="flex p-1 bg-white/5 rounded-xl border border-white/5">
                {(['html', 'jsx'] as const).map((f) => (
                  <div
                    key={f}
                    className={cn(
                      "flex-1 py-1.5 text-[10px] font-bold text-center rounded-lg transition-all uppercase",
                      format === f ? "bg-white text-black" : "text-white/30"
                    )}
                  >
                    {f}
                  </div>
                ))}
              </div>

              {/* Code Preview */}
              <div className="bg-white/5 rounded-xl p-3 font-mono text-[10px] text-white/40 overflow-hidden h-24 border border-white/5">
                <motion.div key={format} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
                  {format === 'html' ? (
                    <pre>{`<div class="card">\n  <h2 class="title">\n    Feature\n  </h2>\n</div>`}</pre>
                  ) : (
                    <pre>{`<div className="card">\n  <h2 className="title">\n    Feature\n  </h2>\n</div>`}</pre>
                  )}
                </motion.div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <div className="w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 bg-white text-black">
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : `Copy ${format.toUpperCase()}`}
                </div>
                <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white/40 flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Open Editor
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 transition-all duration-500 rounded-full",
              step === i ? "w-8 bg-white" : "w-1.5 bg-white/20"
            )}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="absolute bottom-16 left-12 z-50">
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="text-lg font-bold text-white/70"
          >
            {step === 0 && "1. Open any website..."}
            {step === 1 && "2. Hover to highlight elements..."}
            {step === 2 && "3. Click to select instantly..."}
            {step === 3 && "4. Convert to HTML or JSX..."}
            {step === 4 && "5. Copy and build faster!"}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};


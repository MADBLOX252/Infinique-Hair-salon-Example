import { motion } from 'motion/react';
import HlsVideo from './HlsVideo';

export default function StartSection() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-black py-24">
      {/* HLS Video Background */}
      <div className="absolute inset-0 z-0">
        <HlsVideo 
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradients */}
        <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="liquid-glass rounded-full px-4 py-1 inline-block mb-10"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">How It Works</span>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-5xl md:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-8"
        >
          You deserve <br className="hidden md:block" /> the perfect cut.
        </motion.h2>
        
        <motion.p
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-lg md:text-xl text-white/50 font-body font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Experience precision grooming at Infinique. Our stylists combine traditional techniques with modern edge to deliver a look that stays sharp.
        </motion.p>
        
        <motion.button
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="liquid-glass-strong rounded-full px-10 py-4 text-white font-medium text-lg hover:scale-105 transition-all shadow-2xl active:scale-95"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import HlsVideo from './HlsVideo';

export default function CtaFooter() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* CTA Section with HLS Video BG */}
      <div className="relative min-h-[700px] flex flex-col items-center justify-center pt-[150px] overflow-hidden">
        <div className="absolute inset-0 z-0">
           <HlsVideo 
             src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
             className="w-full h-full object-cover opacity-30"
           />
           {/* Gradients */}
           <div className="absolute top-0 left-0 w-full h-[250px] bg-gradient-to-b from-black to-transparent" />
           <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-heading italic text-white leading-[0.85] tracking-tight mb-8"
          >
            Your next style <br /> starts here.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 font-body font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Book your session online. Experience the modern craft of Infinique. <br className="hidden md:block" /> Stay sharp, stay confident.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <button className="liquid-glass-strong rounded-full px-10 py-4 text-white font-medium text-lg hover:scale-105 transition-all shadow-2xl active:scale-95">
              Book Appointment
            </button>
            <button className="bg-white text-black rounded-full px-10 py-4 font-medium text-lg hover:bg-white/90 transition-all active:scale-95">
              Price List
            </button>
          </motion.div>
        </div>

        {/* Footer Bar */}
        <div className="relative z-10 w-full mt-auto pb-12 pt-32 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white/40 text-[10px] uppercase tracking-widest font-body">
              © 2026 Studio. All rights reserved.
            </div>
            <div className="flex items-center gap-8">
              {["Privacy", "Terms", "Contact"].map(link => (
                <a key={link} href="#" className="text-white/40 text-[10px] uppercase tracking-widest hover:text-white transition-colors font-body">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

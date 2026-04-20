import { motion } from 'motion/react';
import HlsVideo from './HlsVideo';

const STATS = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" },
];

export default function Stats() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <HlsVideo 
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          className="w-full h-full object-cover"
          filter="saturate(0) contrast(1.2)"
        />
        {/* Gradients */}
        <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="liquid-glass rounded-3xl p-12 md:p-20 overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-heading italic text-white mb-2 leading-none whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-[11px] uppercase tracking-widest text-white/40 font-body font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

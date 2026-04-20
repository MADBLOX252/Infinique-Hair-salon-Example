import { Zap, Palette, BarChart3, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURE_CARDS = [
  {
    icon: Zap,
    title: "Express Cuts",
    text: "Walk in and walk out with a fresh look at a pace that fits your city life."
  },
  {
    icon: Palette,
    title: "Custom Styling",
    text: "Consultation driven grooming. Every element refined to your specific features."
  },
  {
    icon: BarChart3,
    title: "Signature Products",
    text: "Exclusive hair and beard care ranges used in-house for maximum performance."
  },
  {
    icon: Shield,
    title: "Luxury Service",
    text: "Premium towels, oils, and equipment come standard. A relaxation-first approach."
  }
];

export default function FeaturesGrid() {
  return (
    <section className="bg-black py-[120px] px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24">
           <div className="liquid-glass rounded-full px-4 py-1 inline-block mb-6">
              <span className="text-[10px] uppercase tracking-widest text-white/60">Why Us</span>
           </div>
           <h2 className="text-5xl md:text-6xl font-heading italic text-white leading-tight">
             The difference is everything.
           </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURE_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="liquid-glass rounded-2xl p-8 hover:bg-white/[0.03] transition-colors group"
            >
              <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-8 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-heading italic text-white mb-4 group-hover:translate-x-1 transition-transform">{card.title}</h3>
              <p className="text-white/50 font-body font-light text-sm leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';

const TESTIMONIALS = [
  {
    quote: "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    name: "Sarah Chen",
    role: "CEO, Luminary"
  },
  {
    quote: "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline"
  },
  {
    quote: "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
    name: "Elena Voss",
    role: "Brand Director, Helix"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-black py-[120px] px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
           <div className="liquid-glass rounded-full px-4 py-1 inline-block mb-6">
              <span className="text-[10px] uppercase tracking-widest text-white/60">What They Say</span>
           </div>
           <h2 className="text-5xl md:text-6xl font-heading italic text-white leading-tight">
             Don't take our word for it.
           </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="liquid-glass rounded-2xl p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors"
            >
              <p className="text-xl md:text-2xl text-white/80 font-body font-light italic leading-relaxed mb-12">
                "{t.quote}"
              </p>
              <div>
                <div className="text-white font-body font-semibold text-sm mb-1">{t.name}</div>
                <div className="text-white/40 font-body font-light text-xs tracking-wide">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

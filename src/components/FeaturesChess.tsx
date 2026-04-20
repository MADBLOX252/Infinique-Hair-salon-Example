import { motion } from 'motion/react';

export default function FeaturesChess() {
  return (
    <section className="bg-black py-[120px] px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-32">
           <div className="liquid-glass rounded-full px-4 py-1 inline-block mb-6">
              <span className="text-[10px] uppercase tracking-widest text-white/60">Capabilities</span>
           </div>
           <h2 className="text-5xl md:text-6xl font-heading italic text-white leading-tight">
             Pro features. <br className="md:hidden" /> Zero complexity.
           </h2>
        </div>

        {/* Rows */}
        <div className="space-y-[120px]">
          {/* Row 1: Content Left, Media Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white mb-6 leading-tight">
                Master Stylists. <br /> Timeless Techniques.
              </h3>
              <p className="text-white/60 font-body font-light text-base md:text-lg mb-10 leading-relaxed max-w-md">
                Every snip is intentional. Our experts understand the geometry of style—crafting a unique silhouette for every client.
              </p>
              <button className="liquid-glass-strong rounded-full px-8 py-3 text-white font-medium hover:scale-105 transition-all">
                Our Services
              </button>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, x: 50 }}
               whileInView={{ opacity: 1, scale: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.2 }}
               className="liquid-glass rounded-3xl overflow-hidden shadow-2xl relative"
            >
               <img 
                 src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop" 
                 alt="Barber Craft" 
                 className="w-full h-[400px] object-cover opacity-90 scale-105 hover:scale-100 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Row 2: Media Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, x: -50 }}
               whileInView={{ opacity: 1, scale: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.2 }}
               className="order-2 md:order-1 liquid-glass rounded-3xl overflow-hidden shadow-2xl relative"
            >
               <img 
                 src="https://images.unsplash.com/photo-1621605815841-aa33c56b02d5?q=80&w=1000&auto=format&fit=crop" 
                 alt="Modern Grooming" 
                 className="w-full h-[400px] object-cover opacity-90 scale-105 hover:scale-100 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white mb-6 leading-tight">
                Modern Aesthetics. <br /> Urban Edge.
              </h3>
              <p className="text-white/60 font-body font-light text-base md:text-lg mb-10 leading-relaxed max-w-md">
                We don't just follow trends; we set them. Stay ahead with grooming that reflects the vibrant energy of today.
              </p>
              <button className="liquid-glass-strong rounded-full px-8 py-3 text-white font-medium hover:scale-105 transition-all">
                The Gallery
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

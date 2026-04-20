import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import BlurText from './BlurText';

export default function Hero() {
  return (
    <section className="relative w-full h-[1000px] overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{ filter: 'brightness(0.7) contrast(1.2)' }}
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden xl:block">
        <span className="rail-text">ESTABLISHED MMXXVI • STUDIO ELEVEN</span>
      </div>

      {/* Technical Corner Accents */}
      <div className="absolute top-8 right-8 z-20 hidden md:block">
        <div className="text-right text-[10px] text-white/30 tracking-[0.2em] font-body font-medium leading-relaxed">
          PRO_01 // WEB_SYS<br/>
          REF: 8820-X
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-[100px] px-6 max-w-5xl mx-auto text-center h-full">
        {/* Heading */}
        <BlurText 
          text="The Craftsmanship Your Style Deserves"
          className="text-6xl md:text-8xl lg:text-[7rem] font-heading italic text-white leading-[0.85] tracking-[-5px] max-w-5xl"
          delay={0.4}
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 text-white/70 font-body font-light text-base md:text-xl max-w-xl leading-relaxed"
        >
          Precision grooming. Blazing confidence. Styled by masters, refined by tradition. This is Infinique, wildest reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-8 py-3 text-white font-medium flex items-center gap-2 hover:scale-105 transition-all shadow-xl">
            Book an Appointment
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 text-white/90 font-body font-medium hover:text-white transition-colors group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            Experience Infinique
          </button>
        </motion.div>

        {/* Partners Bar */}
        <div className="mt-auto pb-12 w-full">
           <div className="flex flex-col items-center gap-8">
              <div className="liquid-glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-widest text-white/40 font-body">
                Trusted by the teams behind
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:opacity-100 transition-all duration-500">
                {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((brand) => (
                  <span key={brand} className="text-3xl md:text-4xl font-heading italic text-white whitespace-nowrap">
                    {brand}
                  </span>
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

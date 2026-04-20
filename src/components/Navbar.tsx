import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
             <span className="text-black font-heading italic text-xl">I</span>
          </div>
          <span className="text-white font-heading italic text-2xl hidden sm:block">Infinique</span>
        </div>

        {/* Center: Nav Container (Pill) */}
        <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-1.5 py-1">
          {["Home", "Services", "Work", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 font-body"
            >
              {item}
            </a>
          ))}
          <button className="bg-white text-black rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-1 hover:bg-white/90 transition-all shadow-lg active:scale-95">
            Book Now
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Right: Get Started only */}
        <div className="md:hidden">
           <button className="bg-white text-black rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-1">
            Book
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

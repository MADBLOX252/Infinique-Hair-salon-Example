import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StartSection from './components/StartSection';
import FeaturesChess from './components/FeaturesChess';
import FeaturesGrid from './components/FeaturesGrid';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CtaFooter from './components/CtaFooter';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background layer for the whole page to ensure no white gaps */}
      <div className="fixed inset-0 bg-black pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <div id="home"><Hero /></div>
          <div id="services">
            <StartSection />
            <FeaturesChess />
            <FeaturesGrid />
            <Stats />
          </div>
          <div id="work">
             <Testimonials />
          </div>
          <div id="pricing">
             <CtaFooter />
          </div>
        </main>
      </div>

      {/* Made By Overlay Tag */}
      <div className="fixed bottom-6 right-6 z-[60] pointer-events-auto">
        <div className="liquid-glass rounded-2xl px-4 py-3 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-0.5">
            <div className="text-[10px] uppercase tracking-widest text-white/40 font-medium font-body">Made by</div>
            <div className="text-sm font-heading italic text-white leading-tight">Infinique Studios</div>
            <div className="text-[9px] text-white/30 font-body">@infiniquestudio@proton.me</div>
          </div>
        </div>
      </div>
    </div>
  );
}


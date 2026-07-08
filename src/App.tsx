import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoDemo from './components/VideoDemo';
import AutofillPreview from './components/AutofillPreview';
import BadgeGenerator from './components/BadgeGenerator';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
    }
  };

  // Monitor scroll to update active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'video', 'autofill', 'workshop', 'pricing'];
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#eef2e3] text-[#043f2e] selection:bg-[#c8f169] selection:text-black antialiased">
      
      {/* Announcement Banner */}
      <div className="w-full bg-[#c8f169] py-2.5 px-4 text-center border-b border-[#043f2e]/10">
        <p className="text-[12px] font-semibold uppercase tracking-[0.72px] text-[#000000]">
          AI AGENTS FOR SAUDI ARABIA VISA PROCESSING —{' '}
          <span 
            onClick={() => scrollToSection('features')}
            className="underline cursor-pointer hover:opacity-80 transition-opacity"
          >
            Explore workflows
          </span>
        </p>
      </div>

      {/* Main Navigation */}
      <Navbar onNavClick={scrollToSection} activeSection={activeSection} />

      {/* Main Page Canvas */}
      <main className="mx-auto max-w-full">
        
        {/* Asymmetric Hero section */}
        <Hero 
          onStartAutofill={() => scrollToSection('autofill')} 
          onWatchVideo={() => scrollToSection('video')}
        />

        {/* Features Bento Grid */}
        <div id="features">
          <Features />
        </div>

        {/* Video Demonstration Walkthrough */}
        <div id="video">
          <VideoDemo />
        </div>

        {/* Interactive workflow preview */}
        <div id="autofill">
          <AutofillPreview />
        </div>

        {/* Traveller record preview */}
        <div id="workshop">
          <BadgeGenerator />
        </div>

        {/* Source-backed software and support options */}
        <div id="pricing">
          <Pricing />
        </div>

      </main>

      {/* High-contrast brand Footer */}
      <Footer />

    </div>
  );
}

import { motion } from 'motion/react';
import HajonsoftLogo from './HajonsoftLogo';

interface NavbarProps {
  onNavClick: (section: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const navItems = [
    { id: 'features', label: 'Workflows' },
    { id: 'autofill', label: 'Autofill Preview' },
    { id: 'workshop', label: 'Traveller Records' },
    { id: 'pricing', label: 'Support' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#043f2e]/10 bg-[#fcfcfc] px-4 md:px-10 h-[64px] flex items-center">
      <div className="mx-auto flex w-full items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavClick('hero')}
          className="group flex flex-shrink-0 items-center cursor-pointer transition-opacity hover:opacity-90"
        >
          <HajonsoftLogo className="h-10 md:h-12 w-auto object-contain select-none" />
        </button>

        {/* Center Nav Items */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-all relative cursor-pointer font-graphik ${
                  isActive ? 'text-[#043f2e] font-semibold' : 'text-[#242423] hover:text-[#043f2e]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavLine" 
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#043f2e]" 
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavClick('video')}
            className="hidden lg:inline-block cursor-pointer border border-black/30 px-4 py-2 text-sm font-medium text-[#242423] rounded-[4px] hover:bg-[#eef2e3] transition-colors font-graphik"
          >
            Watch Demo
          </button>

          <button 
            onClick={() => onNavClick('autofill')}
            className="hidden sm:inline-block cursor-pointer border border-black/30 px-4 py-2 text-sm font-medium text-[#242423] rounded-[4px] hover:bg-[#eef2e3] transition-colors font-graphik"
          >
            Autofill Preview
          </button>
          
          <a 
            href="https://hajonsoft-kea.web.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-[#c8f169] text-black px-4 py-2 text-sm font-semibold rounded-[4px] hover:bg-[#2a6f2b] hover:text-[#fcfcfc] transition-all font-graphik border-0 shadow-none text-center inline-block whitespace-nowrap"
          >
            Try for Free
          </a>
        </div>
      </div>
    </header>
  );
}

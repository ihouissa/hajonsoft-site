import { Mail, Phone } from 'lucide-react';
import HajonsoftLogo from './HajonsoftLogo';

const translations = {
  en: {
    description: "HAJonSoft provides intelligent AI agents for travel agencies and visa processing centers, covering Umrah, Hajj, Visit Visa, Nusuk, and passport scanning.",
    productsTitle: "Products",
    portalsTitle: "Visa Workflows",
    resourcesTitle: "Travel Agent Resources",
    resourcesDesc: "HAJonSoft helps agencies send traveller information to Saudi Arabia visa sites through guided AI agent workflows.",
    statusTitle: "Support",
    statusText: "Meetings, video calls, and remote assistance: ",
    statusActive: "AVAILABLE",
    copyright: "HAJonSoft. All rights reserved."
  }
};

export default function Footer() {
  const t = translations.en;

  return (
    <footer className="bg-[#fcfcfc] border-t border-[#043f2e]/10 py-16 px-4 md:px-10 font-graphik text-sm">
      <div className="mx-auto max-w-7xl">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-black/10">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <HajonsoftLogo className="h-10 w-auto select-none" />
            </div>
            
            <p className="text-[#242423] font-light max-w-xs leading-relaxed">
              {t.description}
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#242423]/70 font-light">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 stroke-[1.5]" />
                <span>hajonsoft@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 stroke-[1.5]" />
                <span>1 (949) 522-1879</span>
              </div>
            </div>
          </div>

          {/* Column 2 (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-[10px] uppercase tracking-wider font-bold text-[#043f2e]">
              {t.productsTitle}
            </p>
            <ul className="space-y-2 text-[#242423] font-light">
              <li><a href="#features" className="hover:text-[#043f2e] hover:underline transition-all">Umrah AI Agent</a></li>
              <li><a href="#features" className="hover:text-[#043f2e] hover:underline transition-all">Hajj AI Agent</a></li>
              <li><a href="#features" className="hover:text-[#043f2e] hover:underline transition-all">Visit Visa AI Agent</a></li>
              <li><a href="#features" className="hover:text-[#043f2e] hover:underline transition-all">Nusuk AI Agent</a></li>
              <li><a href="#features" className="hover:text-[#043f2e] hover:underline transition-all">Passport Scanning AI Agent</a></li>
            </ul>
          </div>

          {/* Column 3 (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[10px] uppercase tracking-wider font-bold text-[#043f2e]">
              {t.portalsTitle}
            </p>
            <ul className="space-y-2 text-[#242423] font-light">
              <li><a href="#features" className="hover:text-[#043f2e] hover:underline transition-all">Bab Al-Umrah workflows</a></li>
              <li><a href="#features" className="hover:text-[#043f2e] hover:underline transition-all">Masar workflows</a></li>
              <li><a href="#features" className="hover:text-[#043f2e] hover:underline transition-all">eHaj workflows</a></li>
              <li><a href="#features" className="hover:text-[#043f2e] hover:underline transition-all">Nusuk workflows</a></li>
              <li><a href="#features" className="hover:text-[#043f2e] hover:underline transition-all">Saudi visit visa workflows</a></li>
            </ul>
          </div>

          {/* Column 4 (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[10px] uppercase tracking-wider font-bold text-[#043f2e]">
              {t.resourcesTitle}
            </p>
            <p className="text-xs text-[#242423]/70 font-light leading-relaxed">
              {t.resourcesDesc}
            </p>
            <div className="rounded-[4px] bg-[#eef2e3] p-3 text-xs border border-black/5">
              <span className="font-bold text-[#043f2e] block mb-0.5">{t.statusTitle}</span>
              <span className="text-[#242423]/80">{t.statusText}</span>
              <span className="text-[#2a6f2b] font-bold">{t.statusActive}</span>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#242423]/60 font-light">
          <div>
            © {new Date().getFullYear()} {t.copyright}
          </div>
          
          <div className="flex items-center gap-4">
            <a href="mailto:hajonsoft@gmail.com" className="hover:text-[#043f2e] hover:underline">hajonsoft@gmail.com</a>
            <span className="text-[#043f2e]">|</span>
            <span>1 (949) 522-1879</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

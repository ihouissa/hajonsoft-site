import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle, ShieldCheck, Zap, Play } from 'lucide-react';
import kaabaImg from '../assets/images/kaaba_makkah_pilgrimage_1783463634195.jpg';
import nabawiImg from '../assets/images/masjid_nabawi_medina_1783463648565.jpg';

const translations = {
  en: {
    promoRelease: "Saudi visa workflows",
    promoTxt: "Umrah, Hajj, Visit Visa, Nusuk & passport scanning",
    certMin: "AI agents for Umrah, Hajj, Visit Visa, Nusuk, and custom workflows",
    certEnc: "Passport image reading across MRZ and visual passport fields",
    certPlat: "Hands-on support through meetings, video calls, and remote assistance",
    botanical: "AI AGENTS FOR SAUDI VISA WORKFLOWS",
    mainTitle: "Automating Saudi Arabia visa workflows.",
    mainDesc: "HAJonSoft provides intelligent AI agents that send traveller information to Saudi Arabia visa sites, helping travel agencies streamline Umrah, Hajj, Visit Visa, Nusuk, and passport scanning work.",
    btnAutofillPreview: "Preview Autofill Workflow",
    btnWorkshop: "Traveller Records",
    btnWatchVideo: "Watch Demo Video",
    btnTryFree: "Try for Free",
    speedTitle: "ACTIVE AGENTS",
    speedVal: "4",
    speedDesc: "Umrah, Hajj, Visit Visa & Nusuk",
    precisionTitle: "PASSPORT READING",
    precisionVal: "MRZ+",
    precisionDesc: "visual passport fields supported",
    pilgrimsTitle: "GLOBAL REACH",
    pilgrimsVal: "40+",
    pilgrimsDesc: "countries served with multilingual support",
    makkahTab: "Makkah",
    medinaTab: "Medina",
    makkahFull: "Makkah Al-Mukarramah",
    medinaFull: "Al-Madinah Al-Munawwarah",
    destMakkahTag: "HAJJ & UMRAH LOGISTICS",
    destMakkahDesc: "Prepare traveller information for Umrah and Hajj visa workflows.",
    destMedinaTag: "ZIYARAH ITINERARIES",
    destMedinaDesc: "Organize traveller data ahead of Saudi Arabia visa submissions."
  }
};

interface HeroProps {
  onStartAutofill: () => void;
  onWatchVideo?: () => void;
}

export default function Hero({ onStartAutofill, onWatchVideo }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'makkah' | 'medina'>('makkah');
  const t = translations.en;

  const destinations = [
    {
      id: 'makkah',
      name: t.makkahTab,
      fullName: t.makkahFull,
      tag: t.destMakkahTag,
      image: kaabaImg,
      description: t.destMakkahDesc
    },
    {
      id: 'medina',
      name: t.medinaTab,
      fullName: t.medinaFull,
      tag: t.destMedinaTag,
      image: nabawiImg,
      description: t.destMedinaDesc
    }
  ];

  const currentDest = destinations.find(d => d.id === activeTab) || destinations[0];

  return (
    <section className="relative bg-[#eef2e3] py-10 md:py-16 px-4 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Top promo strip */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#fcfcfc] px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#043f2e]">
            <span className="flex h-2 w-2 rounded-full bg-[#c8f169]" />
            <span className="font-bold">{t.promoRelease}</span>
            <span className="text-black/40">|</span>
            <span className="text-[#242423]">{t.promoTxt}</span>
          </div>
        </div>

        {/* Asymmetric 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - Photography inside a Sage Mat */}
          <div className="lg:col-span-5 lg:self-start flex flex-col rounded-[16px] bg-[#fcfcfc] border border-black/5 p-4 sm:p-6 transition-all duration-300">
            <div>
              {/* Sacred Site Selector Tabs */}
              <div className="flex gap-2 mb-4 bg-[#eef2e3]/60 p-1 rounded-lg border border-[#043f2e]/5">
                {destinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => setActiveTab(dest.id as 'makkah' | 'medina')}
                    className={`flex-1 text-center py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer ${
                      activeTab === dest.id
                        ? 'bg-[#043f2e] text-[#c8f169] shadow-sm'
                        : 'text-[#043f2e]/60 hover:text-[#043f2e] hover:bg-[#eef2e3]'
                    }`}
                  >
                    {dest.name}
                  </button>
                ))}
              </div>

              {/* Photo Display Card */}
              <div className="relative overflow-hidden rounded-[12px] border border-black/10 aspect-[4/3] lg:aspect-auto lg:h-[320px] xl:h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDest.id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 h-full w-full"
                  >
                    <img 
                      src={currentDest.image} 
                      alt={currentDest.fullName} 
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[10px] text-[#c8f169] uppercase tracking-widest font-bold mb-1">{currentDest.tag}</p>
                      <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-xl sm:text-2xl font-normal leading-tight">{currentDest.fullName}</h3>
                      <p className="text-xs text-white/80 mt-1 line-clamp-2">{currentDest.description}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#2a6f2b] shrink-0" />
                <p className="text-sm text-[#242423] font-medium">{t.certMin}</p>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#2a6f2b] shrink-0" />
                <p className="text-sm text-[#242423] font-medium">{t.certEnc}</p>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-[#2a6f2b] shrink-0" />
                <p className="text-sm text-[#242423] font-medium">{t.certPlat}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Title and stats */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Display Headline */}
            <div className="space-y-5">
              <p className="font-graphik text-xs sm:text-sm font-semibold uppercase tracking-[1.08px] text-[#043f2e]">
                {t.botanical}
              </p>
              <h1 
                style={{ fontFamily: 'Georgia, serif', lineHeight: '0.9', letterSpacing: '-2px' }}
                className="text-4xl sm:text-6xl lg:text-[70px] xl:text-[86px] font-normal text-[#043f2e] mb-6"
              >
                {t.mainTitle}
              </h1>
              <p className="font-graphik text-base sm:text-lg lg:text-xl text-[#242423] leading-relaxed max-w-xl font-light">
                {t.mainDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="https://hajonsoft-kea.web.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer group flex items-center justify-center gap-2 bg-[#c8f169] text-black px-6 py-3.5 text-base font-semibold rounded-[4px] hover:bg-[#2a6f2b] hover:text-white transition-all font-graphik border-0 shadow-none text-center"
                >
                  {t.btnTryFree}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                {onWatchVideo && (
                  <a
                    href="#video"
                    onClick={onWatchVideo}
                    className="cursor-pointer group flex items-center justify-center gap-2 bg-[#043f2e] text-[#c8f169] px-6 py-3.5 text-base font-semibold rounded-[4px] hover:bg-[#2a6f2b] hover:text-white transition-all font-graphik border-0"
                  >
                    <Play className="h-4 w-4 fill-current shrink-0" />
                    {t.btnWatchVideo}
                  </a>
                )}
                <a
                  href="#autofill"
                  onClick={onStartAutofill}
                  className="cursor-pointer group flex items-center justify-center gap-2 border border-black/30 bg-transparent px-6 py-3.5 text-base font-semibold text-black rounded-[4px] hover:bg-[#eef2e3] transition-all font-graphik"
                >
                  {t.btnAutofillPreview}
                </a>
              </div>
            </div>

            {/* Forest Stat Card (dense and beautiful) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-[16px] bg-[#043f2e] p-6 text-[#fcfcfc] border border-black/10">
              <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 sm:pr-4">
                <span className="font-graphik text-[10px] uppercase tracking-[0.15em] text-[#c8f169] font-bold block mb-1">
                  {t.speedTitle}
                </span>
                <span className="font-grenette text-4xl sm:text-3xl xl:text-4xl font-light tracking-tight block">
                  {t.speedVal}
                </span>
                <span className="font-graphik text-[11px] text-white/60 block mt-1">
                  {t.speedDesc}
                </span>
              </div>

              <div className="border-b sm:border-b-0 sm:border-r border-white/10 py-4 sm:py-0 sm:px-4">
                <span className="font-graphik text-[10px] uppercase tracking-[0.15em] text-[#c8f169] font-bold block mb-1">
                  {t.precisionTitle}
                </span>
                <span className="font-grenette text-4xl sm:text-3xl xl:text-4xl font-light tracking-tight block">
                  {t.precisionVal}
                </span>
                <span className="font-graphik text-[11px] text-white/60 block mt-1">
                  {t.precisionDesc}
                </span>
              </div>

              <div className="pt-4 sm:pt-0 sm:pl-4">
                <span className="font-graphik text-[10px] uppercase tracking-[0.15em] text-[#c8f169] font-bold block mb-1">
                  {t.pilgrimsTitle}
                </span>
                <span className="font-grenette text-4xl sm:text-3xl xl:text-4xl font-light tracking-tight block">
                  {t.pilgrimsVal}
                </span>
                <span className="font-graphik text-[11px] text-white/60 block mt-1">
                  {t.pilgrimsDesc}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

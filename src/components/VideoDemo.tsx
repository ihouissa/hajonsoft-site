import { Play, Sparkles, CheckCircle2 } from 'lucide-react';

const VIMEO_URL = 'https://vimeo.com/738277759';
const VIMEO_EMBED_URL = 'https://player.vimeo.com/video/738277759?badge=0&autopause=0&player_id=0&app_id=58479';

const translations = {
  en: {
    sectionEyebrow: "PRODUCT IN ACTION",
    sectionTitle: "Watch HAJonSoft in action",
    sectionDesc: "Watch how HAJonSoft AI agents scan passports, fill visa forms automatically, and send traveller information to Saudi Arabia visa sites in one guided workflow.",
    featuresTitle: "Why travel agents choose HAJonSoft",
    feature1: "AI agents for Umrah, Hajj, Visit Visa, Nusuk, and passport scanning",
    feature2: "Passport image reading across MRZ and visual passport fields",
    feature3: "Automatic photo resizing and form submission support",
    feature4: "Custom agents such as Rawda workflows when needed",
    feature5: "Hands-on support through meetings, video calls, and remote assistance",
    watchVideoBtn: "Watch Walkthrough Demo"
  }
};

export default function VideoDemo() {
  const t = translations.en;

  return (
    <section className="relative bg-[#fcfcfc] py-16 md:py-24 px-4 md:px-8 border-b border-[#043f2e]/10">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <p className="font-graphik text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#043f2e] flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-[#2a6f2b]" />
            <span>{t.sectionEyebrow}</span>
          </p>
          <h2 className="font-grenette text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#043f2e] leading-[1.1]">
            {t.sectionTitle}
          </h2>
          <p className="font-graphik text-base sm:text-lg text-[#242423] leading-relaxed font-light">
            {t.sectionDesc}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Vimeo Player Frame */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video w-full overflow-hidden rounded-[16px] border border-black/10 bg-[#043f2e]/5 shadow-xl transition-all hover:shadow-2xl">
              <iframe
                src={VIMEO_EMBED_URL}
                className="absolute inset-0 h-full w-full rounded-[16px]"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="HAJonSoft workflow walkthrough video"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-[11px] text-[#242423]/60 font-mono">
                Workflow walkthrough video for HAJonSoft visa processing.
              </p>
              <a
                href={VIMEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-[4px] border border-[#043f2e]/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#043f2e] transition-colors hover:bg-[#eef2e3]"
              >
                Open video on Vimeo
              </a>
            </div>
          </div>

          {/* Right Column: Why Hajonsoft Checklist */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <h3 className="font-grenette text-xl sm:text-2xl font-normal text-[#043f2e] tracking-tight">
              {t.featuresTitle}
            </h3>

            <ul className="space-y-4">
              {[t.feature1, t.feature2, t.feature3, t.feature4, t.feature5].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#2a6f2b] shrink-0 mt-0.5" />
                  <span className="font-graphik text-sm sm:text-base text-[#242423] font-light leading-relaxed">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            {/* Quick action helper card */}
            <div className="p-4 rounded-[12px] bg-[#eef2e3] border border-black/5 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#043f2e] text-white">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#043f2e] uppercase tracking-wider">
                  Need a custom agent?
                </p>
                <p className="text-xs text-[#242423]/80 font-light font-graphik leading-relaxed">
                  HAJonSoft can build specialized agents, including Rawda workflows and other Saudi Arabia visa processing needs.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import { Chrome, Scan, Users, Globe, Printer, Shield } from 'lucide-react';

const CONTACT_EMAIL = 'hajonsoft@gmail.com';

const translations = {
  en: {
    sectionEyebrow: "WORKFLOWS",
    sectionTitle: "AI agents for Saudi Arabia visa processing.",
    sectionDesc: "HAJonSoft provides intelligent AI agents for travel agencies and visa processing centers, covering Umrah, Hajj, Visit Visa, Nusuk, passport scanning, and custom workflows.",
    learnMore: "Ask about this",
    features: [
      {
        eyebrow: 'BROWSER ENHANCEMENT',
        title: 'Umrah AI Agent',
        description: "Automates Umrah visa submissions through Masar and Bab Al-Umrah workflows by sending traveller information to Saudi Arabia visa sites, handling passport data entry, photo uploads, and form submissions.",
        tag: 'Umrah',
        type: 'white'
      },
      {
        icon: Scan,
        eyebrow: 'HARDWARE & WEB OCR',
        title: 'Passport Scanning AI Agent',
        description: "Reads passport data from passport images, including Arabic names and birthplace fields. It reads both the MRZ and the visual area of the passport page.",
        tag: 'Passport Scanning',
        type: 'sage'
      },
      {
        icon: Users,
        eyebrow: 'B2B MANAGEMENT',
        title: 'Hajj AI Agent',
        description: 'Submits Hajj visa applications to the Saudi Arabia eHaj system with one streamlined process, including package creation support and photo dimension adjustments before upload.',
        tag: 'Hajj',
        type: 'sage'
      },
      {
        icon: Globe,
        eyebrow: 'ENTERPRISE CONNECTIVITY',
        title: 'Visit Visa AI Agent',
        description: 'Processes Saudi Arabia visit visa applications through automated form filling and document submission for agencies handling business, family, or tourist visas at scale.',
        tag: 'Visit Visa',
        type: 'white'
      },
      {
        icon: Printer,
        eyebrow: 'PHYSICAL OPERATIONS',
        title: 'Nusuk & Custom AI Agents',
        description: 'Automates Hajj registration by sending traveller data to Saudi Arabia\'s Nusuk platform. Custom agents, including Rawda workflows, can be built when needed.',
        tag: 'Custom Workflows',
        type: 'white'
      },
      {
        icon: Shield,
        eyebrow: 'COMPLIANCE & PROTECTION',
        title: 'Dove Online Sales',
        description: 'Sell travel packages through Dove, a customizable online storefront hosted on your domain, where travellers can reserve packages and submit passport details and personal photos.',
        tag: 'Online Sales',
        type: 'sage'
      }
    ]
  }
};

export default function Features() {
  const t = translations.en;

  const icons = [Chrome, Scan, Users, Globe, Printer, Shield];

  const mainFeatures = t.features.map((feat, index) => ({
    ...feat,
    icon: icons[index] || Chrome
  }));

  return (
    <section id="features" className="bg-[#fcfcfc] py-16 md:py-24 px-4 md:px-10 border-t border-b border-[#043f2e]/10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header section with Eyebrow and Grenette Section Title */}
        <div className="max-w-2xl mb-16 space-y-4">
          <p className="font-graphik text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#043f2e]">
            {t.sectionEyebrow}
          </p>
          <h2 className="font-grenette text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#043f2e] leading-[1.1]">
            {t.sectionTitle}
          </h2>
          <p className="font-graphik text-base text-[#242423] leading-relaxed font-light">
            {t.sectionDesc}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainFeatures.map((feat, index) => {
            const Icon = feat.icon;
            const isWhite = feat.type === 'white';
            const subject = encodeURIComponent(`Ask about ${feat.title}`);
            return (
              <div 
                key={index}
                className={`group flex flex-col justify-between rounded-[16px] p-6 transition-all duration-300 border ${
                  isWhite 
                    ? 'bg-[#fcfcfc] border-black/10 hover:border-black' 
                    : 'bg-[#eef2e3] border-transparent hover:border-black/20'
                }`}
              >
                <div className="space-y-6">
                  {/* Top row with Icon and Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-[4px] border ${
                      isWhite 
                        ? 'bg-[#eef2e3] border-black/5 text-[#043f2e]' 
                        : 'bg-[#fcfcfc] border-black/5 text-[#043f2e]'
                    }`}>
                      <Icon className="h-6 w-6 stroke-[1.5]" />
                    </div>
                    
                    <span className="rounded-full bg-[#c8f169] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-black border border-black/5">
                      {feat.tag}
                    </span>
                  </div>

                  {/* Eyebrow and Title */}
                  <div className="space-y-2">
                    <p className="font-graphik text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-[#242423]/60">
                      {feat.eyebrow}
                    </p>
                    <h3 className="font-grenette text-xl sm:text-2xl font-normal text-[#043f2e] leading-tight">
                      {feat.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-graphik text-sm text-[#242423] leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>

                {/* Bottom detail action line */}
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}
                  className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#043f2e] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
                >
                  <span className="font-graphik text-xs font-semibold uppercase tracking-[0.06em] text-[#043f2e]">
                    {t.learnMore}
                  </span>
                  <span className="text-[#043f2e] transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import { Check } from 'lucide-react';

const translations = {
  en: {
    sectionEyebrow: "SOFTWARE & SUPPORT",
    sectionTitle: "Software access and hands-on support options.",
    sectionDesc: "Support is matched to the agency's software, season, and volume needs, including Hajj, Umrah, proxy processing, and longer-term assistance.",
    includesLabel: "Includes:",
    mostPopularBadge: "",
    plans: [
      {
        name: 'Software & Database',
        price: 'One-time',
        period: 'software activation',
        description: 'The required software and database purchase for using HAJonSoft.',
        features: [
          '1GB database',
          '5GB storage for passport and photo data',
          'Dedicated sales and admin portals',
          'Lifetime software updates',
          'Required purchase to activate the software',
          'One-time, non-refundable activation purchase'
        ],
        tag: 'Basic',
        isPopular: false,
        cta: 'Discuss Software Access'
      },
      {
        name: 'Seasonal Support',
        price: 'Per season',
        period: 'Hajj or Umrah support',
        description: 'Support for agencies working through Hajj and Umrah seasons.',
        features: [
          'Umrah seasonal support',
          'Hajj seasonal support',
          'Meetings, videos, phone calls, and remote machine help',
          'Up to 100 visas issued on your behalf',
          'Guidance for Hajj package creation and pilgrim reservations',
          'Technical support'
        ],
        tag: 'Hajj & Umrah',
        isPopular: false,
        cta: 'Discuss Seasonal Support'
      },
      {
        name: 'Long-Term & Volume Support',
        price: '15-year',
        period: 'support term / volume options',
        description: 'Longer-term Hajj and Umrah support with proxy visa processing, troubleshooting, and volume pricing.',
        features: [
          '15 years of support',
          'Hajj and Umrah support',
          'Daily visa application processing support',
          'Troubleshooting assistance',
          'Volume pricing for larger scan and proxy needs',
          'Dedicated server option'
        ],
        tag: 'Proxy Support',
        isPopular: false,
        cta: 'Discuss Volume Support'
      }
    ]
  }
};

export default function Pricing() {
  const t = translations.en;
  const plans = t.plans;

  return (
    <section id="pricing" className="bg-[#eef2e3] py-16 md:py-24 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header section with Eyebrow and Grenette Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="font-graphik text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#043f2e]">
            {t.sectionEyebrow}
          </p>
          <h2 className="font-grenette text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#043f2e] leading-[1.1]">
            {t.sectionTitle}
          </h2>
          <p className="font-graphik text-base text-[#242423] font-light max-w-lg mx-auto">
            {t.sectionDesc}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            return (
              <div 
                key={index}
                className={`flex flex-col justify-between rounded-[16px] bg-[#fcfcfc] border p-6 transition-all duration-300 relative ${
                  plan.isPopular 
                    ? 'border-2 border-[#043f2e]' 
                    : 'border-black/10'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#043f2e] text-[#c8f169] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full border border-black/10">
                    {t.mostPopularBadge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Identifier */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#242423]/50">
                        {plan.tag}
                      </span>
                    </div>
                    <h3 className="font-grenette text-2xl font-normal text-[#043f2e]">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="flex flex-col gap-1 border-b border-black/5 pb-6">
                    <span className="font-grenette text-5xl font-normal text-[#043f2e]">
                      {plan.price}
                    </span>
                    <span className="font-graphik text-sm text-[#242423]/60 leading-snug">
                      {plan.period}
                    </span>
                  </div>

                  <p className="font-graphik text-sm text-[#242423] font-light leading-relaxed font-light text-[#242423]/90">
                    {plan.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-2">
                    <p className="font-graphik text-xs font-semibold uppercase tracking-wider text-[#043f2e]">
                      {t.includesLabel}
                    </p>
                    <ul className="space-y-2">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-sm text-[#242423] font-light">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef2e3] text-[#043f2e] mt-0.5">
                            <Check className="h-3 w-3" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <a 
                    href={`mailto:hajonsoft@gmail.com?subject=${encodeURIComponent(plan.cta)}`}
                    className={`cursor-pointer block text-center w-full py-3 px-4 rounded-[4px] text-sm font-semibold transition-all uppercase tracking-wider ${
                      plan.isPopular 
                        ? 'bg-[#c8f169] text-black hover:bg-[#2a6f2b] hover:text-[#fcfcfc] border-0 shadow-none' 
                        : 'bg-[#fcfcfc] text-black border border-black hover:bg-[#eef2e3]'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

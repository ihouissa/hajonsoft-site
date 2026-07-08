import { useState, FormEvent } from 'react';
import { mockPilgrims as initialPilgrims, mockGroups } from '../sampleData';
import { Pilgrim } from '../types';
import { Printer, Plus, UserCheck, ShieldCheck, Tag, CreditCard, ChevronRight, Check } from 'lucide-react';

const translations = {
  en: {
    pilgrimId: "PILGRIM ID • HAJONSOFT",
    passport: "PASSPORT",
    makkahHotel: "Makkah Hotel",
    madinahHotel: "Madinah Hotel",
    groupAllocation: "Group Allocation",
    luggageKey: "LUGGAGE KEY",
    makkahHotelAddress: "Makkah Hotel Address",
    peelAdhesive: "PEEL ADHESIVE",
    approved: "SAMPLE RECORD",
    printTemplate: "Preview Layout",
    printStudioOutput: "Traveller Record Layouts",
    makkahHotelVal: "Swissôtel Makkah",
    madinahHotelVal: "Dar Al Taqwa Hotel",
    groupVal: "UK Elite Umrah July 2026",
    selectPilgrim: "Select a pilgrim to update and design tags.",
    pilgrimManifest: "Pilgrim Manifest",
    registerNew: "Register New Pilgrim File",
    givenName: "Given Name",
    surname: "Surname",
    passportNo: "Passport No",
    nationality: "Nationality",
    addPilgrimBtn: "Add Pilgrim",
    statusText: "DEMO DATA",
    sectionEyebrow: "OPERATIONS PREVIEW",
    sectionTitle: "Traveller record preview",
    sectionDesc: "Preview how prepared traveller records could be organized into practical IDs, luggage tags, and wristband-style layouts after visa workflow data is ready.",
    printBtn: "Print Preview",
    generateFileTitle: "Preview printable layouts",
    generateFileDesc: "Use this sample to review ID, luggage, and wristband layouts for",
    compatibilitySpec: "PREVIEW NOTES",
    compatibilityTitle: "A visual concept for post-visa traveller organization.",
    compatibilityItem1: "- Uses prepared traveller records from the demo dataset",
    compatibilityItem2: "- Shows ID, luggage tag, and wristband-style layouts",
    compatibilityItem3: "- Does not claim printer certification or direct hardware support",
    givenNamePlaceholder: "e.g. FATIMA",
    surnamePlaceholder: "e.g. REHMAN",
    passportPlaceholder: "e.g. G44556677",
    cancel: "Cancel",
    meccaAcc: "Mecca Accommodation",
    madinahAcc: "Medina Accommodation",
    idBadgeTab: "ID Badge",
    luggageTagTab: "Luggage Tag",
    wristbandTab: "Wristband"
  }
};


export default function BadgeGenerator() {
  const t = translations.en;
  const [pilgrims, setPilgrims] = useState<Pilgrim[]>(initialPilgrims);
  const [selectedPilgrimId, setSelectedPilgrimId] = useState<string>(initialPilgrims[0].id);
  const [activeTemplate, setActiveTemplate] = useState<'badge' | 'luggage' | 'wristband'>('badge');
  
  // Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [nationality, setNationality] = useState('United Kingdom');
  const [hotelMecca, setHotelMecca] = useState('Swissôtel Makkah');
  const [hotelMedina, setHotelMedina] = useState('Dar Al Taqwa Hotel');
  const [groupName, setGroupName] = useState('UK Elite Umrah July 2026');

  const selectedPilgrim = pilgrims.find((p) => p.id === selectedPilgrimId) || pilgrims[0];

  const handleAddPilgrim = (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !passportNumber) return;

    const newPilgrim: Pilgrim = {
      id: `plg-${Date.now()}`,
      passportNumber: passportNumber.toUpperCase(),
      firstName: firstName.toUpperCase(),
      lastName: lastName.toUpperCase(),
      nationality,
      countryCode: nationality.slice(0, 3).toUpperCase(),
      dateOfBirth: '1990-01-01',
      gender: 'M',
      expiryDate: '2032-12-31',
      birthPlace: 'LONDON',
      mrzString1: `P<${nationality.slice(0, 3).toUpperCase()}${lastName.toUpperCase()}<<${firstName.toUpperCase()}<<<<<<<<<<<<<<<<<<<<<<`,
      mrzString2: `${passportNumber.toUpperCase()}4${nationality.slice(0, 3).toUpperCase()}9001015M3212311<<<<<<<<<<<<<<02`,
      visaStatus: 'Approved',
      visaNumber: `UMRAH${Math.floor(100000000 + Math.random() * 900000000)}`,
      hotelMecca,
      hotelMedina,
      groupName
    };

    setPilgrims([newPilgrim, ...pilgrims]);
    setSelectedPilgrimId(newPilgrim.id);
    
    // Reset Form
    setFirstName('');
    setLastName('');
    setPassportNumber('');
    setShowAddForm(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="workshop" className="bg-[#fcfcfc] py-16 md:py-24 px-4 md:px-10 border-b border-[#043f2e]/10">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
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

        {/* Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Pilgrim Queue Management (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div className="rounded-[16px] bg-[#eef2e3] border border-black/5 p-6 flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-grenette text-lg font-normal text-[#043f2e]">
                    {t.pilgrimManifest}
                  </h3>
                  <p className="text-xs text-[#242423]/70 font-graphik font-light">
                    {t.selectPilgrim}
                  </p>
                </div>

                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="cursor-pointer bg-[#c8f169] text-black h-8 w-8 rounded-[4px] flex items-center justify-center hover:bg-[#2a6f2b] hover:text-white transition-all border-0 shadow-none"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>

              {/* Add Pilgrim Form Inline */}
              {showAddForm && (
                <form onSubmit={handleAddPilgrim} className="bg-[#fcfcfc] border border-black/10 rounded-[12px] p-4 space-y-3">
                  <p className="text-xs font-bold text-[#043f2e] uppercase tracking-wider">
                    {t.registerNew}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-wider font-bold text-[#242423]/70">{t.givenName}</label>
                      <input 
                        type="text" 
                        required 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="e.g. FATIMA"
                        className="w-full text-xs rounded-[4px] border border-black/10 p-2 uppercase"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-wider font-bold text-[#242423]/70">{t.surname}</label>
                      <input 
                        type="text" 
                        required 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="e.g. REHMAN"
                        className="w-full text-xs rounded-[4px] border border-black/10 p-2 uppercase"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-wider font-bold text-[#242423]/70">{t.passportNo}</label>
                      <input 
                        type="text" 
                        required 
                        value={passportNumber}
                        onChange={(e) => setPassportNumber(e.target.value)}
                        placeholder="e.g. G44556677"
                        className="w-full text-xs rounded-[4px] border border-black/10 p-2 uppercase font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-wider font-bold text-[#242423]/70">{t.nationality}</label>
                      <select 
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                        className="w-full text-xs rounded-[4px] border border-black/10 p-2"
                      >
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider font-bold text-[#242423]/70">{t.meccaAcc}</label>
                    <input 
                      type="text" 
                      value={hotelMecca}
                      onChange={(e) => setHotelMecca(e.target.value)}
                      className="w-full text-xs rounded-[4px] border border-black/10 p-2"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider font-bold text-[#242423]/70">{t.madinahAcc}</label>
                    <input 
                      type="text" 
                      value={hotelMedina}
                      onChange={(e) => setHotelMedina(e.target.value)}
                      className="w-full text-xs rounded-[4px] border border-black/10 p-2"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2 border-t border-black/5">
                    <button 
                      type="button" 
                      onClick={() => setShowAddForm(false)}
                      className="cursor-pointer px-3 py-1.5 text-xs font-semibold rounded-[4px] border border-black/15 hover:bg-[#eef2e3]"
                    >
                      {t.cancel}
                    </button>
                    <button 
                      type="submit" 
                      className="cursor-pointer bg-[#043f2e] text-[#fcfcfc] px-3 py-1.5 text-xs font-semibold rounded-[4px] hover:bg-[#2a6f2b] transition-all border-0 shadow-none"
                    >
                      {t.addPilgrimBtn}
                    </button>
                  </div>
                </form>
              )}

              {/* Pilgrim Queue List */}
              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {pilgrims.map((pilgrim) => {
                  const isSelected = selectedPilgrimId === pilgrim.id;
                  return (
                    <button
                      key={pilgrim.id}
                      onClick={() => setSelectedPilgrimId(pilgrim.id)}
                      className={`cursor-pointer w-full p-3 rounded-[8px] border text-left flex items-center justify-between transition-all ${
                        isSelected 
                          ? 'bg-[#fcfcfc] border-black' 
                          : 'bg-[#fcfcfc]/40 border-black/5 hover:border-black/25'
                      }`}
                    >
                      <div className="space-y-1 min-w-0">
                        <p className="font-grenette text-[15px] font-normal text-[#043f2e] truncate">
                          {pilgrim.firstName} {pilgrim.lastName}
                        </p>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-[#242423]/60 uppercase">
                          <span>{pilgrim.passportNumber}</span>
                          <span>•</span>
                          <span>{pilgrim.countryCode}</span>
                          <span>•</span>
                          <span className="truncate max-w-[120px]">{pilgrim.groupName.split(' ')[0]}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {pilgrim.visaStatus === 'Approved' ? (
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c8f169]/80 text-[#043f2e]">
                            <Check className="h-3 w-3 font-bold" />
                          </span>
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
                        )}
                        <ChevronRight className="h-4 w-4 text-[#242423]/40" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick specifications / printer tips */}
            <div className="rounded-[16px] bg-[#043f2e] p-6 text-[#fcfcfc] space-y-3 border border-black/10">
              <span className="text-[9px] uppercase tracking-[0.15em] text-[#c8f169] font-bold block">
                {t.compatibilitySpec}
              </span>
              <p className="font-grenette text-lg font-light leading-tight">
                {t.compatibilityTitle}
              </p>
              <div className="space-y-1 text-xs text-white/70 font-graphik font-light">
                <p>{t.compatibilityItem1}</p>
                <p>{t.compatibilityItem2}</p>
                <p>{t.compatibilityItem3}</p>
              </div>
            </div>

          </div>

          {/* RIGHT: Live Tag Preview & Print Simulator (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-[16px] border border-black/10 p-6 space-y-6">
            
            {/* Template Selector tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/10 pb-4">
              <h3 className="font-grenette text-xl font-normal text-[#043f2e]">
                {t.printStudioOutput}
              </h3>

              <div className="grid grid-cols-3 sm:flex gap-1 bg-[#eef2e3] p-1 rounded-[6px] w-full sm:w-auto">
                {[
                  { id: 'badge', label: t.idBadgeTab, icon: CreditCard },
                  { id: 'luggage', label: t.luggageTagTab, icon: Tag },
                  { id: 'wristband', label: t.wristbandTab, icon: UserCheck }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTemplate(item.id as any)}
                      className={`cursor-pointer flex min-w-0 items-center justify-center gap-1 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold rounded-[4px] transition-all ${
                        activeTemplate === item.id 
                          ? 'bg-[#043f2e] text-white' 
                          : 'text-[#242423]/70 hover:text-black'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* LIVE PREVIEW CONTAINER */}
            <div className="flex-1 flex items-center justify-center bg-[#eef2e3]/40 border border-dashed border-black/15 rounded-[12px] p-4 sm:p-6 min-h-[350px]">
              
              {/* ID BADGE TEMPLATE */}
              {activeTemplate === 'badge' && (
                <div id="print-area-badge" className="w-72 bg-[#fcfcfc] border-2 border-black rounded-[8px] p-5 flex flex-col justify-between shadow-none relative min-h-[420px] pb-5">
                  
                  {/* Top Header */}
                  <div className="text-center space-y-1">
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#eef2e3] border border-black/10 text-[8px] sm:text-[9px] font-bold text-[#043f2e] uppercase tracking-wider">
                      {t.pilgrimId}
                    </div>
                    <p className="font-grenette text-[16px] font-semibold text-[#043f2e] tracking-tight mt-3 uppercase">
                      {selectedPilgrim.firstName} {selectedPilgrim.lastName}
                    </p>
                    <p className="text-[10px] font-mono text-[#242423]/60 uppercase tracking-widest">
                      {t.passport}: {selectedPilgrim.passportNumber}
                    </p>
                  </div>

                  {/* Pilgrim Initials placeholder */}
                  <div className="my-4 flex justify-center">
                    <div className="h-20 w-20 rounded-[4px] border-2 border-black bg-[#eef2e3] flex items-center justify-center text-2xl font-grenette text-[#043f2e]">
                      {selectedPilgrim.firstName[0] || 'P'}{selectedPilgrim.lastName[0] || 'G'}
                    </div>
                  </div>

                  {/* Accommodation list */}
                  <div className="space-y-2 border-t border-b border-black/10 py-3 text-[10px] font-graphik text-[#242423] my-2">
                    <div>
                      <span className="text-[8px] text-[#242423]/60 block uppercase font-bold">{t.makkahHotel}</span>
                      <span className="font-semibold block text-[#043f2e]">{selectedPilgrim.hotelMecca || 'Swissôtel Makkah'}</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-[#242423]/60 block uppercase font-bold">{t.madinahHotel}</span>
                      <span className="font-semibold block text-[#043f2e]">{selectedPilgrim.hotelMedina || 'Dar Al Taqwa Hotel'}</span>
                    </div>
                  </div>

                  {/* Barcode & Footer info */}
                  <div className="flex items-center justify-between gap-2 pt-2">
                    <div className="space-y-0.5">
                      <p className="text-[7px] text-[#242423]/50 uppercase tracking-wider block">{t.groupAllocation}</p>
                      <p className="text-[9px] font-semibold text-[#043f2e] uppercase">{selectedPilgrim.groupName}</p>
                    </div>
                    
                    {/* Simulated barcode lines */}
                    <div className="flex flex-col gap-0.5 h-6 shrink-0 w-12 justify-center bg-white border border-black/10 p-1">
                      <div className="flex gap-px h-full">
                        <div className="bg-black w-1" />
                        <div className="bg-black w-0.5" />
                        <div className="bg-transparent w-0.5" />
                        <div className="bg-black w-0.5" />
                        <div className="bg-black w-1.5" />
                        <div className="bg-transparent w-0.5" />
                        <div className="bg-black w-0.5" />
                        <div className="bg-black w-1" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LUGGAGE TAG TEMPLATE */}
              {activeTemplate === 'luggage' && (
                <div id="print-area-luggage" className="w-full max-w-sm bg-[#043f2e] text-[#fcfcfc] border-2 border-black rounded-[8px] p-6 flex flex-col justify-between shadow-none relative min-h-[230px] pb-4">
                  
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="rounded-full bg-[#c8f169] text-black px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-widest border border-black/5">
                        {t.luggageKey}
                      </span>
                      <h4 className="font-grenette text-xl font-normal leading-tight mt-3 uppercase">
                        {selectedPilgrim.firstName} {selectedPilgrim.lastName}
                      </h4>
                      <p className="text-[10px] font-mono text-[#c8f169] uppercase tracking-wider block mt-1">
                        {t.passport}: {selectedPilgrim.passportNumber}
                      </p>
                    </div>
                    
                    <span className="text-right font-graphik text-[10px] font-semibold text-white/50 uppercase tracking-widest block shrink-0 mt-1">
                      {selectedPilgrim.countryCode}
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-4 mt-4 flex items-end justify-between gap-4">
                    <div className="space-y-1 text-[10px] min-w-0 flex-1">
                      <p className="text-white/50 uppercase text-[8px] block">{t.makkahHotelAddress}</p>
                      <p className="font-semibold text-white truncate">{selectedPilgrim.hotelMecca || 'Swissôtel Makkah'}</p>
                      <p className="text-white/40 text-[9px] uppercase">{selectedPilgrim.groupName}</p>
                    </div>

                    {/* QR Code simulation */}
                    <div className="h-10 w-10 bg-[#fcfcfc] rounded-[4px] p-1 shrink-0 flex flex-wrap gap-0.5 border border-black/20">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1.5 w-1.5 rounded-sm ${
                            (i + 3) % 3 === 0 || i % 4 === 0 ? 'bg-black' : 'bg-transparent'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* SECURITY WRISTBAND */}
              {activeTemplate === 'wristband' && (
                <div id="print-area-wristband" className="w-full max-w-md bg-[#fcfcfc] border border-black rounded-[4px] p-3 flex items-center justify-between relative shadow-none min-h-[84px] py-3">
                  
                  {/* Left Chartreuse Adhesive tab */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#c8f169] border-r border-black flex items-center justify-center">
                    <span className="text-[8px] font-bold text-black origin-center rotate-90 uppercase whitespace-nowrap tracking-widest select-none">
                      {t.peelAdhesive}
                    </span>
                  </div>

                  {/* Center info */}
                  <div className="pl-10 pr-2 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-w-0">
                    <div className="min-w-0 space-y-1">
                      <p className="font-grenette text-sm font-semibold text-[#043f2e] uppercase leading-snug">
                        {selectedPilgrim.firstName} {selectedPilgrim.lastName}
                      </p>
                      <p className="text-[9px] font-mono text-[#242423]/60 uppercase tracking-wider block">
                        {t.passport}: {selectedPilgrim.passportNumber} | {selectedPilgrim.countryCode}
                      </p>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <p className="text-[8px] text-emerald-800 bg-emerald-100 border border-emerald-200 px-1.5 py-0.5 rounded-[4px] font-bold uppercase tracking-wider inline-block">
                        {t.approved}
                      </p>
                      <p className="text-[9px] text-[#242423]/40 truncate max-w-[120px] mt-1 uppercase font-mono">{selectedPilgrim.groupName}</p>
                    </div>
                  </div>

                </div>
              )}

            </div>

            {/* Bottom action bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-[12px] bg-[#eef2e3] border border-black/5">
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-[#043f2e] uppercase tracking-wider">
                  {t.generateFileTitle}
                </p>
                <p className="text-xs text-[#242423]/70 font-light font-graphik leading-relaxed">
                  {t.generateFileDesc} {selectedPilgrim.firstName} {selectedPilgrim.lastName}.
                </p>
              </div>

              <button
                onClick={handlePrint}
                className="cursor-pointer bg-[#043f2e] hover:bg-[#2a6f2b] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded-[4px] flex items-center gap-2 border-0 shadow-none"
              >
                <Printer className="h-4 w-4" />
                <span>{t.printBtn}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

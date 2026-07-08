import { useState, useEffect } from 'react';
import { samplePassports } from '../sampleData';
import { Pilgrim, SaudiPortal } from '../types';
import { Check, Chrome, Cpu } from 'lucide-react';

const translations = {
  en: {
    demoBadge: "WORKFLOW PREVIEW",
    demoTitle: "Preview passport reading and visa autofill",
    demoDesc: "Use a sample traveller record to see how passport fields can be prepared and placed into Saudi Arabia visa workflow forms.",
    step1Title: "Select Sample Traveller",
    step1Desc: "Choose a sample record to preview the field mapping.",
    step2Title: "Passport Field Preview",
    step2Ready: "Ready",
    awaitingFeed: "Select a sample traveller...",
    extDataFields: "Prepared Data Fields",
    givenName: "Given Name",
    surname: "Surname",
    passportNo: "Passport No.",
    nationality: "Nationality",
    dob: "Date of Birth",
    expiryDate: "Expiry Date",
    step3Title: "Visa Workflow Field Preview",
    step3Desc: "Choose a workflow type and preview where traveller fields land.",
    extensionActive: "Demo Mode",
    ministryHeader: "SAUDI VISA WORKFLOW PREVIEW",
    visaAppModule: "sample application fields",
    formIdLabel: "Sample Form",
    passportNumLabel: "Passport Number",
    nationalityLabel: "Nationality / GDS Country",
    givenNameLabel: "English Given Name",
    surnameLabel: "English Father/Surname",
    dobLabel: "Date of Birth (YYYY-MM-DD)",
    expiryLabel: "Passport Expiry Date",
    genderLabel: "Gender",
    birthPlaceLabel: "City of Birth",
    triggerQuestion: "Preview field fill?",
    triggerDesc: "This demo shows how traveller information can populate the target workflow fields.",
    btnFilling: "Preparing Preview...",
    btnAutofill: "Preview Autofill",
    scanLogs: [
      'Reading sample passport fields...',
      'Separating MRZ and visual passport data...',
      'Preparing traveller details for the workflow...',
      'Checking required fields for the preview...',
      'Sample record is ready.'
    ]
  }
};

export default function AutofillPreview() {
  const t = translations.en;

  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [hasScanned, setHasScanned] = useState(true);
  const [scannedData, setScannedData] = useState<Omit<Pilgrim, 'id' | 'visaStatus' | 'groupName'>>(
    samplePassports[0].pilgrimData
  );

  const [activePortal, setActivePortal] = useState<SaudiPortal>('muqeem');
  const [isAutofilling, setIsAutofilling] = useState(false);
  const [autofilledFields, setAutofilledFields] = useState<Record<string, boolean>>({
    passportNumber: true,
    firstName: true,
    lastName: true,
    nationality: true,
    dateOfBirth: true,
    gender: true,
    expiryDate: true,
    birthPlace: true
  });

  const [portalFormData, setPortalFormData] = useState<Record<string, string>>({
    passportNumber: samplePassports[0].pilgrimData.passportNumber,
    firstName: samplePassports[0].pilgrimData.firstName,
    lastName: samplePassports[0].pilgrimData.lastName,
    nationality: samplePassports[0].pilgrimData.nationality,
    dateOfBirth: samplePassports[0].pilgrimData.dateOfBirth,
    gender: samplePassports[0].pilgrimData.gender,
    expiryDate: samplePassports[0].pilgrimData.expiryDate,
    birthPlace: samplePassports[0].pilgrimData.birthPlace
  });

  // Refresh the sample record preview when the selected traveller changes.
  const handleSelectSample = (index: number) => {
    setSelectedSampleIndex(index);
    setIsScanning(true);
    setScanStep(0);
    setHasScanned(false);
    
    // Reset form
    setPortalFormData({
      passportNumber: '',
      firstName: '',
      lastName: '',
      nationality: '',
      dateOfBirth: '',
      gender: '',
      expiryDate: '',
      birthPlace: ''
    });
    setAutofilledFields({});
  };

  useEffect(() => {
    if (!isScanning) return;

    const interval = setInterval(() => {
      setScanStep((prev) => {
        if (prev >= t.scanLogs.length - 1) {
          clearInterval(interval);
          setIsScanning(false);
          setHasScanned(true);
          const selectedSample = samplePassports[selectedSampleIndex];
          setScannedData(selectedSample.pilgrimData);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isScanning, selectedSampleIndex, t.scanLogs]);

  // Handle Autofill trigger
  const handleAutofill = () => {
    if (!hasScanned) return;
    setIsAutofilling(true);
    setAutofilledFields({});

    const fields = ['passportNumber', 'firstName', 'lastName', 'nationality', 'dateOfBirth', 'gender', 'expiryDate', 'birthPlace'];
    
    fields.forEach((field, index) => {
      setTimeout(() => {
        setPortalFormData((prev) => ({
          ...prev,
          [field]: scannedData[field as keyof typeof scannedData] as string
        }));
        setAutofilledFields((prev) => ({
          ...prev,
          [field]: true
        }));

        if (index === fields.length - 1) {
          setIsAutofilling(false);
        }
      }, (index + 1) * 200);
    });
  };

  return (
    <section className="bg-[#eef2e3] py-16 md:py-24 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="rounded-full bg-[#c8f169] text-black border border-black/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider font-graphik inline-block">
            {t.demoBadge}
          </span>
          <h2 className="font-grenette text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#043f2e]">
            {t.demoTitle}
          </h2>
          <p className="font-graphik text-base text-[#242423] max-w-xl mx-auto font-light leading-relaxed">
            {t.demoDesc}
          </p>
        </div>

        {/* Workflow preview board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Passport Selection and OCR Reader (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Step 1 Card: Select Passport */}
            <div className="rounded-[16px] bg-[#fcfcfc] border border-black/10 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#043f2e] text-white text-xs font-bold font-mono">
                  1
                </span>
                <h3 className="font-grenette text-lg font-normal text-[#043f2e]">
                  {t.step1Title}
                </h3>
              </div>
              <p className="text-xs text-[#242423]/70 font-graphik font-light">
                {t.step1Desc}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {samplePassports.map((p, index) => {
                  const isSelected = selectedSampleIndex === index;
                  return (
                    <button
                      key={index}
                      onClick={() => handleSelectSample(index)}
                      className={`cursor-pointer px-3 py-3 rounded-[4px] border transition-all text-left font-graphik flex flex-col justify-between h-20 ${
                        isSelected 
                          ? 'bg-[#eef2e3] border-black text-[#043f2e]' 
                          : 'bg-[#fcfcfc] border-black/10 text-[#242423] hover:border-black/30'
                      }`}
                    >
                      <span className="text-xs font-semibold block uppercase tracking-wider">
                        {p.imagePlaceholderUrl}
                      </span>
                      <span className="text-[11px] text-[#242423]/75 leading-tight truncate">
                        {p.name.split(' (')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2 Card: Scanning Screen */}
            <div className="rounded-[16px] bg-[#fcfcfc] border border-black/10 p-6 space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#043f2e] text-white text-xs font-bold font-mono">
                    2
                  </span>
                  <h3 className="font-grenette text-lg font-normal text-[#043f2e]">
                    {t.step2Title}
                  </h3>
                </div>
                {hasScanned && (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                    <Check className="h-3 w-3" /> {t.step2Ready}
                  </span>
                )}
              </div>

              {/* Sample data preview card */}
              <div className="rounded-[8px] bg-[#eef2e3]/45 border border-black/10 p-4 text-xs text-[#242423] space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-graphik text-[10px] font-bold uppercase tracking-wider text-[#043f2e]">
                    Sample passport fields
                  </p>
                  <span className="rounded-full bg-[#fcfcfc] border border-black/10 px-2 py-0.5 text-[10px] font-semibold text-[#043f2e]">
                    Demo dataset
                  </span>
                </div>

                {isScanning ? (
                  <div className="space-y-1">
                    <p className="font-semibold text-[#043f2e]">Preparing sample record...</p>
                    {t.scanLogs.slice(0, scanStep + 1).map((step, sIdx) => (
                      <p key={sIdx} className={sIdx === scanStep ? 'font-semibold text-[#043f2e]' : 'text-[#242423]/70'}>
                        {sIdx === scanStep ? '> ' : '- '} {step}
                      </p>
                    ))}
                  </div>
                ) : hasScanned ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-[#242423]/60">Passport</span>
                        <span className="font-mono font-semibold text-[#043f2e]">{scannedData.passportNumber}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-[#242423]/60">Nationality</span>
                        <span className="font-semibold text-[#043f2e]">{scannedData.countryCode}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-[#242423]/60">Given name</span>
                        <span className="font-semibold text-[#043f2e]">{scannedData.firstName}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-[#242423]/60">Surname</span>
                        <span className="font-semibold text-[#043f2e]">{scannedData.lastName}</span>
                      </div>
                    </div>
                    <div className="rounded-[4px] bg-[#fcfcfc] border border-black/10 p-3 font-mono text-[10px] text-[#242423]/65 space-y-1">
                      <p>MRZ line 1: {scannedData.mrzString1}</p>
                      <p>MRZ line 2: {scannedData.mrzString2}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center min-h-28 text-[#242423]/60">
                    <p>{t.awaitingFeed}</p>
                  </div>
                )}
              </div>

              {/* Scanned Fields Preview */}
              {hasScanned && !isScanning && (
                <div className="border border-black/5 rounded-[8px] bg-[#eef2e3]/40 p-4 space-y-2">
                  <p className="font-graphik text-[10px] font-bold uppercase tracking-wider text-[#242423]/60">
                    {t.extDataFields}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-graphik text-[#242423]">
                    <div>
                      <span className="text-[10px] text-[#242423]/60 block uppercase">{t.givenName}</span>
                      <span className="font-semibold text-[#043f2e]">{scannedData.firstName}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#242423]/60 block uppercase">{t.surname}</span>
                      <span className="font-semibold text-[#043f2e]">{scannedData.lastName}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#242423]/60 block uppercase">{t.passportNo}</span>
                      <span className="font-mono font-semibold text-[#043f2e]">{scannedData.passportNumber}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#242423]/60 block uppercase">{t.nationality}</span>
                      <span className="font-semibold text-[#043f2e]">{scannedData.nationality} ({scannedData.countryCode})</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#242423]/60 block uppercase">{t.dob}</span>
                      <span className="font-semibold text-[#043f2e]">{scannedData.dateOfBirth}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#242423]/60 block uppercase">{t.expiryDate}</span>
                      <span className="font-semibold text-[#043f2e]">{scannedData.expiryDate}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT: Visa workflow field preview (7 cols) */}
          <div className="lg:col-span-7 rounded-[16px] bg-[#fcfcfc] border border-black/10 p-6 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#043f2e] text-white text-xs font-bold font-mono">
                  3
                </span>
                <div>
                  <h3 className="font-grenette text-xl font-normal text-[#043f2e]">
                    {t.step3Title}
                  </h3>
                  <p className="text-xs text-[#242423]/60 font-graphik font-light">
                    {t.step3Desc}
                  </p>
                </div>
              </div>

              {/* Portal Selector Tabs */}
              <div className="flex flex-wrap gap-1 bg-[#eef2e3]/60 p-1 rounded-[6px]">
                {(['muqeem', 'sejel', 'bab-al-umrah'] as SaudiPortal[]).map((portal) => (
                  <button
                    key={portal}
                    onClick={() => setActivePortal(portal)}
                    className={`cursor-pointer px-2 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-[4px] transition-all ${
                      activePortal === portal 
                        ? 'bg-[#043f2e] text-white' 
                        : 'text-[#242423]/70 hover:text-black'
                    }`}
                  >
                    {portal.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Workflow preview container */}
            <div className="border border-black/15 rounded-[12px] overflow-hidden bg-[#eef2e3]/20">
              
              {/* Preview top bar */}
              <div className="bg-[#eef2e3] border-b border-black/15 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <div className="bg-white/80 border border-black/10 text-[9px] text-black/50 px-3 py-0.5 rounded-[4px] font-mono ml-4 truncate w-40 sm:w-64">
                    sample://{activePortal}/visa-workflow-preview
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-[#043f2e] bg-[#c8f169] px-2 py-0.5 rounded-[4px] border border-black/5">
                  <Chrome className="h-3.5 w-3.5" />
                  <span>{t.extensionActive}</span>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 space-y-4 bg-[#fcfcfc]">
                
                  {/* Preview header */}
                <div className="flex justify-between items-center border-b border-black/5 pb-3">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-[#043f2e] uppercase">
                      {t.ministryHeader}
                    </p>
                    <p className="font-grenette text-sm text-[#242423] capitalize">
                      {activePortal.replace('-', ' ')} {t.visaAppModule}
                    </p>
                  </div>
                  <span className="text-[9px] text-[#242423]/40 uppercase font-mono">{t.formIdLabel}</span>
                </div>

                {/* Form fields grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Passport field */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#242423]/70">
                      {t.passportNumLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        readOnly
                        placeholder="--"
                        value={portalFormData.passportNumber}
                        className={`w-full text-xs font-mono rounded-[4px] border p-2 bg-[#fcfcfc] transition-all duration-300 ${
                          autofilledFields.passportNumber 
                            ? 'border-[#2a6f2b] bg-[#c8f169]/5 text-black font-semibold ring-1 ring-[#2a6f2b]/20' 
                            : 'border-black/10 text-gray-400'
                        }`}
                      />
                      {autofilledFields.passportNumber && (
                        <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#c8f169]" />
                      )}
                    </div>
                  </div>

                  {/* Nationality */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#242423]/70">
                      {t.nationalityLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        readOnly
                        placeholder="--"
                        value={portalFormData.nationality}
                        className={`w-full text-xs rounded-[4px] border p-2 bg-[#fcfcfc] transition-all duration-300 ${
                          autofilledFields.nationality 
                            ? 'border-[#2a6f2b] bg-[#c8f169]/5 text-black font-semibold ring-1 ring-[#2a6f2b]/20' 
                            : 'border-black/10 text-gray-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* First Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#242423]/70">
                      {t.givenNameLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        readOnly
                        placeholder="--"
                        value={portalFormData.firstName}
                        className={`w-full text-xs rounded-[4px] border p-2 bg-[#fcfcfc] transition-all duration-300 ${
                          autofilledFields.firstName 
                            ? 'border-[#2a6f2b] bg-[#c8f169]/5 text-black font-semibold ring-1 ring-[#2a6f2b]/20' 
                            : 'border-black/10 text-gray-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#242423]/70">
                      {t.surnameLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        readOnly
                        placeholder="--"
                        value={portalFormData.lastName}
                        className={`w-full text-xs rounded-[4px] border p-2 bg-[#fcfcfc] transition-all duration-300 ${
                          autofilledFields.lastName 
                            ? 'border-[#2a6f2b] bg-[#c8f169]/5 text-black font-semibold ring-1 ring-[#2a6f2b]/20' 
                            : 'border-black/10 text-gray-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* DOB */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#242423]/70">
                      {t.dobLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        readOnly
                        placeholder="--"
                        value={portalFormData.dateOfBirth}
                        className={`w-full text-xs font-mono rounded-[4px] border p-2 bg-[#fcfcfc] transition-all duration-300 ${
                          autofilledFields.dateOfBirth 
                            ? 'border-[#2a6f2b] bg-[#c8f169]/5 text-black font-semibold ring-1 ring-[#2a6f2b]/20' 
                            : 'border-black/10 text-gray-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expiry */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#242423]/70">
                      {t.expiryLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        readOnly
                        placeholder="--"
                        value={portalFormData.expiryDate}
                        className={`w-full text-xs font-mono rounded-[4px] border p-2 bg-[#fcfcfc] transition-all duration-300 ${
                          autofilledFields.expiryDate 
                            ? 'border-[#2a6f2b] bg-[#c8f169]/5 text-black font-semibold ring-1 ring-[#2a6f2b]/20' 
                            : 'border-black/10 text-gray-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Gender */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#242423]/70">
                      {t.genderLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        readOnly
                        placeholder="--"
                        value={portalFormData.gender}
                        className={`w-full text-xs rounded-[4px] border p-2 bg-[#fcfcfc] transition-all duration-300 ${
                          autofilledFields.gender 
                            ? 'border-[#2a6f2b] bg-[#c8f169]/5 text-black font-semibold ring-1 ring-[#2a6f2b]/20' 
                            : 'border-black/10 text-gray-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Birth Place */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#242423]/70">
                      {t.birthPlaceLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        readOnly
                        placeholder="--"
                        value={portalFormData.birthPlace}
                        className={`w-full text-xs rounded-[4px] border p-2 bg-[#fcfcfc] transition-all duration-300 ${
                          autofilledFields.birthPlace 
                            ? 'border-[#2a6f2b] bg-[#c8f169]/5 text-black font-semibold ring-1 ring-[#2a6f2b]/20' 
                            : 'border-black/10 text-gray-400'
                        }`}
                      />
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Autofill Trigger Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-[12px] bg-[#eef2e3] border border-black/5">
              <div className="space-y-1">
                <p className="text-xs font-bold text-[#043f2e] uppercase tracking-wider">
                  {t.triggerQuestion}
                </p>
                <p className="text-xs text-[#242423]/80 leading-relaxed font-light">
                  {t.triggerDesc}
                </p>
              </div>

              <button
                onClick={handleAutofill}
                disabled={isAutofilling || !hasScanned || isScanning}
                className={`cursor-pointer w-full sm:w-auto px-5 py-3 rounded-[4px] text-xs font-semibold uppercase tracking-wider text-black flex items-center justify-center gap-2 transition-all ${
                  !hasScanned || isScanning
                    ? 'bg-black/10 text-black/40 cursor-not-allowed'
                    : 'bg-[#c8f169] hover:bg-[#2a6f2b] hover:text-white shadow-none border-0'
                }`}
              >
                {isAutofilling ? (
                  <>
                    <Cpu className="h-4 w-4 animate-spin" />
                    <span>{t.btnFilling}</span>
                  </>
                ) : (
                  <>
                    <Chrome className="h-4 w-4" />
                    <span>{t.btnAutofill}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

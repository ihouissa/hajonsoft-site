export interface Pilgrim {
  id: string;
  passportNumber: string;
  firstName: string;
  lastName: string;
  nationality: string;
  countryCode: string;
  dateOfBirth: string;
  gender: 'M' | 'F';
  expiryDate: string;
  birthPlace: string;
  mrzString1: string;
  mrzString2: string;
  visaStatus: 'Draft' | 'Processing' | 'Approved' | 'Rejected';
  visaNumber?: string;
  hotelMecca?: string;
  hotelMedina?: string;
  groupName: string;
}

export interface PilgrimGroup {
  id: string;
  name: string;
  createdDate: string;
  pilgrimsCount: number;
  status: 'Draft' | 'Uploading' | 'Completed';
  leaderName: string;
}

export type SaudiPortal = 'muqeem' | 'sejel' | 'bab-al-umrah' | 'way-to-umrah' | 'tawaf';

export interface PortalFieldConfig {
  label: string;
  xpath: string;
  valueKey: keyof Pilgrim;
}

export interface OCRScanSample {
  name: string;
  country: string;
  imagePlaceholderUrl: string;
  pilgrimData: Omit<Pilgrim, 'id' | 'visaStatus' | 'groupName'>;
}

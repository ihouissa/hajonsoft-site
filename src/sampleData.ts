import { Pilgrim, PilgrimGroup, OCRScanSample } from './types';

export const mockGroups: PilgrimGroup[] = [
  {
    id: 'grp-1',
    name: 'UK Elite Umrah July 2026',
    createdDate: '2026-06-15',
    pilgrimsCount: 4,
    status: 'Completed',
    leaderName: 'Ibrahim Al-Fayed'
  },
  {
    id: 'grp-2',
    name: 'Canada Family Group B',
    createdDate: '2026-07-01',
    pilgrimsCount: 2,
    status: 'Draft',
    leaderName: 'Amina Mansour'
  },
  {
    id: 'grp-3',
    name: 'Indonesia Haji Regular-4',
    createdDate: '2026-07-05',
    pilgrimsCount: 15,
    status: 'Uploading',
    leaderName: 'Siti Rahma'
  }
];

export const mockPilgrims: Pilgrim[] = [
  {
    id: 'plg-1',
    passportNumber: 'G54321098',
    firstName: 'IBRAHIM',
    lastName: 'AL-FAYED',
    nationality: 'United Kingdom',
    countryCode: 'GBR',
    dateOfBirth: '1984-01-01',
    gender: 'M',
    expiryDate: '2030-12-31',
    birthPlace: 'LONDON',
    mrzString1: 'P<GBRAL<FAYED<<IBRAHIM<<<<<<<<<<<<<<<<<<<<<<',
    mrzString2: 'G543210984GBR8401015M3012311<<<<<<<<<<<<<<02',
    visaStatus: 'Approved',
    visaNumber: 'UMRAH98721012',
    hotelMecca: 'Fairmont Makkah Clock Royal Tower',
    hotelMedina: 'The Oberoi Madina',
    groupName: 'UK Elite Umrah July 2026'
  },
  {
    id: 'plg-2',
    passportNumber: 'C11223344',
    firstName: 'AMINA',
    lastName: 'MANSOUR',
    nationality: 'Canada',
    countryCode: 'CAN',
    dateOfBirth: '1991-05-15',
    gender: 'F',
    expiryDate: '2029-08-20',
    birthPlace: 'TORONTO',
    mrzString1: 'P<CANMANSOUR<<AMINA<<<<<<<<<<<<<<<<<<<<<<<<<',
    mrzString2: 'C112233446CAN9105152F2908200<<<<<<<<<<<<<<04',
    visaStatus: 'Draft',
    hotelMecca: 'Pulman Zamzam Makkah',
    hotelMedina: 'Anwar Al Madinah Mövenpick',
    groupName: 'Canada Family Group B'
  },
  {
    id: 'plg-3',
    passportNumber: 'I99887766',
    firstName: 'SITI',
    lastName: 'RAHMA',
    nationality: 'Indonesia',
    countryCode: 'IDN',
    dateOfBirth: '1978-11-22',
    gender: 'F',
    expiryDate: '2028-04-10',
    birthPlace: 'JAKARTA',
    mrzString1: 'P<IDNRAHMA<<SITI<<<<<<<<<<<<<<<<<<<<<<<<<<<<',
    mrzString2: 'I998877665IDN7811228F2804107<<<<<<<<<<<<<<08',
    visaStatus: 'Processing',
    hotelMecca: 'Swissôtel Makkah',
    hotelMedina: 'Dar Al Taqwa Hotel',
    groupName: 'Indonesia Haji Regular-4'
  }
];

export const samplePassports: OCRScanSample[] = [
  {
    name: 'Ibrahim Al-Fayed (United Kingdom)',
    country: 'United Kingdom (GBR)',
    imagePlaceholderUrl: 'GBR',
    pilgrimData: {
      passportNumber: 'G54321098',
      firstName: 'IBRAHIM',
      lastName: 'AL-FAYED',
      nationality: 'United Kingdom',
      countryCode: 'GBR',
      dateOfBirth: '1984-01-01',
      gender: 'M',
      expiryDate: '2030-12-31',
      birthPlace: 'LONDON',
      mrzString1: 'P<GBRAL<FAYED<<IBRAHIM<<<<<<<<<<<<<<<<<<<<<<',
      mrzString2: 'G543210984GBR8401015M3012311<<<<<<<<<<<<<<02',
      hotelMecca: 'Fairmont Makkah Clock Royal Tower',
      hotelMedina: 'The Oberoi Madina'
    }
  },
  {
    name: 'Amina Mansour (Canada)',
    country: 'Canada (CAN)',
    imagePlaceholderUrl: 'CAN',
    pilgrimData: {
      passportNumber: 'C11223344',
      firstName: 'AMINA',
      lastName: 'MANSOUR',
      nationality: 'Canada',
      countryCode: 'CAN',
      dateOfBirth: '1991-05-15',
      gender: 'F',
      expiryDate: '2029-08-20',
      birthPlace: 'TORONTO',
      mrzString1: 'P<CANMANSOUR<<AMINA<<<<<<<<<<<<<<<<<<<<<<<<<',
      mrzString2: 'C112233446CAN9105152F2908200<<<<<<<<<<<<<<04',
      hotelMecca: 'Pulman Zamzam Makkah',
      hotelMedina: 'Anwar Al Madinah Mövenpick'
    }
  },
  {
    name: 'Siti Rahma (Indonesia)',
    country: 'Indonesia (IDN)',
    imagePlaceholderUrl: 'IDN',
    pilgrimData: {
      passportNumber: 'I99887766',
      firstName: 'SITI',
      lastName: 'RAHMA',
      nationality: 'Indonesia',
      countryCode: 'IDN',
      dateOfBirth: '1978-11-22',
      gender: 'F',
      expiryDate: '2028-04-10',
      birthPlace: 'JAKARTA',
      mrzString1: 'P<IDNRAHMA<<SITI<<<<<<<<<<<<<<<<<<<<<<<<<<<<',
      mrzString2: 'I998877665IDN7811228F2804107<<<<<<<<<<<<<<08',
      hotelMecca: 'Swissôtel Makkah',
      hotelMedina: 'Dar Al Taqwa Hotel'
    }
  },
  {
    name: 'Zayd Al-Hassan (Germany)',
    country: 'Germany (DEU)',
    imagePlaceholderUrl: 'DEU',
    pilgrimData: {
      passportNumber: 'D90807060',
      firstName: 'ZAYD',
      lastName: 'AL-HASSAN',
      nationality: 'Germany',
      countryCode: 'DEU',
      dateOfBirth: '1995-09-09',
      gender: 'M',
      expiryDate: '2035-09-08',
      birthPlace: 'BERLIN',
      mrzString1: 'P<DEUAL<HASSAN<<ZAYD<<<<<<<<<<<<<<<<<<<<<<<<',
      mrzString2: 'D908070602DEU9509095M3509088<<<<<<<<<<<<<<03',
      hotelMecca: 'Makkah Hotel',
      hotelMedina: 'Pullman Zamzam Madina'
    }
  }
];

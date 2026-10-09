import type { CompanyConfig } from '../types/company';

export const companyConfig: CompanyConfig = {
  legalName: 'Elastómeros La Roca S.A.S.',
  displayName: 'Elastómeros La Roca',
  description:
    'Diseño y fabricación de productos en poliuretano y caucho para aplicaciones industriales.',
  contact: {
    email: 'Elastomeroslaroca@gmail.com',
    phone: '321 373 9285 | 322 601 1559',
    whatsapp: '573213739285',
    address: 'Atendemos clientes en todo el país.',
    city: 'Bogotá',
    country: 'Colombia',
    businessHours: '[horario pendiente de confirmar]',
    locationUrl: 'https://maps.app.goo.gl/2GqdW2ECs4P7FBGn7',
    mapEmbedUrl: 'https://www.google.com/maps?q=4.6126765,-74.1351685&z=15&output=embed',
  },
  socialLinks: [],
  quoteRequestPath: '/contacto',
  isDemo: false,
};

export const whatsappContacts = [
  { label: '321 373 9285', number: '573213739285' },
  { label: '322 601 1559', number: '573226011559' },
];

export const whatsappUrl = `https://wa.me/${companyConfig.contact.whatsapp}`;

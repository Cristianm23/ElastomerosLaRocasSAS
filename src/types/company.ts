export interface CompanyContact {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  country: string;
  businessHours: string;
  locationUrl: string;
  mapEmbedUrl: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface CompanyConfig {
  legalName: string;
  displayName: string;
  description: string;
  contact: CompanyContact;
  socialLinks: SocialLink[];
  quoteRequestPath: string;
  isDemo: boolean;
}

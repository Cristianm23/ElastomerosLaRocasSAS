export type FormKind = 'contact' | 'quote';

export interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  interest: string;
  quantity: string;
  message: string;
  website: string;
}

export type FormErrors = Partial<Record<keyof FormValues | 'attachment', string>>;

export type FormSubmissionState = 'idle' | 'submitting' | 'success' | 'unavailable' | 'error';

import type { FormKind } from '../types/forms';

export interface FormServiceConfig {
  endpoint: string;
  providerName: string;
  maxAttachmentBytes: number;
  acceptedAttachmentTypes: string[];
}

export const formServiceConfig: FormServiceConfig = {
  // Set VITE_FORM_ENDPOINT only after configuring and securing a form provider.
  endpoint: import.meta.env.VITE_FORM_ENDPOINT ?? '',
  providerName: '[proveedor pendiente de configurar]',
  maxAttachmentBytes: 5 * 1024 * 1024,
  acceptedAttachmentTypes: ['application/pdf', 'image/jpeg', 'image/png'],
};

export const formLabels: Record<FormKind, { title: string; intro: string }> = {
  contact: {
    title: 'Hablemos de tu necesidad',
    intro: 'Completa el formulario y te contactaremos cuando los canales de recepción estén configurados.',
  },
  quote: {
    title: 'Solicita información o cotización',
    intro: 'Comparte los datos de tu requerimiento. Los campos y la recepción final serán validados por el proveedor configurado.',
  },
};

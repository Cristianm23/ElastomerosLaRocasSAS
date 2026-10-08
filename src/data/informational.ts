export interface InformationalSection {
  title: string;
  paragraphs: string[];
}

export const aboutContent: InformationalSection[] = [
  {
    title: 'Sobre la empresa',
    paragraphs: [
      '[Contenido provisional] La descripción de Elastómeros La Roca S.A.S. será incorporada después de su validación por la empresa.',
      '[Contenido provisional] La historia, propósito, capacidades y sectores atendidos requieren información oficial.',
    ],
  },
];

export const privacyContent: InformationalSection[] = [
  {
    title: 'Aviso de revisión legal',
    paragraphs: [
      '[Texto provisional] Esta política de privacidad debe ser revisada y aprobada antes de publicar el sitio.',
      '[Pendiente de confirmar] Responsable del tratamiento, finalidades, derechos de los titulares, canales de atención y demás información exigida por la normativa aplicable.',
    ],
  },
];

export const termsContent: InformationalSection[] = [
  {
    title: 'Aviso de revisión legal',
    paragraphs: [
      '[Texto provisional] Estos términos y condiciones son un marcador de contenido y no constituyen una versión legal definitiva.',
      '[Pendiente de confirmar] Condiciones de uso, propiedad intelectual, limitaciones de responsabilidad, jurisdicción y canales oficiales.',
    ],
  },
];

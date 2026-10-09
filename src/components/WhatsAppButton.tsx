import { MessageCircle } from 'lucide-react';
import { whatsappContacts } from '../data/company';

export function WhatsAppButton() {
  return (
    <div className="whatsapp-float" aria-label="Contactar por WhatsApp">
      {whatsappContacts.map((contact) => (
        <a
          className="whatsapp-button"
          href={`https://wa.me/${contact.number}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`Contactar por WhatsApp al ${contact.label}`}
          key={contact.number}
        >
          <MessageCircle aria-hidden="true" size={22} />
          <span>{contact.label}</span>
        </a>
      ))}
    </div>
  );
}

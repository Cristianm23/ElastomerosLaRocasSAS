import { AlertCircle, CheckCircle2, LoaderCircle, Paperclip, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { formLabels, formServiceConfig } from '../data/forms';
import type { FormErrors, FormKind, FormSubmissionState, FormValues } from '../types/forms';

const emptyValues: FormValues = {
  name: '', company: '', email: '', phone: '', subject: '', interest: '', quantity: '', message: '', website: '',
};

export function ContactForm({ kind }: { kind: FormKind }) {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [attachment, setAttachment] = useState<File | undefined>();
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<FormSubmissionState>('idle');
  const labels = formLabels[kind];

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (state !== 'idle') setState('idle');
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, kind, attachment);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setState('idle');
      return;
    }
    if (values.website) return;
    if (!formServiceConfig.endpoint) {
      setState('unavailable');
      return;
    }

    setState('submitting');
    try {
      const payload = new FormData();
      payload.append('formType', kind);
      Object.entries(values).forEach(([key, value]) => payload.append(key, value));
      if (attachment) payload.append('attachment', attachment);
      const response = await fetch(formServiceConfig.endpoint, { method: 'POST', body: payload });
      if (!response.ok) throw new Error(`Form provider responded with ${response.status}.`);
      setValues(emptyValues);
      setAttachment(undefined);
      setState('success');
    } catch (error) {
      console.error('No fue posible enviar el formulario.', error);
      setState('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__intro">
        <h2>{labels.title}</h2>
        <p>{labels.intro}</p>
      </div>
      <div className="form-grid">
        <Field kind={kind} label="Nombre" name="name" value={values.name} error={errors.name} required onChange={(value) => update('name', value)} />
        <Field kind={kind} label="Empresa" name="company" value={values.company} error={errors.company} required={kind === 'quote'} onChange={(value) => update('company', value)} />
        <Field kind={kind} label="Correo electrónico" name="email" type="email" value={values.email} error={errors.email} required onChange={(value) => update('email', value)} />
        <Field kind={kind} label="Teléfono" name="phone" value={values.phone} error={errors.phone} onChange={(value) => update('phone', value)} />
        {kind === 'contact' ? (
          <Field kind={kind} label="Asunto" name="subject" value={values.subject} error={errors.subject} required onChange={(value) => update('subject', value)} />
        ) : (
          <>
            <Field kind={kind} label="Producto o categoría de interés" name="interest" value={values.interest} error={errors.interest} required onChange={(value) => update('interest', value)} />
            <Field kind={kind} label="Cantidad (opcional)" name="quantity" value={values.quantity} error={errors.quantity} onChange={(value) => update('quantity', value)} />
          </>
        )}
        <div className="form-field form-field--wide">
          <label className="form-field__label" htmlFor={`${kind}-message`}> {kind === 'quote' ? 'Descripción de la necesidad' : 'Mensaje'} </label>
          <textarea id={`${kind}-message`} name="message" rows={6} value={values.message} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${kind}-message-error` : undefined} onChange={(event) => update('message', event.target.value)} />
          {errors.message && <span className="form-field__message form-field__message--error" id={`${kind}-message-error`}>{errors.message}</span>}
        </div>
        {kind === 'quote' && <div className="form-field form-field--wide">
          <label className="form-field__label" htmlFor="quote-attachment">Archivo adjunto (opcional)</label>
          <input id="quote-attachment" name="attachment" type="file" accept={formServiceConfig.acceptedAttachmentTypes.join(',')} onChange={(event) => { setAttachment(event.target.files?.[0]); setErrors((current) => ({ ...current, attachment: undefined })); }} />
          <span className="form-field__message"><Paperclip size={14} /> PDF, JPG o PNG hasta 5 MB.</span>
          {errors.attachment && <span className="form-field__message form-field__message--error">{errors.attachment}</span>}
        </div>}
        <div className="honeypot" aria-hidden="true">
          <label htmlFor={`${kind}-website`}>Website</label>
          <input id={`${kind}-website`} tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update('website', event.target.value)} />
        </div>
      </div>
      {Object.keys(errors).length > 0 && <p className="form-alert form-alert--error" role="alert"><AlertCircle size={18} /> Revisa los campos indicados antes de continuar.</p>}
      {state === 'unavailable' && <p className="form-alert" role="status">El envío real está pendiente: no hay un proveedor externo configurado. No se envió ningún mensaje.</p>}
      {state === 'success' && <p className="form-alert form-alert--success" role="status"><CheckCircle2 size={18} /> El proveedor confirmó la recepción de tu solicitud.</p>}
      {state === 'error' && <p className="form-alert form-alert--error" role="alert">No fue posible enviar la solicitud. Revisa la configuración o inténtalo nuevamente.</p>}
      <button className="button button--primary" type="submit" disabled={state === 'submitting'} aria-busy={state === 'submitting'}>
        {state === 'submitting' ? <><LoaderCircle className="spin" size={18} /> Enviando...</> : <><Send size={18} /> Enviar solicitud</>}
      </button>
    </form>
  );
}

function Field({ kind, label, name, type = 'text', value, error, required = false, onChange }: { kind: FormKind; label: string; name: keyof FormValues; type?: string; value: string; error?: string; required?: boolean; onChange: (value: string) => void }) {
  const id = `${kind}-${name}`;
  return <div className={`form-field${error ? ' form-field--error' : ''}`}>
    <label className="form-field__label" htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
    <input id={id} name={name} type={type} value={value} required={required} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} onChange={(event) => onChange(event.target.value)} />
    {error && <span className="form-field__message form-field__message--error" id={`${id}-error`}>{error}</span>}
  </div>;
}

function validate(values: FormValues, kind: FormKind, attachment?: File): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Indica tu nombre.';
  if (kind === 'quote' && !values.company.trim()) errors.company = 'Indica tu empresa.';
  if (!values.email.trim()) errors.email = 'Indica tu correo electrónico.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Escribe un correo electrónico válido.';
  if (kind === 'contact' && !values.subject.trim()) errors.subject = 'Indica el asunto.';
  if (kind === 'quote' && !values.interest.trim()) errors.interest = 'Indica el producto o categoría de interés.';
  if (!values.message.trim()) errors.message = 'Describe tu solicitud.';
  if (attachment && (!formServiceConfig.acceptedAttachmentTypes.includes(attachment.type) || attachment.size > formServiceConfig.maxAttachmentBytes)) errors.attachment = 'El archivo debe ser PDF, JPG o PNG y no superar 5 MB.';
  return errors;
}

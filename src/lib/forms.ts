import { site } from '../data/site';

/** Where forms post: Formspree if configured, otherwise FormSubmit → site.email. */
export const formAction = site.formEndpoint || `https://formsubmit.co/${site.email}`;
export const usesFormSubmit = !site.formEndpoint;

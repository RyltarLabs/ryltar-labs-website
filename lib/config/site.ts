export const SITE_CONFIG = {
  whatsapp: {
    number: "5571982360426",
    defaultMessage: "Olá, vim pelo site da RyltarLabs e gostaria de conversar sobre um projeto.",
  },
  email: "contato@ryltarlabs.com.br",
  location: "Salvador, Bahia · Brasil",
  name: "Ryltar Labs",
} as const;

export function getWhatsAppUrl(message: string = SITE_CONFIG.whatsapp.defaultMessage) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
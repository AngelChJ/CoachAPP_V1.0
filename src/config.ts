// Configuración central del proyecto
// ⚠️ Reemplaza el número con el WhatsApp real del Coach Charly
export const COACH_WHATSAPP = '521XXXXXXXXXX'; // código de país + número, sin + ni espacios

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${COACH_WHATSAPP}`,
  instagram: 'https://instagram.com/charlycoach', // Reemplazar con el real
} as const;

export const getWhatsAppLink = (message: string) =>
  `https://wa.me/${COACH_WHATSAPP}?text=${encodeURIComponent(message)}`;

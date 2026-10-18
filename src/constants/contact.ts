export const WHATSAPP_NUMBER = "34611432419";
export const WHATSAPP_FORMATTED = "+34 611 43 24 19";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// Mensajes prellenados por punto de contacto, para saber de dónde viene cada consulta.
const waWithText = (text: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

export const WHATSAPP_URL_HERO = waWithText(
  "Hola Dino, quiero pedir presupuesto para un proyecto en madera."
);
export const WHATSAPP_URL_CONTACT = waWithText(
  "Hola Dino, quiero contarte mi proyecto y pedirte presupuesto."
);
export const WHATSAPP_URL_FAB = waWithText(
  "Hola Dino, me gustaría pedir información."
);

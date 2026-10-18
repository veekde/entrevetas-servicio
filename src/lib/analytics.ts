// Envío de eventos a Google Analytics 4 (gtag.js).
// El script de gtag se carga desde index.html con el Measurement ID de GA4.
// Mientras no se configure un ID real, window.gtag no existe y estas funciones
// no hacen nada (no rompen la web).

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (eventName: string, params?: Record<string, string>) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

// source identifica desde qué botón/sección se originó el clic,
// para saber qué parte de la web genera más contactos reales.
export const trackWhatsAppClick = (source: "hero" | "contact" | "fab") =>
  trackEvent("whatsapp_click", { source });

export const trackEmailClick = () => trackEvent("email_click");

export const trackInstagramClick = () => trackEvent("instagram_click");

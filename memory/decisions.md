# Decisions Log

## [2026-07-29] Centralizar constante del número de WhatsApp

- **Contexto:** Se solicitó actualizar el número de contacto de WhatsApp al número `+34 611 43 24 19`.
- **Decisión:** Se creó el archivo `src/constants/contact.ts` exportando `WHATSAPP_NUMBER`, `WHATSAPP_FORMATTED` y `WHATSAPP_URL`. Todos los componentes que generan enlaces directos a WhatsApp (`Hero.tsx`, `Contact.tsx`, `WhatsAppFAB.tsx`) ahora consumen esta constante central.

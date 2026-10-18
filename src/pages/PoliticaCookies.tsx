import LegalLayout from "@/components/LegalLayout";

const PoliticaCookies = () => {
  return (
    <LegalLayout title="Política de Cookies" updated="18 de octubre de 2026">
      <p>
        Una cookie es un pequeño archivo que se almacena en tu navegador cuando visitás un sitio web. Esta página
        explica qué cookies usa este sitio y para qué.
      </p>

      <h2>1. Cookies que usamos</h2>
      <p>Actualmente este sitio utiliza únicamente cookies de análisis:</p>
      <ul>
        <li>
          <strong>Google Analytics (_ga, _ga_*):</strong> nos permite entender, de forma agregada y anónima, cuántas
          personas visitan el sitio, desde qué dispositivos y qué páginas recorren. No identifican a una persona en
          particular. Proveedor: Google. Más información en la{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            política de privacidad de Google
          </a>
          .
        </li>
      </ul>
      <p>Este sitio no utiliza cookies de publicidad ni de seguimiento de terceros con fines comerciales.</p>

      <h2>2. Cómo gestionar las cookies</h2>
      <p>
        Podés permitir, bloquear o eliminar las cookies instaladas en tu navegador en cualquier momento desde la
        configuración del propio navegador:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a>
        </li>
        <li>
          <a href="https://support.mozilla.org/es/kb/habilita-y-deshabilita-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
        </li>
        <li>
          <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a>
        </li>
      </ul>
      <p>Tené en cuenta que bloquear ciertas cookies puede afectar algunas funcionalidades del sitio.</p>

      <h2>3. Cambios en esta política</h2>
      <p>
        Si en el futuro incorporamos nuevas cookies o herramientas, actualizaremos esta página y, cuando corresponda,
        el mecanismo de consentimiento del sitio.
      </p>

      <p className="text-sm text-muted-foreground mt-10">
        Este texto es un modelo orientativo y no sustituye el asesoramiento de un profesional. Se recomienda su
        revisión por un gestor o asesor legal antes de su publicación definitiva.
      </p>
    </LegalLayout>
  );
};

export default PoliticaCookies;

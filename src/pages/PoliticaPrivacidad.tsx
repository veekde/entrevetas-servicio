import LegalLayout from "@/components/LegalLayout";

const PoliticaPrivacidad = () => {
  return (
    <LegalLayout title="Política de Privacidad" updated="18 de octubre de 2026">
      <p>
        En Entre Vetas respetamos tu privacidad y nos comprometemos a proteger los datos personales que nos
        proporciones. Esta política explica qué información recogemos, cómo la usamos y qué derechos tenés al
        respecto, en cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de
        Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Titular:</strong> Dino Monteleone [PENDIENTE: nombre completo / razón social]</li>
        <li><strong>NIF/CIF:</strong> [PENDIENTE]</li>
        <li><strong>Contacto:</strong> <a href="mailto:monteleonegabrieldino@gmail.com">monteleonegabrieldino@gmail.com</a></li>
      </ul>

      <h2>2. Qué datos recogemos</h2>
      <p>Recogemos datos personales cuando nos contactás, a través de:</p>
      <ul>
        <li><strong>Formulario de contacto del sitio:</strong> nombre, apellido, email o teléfono, y el contenido de tu consulta.</li>
        <li><strong>WhatsApp:</strong> tu nombre (tal como figura en tu perfil), número de teléfono y el contenido de la conversación.</li>
        <li><strong>Navegación en el sitio:</strong> de forma automática, mediante Google Analytics, recogemos datos de uso (páginas visitadas, dispositivo, ubicación aproximada) — ver la <a href="/politica-de-cookies">Política de Cookies</a> para más detalle.</li>
      </ul>

      <h2>3. Para qué usamos tus datos</h2>
      <ul>
        <li>Responder a tu consulta y elaborar presupuestos</li>
        <li>Coordinar visitas y la ejecución de proyectos que nos encargues</li>
        <li>Entender cómo se usa el sitio, para mejorarlo (de forma agregada y anónima a través de Google Analytics)</li>
      </ul>

      <h2>4. Base legal</h2>
      <p>
        Tratamos tus datos en base al <strong>consentimiento</strong> que das al enviarnos voluntariamente tu
        información a través del formulario o WhatsApp, y en base al <strong>interés legítimo</strong> de responder
        a tu consulta y mejorar el sitio.
      </p>

      <h2>5. Con quién compartimos tus datos</h2>
      <p>No vendemos tus datos a terceros. Usamos los siguientes servicios, que pueden procesar parte de tu información:</p>
      <ul>
        <li><strong>WhatsApp (Meta):</strong> para las conversaciones iniciadas desde el sitio. Se aplica la <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">política de privacidad de WhatsApp</a>.</li>
        <li><strong>Google Analytics:</strong> para estadísticas de visitas. Se aplica la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">política de privacidad de Google</a>.</li>
        <li><strong>Formspree:</strong> para procesar los envíos del formulario de contacto y hacerlos llegar por email.</li>
      </ul>

      <h2>6. Cuánto tiempo conservamos tus datos</h2>
      <p>
        Conservamos los datos de consultas durante el tiempo necesario para responderte y, si corresponde, mientras
        dure la relación comercial y los plazos legales de conservación de documentación fiscal/contractual
        posteriores a la finalización del proyecto.
      </p>

      <h2>7. Tus derechos</h2>
      <p>Tenés derecho a:</p>
      <ul>
        <li><strong>Acceder</strong> a los datos que tenemos sobre vos</li>
        <li><strong>Rectificar</strong> datos inexactos</li>
        <li><strong>Suprimir</strong> tus datos ("derecho al olvido")</li>
        <li><strong>Limitar</strong> u <strong>oponerte</strong> al tratamiento</li>
        <li><strong>Portabilidad</strong> de tus datos</li>
        <li><strong>Retirar tu consentimiento</strong> en cualquier momento</li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, escribinos a{" "}
        <a href="mailto:monteleonegabrieldino@gmail.com">monteleonegabrieldino@gmail.com</a>. Si considerás que no
        hemos atendido tu solicitud correctamente, podés presentar una reclamación ante la{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos (AEPD)</a>.
      </p>

      <h2>8. Menores de edad</h2>
      <p>
        Este sitio no está dirigido a menores de edad. No recogemos de forma consciente datos de menores de 18 años.
      </p>

      <h2>9. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política en el futuro. Cualquier cambio relevante se reflejará en la fecha de
        "última actualización" al inicio de esta página.
      </p>

      <p className="text-sm text-muted-foreground mt-10">
        Este texto es un modelo orientativo y no sustituye el asesoramiento de un profesional. Se recomienda su
        revisión por un gestor o asesor legal antes de su publicación definitiva.
      </p>
    </LegalLayout>
  );
};

export default PoliticaPrivacidad;

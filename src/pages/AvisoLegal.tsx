import LegalLayout from "@/components/LegalLayout";

const AvisoLegal = () => {
  return (
    <LegalLayout title="Aviso Legal" updated="18 de octubre de 2026">
      <p>
        En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de
        Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan a continuación
        los siguientes datos:
      </p>

      <h2>1. Datos identificativos</h2>
      <ul>
        <li><strong>Titular:</strong> Dino Monteleone [PENDIENTE: confirmar nombre completo o razón social si corresponde]</li>
        <li><strong>NIF/CIF:</strong> [PENDIENTE]</li>
        <li><strong>Domicilio:</strong> [PENDIENTE — ver nota sobre dirección de contacto más abajo]</li>
        <li><strong>Correo electrónico de contacto:</strong> <a href="mailto:monteleonegabrieldino@gmail.com">monteleonegabrieldino@gmail.com</a></li>
        <li><strong>Teléfono:</strong> +34 611 43 24 19</li>
        <li><strong>Actividad:</strong> Carpintería y fabricación de elementos de madera a medida (pérgolas, tarimas, revestimientos exteriores)</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente sitio web (en adelante, "el sitio") tiene como finalidad informar sobre los servicios de
        carpintería ofrecidos por Entre Vetas y facilitar el contacto con clientes potenciales para la solicitud de
        presupuestos.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio atribuye la condición de usuario e implica la aceptación de las condiciones
        aquí recogidas. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos, y a
        no emplearlos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Los textos, imágenes, fotografías y demás contenidos de este sitio son propiedad de Entre Vetas o se
        utilizan con la autorización correspondiente, y están protegidos por la normativa de propiedad intelectual e
        industrial. Queda prohibida su reproducción total o parcial sin autorización expresa del titular.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        El titular no se hace responsable de los daños y perjuicios que pudieran derivarse de interferencias,
        interrupciones, virus informáticos o averías que puedan ser causados por causas ajenas a su control,
        incluyendo caídas de servicio o indisponibilidad temporal del sitio.
      </p>

      <h2>6. Enlaces a terceros</h2>
      <p>
        Este sitio puede contener enlaces a servicios de terceros (como WhatsApp, Instagram o Google Maps). El
        titular no se hace responsable del contenido ni de las políticas de privacidad de dichos sitios.
      </p>

      <h2>7. Legislación aplicable</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada del uso
        de este sitio, las partes se someten a los juzgados y tribunales que correspondan conforme a derecho.
      </p>

      <p className="text-sm text-muted-foreground mt-10">
        Este texto es un modelo orientativo y no sustituye el asesoramiento de un profesional. Se recomienda su
        revisión por un gestor o asesor legal antes de su publicación definitiva, en especial respecto a los datos
        identificativos y la dirección de contacto a publicar.
      </p>
    </LegalLayout>
  );
};

export default AvisoLegal;

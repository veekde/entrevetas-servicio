import { useLanguage } from "@/i18n/LanguageContext";
import fullLogo from "@/assets/ev-logo-dark.png";
import { WHATSAPP_FORMATTED } from "@/constants/contact";
import { trackEmailClick, trackInstagramClick, trackEvent } from "@/lib/analytics";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 md:px-10 border-t border-border">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={fullLogo} alt="Entre Vetas - Carpintería a medida en Altea" className="h-[36px] w-auto" />
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-2 md:gap-8 text-sm text-muted-foreground text-center">
          <span className="inline-flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
              <path d="M12 21s-7-5.686-7-11a7 7 0 1 1 14 0c0 5.314-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Altea, Alicante
          </span>
          <span className="hidden md:inline text-border">·</span>
          <a
            href="tel:+34611432419"
            onClick={() => trackEvent("phone_click")}
            className="hover:text-foreground transition-colors duration-300"
          >
            {WHATSAPP_FORMATTED}
          </a>
          <span className="hidden md:inline text-border">·</span>
          <span>{t("footer.zone")}</span>
          <span className="hidden md:inline text-border">·</span>
          <a
            href="mailto:monteleonegabrieldino@gmail.com"
            onClick={trackEmailClick}
            className="hover:text-foreground transition-colors duration-300"
          >
            monteleonegabrieldino@gmail.com
          </a>
          <span className="hidden md:inline text-border">·</span>
          <a
            href="https://www.instagram.com/entrevetas.servicios/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInstagramClick}
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
        </div>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Entre Vetas
        </p>
      </div>
    </footer>
  );
};

export default Footer;

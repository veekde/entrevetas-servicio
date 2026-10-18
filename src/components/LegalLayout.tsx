import { ReactNode } from "react";
import fullLogo from "@/assets/ev-logo-dark.png";

const LegalLayout = ({ title, updated, children }: { title: string; updated: string; children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="px-6 md:px-10 py-6 border-b border-border">
        <div className="max-w-[800px] mx-auto flex items-center justify-between">
          <a href="/">
            <img src={fullLogo} alt="Entre Vetas" className="h-[32px] w-auto" />
          </a>
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            ← Volver al sitio
          </a>
        </div>
      </header>

      <main className="px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[28px] md:text-[36px] tracking-tight mb-2">{title}</h1>
          <p className="text-sm text-muted-foreground mb-10">Última actualización: {updated}</p>

          <div className="prose prose-sm md:prose-base max-w-none text-foreground/90 leading-relaxed [&_h2]:text-[20px] [&_h2]:md:text-[22px] [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-normal [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:mb-1.5 [&_a]:text-accent [&_a]:underline [&_strong]:font-medium">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalLayout;

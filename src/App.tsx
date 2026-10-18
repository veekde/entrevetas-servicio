import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Index from "./pages/Index";
import BrandGuide from "./pages/BrandGuide";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/brand" element={<BrandGuide />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

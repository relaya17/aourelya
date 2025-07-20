
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./i18n/i18n";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Booking from "./pages/Booking";
import MovingQuoteDetails from "./pages/MovingQuoteDetails";

const queryClient = new QueryClient();

const App = () => {
  const { i18n } = useTranslation();
  const direction = i18n.language === 'he' ? 'rtl' : 'ltr';

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div dir={direction} className="min-h-screen bg-background">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/project/moving-quote" element={<MovingQuoteDetails />} />
                <Route path="/about" element={<Home />} />
                <Route path="/services" element={<Home />} />
                <Route path="/contact" element={<Home />} />
                <Route path="/blog" element={<Home />} />
                
                <Route path="*" element={<NotFound />} />

              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

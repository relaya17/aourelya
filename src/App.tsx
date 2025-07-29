
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Suspense, lazy } from 'react';
import "./i18n/i18n";

import Layout from "./components/Layout";
import AccessibilityButton from "./components/AccessibilityButton";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Booking = lazy(() => import("./pages/Booking"));
const MovingQuoteDetails = lazy(() => import("./pages/MovingQuoteDetails"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (replaces cacheTime)
    },
  },
});

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

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
            <Suspense fallback={<LoadingSpinner />}>
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
            </Suspense>
          </BrowserRouter>
          <AccessibilityButton />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

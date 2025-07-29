
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Suspense, lazy } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
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

  // Create Material UI theme
  const theme = createTheme({
    direction: direction,
    palette: {
      primary: {
        main: '#6366f1', // Indigo color
        light: '#818cf8',
        dark: '#4f46e5',
      },
      secondary: {
        main: '#f59e0b', // Amber color
        light: '#fbbf24',
        dark: '#d97706',
      },
      background: {
        default: '#ffffff',
        paper: '#ffffff',
      },
      text: {
        primary: '#1f2937',
        secondary: '#6b7280',
      },
    },
    typography: {
      fontFamily: direction === 'rtl' ? 'Rubik, Arial, sans-serif' : 'Inter, Arial, sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

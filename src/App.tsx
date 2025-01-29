import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Contact } from "./components/Contact";
import Index from "./pages/Index";
import ChatbotService from "./pages/ChatbotService";
import BookingService from "./pages/BookingService";
import MarketingService from "./pages/MarketingService";
import BlogService from "./pages/BlogService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/chatbot" element={<ChatbotService />} />
              <Route path="/booking" element={<BookingService />} />
              <Route path="/marketing" element={<MarketingService />} />
              <Route path="/blog" element={<BlogService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Contact />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Contact } from "./components/Contact";
import { ChatbotWidget } from "./components/ChatbotWidget";
import Index from "./pages/Index";
import ChatbotService from "./pages/ChatbotService";
import BookingService from "./pages/BookingService";
import MarketingService from "./pages/MarketingService";
import BlogService from "./pages/BlogService";
import SeoOptimization from "./pages/SeoOptimization";
import EmailCampaign from "./pages/EmailCampaign";
import LeadGeneration from "./pages/LeadGeneration";
import ContentGeneration from "./pages/ContentGeneration";
import AutomationReminder from "./pages/AutomationReminder";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50/30 to-blue-50/30">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col relative">
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/chatbot" element={<ChatbotService />} />
                <Route path="/booking" element={<BookingService />} />
                <Route path="/marketing" element={<MarketingService />} />
                <Route path="/blog" element={<BlogService />} />
                <Route path="/seo" element={<SeoOptimization />} />
                <Route path="/email" element={<EmailCampaign />} />
                <Route path="/leads" element={<LeadGeneration />} />
                <Route path="/content" element={<ContentGeneration />} />
                <Route path="/reminders" element={<AutomationReminder />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Contact />
            <ChatbotWidget />
          </div>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
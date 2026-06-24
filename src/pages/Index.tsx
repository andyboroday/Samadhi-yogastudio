import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ClassesSection from '@/components/sections/ClassesSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import InstructorsSection from '@/components/sections/InstructorsSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactsSection from '@/components/sections/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#f5f1eb]">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ClassesSection />
          <ScheduleSection />
          <InstructorsSection />
          <PricingSection />
          <FAQSection />
          <ContactsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;


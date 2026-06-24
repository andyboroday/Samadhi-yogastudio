import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionBackground from '@/components/SectionBackground';
import bg from '@/assets/backgrounds/faq.jpg';

const FAQSection = () => {
  const { t } = useLanguage();
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <section id="faq" className="faq-section relative overflow-hidden py-20">
      <SectionBackground image={bg} overlayClassName="bg-[#ff2800]/10" />

      <div className="container relative z-10 mx-auto px-6">
        <h2 className="typo-section-title text-center mb-12">
          {t('faq.title')}
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {items.map((i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="faq-item border-[#d8d2c8]"
              >
                <AccordionTrigger className="faq-question text-left hover:no-underline">
                  {t(`faq.q${i}`)}
                </AccordionTrigger>

                <AccordionContent className="faq-answer">
                  {t(`faq.a${i}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
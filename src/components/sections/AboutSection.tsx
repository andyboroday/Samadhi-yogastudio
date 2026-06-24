import { useLanguage } from '@/contexts/LanguageContext';
import SectionBackground from '@/components/SectionBackground';
import bg from '@/assets/backgrounds/about.jpg';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden min-h-[110vh] py-40">
      <SectionBackground image={bg} overlayClassName="bg-black/20" />
           
      <div className="container relative z-10 mx-auto px-6">
        <h2 className="typo-section-title text-center mb-12">
          {t('about.title')}
        </h2>
        <div className="max-w-5xl mx-auto space-y-6 typo-body text-panel text-panel--light">
          <p className="typo-body">{t('about.p1')}</p>
          <p className="typo-body">{t('about.p2')}</p>
          <p className="typo-lead text-center pt-4">
            {t('about.p3')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

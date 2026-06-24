import { useLanguage } from '@/contexts/LanguageContext';
import SectionBackground from '@/components/SectionBackground';
import bg from '@/assets/backgrounds/Hero.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
  id="hero"
  className="relative overflow-hidden min-h-[110vh]"
>
  <SectionBackground
    image={bg}
    overlayClassName="bg-black/20"
  />

  <div className="container relative z-10 mx-auto px-6 text-center min-h-[110vh] flex flex-col justify-between py-32">

    <div>
      <h1 className="typo-hero-title mb-2">
        Samadhi
      </h1>

      <p className="typo-hero-subtitle max-w-2xl mx-auto">
        Yoga Studio
      </p>
    </div>

    <a href="#contacts" className="cta-btn cta-btn-light w-fit mx-auto mt-0 mb-10">
      {t('hero.cta')}
    </a>

  </div>
</section>
  );
};

export default HeroSection;

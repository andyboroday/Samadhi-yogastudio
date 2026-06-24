import { useLanguage } from '@/contexts/LanguageContext';
import SectionBackground from '@/components/SectionBackground';
import bg from '@/assets/backgrounds/pricing.jpg';

const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      key: 'weekly',
      features: ['pricing.weekly.f1', 'pricing.weekly.f2', 'pricing.weekly.f3'],
    },
    {
      key: 'monthly',
      features: ['pricing.monthly.f1', 'pricing.monthly.f2', 'pricing.monthly.f3'],
    },
    {
      key: 'yearly',
      features: ['pricing.yearly.f1', 'pricing.yearly.f2', 'pricing.yearly.f3'],
    },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden py-32">
      <SectionBackground image={bg} overlayClassName="bg-[#f5f1eb]/10" />

      <div className="container relative z-10 mx-auto px-6">
        <h2 className="typo-section-title text-center mb-4">
          {t('pricing.title')}
        </h2>

        <p className="typo-body text-center max-w-xl mx-auto mb-12 text-white">
          {t('pricing.subtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.key} className="pricing-card">
              
              <div className="pricing-card-header">
                <div className="pricing-card-title">
                  {t(`pricing.${plan.key}.name`)}
                </div>

                <div className="pricing-card-price">
                  <span className="pricing-card-price-value">
                    {t(`pricing.${plan.key}.price`)}
                  </span>
                  <span className="pricing-card-price-period">
                    / {t(`pricing.${plan.key}.period`)}
                  </span>
                </div>
              </div>

              <div className="pricing-card-body">
                <p className="pricing-card-description">
                  {t(`pricing.${plan.key}.desc`)}
                </p>

                <ul className="pricing-card-features">
                  {plan.features.map((f) => (
                    <li key={f} className="pricing-card-feature">
                      <span className="typo-body text-[#657b78]">•</span>
                      <span className="typo-body">{t(f)}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacts"
                  className="cta-btn cta-btn-compact cta-btn-dark cta-btn-block"
                >
                  {t('pricing.cta')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
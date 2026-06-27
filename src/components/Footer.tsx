import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative z-20 -mt-40 pb-8">
      <div className="bg-[#f5f1eb] border-t border-[#d8d2c8] py-6">
        <div className="container mx-auto px-6 flex flex-col items-center gap-4">
          <p className="typo-caption">
            {t('footer.copyright')}
          </p>

          <a href="https://andresensonador.com/" className="cta-btn cta-btn-footer cta-btn-footer-color" target="_blank" rel="noopener noreferrer">
            Designed by Andres Ensonador
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

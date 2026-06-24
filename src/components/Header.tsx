import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { key: 'nav.about', id: 'about' },
    { key: 'nav.classes', id: 'classes' },
    { key: 'nav.schedule', id: 'schedule' },
    { key: 'nav.instructors', id: 'instructors' },
    { key: 'nav.pricing', id: 'pricing' },
    { key: 'nav.faq', id: 'faq' },
    { key: 'nav.contacts', id: 'contacts' },
  ];

  return (
    <header className={`site-header fixed top-0 left-0 right-0 z-50 ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <a href="#hero" className="flex items-center">
            <img
              src={scrolled ? '/logo-darkfin.svg' : '/logo-lightfin.svg'}
              alt="Samadhi"
              className="h-[30px] w-auto"
            />
          </a>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="typo-ui site-header-text transition-colors nav-link"
              >
                <span className="nav-text">
                  {t(item.key)}
                </span>
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center">

  {/* LANGUAGE SWITCH */}
  <div className="mr-6 flex-shrink-0">
    <div className="lang-switch">
      {(['en', 'es', 'ru'] as const).map((lng) => (
        <button
          key={lng}
          onClick={() => setLanguage(lng)}
          className={`lang-item ${language === lng ? 'is-active' : ''}`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  </div>

  {/* CTA */}
  <div className="flex-shrink-0">
    <a href="#contacts" className="cta-btn cta-btn-compact cta-btn-light cta-btn-header">
      {t('nav.book')}
    </a>
  </div>

</div>

        </div>
      </div>
    </header>
  );
};

export default Header;

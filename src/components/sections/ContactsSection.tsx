import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone } from 'lucide-react';
import bg from '@/assets/backgrounds/contacts.jpg';
import SectionBackground from '@/components/SectionBackground';

const ContactsSection = () => {
  const { t } = useLanguage();

  return (
        <section id="contacts" className="relative overflow-hidden pt-20 pb-60">
      <div className="absolute inset-0 bg-black" />
      <div className="container relative z-10 mx-auto px-6">
        <h2 className="typo-section-title text-center mb-12">
          {t('contacts.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-white">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/70 mt-0.5" />
                <span className="typo-body">{t('contacts.address')}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white/70 mt-0.5" />
                <span className="typo-body">{t('contacts.phone')}</span>
              </div>
            </div>
            
 <div className="bg-[#f5f1eb] border border-[#d8d2c8] rounded-2xl h-64 overflow-hidden">
  <iframe
    src="https://www.google.com/maps?q=48.877950,38.105800&z=16&output=embed"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  />
</div>
          </div>

          <div className="bg-[#f5f1eb] border border-[#d8d2c8] rounded-2xl p-6">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input
                  placeholder={t('contacts.form.name')}
                  className="bg-[#f5f1eb] border-[#d8d2c8]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('contacts.form.email')}
                  className="bg-[#f5f1eb] border-[#d8d2c8]"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('contacts.form.message')}
                  className="bg-[#f5f1eb] border-[#d8d2c8] min-h-32 resize-none"
                />
              </div>
              <button type="submit" className="cta-btn cta-btn-compact cta-btn-dark cta-btn-block">
                {t('contacts.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;

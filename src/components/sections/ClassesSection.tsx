import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionBackground from '@/components/SectionBackground';
import bg from '@/assets/backgrounds/classes.jpg';
import hathaImg from '@/assets/classes/hatha.jpg';
import vinyasaImg from '@/assets/classes/vinyasa.jpg';
import yinImg from '@/assets/classes/yin.jpg';
import morningImg from '@/assets/classes/morning.jpg';
import meditationImg from '@/assets/classes/meditation.jpg';
import soundHealingImg from '@/assets/classes/sound-healing.jpg';

const ClassesSection = () => {
  const { t } = useLanguage();

  const classes = [
    { name: 'classes.hatha.name', desc: 'classes.hatha.desc', level: 'classes.hatha.level', image: hathaImg },
    { name: 'classes.vinyasa.name', desc: 'classes.vinyasa.desc', level: 'classes.vinyasa.level', image: vinyasaImg },
    { name: 'classes.yin.name', desc: 'classes.yin.desc', level: 'classes.yin.level', image: yinImg },
    { name: 'classes.morning.name', desc: 'classes.morning.desc', level: 'classes.morning.level', image: morningImg },
    { name: 'classes.meditation.name', desc: 'classes.meditation.desc', level: 'classes.meditation.level', image: meditationImg },
    { name: 'classes.soundHealing.name', desc: 'classes.soundHealing.desc', level: 'classes.soundHealing.level', image: soundHealingImg },
  ];

  return (
    <section id="classes" className="relative overflow-hidden py-32">
      <SectionBackground image={bg} overlayClassName="bg-[#f5f1eb]/10"/>

      <div className="container relative z-10 mx-auto px-6">
        <h2 className="typo-section-title text-center mb-12">
          {t('classes.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {classes.map((item, index) => (
            <Card key={index} className="classes-card">

  <div className="classes-card-image">
    <img src={item.image} alt={t(item.name)} />

    <div className="classes-card-title-overlay">
      {t(item.name)}
    </div>
  </div>

  <CardContent className="classes-card-body">
    <p className="classes-card-description">
      {t(item.desc)}
    </p>
  </CardContent>

</Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;

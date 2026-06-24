import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import SectionBackground from '@/components/SectionBackground';
import bg from '@/assets/backgrounds/instructors.jpg';

/* TODO: добавь реальные изображения */
import instructor1Img from '@/assets/instructors/instructor-1.jpg';
import instructor2Img from '@/assets/instructors/instructor-2.jpg';
import instructor3Img from '@/assets/instructors/instructor-3.jpg';

const InstructorsSection = () => {
  const { t } = useLanguage();

  const instructors = [
    {
      name: 'instructor1.name',
      spec: 'instructor1.spec',
      desc: 'instructor1.desc',
          image: instructor1Img,
    },
    {
      name: 'instructor2.name',
      spec: 'instructor2.spec',
      desc: 'instructor2.desc',
      image: instructor2Img,
    },
    {
      name: 'instructor3.name',
      spec: 'instructor3.spec',
      desc: 'instructor3.desc',
      image: instructor3Img,
    },
  ];

  return (
    <section id="instructors" className="relative overflow-hidden py-32">
      <SectionBackground image={bg} overlayClassName="bg-[#f5f1eb]/20" />

      <div className="container relative z-10 mx-auto px-6">
        <h2 className="typo-section-title text-center mb-12">
          {t('instructors.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card key={index} className="instructors-card">

              <div className="instructors-card-image">
                <img src={instructor.image} alt={t(instructor.name)} />

                <div className="instructors-card-title-overlay">
                  {t(instructor.name)}
                </div>
              </div>

              <CardContent className="instructors-card-body">
                
                <p className="instructors-card-spec">
                  {t(instructor.spec)}
                </p>

                <p className="instructors-card-description">
                  {t(instructor.desc)}
                </p>

              </CardContent>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
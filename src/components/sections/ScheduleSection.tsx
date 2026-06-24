import { useLanguage } from '@/contexts/LanguageContext';
import SectionBackground from '@/components/SectionBackground';
import bg from '@/assets/backgrounds/schedule.jpg';


export default function ScheduleSectionPreview() {
  const { t } = useLanguage();

  const schedule = [
    {
      day: 'schedule.monday',
      items: [
        { time: '07:00', name: 'classes.morning.name' },
        { time: '18:30', name: 'classes.hatha.name' },
      ],
    },
    {
      day: 'schedule.tuesday',
      items: [
        { time: '10:00', name: 'classes.soundHealing.name' },
        { time: '19:00', name: 'classes.vinyasa.name' },
      ],
    },
    {
      day: 'schedule.wednesday',
      items: [
        { time: '07:00', name: 'classes.morning.name' },
        { time: '18:30', name: 'classes.yin.name' },
        { time: '20:00', name: 'classes.meditation.name' },
      ],
    },
    {
      day: 'schedule.thursday',
      items: [
        { time: '18:30', name: 'classes.hatha.name' },
        { time: '20:00', name: 'classes.vinyasa.name' },
      ],
    },
    {
      day: 'schedule.friday',
      items: [
        { time: '07:00', name: 'classes.morning.name' },
        { time: '18:30', name: 'classes.yin.name' },
      ],
    },
    {
      day: 'schedule.saturday',
      items: [
        { time: '10:00', name: 'classes.hatha.name' },
        { time: '12:00', name: 'classes.meditation.name' },
      ],
    },
    {
      day: 'schedule.sunday',
      items: [
        { time: '11:00', name: 'classes.vinyasa.name' },
      ],
    },
  ];

  return (
    <section id="schedule" className="relative min-h-screen overflow-hidden py-32 px-6 flex justify-center">
      <SectionBackground image={bg} overlayClassName="bg-black/20" />

      <div className="relative z-10 max-w-5xl w-full">

        <h2 className="typo-section-title text-center mb-10">
          {t('schedule.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {schedule.map((day, i) => (
            <div
              key={i}
              className="border border-black/10 rounded-lg p-4 bg-white/35 backdrop-blur-sm schedule-card"
            >

              <div className="mb-3">
                <div className="text-xs uppercase tracking-[0.2em] text-black/60">
                  {t(day.day)}
                </div>
                <div className="w-8 h-px bg-black/20 mt-1" />
              </div>

              <div className="flex flex-col gap-2">
                {day.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-center">

                    <div className="text-black/60 text-xs w-14">
                      {item.time}
                    </div>

                    <div className="text-black text-xs tracking-wide">
                      {t(item.name)}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

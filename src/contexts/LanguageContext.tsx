import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Header
  'nav.about': { ru: 'О нас', en: 'About', es: 'Sobre' },
  'nav.classes': { ru: 'Занятия', en: 'Classes', es: 'Clases' },
  'nav.schedule': { ru: 'Расписание', en: 'Schedule', es: 'Horario' },
  'nav.instructors': { ru: 'Преподаватели', en: 'Instructors', es: 'Profesores' },
  'nav.pricing': { ru: 'Цена', en: 'Pricing', es: 'Precios' },
  'nav.faq': { ru: 'FAQ', en: 'FAQ', es: 'FAQ' },
  'nav.contacts': { ru: 'Контакты', en: 'Contacts', es: 'Contacto' },
  'nav.book': { ru: 'Записаться', en: 'Book a class', es: 'Reservar' },

  // Hero
  'hero.studio': { ru: 'Samadhi', en: 'Samadhi', es: 'Samadhi' },
  'hero.subtitle': {
    ru: 'Студия йоги',
    en: 'Yoga Studio',
    es: 'Estudio de Yoga',
  },
  'hero.cta': { ru: 'Начать практику', en: 'Begin your practice', es: 'Comenzar la práctica' },

  // About
  'about.title': { ru: 'О студии', en: 'About the Studio', es: 'Sobre el estudio' },
  'about.p1': {
    ru: 'Студия Самадхи — это место, где практика йоги становится путешествием к себе. Мы создали пространство, наполненное теплом и спокойствием, где каждый может найти свой ритм и глубину практики.',
    en: 'Samadhi Studio is a place where yoga practice becomes a journey to yourself. We have created a space filled with warmth and tranquility, where everyone can find their own rhythm and depth of practice.',
    es: 'El estudio Samadhi es un lugar donde la práctica del yoga se convierte en un viaje hacia uno mismo. Hemos creado un espacio lleno de calidez y tranquilidad, donde cada persona puede encontrar su propio ritmo y profundidad.',
  },
  'about.p2': {
    ru: 'Наш подход основан на уважении к традициям и внимании к каждому практикующему. Здесь нет соревнований — есть только ваш путь, ваше дыхание и ваше тело.',
    en: 'Our approach is based on respect for traditions and attention to each practitioner. There is no competition here — only your path, your breath, and your body.',
    es: 'Nuestro enfoque se basa en el respeto a las tradiciones y la atención a cada practicante. Aquí no hay competición, solo tu camino, tu respiración y tu cuerpo.',
  },
  'about.p3': {
    ru: 'Приходите такими, какие вы есть. Уходите с ощущением внутренней тишины.',
    en: 'Come as you are. Leave with a sense of inner silence.',
    es: 'Ven tal como eres. Vete con una sensación de silencio interior.',
  },

  // Classes
  'classes.title': { ru: 'Занятия', en: 'Classes', es: 'Clases' },
  'classes.hatha.name': { ru: 'Хатха-йога', en: 'Hatha Yoga', es: 'Hatha Yoga' },
  'classes.hatha.desc': {
    ru: 'Классическая практика, объединяющая асаны, дыхательные техники и расслабление. Подходит для формирования базы и укрепления тела.',
    en: 'A classical practice combining asanas, breathing techniques, and relaxation. Suitable for building a foundation and strengthening the body.',
    es: 'Una práctica clásica que combina asanas, técnicas de respiración y relajación. Ideal para construir una base y fortalecer el cuerpo.',
  },
  'classes.hatha.level': { ru: 'Все уровни', en: 'All levels', es: 'Todos los niveles' },

  'classes.vinyasa.name': { ru: 'Виньяса-флоу', en: 'Vinyasa Flow', es: 'Vinyasa Flow' },
  'classes.vinyasa.desc': {
    ru: 'Динамичная практика, где движение следует за дыханием. Развивает силу, гибкость и концентрацию.',
    en: 'A dynamic practice where movement follows breath. Develops strength, flexibility, and concentration.',
    es: 'Una práctica dinámica donde el movimiento sigue a la respiración. Desarrolla fuerza, flexibilidad y concentración.',
  },
  'classes.vinyasa.level': { ru: 'Средний уровень', en: 'Intermediate', es: 'Nivel intermedio' },

  'classes.yin.name': { ru: 'Инь-йога', en: 'Yin Yoga', es: 'Yin Yoga' },
  'classes.yin.desc': {
    ru: 'Медленная практика с длительным удержанием поз. Работа с глубокими тканями тела и состоянием покоя.',
    en: 'A slow practice with long-held poses. Working with deep body tissues and a state of rest.',
    es: 'Una práctica lenta con posturas mantenidas durante largo tiempo. Trabajo con los tejidos profundos del cuerpo y un estado de calma.',
  },
  'classes.yin.level': { ru: 'Все уровни', en: 'All levels', es: 'Todos los niveles' },

  'classes.morning.name': { ru: 'Утренняя практика', en: 'Morning Practice', es: 'Práctica matutina' },
  'classes.morning.desc': {
    ru: 'Мягкое пробуждение тела и ума. Идеальное начало дня для тех, кто хочет зарядиться энергией.',
    en: 'Gentle awakening of body and mind. The perfect start to the day for those who want to energize.',
    es: 'Un despertar suave del cuerpo y la mente. El comienzo perfecto del día para quienes desean llenarse de energía.',
  },
  'classes.morning.level': { ru: 'Начинающие', en: 'Beginners', es: 'Principiantes' },

  'classes.meditation.name': { ru: 'Медитация', en: 'Meditation', es: 'Meditación' },
  'classes.meditation.desc': {
    ru: 'Практика осознанности и внутренней тишины. Различные техники для успокоения ума.',
    en: 'Practice of mindfulness and inner silence. Various techniques for calming the mind.',
    es: 'Práctica de atención plena y silencio interior. Diversas técnicas para calmar la mente.',
  },
  'classes.meditation.level': { ru: 'Все уровни', en: 'All levels', es: 'Todos los niveles' },

  'classes.soundHealing.name': {
    ru: 'Саунд-хилинг',
    en: 'Sound Healing',
    es: 'Sanación con sonido',
  },
  'classes.soundHealing.desc': {
    ru: 'Глубокая практика звуковых вибраций и медитации. Помогает расслабить тело, снизить стресс и восстановить внутренний баланс.',
    en: 'A deep practice of sound vibrations and meditation. Helps relax the body, reduce stress, and restore inner balance.',
    es: 'Una práctica profunda de vibraciones sonoras y meditación. Ayuda a relajar el cuerpo, reducir el estrés y restaurar el equilibrio interno.',
  },
  'classes.soundHealing.level': {
    ru: 'Все уровни',
    en: 'All levels',
    es: 'Todos los niveles',
  },

  // Schedule
  'schedule.title': { ru: 'Расписание', en: 'Schedule', es: 'Horario' },
  'schedule.monday': { ru: 'Понедельник', en: 'Monday', es: 'Lunes' },
  'schedule.tuesday': { ru: 'Вторник', en: 'Tuesday', es: 'Martes' },
  'schedule.wednesday': { ru: 'Среда', en: 'Wednesday', es: 'Miércoles' },
  'schedule.thursday': { ru: 'Четверг', en: 'Thursday', es: 'Jueves' },
  'schedule.friday': { ru: 'Пятница', en: 'Friday', es: 'Viernes' },
  'schedule.saturday': { ru: 'Суббота', en: 'Saturday', es: 'Sábado' },
  'schedule.sunday': { ru: 'Воскресенье', en: 'Sunday', es: 'Domingo' },

  // Instructors
  'instructors.title': { ru: 'Преподаватели', en: 'Instructors', es: 'Profesores' },
  'instructor1.name': { ru: 'Алия Блум', en: 'Aliya Bloom', es: 'Aliya Bloom' },
  'instructor1.spec': { ru: 'Хатха-йога, Медитация', en: 'Hatha Yoga, Meditation', es: 'Hatha Yoga, Meditación' },
  'instructor1.desc': {
    ru: 'Практикует йогу более 15 лет. Сочетает традиционные техники и современный подход. Ведёт занятия с вниманием к каждому ученику.',

en: 'Has been practicing yoga for over 15 years. Combines traditional techniques with a modern approach. Teaches with attention to each student.',

es: 'Practica yoga desde hace más de 15 años. Combina técnicas tradicionales con un enfoque moderno. Enseña con atención a cada alumno.',
  },
  'instructor2.name': { ru: 'Диего Кортес', en: 'Diego Cortes', es: 'Diego Cortes' },
  'instructor2.spec': { ru: 'Виньяса-флоу, Хатха-йога', en: 'Vinyasa Flow, Hatha Yoga', es: 'Vinyasa Flow, Hatha Yoga' },
  'instructor2.desc': {
    ru: 'Сертифицированный преподаватель с международным опытом. Помогает найти баланс силы и гибкости.',
    en: 'A certified instructor with international experience. Helps find a balance of strength and flexibility.',
    es: 'Profesor certificado con experiencia internacional. Ayuda a encontrar el equilibrio entre fuerza y flexibilidad.',
  },
  'instructor3.name': { ru: 'Мэйлин Тао', en: 'Meiling Tao', es: 'Meiling Tao' },
  'instructor3.spec': { ru: 'Инь-йога, Саунд-хилинг', en: 'Yin Yoga, Sound Healing', es: 'Yin Yoga, Sanación con sonido' },
  'instructor3.desc': {
    ru: 'Специализируется на мягких практиках. Создаёт атмосферу принятия и заботы на каждом занятии.',
    en: 'Specializes in gentle practices. Creates an atmosphere of acceptance and care in every class.',
    es: 'Se especializa en prácticas suaves. Crea una atmósfera de aceptación y cuidado en cada clase.',
  },

  // Pricing
  'pricing.title': { ru: 'Абонементы', en: 'Memberships', es: 'Abonos' },
  'pricing.subtitle': {
    ru: 'Выберите ритм, который подходит вашей практике.',
    en: 'Choose the rhythm that fits your practice.',
    es: 'Elige el ritmo que mejor se adapte a tu práctica.',
  },
  'pricing.cta': { ru: 'Записаться', en: 'Book', es: 'Reservar' },
  'pricing.weekly.name': { ru: 'Недельный абонемент', en: 'Weekly Membership', es: 'Abono semanal' },
  'pricing.weekly.price': { ru: '$30', en: '$30', es: '$30' },
  'pricing.weekly.period': { ru: '7 дней', en: '7 days', es: '7 días' },
  'pricing.weekly.desc': {
    ru: 'Для знакомства со студией и регулярной практики на короткий период.',
    en: 'For getting to know the studio and a short period of regular practice.',
    es: 'Para conocer el estudio y una práctica regular durante un periodo corto.',
  },
  'pricing.weekly.f1': { ru: 'Безлимитное посещение в течение 7 дней', en: 'Unlimited classes for 7 days', es: 'Clases ilimitadas durante 7 días' },
  'pricing.weekly.f2': { ru: 'Все направления в расписании', en: 'All scheduled classes', es: 'Todas las clases del horario' },
  'pricing.weekly.f3': { ru: 'Коврики и реквизит включены', en: 'Mats and props included', es: 'Esterillas y material incluidos' },

  'pricing.monthly.name': { ru: 'Месячный абонемент', en: 'Monthly Membership', es: 'Abono mensual' },
  'pricing.monthly.price': { ru: '$95', en: '$95', es: '$95' },
  'pricing.monthly.period': { ru: '30 дней', en: '30 days', es: '30 días' },
  'pricing.monthly.desc': {
    ru: 'Оптимальный выбор для устойчивой ежедневной практики.',
    en: 'The balanced choice for a steady daily practice.',
    es: 'La elección equilibrada para una práctica diaria constante.',
  },
  'pricing.monthly.f1': { ru: 'Безлимитное посещение в течение месяца', en: 'Unlimited classes for one month', es: 'Clases ilimitadas durante un mes' },
  'pricing.monthly.f2': { ru: 'Приоритетная запись на занятия', en: 'Priority class booking', es: 'Reserva prioritaria de clases' },
  'pricing.monthly.f3': { ru: 'Одна гостевая встреча в месяц', en: 'One guest visit per month', es: 'Una invitación de invitado al mes' },

  'pricing.yearly.name': { ru: 'Годовой абонемент', en: 'Yearly Membership', es: 'Abono anual' },
  'pricing.yearly.price': { ru: '$950', en: '$950', es: '$950' },
  'pricing.yearly.period': { ru: '12 месяцев', en: '12 months', es: '12 meses' },
  'pricing.yearly.desc': {
    ru: 'Для глубокого пути и долгой, осознанной практики.',
    en: 'For a deeper path and a long, mindful practice.',
    es: 'Para un camino profundo y una práctica larga y consciente.',
  },
  'pricing.yearly.f1': { ru: 'Безлимитное посещение в течение года', en: 'Unlimited classes for one year', es: 'Clases ilimitadas durante un año' },
  'pricing.yearly.f2': { ru: 'Доступ к закрытым ретритам', en: 'Access to closed retreats', es: 'Acceso a retiros cerrados' },
  'pricing.yearly.f3': { ru: 'Заморозка до 30 дней', en: 'Freeze up to 30 days', es: 'Suspensión de hasta 30 días' },

  // FAQ
  'faq.title': { ru: 'Частые вопросы', en: 'Frequently Asked Questions', es: 'Preguntas frecuentes' },
  'faq.q1': { ru: 'Подходит ли студия для начинающих?', en: 'Is the studio suitable for beginners?', es: '¿El estudio es adecuado para principiantes?' },
  'faq.a1': {
    ru: 'Да. У нас есть отдельные занятия для начинающих, а на классах смешанного уровня преподаватели предлагают варианты для разной подготовки.',
    en: 'Yes. We have dedicated beginner classes, and in mixed-level classes teachers offer variations for different levels of experience.',
    es: 'Sí. Tenemos clases específicas para principiantes y, en las clases de nivel mixto, los profesores ofrecen variaciones para distintos niveles.',
  },
  'faq.q2': { ru: 'Что взять с собой на занятие?', en: 'What should I bring to a class?', es: '¿Qué debo traer a la clase?' },
  'faq.a2': {
    ru: 'Удобную одежду и воду. Коврики, пледы и весь необходимый реквизит мы предоставляем в студии.',
    en: 'Comfortable clothes and water. We provide mats, blankets, and all the props you need at the studio.',
    es: 'Ropa cómoda y agua. Las esterillas, mantas y todo el material necesario los proporcionamos en el estudio.',
  },
  'faq.q3': { ru: 'Нужно ли записываться заранее?', en: 'Do I need to book in advance?', es: '¿Es necesario reservar con antelación?' },
  'faq.a3': {
    ru: 'Да, мы рекомендуем записываться заранее: количество мест в зале ограничено, чтобы сохранить камерную атмосферу.',
    en: 'Yes, we recommend booking in advance: spaces are limited to preserve the studio’s intimate atmosphere.',
    es: 'Sí, recomendamos reservar con antelación: las plazas son limitadas para mantener la atmósfera íntima del estudio.',
  },
  'faq.q4': { ru: 'Что делать, если у меня есть ограничения по здоровью?', en: 'What if I have health limitations?', es: '¿Qué ocurre si tengo alguna limitación de salud?' },
  'faq.a4': {
    ru: 'Сообщите преподавателю о любых особенностях или ограничениях перед занятием, чтобы он мог предложить подходящие варианты практики.',
    en: 'Please inform your instructor about any conditions or limitations before class so they can offer suitable modifications.',
    es: 'Informa al instructor sobre cualquier condición o limitación antes de la clase para que pueda ofrecerte adaptaciones adecuadas.',
  },
  'faq.q5': { ru: 'Что делать, если я опаздываю?', en: 'What if I arrive late?', es: '¿Qué hago si llego tarde?' },
  'faq.a5': {
    ru: 'Постарайтесь приходить за 5–10 минут до начала. Если опаздываете больше чем на 10 минут, вход на занятие может быть закрыт, чтобы не нарушать практику группы.',
    en: 'Please arrive 5–10 minutes before class. If you are more than 10 minutes late, entry may be closed so the group’s practice is not disturbed.',
    es: 'Procura llegar 5–10 minutos antes. Si llegas con más de 10 minutos de retraso, es posible que no se permita la entrada para no interrumpir la práctica del grupo.',
  },
  'faq.q6': { ru: 'Можно ли заморозить абонемент?', en: 'Can I pause my membership?', es: '¿Puedo congelar mi abono?' },
  'faq.a6': {
    ru: 'Месячный и годовой абонементы можно заморозить на срок до 30 дней — напишите нам, и мы поможем оформить паузу.',
    en: 'Monthly and yearly memberships can be paused for up to 30 days — just write to us and we will arrange the freeze.',
    es: 'Los abonos mensual y anual pueden suspenderse hasta 30 días: escríbenos y gestionaremos la pausa.',
  },

  // Contacts
  'contacts.title': { ru: 'Контакты', en: 'Contacts', es: 'Contacto' },
  'contacts.address': { ru: 'Северск, ул. Северная, 1', en: 'Seversk, Severnaya St., 1', es: 'Seversk, calle Severnaya, 1' },
  'contacts.phone': { ru: '+38 (066) 123-45-67', en: '+38 (066) 123-45-67', es: '+38 (066) 123-45-67' },
  'contacts.form.name': { ru: 'Ваше имя', en: 'Your name', es: 'Tu nombre' },
  'contacts.form.email': { ru: 'Email', en: 'Email', es: 'Correo electrónico' },
  'contacts.form.message': { ru: 'Сообщение', en: 'Message', es: 'Mensaje' },
  'contacts.form.submit': { ru: 'Отправить', en: 'Send', es: 'Enviar' },
  'contacts.map': { ru: 'Карта', en: 'Map', es: 'Mapa' },

  // Footer
  'footer.copyright': {
    ru: '© 2026 Студия йоги Самадхи. Все права защищены.',
    en: '© 2026 Samadhi Yoga Studio. All rights reserved.',
    es: '© 2026 Estudio de Yoga Samadhi. Todos los derechos reservados.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

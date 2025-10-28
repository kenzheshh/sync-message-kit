import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.login': 'Login',
    'nav.signup': 'Sign up',
    
    // Hero Section
    'hero.title': 'Re-engage customers automatically – no manual work',
    'hero.subtitle': 'Connect your WhatsApp, segment contacts, and send personalized messages in seconds',
    'hero.cta': 'Start Free',
    
    // Problem Section
    'problem.title': 'Stop losing customers to forgotten follow-ups',
    'problem.subtitle': 'Every day, potential sales slip away because manual outreach is impossible to scale. Your best customers deserve better than being forgotten in a crowded chat list.',
    'problem.point1': 'Manual messaging takes 3+ hours daily',
    'problem.point2': 'Past customers drift away silently',
    'problem.point3': 'Revenue opportunities constantly missed',
    'problem.mockup': 'Unread messages pile up...',
    'problem.time1': '14 days ago',
    'problem.time2': '20 days ago',
    'problem.time3': '30+ days ago',
    
    // Solution Section
    'solution.title': 'SalemBot handles it automatically',
    'solution.subtitle': 'Connect once. Let automation handle the rest. Your customers get timely, personalized messages without you lifting a finger.',
    'solution.point1': 'Auto-segment by activity & recency',
    'solution.point2': 'Send personalized campaigns in bulk',
    'solution.point3': 'Track replies & optimize performance',
    'solution.cta': 'Get Started Free',
    
    // How It Works
    'howitworks.title': 'How it works',
    'howitworks.subtitle': 'Four simple steps to re-engage your customers',
    'howitworks.step1.title': 'Connect WhatsApp',
    'howitworks.step1.desc': 'Link your business number; messages sync instantly.',
    'howitworks.step2.title': 'Auto-segment contacts',
    'howitworks.step2.desc': 'SalemBot groups your customers by recency, activity, or tags.',
    'howitworks.step3.title': 'Send personalized campaigns',
    'howitworks.step3.desc': 'Pick or create templates, target segments, and launch.',
    'howitworks.step4.title': 'Track & optimize',
    'howitworks.step4.desc': 'View replies, click rates, and performance — then iterate.',
    
    // Benefits
    'benefits.title': 'Why customers love SalemBot',
    'benefits.benefit1.title': 'Save hours weekly',
    'benefits.benefit1.desc': 'No manual messaging. Set it up once, let automation handle follow-ups.',
    'benefits.benefit2.title': 'More replies & conversions',
    'benefits.benefit2.desc': 'Messages feel personal. Customers respond because you reached out at the right time.',
    'benefits.benefit3.title': 'Quick setup',
    'benefits.benefit3.desc': 'Go live in under 2 minutes. No complex integration or technical skills needed.',
    'benefits.benefit4.title': 'Built-in analytics',
    'benefits.benefit4.desc': 'See what works, double down on winning campaigns, and optimize over time.',
    
    // Social Proof
    'social.title': 'Trusted by businesses like yours',
    'social.testimonial.quote': 'We went from spending 4 hours a day on follow-ups to zero. SalemBot brought back 30% of our dormant customers in the first month.',
    'social.testimonial.author': 'Aisha K.',
    'social.testimonial.role': 'E-commerce Owner',
    'social.metric1.value': '10K+',
    'social.metric1.label': 'Contacts reached daily',
    'social.metric2.value': '23%',
    'social.metric2.label': 'Average conversion rate',
    'social.metric3.value': '2 min',
    'social.metric3.label': 'Setup time',
    
    // Pricing
    'pricing.title': 'Simple, transparent pricing',
    'pricing.permonth': 'per month',
    'pricing.feature.unlimited': 'Unlimited contacts',
    'pricing.feature.templates': 'Templates',
    'pricing.feature.analytics': 'Analytics',
    'pricing.feature.support': 'Priority support',
    'pricing.starter.name': 'Starter',
    'pricing.starter.price': '$29',
    'pricing.starter.period': '/month',
    'pricing.starter.desc': 'Perfect for small businesses starting to automate',
    'pricing.starter.feature1': 'Up to 500 contacts',
    'pricing.starter.feature2': '2 campaigns per month',
    'pricing.starter.feature3': 'Basic analytics',
    'pricing.starter.feature4': 'Email support',
    'pricing.starter.cta': 'Get Started',
    'pricing.pro.name': 'Pro',
    'pricing.pro.price': '$79',
    'pricing.pro.period': '/month',
    'pricing.pro.desc': 'For growing businesses that need more power',
    'pricing.pro.feature1': 'Up to 5,000 contacts',
    'pricing.pro.feature2': 'Unlimited campaigns',
    'pricing.pro.feature3': 'Advanced analytics & A/B testing',
    'pricing.pro.feature4': 'Priority support',
    'pricing.pro.cta': 'Get Started',
    'pricing.enterprise.name': 'Enterprise',
    'pricing.enterprise.price': 'Custom',
    'pricing.enterprise.desc': 'For businesses with custom needs',
    'pricing.enterprise.feature1': 'Unlimited contacts',
    'pricing.enterprise.feature2': 'Unlimited campaigns',
    'pricing.enterprise.feature3': 'Custom integrations',
    'pricing.enterprise.feature4': 'Dedicated account manager',
    'pricing.enterprise.cta': 'Contact Sales',
    
    // FAQ
    'faq.title': 'Frequently asked questions',
    'faq.q1': 'Is SalemBot compliant with WhatsApp policies?',
    'faq.a1': 'Yes. SalemBot uses official WhatsApp Business API and follows all messaging guidelines.',
    'faq.q2': 'How long does setup take?',
    'faq.a2': 'Most users are up and running in under 2 minutes. Just connect your WhatsApp Business account and you\'re ready.',
    'faq.q3': 'Can I cancel anytime?',
    'faq.a3': 'Absolutely. No contracts, no commitments. Cancel with one click from your dashboard.',
    'faq.q4': 'How do I get started?',
    'faq.a4': 'Simply sign up with your email and connect your WhatsApp Business account. You\'ll be up and running in minutes.',
    
    // CTA
    'cta.title': 'Ready to stop losing customers?',
    'cta.subtitle': 'Start re-engaging your audience today',
    'cta.button': 'Get Started',
    
    // Footer
    'footer.tagline': 'Built for businesses to return customers',
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.faq': 'FAQ',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2025 SalemBot. All rights reserved.',
  },
  ru: {
    // Navigation
    'nav.login': 'Войти',
    'nav.signup': 'Регистрация',
    
    // Hero Section
    'hero.title': 'Автоматически возвращайте клиентов – без ручной работы',
    'hero.subtitle': 'Подключите WhatsApp, сегментируйте контакты и отправляйте персонализированные сообщения за секунды',
    'hero.cta': 'Начать бесплатно',
    
    // Problem Section
    'problem.title': 'Хватит терять клиентов из-за забытых напоминаний',
    'problem.subtitle': 'Каждый день потенциальные продажи уходят, потому что невозможно масштабировать ручное общение. Ваши лучшие клиенты заслуживают большего, чем быть забытыми в переполненном списке чатов.',
    'problem.point1': 'Ручные сообщения занимают более 3 часов в день',
    'problem.point2': 'Прошлые клиенты тихо уходят',
    'problem.point3': 'Постоянно упускаются возможности заработка',
    'problem.mockup': 'Непрочитанные сообщения накапливаются...',
    'problem.time1': '14 дней назад',
    'problem.time2': '20 дней назад',
    'problem.time3': '30+ дней назад',
    
    // Solution Section
    'solution.title': 'SalemBot все делает автоматически',
    'solution.subtitle': 'Подключитесь один раз. Пусть автоматизация делает остальное. Ваши клиенты получают своевременные персонализированные сообщения, пока вы отдыхаете.',
    'solution.point1': 'Автосегментация по активности и давности',
    'solution.point2': 'Массовая отправка персонализированных сообщений',
    'solution.point3': 'Отслеживайте ответы и оптимизируйте результаты',
    'solution.cta': 'Начать бесплатно',
    
    // How It Works
    'howitworks.title': 'Как это работает',
    'howitworks.subtitle': 'Четыре простых шага для возвращения клиентов',
    'howitworks.step1.title': 'Подключите WhatsApp',
    'howitworks.step1.desc': 'Привяжите бизнес-номер; сообщения синхронизируются мгновенно.',
    'howitworks.step2.title': 'Сегментация контактов',
    'howitworks.step2.desc': 'SalemBot группирует клиентов по давности, активности или тегам.',
    'howitworks.step3.title': 'Отправляйте рассылки',
    'howitworks.step3.desc': 'Выберите или создайте шаблоны, выберите сегменты и запустите.',
    'howitworks.step4.title': 'Получите результат',
    'howitworks.step4.desc': 'Получайте новые заявки со старых чатов и окупите сервис за 1 день',
    
    // Benefits
    'benefits.title': 'Почему клиенты любят SalemBot',
    'benefits.benefit1.title': 'Экономьте часы каждую неделю',
    'benefits.benefit1.desc': 'Никакой ручной рассылки. Настройте один раз, пусть автоматизация делает всё.',
    'benefits.benefit2.title': 'Больше ответов и конверсий',
    'benefits.benefit2.desc': 'Сообщения выглядят личными. Клиенты отвечают, потому что вы обратились вовремя.',
    'benefits.benefit3.title': 'Быстрая настройка',
    'benefits.benefit3.desc': 'Запуск менее чем за 2 минуты. Без сложных интеграций и технических навыков.',
    'benefits.benefit4.title': 'Встроенная аналитика',
    'benefits.benefit4.desc': 'Смотрите, что работает, усиливайте успешные кампании и оптимизируйте со временем.',
    
    // Social Proof
    'social.title': 'Нам доверяют компании как ваша',
    'social.testimonial.quote': 'Мы перешли с 4 часов в день на напоминания к нулю. SalemBot вернул 30% наших неактивных клиентов в первый месяц.',
    'social.testimonial.author': 'Аиша К.',
    'social.testimonial.role': 'Владелица e-commerce',
    'social.metric1.value': '10К+',
    'social.metric1.label': 'Контактов достигнуто ежедневно',
    'social.metric2.value': '23%',
    'social.metric2.label': 'Средний коэффициент конверсии',
    'social.metric3.value': '2 мин',
    'social.metric3.label': 'Время настройки',
    
    // Pricing
    'pricing.title': 'Простые, прозрачные цены',
    'pricing.permonth': 'в месяц',
    'pricing.feature.unlimited': 'Неограниченные контакты',
    'pricing.feature.templates': 'Шаблоны',
    'pricing.feature.analytics': 'Аналитика',
    'pricing.feature.support': 'Приоритетная поддержка',
    'pricing.starter.name': 'Стартовый',
    'pricing.starter.price': '$29',
    'pricing.starter.period': '/месяц',
    'pricing.starter.desc': 'Идеально для малого бизнеса, начинающего автоматизацию',
    'pricing.starter.feature1': 'До 500 контактов',
    'pricing.starter.feature2': '2 кампании в месяц',
    'pricing.starter.feature3': 'Базовая аналитика',
    'pricing.starter.feature4': 'Поддержка по email',
    'pricing.starter.cta': 'Начать',
    'pricing.pro.name': 'Профессиональный',
    'pricing.pro.price': '$79',
    'pricing.pro.period': '/месяц',
    'pricing.pro.desc': 'Для растущего бизнеса, которому нужна мощность',
    'pricing.pro.feature1': 'До 5,000 контактов',
    'pricing.pro.feature2': 'Неограниченные кампании',
    'pricing.pro.feature3': 'Расширенная аналитика и A/B тесты',
    'pricing.pro.feature4': 'Приоритетная поддержка',
    'pricing.pro.cta': 'Начать',
    'pricing.enterprise.name': 'Корпоративный',
    'pricing.enterprise.price': 'По запросу',
    'pricing.enterprise.desc': 'Для бизнеса с особыми требованиями',
    'pricing.enterprise.feature1': 'Неограниченные контакты',
    'pricing.enterprise.feature2': 'Неограниченные кампании',
    'pricing.enterprise.feature3': 'Пользовательские интеграции',
    'pricing.enterprise.feature4': 'Персональный менеджер',
    'pricing.enterprise.cta': 'Связаться с отделом продаж',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.q1': 'Соответствует ли SalemBot политикам WhatsApp?',
    'faq.a1': 'Да. SalemBot использует официальный WhatsApp Business API и следует всем правилам обмена сообщениями.',
    'faq.q2': 'Сколько времени занимает настройка?',
    'faq.a2': 'Большинство пользователей запускаются менее чем за 2 минуты. Просто подключите ваш аккаунт WhatsApp Business и всё готово.',
    'faq.q3': 'Могу ли я отменить в любое время?',
    'faq.a3': 'Абсолютно. Никаких контрактов, никаких обязательств. Отмените одним кликом из вашей панели.',
    'faq.q4': 'Как начать работу?',
    'faq.a4': 'Просто зарегистрируйтесь с вашим email и подключите ваш аккаунт WhatsApp Business. Вы будете готовы к работе за несколько минут.',
    
    // CTA
    'cta.title': 'Готовы перестать терять клиентов?',
    'cta.subtitle': 'Начните возвращать свою аудиторию сегодня',
    'cta.button': 'Начать',
    
    // Footer
    'footer.tagline': 'Создано для бизнеса, чтобы возвращать клиентов',
    'footer.product': 'Продукт',
    'footer.features': 'Возможности',
    'footer.pricing': 'Цены',
    'footer.faq': 'Вопросы',
    'footer.company': 'Компания',
    'footer.about': 'О нас',
    'footer.contact': 'Контакты',
    'footer.support': 'Поддержка',
    'footer.legal': 'Правовая информация',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.copyright': '© 2025 SalemBot. Все права защищены.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

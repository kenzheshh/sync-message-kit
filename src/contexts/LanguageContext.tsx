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
    'social.metric1.value': '850K₸',
    'social.metric1.label': 'Service Center',
    'social.metric2.value': '193 clients',
    'social.metric2.label': 'Fitness Club',
    'social.metric3.value': '1.4M₸',
    'social.metric3.label': 'Flower Shop',
    
    // Client Results Details
    'social.result1.desc': 'Additional revenue for the month from clients who had not requested repairs for a long time.',
    'social.result2.desc': 'Returned in the first month after mailing to the inactive database.',
    'social.result3.desc': 'Bouquet sales to customers who have not ordered in over six months — with no advertising costs.',
    
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
    
    // New Landing Page
    'new.nav.login': 'Login',
    'new.hero.title': 'Bring Back Everyone Who Ever Messaged You on WhatsApp',
    'new.hero.subtitle': 'Sell to those who already know you – without risk of blocks or expensive ads.',
    'new.hero.cta': '👉 Bring Back Customers Now',
    
    // Why It Matters
    'new.why.title': 'New customers cost 10x more than those who already came to you.',
    'new.why.card1.title': 'Cheaper than targeting',
    'new.why.card1.desc': 'No need to spend budget on cold audience.',
    'new.why.card2.title': 'Repeat sales',
    'new.why.card2.desc': 'Bring back customers you already forgot about.',
    'new.why.card3.title': 'No blocks',
    'new.why.card3.desc': 'We only message those who already had a conversation – WhatsApp doesn\'t complain.',
    'new.why.tagline': 'Your forgotten chats are sleeping money. We help wake them up.',
    
    // How It Works
    'new.steps.title': '4 steps to bring back your customers',
    'new.steps.step1.title': 'Login to dashboard',
    'new.steps.step1.desc': 'Quick registration in 30 seconds',
    'new.steps.step2.title': 'Connect your business WhatsApp',
    'new.steps.step2.desc': 'Secure connection in one click',
    'new.steps.step3.title': 'We analyze your database',
    'new.steps.step3.desc': 'Find all forgotten customers',
    'new.steps.step4.title': 'Launch campaign in 1 click',
    'new.steps.step4.desc': 'Automatic personalization',
    'new.steps.tagline': 'No more complex integrations – everything is automated.',
    
    // AI Segmentation
    'new.ai.title': 'AI segments your customer database',
    'new.ai.subtitle': 'We scan WhatsApp chats, identify customer types and automatically create tags so you can launch precise campaigns for each segment.',
    'new.ai.chats': 'WhatsApp Chats',
    'new.ai.chat1.name': 'Sarah K.',
    'new.ai.chat1.message': 'Thanks for your help!',
    'new.ai.chat1.time': '14:23',
    'new.ai.chat2.name': 'Mike B.',
    'new.ai.chat2.message': 'When is delivery?',
    'new.ai.chat2.time': '13:45',
    'new.ai.chat3.name': 'Diana M.',
    'new.ai.chat3.message': 'Ordering for the second time 👍',
    'new.ai.chat3.time': '12:18',
    'new.ai.chat4.name': 'Alex T.',
    'new.ai.chat4.message': 'Great quality',
    'new.ai.chat4.time': '11:07',
    'new.ai.chat5.name': 'Emma J.',
    'new.ai.chat5.message': 'Can I clarify the price?',
    'new.ai.chat5.time': 'Yesterday',
    'new.ai.segmentation': 'Segmentation',
    'new.ai.segment1.title': 'Regular',
    'new.ai.segment1.desc': 'Active customers',
    'new.ai.segment2.title': 'Inactive',
    'new.ai.segment2.desc': 'Sleeping customers',
    'new.ai.segment3.title': 'New',
    'new.ai.segment3.desc': 'Recent contacts',
    
    // Hidden Money
    'new.money.title': 'You have money buried in forgotten chats',
    'new.money.subtitle': 'Every unanswered message, old customer or lost contact is a sales opportunity that can be brought back. We simply do it for you.',
    'new.money.cta': 'Start bringing back customers',
    
    // Cases
    'new.cases.title': 'Real results from our customers',
    'new.cases.subtitle': 'Businesses that already brought back their customers',
    'new.cases.case1.value': '850K₸',
    'new.cases.case1.title': 'Service Center',
    'new.cases.case1.desc': 'Additional revenue for the month from customers who haven\'t requested repairs for a long time.',
    'new.cases.case2.value': '193 customers',
    'new.cases.case2.title': 'Fitness Club',
    'new.cases.case2.desc': 'Returned in the first month after mailing to the inactive database.',
    'new.cases.case3.value': '1.4M₸',
    'new.cases.case3.title': 'Flower Shop',
    'new.cases.case3.desc': 'Bouquet sales to customers who haven\'t ordered in over six months — with no advertising costs.',
    
    // Pricing
    'new.pricing.title': 'Simple and honest prices',
    'new.pricing.subtitle': 'Pay only for results. No hidden fees.',
    'new.pricing.starter.name': 'Start',
    'new.pricing.starter.desc': 'Try it for free',
    'new.pricing.starter.price': '₸0',
    'new.pricing.starter.period': 'test 10 messages',
    'new.pricing.starter.feature1': 'Up to 10 free messages',
    'new.pricing.starter.feature2': 'Automatic database analysis',
    'new.pricing.starter.feature3': 'Basic analytics',
    'new.pricing.starter.cta': 'Start for free',
    'new.pricing.business.name': 'Business',
    'new.pricing.business.desc': 'For active sales',
    'new.pricing.business.price': '50,000₸',
    'new.pricing.business.period': 'Unlimited messages',
    'new.pricing.business.badge': 'Popular',
    'new.pricing.business.feature1': 'Unlimited messages',
    'new.pricing.business.feature2': 'Smart personalization',
    'new.pricing.business.feature3': 'Extended analytics',
    'new.pricing.business.feature4': 'Priority support',
    'new.pricing.business.cta': 'Choose plan',
    'new.pricing.pro.name': 'Pro',
    'new.pricing.pro.desc': 'Maximum scale',
    'new.pricing.pro.price': '100,000₸',
    'new.pricing.pro.period': 'unlimited messages',
    'new.pricing.pro.feature1': 'Unlimited messages',
    'new.pricing.pro.feature2': 'AI assistant for texts',
    'new.pricing.pro.feature3': 'Multi-account (up to 5 numbers)',
    'new.pricing.pro.feature4': 'Dedicated manager',
    'new.pricing.pro.cta': 'Choose plan',
    
    // FAQ
    'new.faq.title': 'Frequently asked questions',
    'new.faq.q1': 'Is this legal? Will WhatsApp block me?',
    'new.faq.a1': 'Yes, it\'s completely legal. We only send messages to contacts you\'ve already had a conversation with on WhatsApp. This isn\'t spam – it\'s returning to existing customers. The risk of blocking is minimal.',
    'new.faq.q2': 'How quickly will I see results?',
    'new.faq.a2': 'The first responses come within hours of launching the campaign. Usually our customers see first sales within 24-48 hours.',
    'new.faq.q3': 'Do I need to write the text myself?',
    'new.faq.a3': 'No, our AI assistant will create personalized messages automatically. You can edit them or use as is.',
    'new.faq.q4': 'How many customers can I bring back?',
    'new.faq.a4': 'It depends on the size of your contact database in WhatsApp. On average, our customers bring back 15-25% of forgotten contacts into active sales.',
    'new.faq.q5': 'Can I try it for free?',
    'new.faq.a5': 'Yes! We give 10 free messages so you can test the service without risks and see the first results.',
    
    // Footer CTA
    'new.footercta.title': 'Ready to bring back your customers?',
    'new.footercta.subtitle': 'Join hundreds of businesses that already increased sales with SalemBot',
    'new.footercta.cta': 'Start for free',
    
    // Footer
    'new.footer.tagline': 'Bring back customers through WhatsApp without blocks and risks',
    'new.footer.product': 'Product',
    'new.footer.features': 'Features',
    'new.footer.pricing': 'Pricing',
    'new.footer.cases': 'Cases',
    'new.footer.contacts': 'Contacts',
    'new.footer.whatsapp': 'WhatsApp support',
  },
  ru: {
    // Navigation
    'nav.login': 'Войти',
    'nav.signup': 'Регистрация',
    
    // Hero Section
    'hero.title': 'Возвращайте клиентов автоматически',
    'hero.subtitle': 'Подключите WhatsApp, сегментируйте контакты и отправляйте персонализированные сообщения за секунды',
    'hero.cta': 'Начать бесплатно',
    
    // Problem Section
    'problem.title': 'Хватит терять клиентов из-за того, что вы про них забыли',
    'problem.subtitle': 'Каждый день потенциальные продажи уходят, потому что невозможно писать всем вручную. Клиентам требуется чуть больше внимания и информации, чем быть забытыми в переполненном списке чатов.',
    'problem.point1': 'Ручные сообщения занимают более 3 часов в день',
    'problem.point2': 'Прошлые клиенты тихо уходят',
    'problem.point3': 'Постоянно упускаются возможности заработка',
    'problem.mockup': 'Непрочитанные сообщения накапливаются...',
    'problem.time1': '14 дней назад',
    'problem.time2': '20 дней назад',
    'problem.time3': '30+ дней назад',
    
    // Solution Section
    'solution.title': 'SalemBot все делает автоматически',
    'solution.subtitle': 'Подключите WhatsApp, сортируйте чаты, напомните клиентам о повторной оплате и верните потерянных клиентов персонализированными сообщениями за секунды',
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
    'benefits.benefit2.title': 'Вероятность блокировки меньше 1%',
    'benefits.benefit2.desc': 'Мы отправляем сообщения только тем клиентам, с кем уже есть диалог – благодаря этому риск блокировки значительно ниже, чем при рассылке незнакомым контактам.',
    'benefits.benefit3.title': 'Быстрая настройка',
    'benefits.benefit3.desc': 'Запуск менее чем за 2 минуты. Без сложных интеграций и технических навыков.',
    'benefits.benefit4.title': 'Встроенная аналитика',
    'benefits.benefit4.desc': 'Смотрите, что работает, усиливайте успешные кампании и оптимизируйте со временем.',
    
    // Social Proof
    'social.title': 'Нам доверяют компании как ваша',
    'social.testimonial.quote': 'Мы перешли с 4 часов в день на напоминания к нулю. SalemBot вернул 30% наших неактивных клиентов в первый месяц.',
    'social.testimonial.author': 'Аиша К.',
    'social.testimonial.role': 'Владелица e-commerce',
    'social.metric1.value': '850K₸',
    'social.metric1.label': 'Сервисный центр',
    'social.metric2.value': '193 клиента',
    'social.metric2.label': 'Фитнес-клуб',
    'social.metric3.value': '1.4M₸',
    'social.metric3.label': 'Цветочный магазин',
    
    // Client Results Details
    'social.result1.desc': 'Дополнительный доход за месяц от клиентов, которые давно не обращались за ремонтом.',
    'social.result2.desc': 'Вернулись за первый месяц после рассылки по неактивной базе.',
    'social.result3.desc': 'Продажи букетов клиентам, которые не заказывали более полугода — без затрат на рекламу.',
    
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
    
    // New Landing Page
    'new.nav.login': 'Войти',
    'new.hero.title': 'Возвращаем всех, кто когда-либо писал вам в WhatsApp',
    'new.hero.subtitle': 'Продавайте тем, кто уже знает вас – без риска блокировок и дорогой рекламы.',
    'new.hero.cta': '👉 Вернуть клиентов сейчас',
    
    // Why It Matters
    'new.why.title': 'Новые клиенты стоят в 10 раз дороже, чем те, кто уже был у вас.',
    'new.why.card1.title': 'Дешевле, чем таргет',
    'new.why.card1.desc': 'Не нужно тратить бюджет на холодную аудиторию.',
    'new.why.card2.title': 'Повторные продажи',
    'new.why.card2.desc': 'Возвращаем клиентов, о которых вы уже забыли.',
    'new.why.card3.title': 'Без блокировок',
    'new.why.card3.desc': 'Пишем только тем, кто уже был в переписке – WhatsApp не жалуется.',
    'new.why.tagline': 'Ваши забытые чаты – это спящие деньги. Мы поможем их пробудить.',
    
    // How It Works
    'new.steps.title': '4 шага, чтобы вернуть ваших клиентов',
    'new.steps.step1.title': 'Войдите в личный кабинет',
    'new.steps.step1.desc': 'Быстрая регистрация за 30 секунд',
    'new.steps.step2.title': 'Подключите рабочий WhatsApp',
    'new.steps.step2.desc': 'Безопасное подключение в один клик',
    'new.steps.step3.title': 'Мы анализируем вашу базу',
    'new.steps.step3.desc': 'Находим всех забытых клиентов',
    'new.steps.step4.title': 'Запустите рассылку в 1 клик',
    'new.steps.step4.desc': 'Автоматическая персонализация',
    'new.steps.tagline': 'Больше никаких сложных интеграций – всё автоматизировано.',
    
    // AI Segmentation
    'new.ai.title': 'ИИ сегментирует вашу клиентскую базу',
    'new.ai.subtitle': 'Мы сканируем чаты в WhatsApp, определяем типы клиентов и автоматически создаём теги, чтобы вы могли запускать точные рассылки по каждому сегменту.',
    'new.ai.chats': 'Чаты WhatsApp',
    'new.ai.chat1.name': 'Алия К.',
    'new.ai.chat1.message': 'Спасибо за помощь!',
    'new.ai.chat1.time': '14:23',
    'new.ai.chat2.name': 'Марат Б.',
    'new.ai.chat2.message': 'Когда доставка?',
    'new.ai.chat2.time': '13:45',
    'new.ai.chat3.name': 'Динара М.',
    'new.ai.chat3.message': 'Заказываю второй раз 👍',
    'new.ai.chat3.time': '12:18',
    'new.ai.chat4.name': 'Асхат Т.',
    'new.ai.chat4.message': 'Отличное качество',
    'new.ai.chat4.time': '11:07',
    'new.ai.chat5.name': 'Сауле Ж.',
    'new.ai.chat5.message': 'Можно уточнить цену?',
    'new.ai.chat5.time': 'Вчера',
    'new.ai.segmentation': 'Сегментация',
    'new.ai.segment1.title': 'Постоянные',
    'new.ai.segment1.desc': 'Активные клиенты',
    'new.ai.segment2.title': 'Неактивные',
    'new.ai.segment2.desc': 'Спящие клиенты',
    'new.ai.segment3.title': 'Новые',
    'new.ai.segment3.desc': 'Недавние контакты',
    
    // Hidden Money
    'new.money.title': 'У вас закопаны деньги в виде забытых чатов',
    'new.money.subtitle': 'Каждое неотвеченное сообщение, старый клиент или пропавший контакт – это шанс на продажу, который можно вернуть. Мы просто делаем это за вас.',
    'new.money.cta': 'Начать возвращать клиентов',
    
    // Cases
    'new.cases.title': 'Реальные результаты наших клиентов',
    'new.cases.subtitle': 'Бизнесы, которые уже вернули своих клиентов',
    'new.cases.case1.value': '850K₸',
    'new.cases.case1.title': 'Сервисный центр',
    'new.cases.case1.desc': 'Дополнительный доход за месяц от клиентов, которые давно не обращались за ремонтом.',
    'new.cases.case2.value': '193 клиента',
    'new.cases.case2.title': 'Фитнес-клуб',
    'new.cases.case2.desc': 'Вернулись за первый месяц после рассылки по неактивной базе.',
    'new.cases.case3.value': '1.4M₸',
    'new.cases.case3.title': 'Цветочный магазин',
    'new.cases.case3.desc': 'Продажи букетов клиентам, которые не заказывали более полугода — без затрат на рекламу.',
    
    // Pricing
    'new.pricing.title': 'Простые и честные цены',
    'new.pricing.subtitle': 'Платите только за результат. Без скрытых комиссий.',
    'new.pricing.starter.name': 'Старт',
    'new.pricing.starter.desc': 'Попробуйте бесплатно',
    'new.pricing.starter.price': '₸0',
    'new.pricing.starter.period': 'тестовые 10 сообщений',
    'new.pricing.starter.feature1': 'До 10 сообщений бесплатно',
    'new.pricing.starter.feature2': 'Автоматический анализ базы',
    'new.pricing.starter.feature3': 'Базовая аналитика',
    'new.pricing.starter.cta': 'Начать бесплатно',
    'new.pricing.business.name': 'Бизнес',
    'new.pricing.business.desc': 'Для активных продаж',
    'new.pricing.business.price': '50,000₸',
    'new.pricing.business.period': 'Безлимитные сообщения',
    'new.pricing.business.badge': 'Популярный',
    'new.pricing.business.feature1': 'Безлимитные сообщения',
    'new.pricing.business.feature2': 'Умная персонализация',
    'new.pricing.business.feature3': 'Расширенная аналитика',
    'new.pricing.business.feature4': 'Приоритетная поддержка',
    'new.pricing.business.cta': 'Выбрать план',
    'new.pricing.pro.name': 'Про',
    'new.pricing.pro.desc': 'Максимальный масштаб',
    'new.pricing.pro.price': '100,000₸',
    'new.pricing.pro.period': 'безлимитные сообщения',
    'new.pricing.pro.feature1': 'Безлимитные сообщения',
    'new.pricing.pro.feature2': 'AI-помощник для текстов',
    'new.pricing.pro.feature3': 'Мультиакаунт (до 5 номеров)',
    'new.pricing.pro.feature4': 'Выделенный менеджер',
    'new.pricing.pro.cta': 'Выбрать план',
    
    // FAQ
    'new.faq.title': 'Частые вопросы',
    'new.faq.q1': 'Это легально? WhatsApp не заблокирует?',
    'new.faq.a1': 'Да, это полностью легально. Мы отправляем сообщения только тем контактам, с которыми у вас уже был диалог в WhatsApp. Это не спам – это возвращение к существующим клиентам. Риск блокировки минимален.',
    'new.faq.q2': 'Как быстро я увижу результаты?',
    'new.faq.a2': 'Первые ответы приходят в течение нескольких часов после запуска рассылки. Обычно наши клиенты видят первые продажи в первые 24-48 часов.',
    'new.faq.q3': 'Нужно ли мне писать текст самому?',
    'new.faq.a3': 'Нет, наш AI-помощник создаст персонализированные сообщения автоматически. Вы можете редактировать их или использовать как есть.',
    'new.faq.q4': 'Сколько клиентов я смогу вернуть?',
    'new.faq.a4': 'Это зависит от размера вашей базы контактов в WhatsApp. В среднем наши клиенты возвращают 15-25% забытых контактов обратно в активные продажи.',
    'new.faq.q5': 'Можно ли попробовать бесплатно?',
    'new.faq.a5': 'Да! Мы даём 10 бесплатных сообщений, чтобы вы могли протестировать сервис без рисков и увидеть первые результаты.',
    
    // Footer CTA
    'new.footercta.title': 'Готовы вернуть своих клиентов?',
    'new.footercta.subtitle': 'Присоединяйтесь к сотням бизнесов, которые уже увеличили продажи с SalemBot',
    'new.footercta.cta': 'Начать бесплатно',
    
    // Footer
    'new.footer.tagline': 'Возвращаем клиентов через WhatsApp без блокировок и рисков',
    'new.footer.product': 'Продукт',
    'new.footer.features': 'Возможности',
    'new.footer.pricing': 'Цены',
    'new.footer.cases': 'Кейсы',
    'new.footer.contacts': 'Контакты',
    'new.footer.whatsapp': 'WhatsApp поддержка',
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

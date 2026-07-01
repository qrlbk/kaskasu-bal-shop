export type Language = 'kz' | 'ru';

export type VolumeId = '0.5' | '1.0' | '3.0';

export interface VolumeOption {
  id: VolumeId;
  label: string;
}

export interface SiteCopy {
  brandName: string;
  navOrderShort: string;
  navOrderLong: string;
  heroEyebrow: string;
  heroTitleKz: string;
  heroTitleRu: string;
  heroLeadKz: string;
  heroLeadRu: string;
  volumeLabel: string;
  orderButton: string;
  orderSubtext: string;
  processingNote: string;
  badgeYear: string;
  badgeNew: string;
  footerTaglineKz: string;
  footerTaglineRu: string;
  footerCopyrightKz: string;
  footerCopyrightRu: string;
  features: Array<{ icon: string; textKz: string; textRu: string }>;
  whatsappMessage: (volumeLabel: string, lang: Language) => string;
}

export const SITE_CONFIG = {
  whatsappPhone: '7064274144',
  heroImageUrl: `${import.meta.env.BASE_URL}images/hero-honey.jpg`,
  heroImageAlt: 'Premium Kaskasu Honey Jars',
} as const;

export const VOLUME_OPTIONS: VolumeOption[] = [
  { id: '0.5', label: '0.5 kg' },
  { id: '1.0', label: '1.0 kg' },
  { id: '3.0', label: '3.0 kg' },
];

export const SITE_COPY: SiteCopy = {
  brandName: 'Kaskasu Baly',
  navOrderShort: 'Тапсырыс',
  navOrderLong: 'Тапсырыс беру / Order',
  heroEyebrow: 'Алғашқы шектеулі жиын',
  heroTitleKz: 'Биылғы алғашқы бал — Табиғат алтыны',
  heroTitleRu: 'Первый сбор меда — Золото природы',
  heroLeadKz:
    'Қасқасу баурайынан жиналған. Көктемгі гүлдердің хош иісі бар таза әрі табиғи бал.',
  heroLeadRu:
    'Собрано в предгорьях Каскасу. Натуральный, нефильтрованный мед с ароматом весеннего разнотравья.',
  volumeLabel: 'Салмағын таңдаңыз / Выберите вес',
  orderButton: 'Тапсырыс беру',
  orderSubtext: 'Заказать через WhatsApp',
  processingNote: 'Жедел қабылдау / Instant processing',
  badgeYear: '2026',
  badgeNew: 'Жаңа / New',
  footerTaglineKz: 'Шеберлік нектары. Табиғаттан сізге дейін.',
  footerTaglineRu: 'Artisanal Nectar. From nature to you.',
  footerCopyrightKz: '© 2026 Шеберлік нектары. Табиғаттан сізге дейін.',
  footerCopyrightRu: '© 2026 Artisanal Nectar. From nature to you.',
  features: [
    {
      icon: 'filter_vintage',
      textKz: '100% таза өнім',
      textRu: '100% натуральный продукт',
    },
    {
      icon: 'landscape',
      textKz: 'Тау бөктерінің хош иісі',
      textRu: 'Аромат горных лугов',
    },
  ],
  whatsappMessage: (volumeLabel, lang) => {
    if (lang === 'ru') {
      return `Здравствуйте! Хочу заказать мёд «${SITE_COPY.brandName}» весом ${volumeLabel}.`;
    }
    return `Сәлеметсіз бе! «${SITE_COPY.brandName}» балынан ${volumeLabel} салмағында тапсырыс бергім келеді.`;
  },
};

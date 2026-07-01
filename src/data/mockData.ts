export type Language = 'kz' | 'ru';

export type VolumeId = '0.5' | '1.0' | '3.0';

export interface VolumeOption {
  id: VolumeId;
  label: string;
  price: number;
  priceLabel: string;
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
  whatsappMessage: (volume: VolumeOption, lang: Language) => string;
}

export const SITE_CONFIG = {
  whatsappPhone: '7064274144',
  heroImageUrl: '/images/hero-honey.jpg',
  heroImageAlt: 'Premium Kaskasu Honey Jars',
} as const;

export const VOLUME_OPTIONS: VolumeOption[] = [
  { id: '0.5', label: '0.5 L', price: 1750, priceLabel: '1 750₸' },
  { id: '1.0', label: '1.0 L', price: 3500, priceLabel: '3 500 ₸' },
  { id: '3.0', label: '3.0 L', price: 10500, priceLabel: '10 500 ₸' },
];

export const SITE_COPY: SiteCopy = {
  brandName: 'Kaskasu Bal',
  navOrderShort: 'Тапсырыс',
  navOrderLong: 'Тапсырыс беру / Order',
  heroEyebrow: 'Алғашқы шектеулі жиын',
  heroTitleKz: 'Биылғы алғашқы бал — Табиғат алтыны',
  heroTitleRu: 'Первый сбор меда — Золото природы',
  heroLeadKz:
    'Қасқасу баурайынан жиналған. Көктемгі гүлдердің хош иісі бар таза әрі табиғи бал.',
  heroLeadRu:
    'Собрано в предгорьях Каскасу. Натуральный, нефильтрованный мед с ароматом весеннего разнотравья.',
  volumeLabel: 'Көлемін таңдаңыз / Выберите объем',
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
  whatsappMessage: (volume, lang) => {
    if (lang === 'ru') {
      return `Здравствуйте! Хочу заказать мёд «Kaskasu Bal» объёмом ${volume.label} (${volume.priceLabel}).`;
    }
    return `Сәлеметсіз бе! «Kaskasu Bal» балынан ${volume.label} көлемінде (${volume.priceLabel}) тапсырыс бергім келеді.`;
  },
};

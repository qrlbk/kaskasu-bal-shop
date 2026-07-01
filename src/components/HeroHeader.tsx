import { SITE_COPY } from '../data/mockData';
import type { Language } from '../data/mockData';

export interface HeroHeaderProps {
  language: Language;
}

export function HeroHeader({ language }: Readonly<HeroHeaderProps>) {
  const primaryLead = language === 'kz' ? SITE_COPY.heroLeadKz : SITE_COPY.heroLeadRu;
  const secondaryLead = language === 'kz' ? SITE_COPY.heroLeadRu : SITE_COPY.heroLeadKz;
  const secondaryTitle = language === 'kz' ? SITE_COPY.heroTitleRu : SITE_COPY.heroTitleKz;

  return (
    <header className="space-y-4 md:space-y-6 text-center lg:text-left">
      <span className="font-label-md text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] block text-[10px] md:text-sm dark:text-primary-container">
        {SITE_COPY.heroEyebrow}
      </span>
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg leading-[1.1] text-on-surface dark:text-surface">
        {language === 'kz' ? (
          <>
            Биылғы алғашқы бал — <br className="hidden md:block" />
            Табиғат алтыны
          </>
        ) : (
          <>
            Первый сбор меда — <br className="hidden md:block" />
            Золото природы
          </>
        )}
        <span className="block mt-2 md:mt-4 text-primary/60 italic font-normal text-[0.6em] md:text-[0.65em] leading-tight dark:text-primary-container/70">
          {secondaryTitle}
        </span>
      </h1>
      <div className="prose font-body-md md:font-body-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0 dark:text-outline-variant">
        <p className="font-semibold text-on-surface text-base md:text-lg dark:text-surface">{primaryLead}</p>
        <p className="mt-2 md:mt-4 text-sm md:text-base opacity-75 italic leading-relaxed">{secondaryLead}</p>
      </div>
    </header>
  );
}

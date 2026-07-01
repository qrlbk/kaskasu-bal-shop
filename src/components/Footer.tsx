import { SITE_COPY } from '../data/mockData';
import type { Language } from '../data/mockData';

export interface FooterProps {
  language: Language;
}

export function Footer({ language }: Readonly<FooterProps>) {
  return (
    <footer className="bg-surface py-12 md:py-16 border-t border-outline-variant/20 dark:bg-on-background dark:border-outline/20">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10 md:gap-8">
        <div className="space-y-4">
          <p className="font-headline-md text-3xl md:text-headline-md text-primary dark:text-primary-container">
            {SITE_COPY.brandName}
          </p>
          <div className="space-y-1">
            <p className="text-on-surface-variant opacity-70 text-sm font-medium dark:text-outline-variant">
              {language === 'kz' ? SITE_COPY.footerCopyrightKz : SITE_COPY.footerCopyrightRu}
            </p>
            <p className="text-on-surface-variant opacity-50 text-xs italic dark:text-outline-variant">
              {language === 'kz' ? SITE_COPY.footerTaglineRu : SITE_COPY.footerTaglineKz}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

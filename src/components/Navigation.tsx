import { LanguageSwitcher } from './LanguageSwitcher';
import { SITE_COPY } from '../data/mockData';
import type { Language } from '../data/mockData';

export interface NavigationProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function Navigation({ language, onLanguageChange }: Readonly<NavigationProps>) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 dark:bg-on-background/90 dark:border-outline/30">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <a
          href="#top"
          className="font-headline-md text-[24px] md:text-headline-md text-primary tracking-tighter dark:text-primary-container"
        >
          {SITE_COPY.brandName}
        </a>
        <div className="flex items-center gap-3 md:gap-6">
          <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
          <a
            href="#order"
            className="bg-primary text-on-primary md:bg-transparent md:text-primary rounded-full md:rounded-none px-4 py-1.5 md:p-0 md:border-b md:border-primary md:pb-1 text-[13px] md:text-label-md font-label-md uppercase tracking-widest hover:opacity-70 transition-all active:scale-95 md:active:scale-100 tap-highlight-transparent dark:md:text-primary-container dark:md:border-primary-container"
          >
            <span className="md:hidden">{SITE_COPY.navOrderShort}</span>
            <span className="hidden md:inline">{SITE_COPY.navOrderLong}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

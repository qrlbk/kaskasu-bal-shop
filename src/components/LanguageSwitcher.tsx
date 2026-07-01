import type { Language } from '../data/mockData';

export interface LanguageSwitcherProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageSwitcher({ language, onLanguageChange }: Readonly<LanguageSwitcherProps>) {
  return (
    <div className="flex items-center bg-surface-container md:bg-transparent rounded-full md:rounded-none p-1 md:p-0 text-[12px] md:text-label-md font-label-md uppercase tracking-widest font-semibold md:border-r md:border-outline-variant/50 md:pr-6 dark:bg-surface-container-high dark:md:bg-transparent">
      <button
        type="button"
        onClick={() => onLanguageChange('kz')}
        className={`px-3 py-1 rounded-full md:rounded-none md:px-0 transition-all tap-highlight-transparent ${
          language === 'kz'
            ? 'bg-primary md:bg-transparent text-on-primary md:text-primary dark:text-primary'
            : 'text-on-surface-variant hover:text-primary dark:text-on-surface-variant dark:hover:text-primary'
        }`}
        aria-pressed={language === 'kz'}
      >
        KZ
      </button>
      <span className="hidden md:inline text-outline-variant mx-2 dark:text-outline">/</span>
      <button
        type="button"
        onClick={() => onLanguageChange('ru')}
        className={`px-3 py-1 rounded-full md:rounded-none md:px-0 transition-all tap-highlight-transparent ${
          language === 'ru'
            ? 'bg-primary md:bg-transparent text-on-primary md:text-primary dark:text-primary'
            : 'text-on-surface-variant hover:text-primary dark:text-on-surface-variant dark:hover:text-primary'
        }`}
        aria-pressed={language === 'ru'}
      >
        RU
      </button>
    </div>
  );
}

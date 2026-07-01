import { useCallback, useState } from 'react';
import type { Language } from '../data/mockData';

export interface UseLanguageResult {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

export function useLanguage(initial: Language = 'kz'): UseLanguageResult {
  const [language, setLanguage] = useState<Language>(initial);

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => (current === 'kz' ? 'ru' : 'kz'));
  }, []);

  return { language, setLanguage, toggleLanguage };
}

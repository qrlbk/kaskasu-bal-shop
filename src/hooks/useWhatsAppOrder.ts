import { useCallback } from 'react';
import { SITE_CONFIG, SITE_COPY, type Language } from '../data/mockData';

export interface UseWhatsAppOrderResult {
  sendOrder: (volumeLabel: string, language: Language) => void;
}

export function useWhatsAppOrder(): UseWhatsAppOrderResult {
  const sendOrder = useCallback((volumeLabel: string, language: Language) => {
    const message = SITE_COPY.whatsappMessage(volumeLabel, language);
    const url = `https://wa.me/${SITE_CONFIG.whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return { sendOrder };
}

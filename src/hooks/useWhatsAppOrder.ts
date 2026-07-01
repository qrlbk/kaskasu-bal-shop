import { useCallback } from 'react';
import { SITE_CONFIG, SITE_COPY, type Language, type VolumeOption } from '../data/mockData';

export interface UseWhatsAppOrderResult {
  sendOrder: (volume: VolumeOption, language: Language) => void;
}

export function useWhatsAppOrder(): UseWhatsAppOrderResult {
  const sendOrder = useCallback((volume: VolumeOption, language: Language) => {
    const message = SITE_COPY.whatsappMessage(volume, language);
    const url = `https://wa.me/${SITE_CONFIG.whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return { sendOrder };
}

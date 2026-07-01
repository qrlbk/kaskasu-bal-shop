import { useCallback, useMemo, useState } from 'react';
import { VOLUME_OPTIONS, type VolumeId } from '../data/mockData';

export interface UseVolumeSelectionResult {
  selectedId: VolumeId | null;
  customLiters: string;
  orderVolumeLabel: string;
  selectVolume: (id: VolumeId) => void;
  setCustomLiters: (value: string) => void;
  options: typeof VOLUME_OPTIONS;
}

function formatCustomLiters(value: string): string {
  const normalized = value.trim().replace(',', '.');
  if (!normalized) {
    return '';
  }
  return normalized.endsWith('L') || normalized.endsWith('l')
    ? normalized.replace(/l$/i, ' L')
    : `${normalized} L`;
}

export function useVolumeSelection(initialId: VolumeId = '0.5'): UseVolumeSelectionResult {
  const [selectedId, setSelectedId] = useState<VolumeId | null>(initialId);
  const [customLiters, setCustomLitersState] = useState('');

  const selectVolume = useCallback((id: VolumeId) => {
    setSelectedId(id);
    setCustomLitersState('');
  }, []);

  const setCustomLiters = useCallback((value: string) => {
    const sanitized = value.replace(/[^\d.,]/g, '');
    setCustomLitersState(sanitized);
    if (sanitized.trim()) {
      setSelectedId(null);
    }
  }, []);

  const orderVolumeLabel = useMemo(() => {
    const customLabel = formatCustomLiters(customLiters);
    if (customLabel) {
      return customLabel;
    }

    const selected =
      VOLUME_OPTIONS.find((option) => option.id === selectedId) ?? VOLUME_OPTIONS[0];
    return selected.label;
  }, [customLiters, selectedId]);

  return {
    selectedId,
    customLiters,
    orderVolumeLabel,
    selectVolume,
    setCustomLiters,
    options: VOLUME_OPTIONS,
  };
}

import { useCallback, useState } from 'react';
import { VOLUME_OPTIONS, type VolumeId, type VolumeOption } from '../data/mockData';

export interface UseVolumeSelectionResult {
  selectedId: VolumeId;
  selectedVolume: VolumeOption;
  selectVolume: (id: VolumeId) => void;
  options: VolumeOption[];
}

export function useVolumeSelection(initialId: VolumeId = '0.5'): UseVolumeSelectionResult {
  const [selectedId, setSelectedId] = useState<VolumeId>(initialId);

  const selectVolume = useCallback((id: VolumeId) => {
    setSelectedId(id);
  }, []);

  const selectedVolume =
    VOLUME_OPTIONS.find((option) => option.id === selectedId) ?? VOLUME_OPTIONS[0];

  return {
    selectedId,
    selectedVolume,
    selectVolume,
    options: VOLUME_OPTIONS,
  };
}

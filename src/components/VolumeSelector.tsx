import { SITE_COPY } from '../data/mockData';
import type { VolumeId, VolumeOption } from '../data/mockData';
import { VolumeOptionButton } from './VolumeOptionButton';

export interface VolumeSelectorProps {
  options: VolumeOption[];
  selectedId: VolumeId;
  onSelect: (id: VolumeId) => void;
}

export function VolumeSelector({ options, selectedId, onSelect }: Readonly<VolumeSelectorProps>) {
  return (
    <div>
      <label className="font-label-md text-on-surface-variant uppercase tracking-[0.15em] block mb-4 md:mb-6 text-[10px] md:text-xs font-bold text-center lg:text-left dark:text-outline-variant">
        {SITE_COPY.volumeLabel}
      </label>
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {options.map((option) => (
          <VolumeOptionButton
            key={option.id}
            option={option}
            isSelected={selectedId === option.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

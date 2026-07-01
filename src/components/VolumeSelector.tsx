import { SITE_COPY } from '../data/mockData';
import type { Language, VolumeId, VolumeOption } from '../data/mockData';
import { CustomVolumeInput } from './CustomVolumeInput';
import { VolumeOptionButton } from './VolumeOptionButton';

export interface VolumeSelectorProps {
  language: Language;
  options: VolumeOption[];
  selectedId: VolumeId | null;
  customLiters: string;
  onSelect: (id: VolumeId) => void;
  onCustomChange: (value: string) => void;
}

export function VolumeSelector({
  language,
  options,
  selectedId,
  customLiters,
  onSelect,
  onCustomChange,
}: Readonly<VolumeSelectorProps>) {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <label className="font-label-md text-on-surface-variant uppercase tracking-[0.15em] block mb-4 md:mb-6 text-[10px] md:text-xs font-bold text-center lg:text-left dark:text-outline-variant">
          {SITE_COPY.volumeLabel}
        </label>
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {options.map((option) => (
            <VolumeOptionButton
              key={option.id}
              option={option}
              isSelected={selectedId === option.id && !customLiters.trim()}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
      <CustomVolumeInput language={language} value={customLiters} onChange={onCustomChange} />
    </div>
  );
}

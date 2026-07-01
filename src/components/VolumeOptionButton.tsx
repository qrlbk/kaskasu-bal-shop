import type { VolumeId, VolumeOption } from '../data/mockData';

export interface VolumeOptionButtonProps {
  option: VolumeOption;
  isSelected: boolean;
  onSelect: (id: VolumeId) => void;
}

export function VolumeOptionButton({
  option,
  isSelected,
  onSelect,
}: Readonly<VolumeOptionButtonProps>) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.id)}
      className={`flex flex-col items-center py-4 md:py-5 rounded-2xl font-medium transition-all tap-highlight-transparent ${
        isSelected
          ? 'border-2 border-primary bg-primary-fixed text-on-primary-fixed-variant font-bold ring-2 ring-primary/10 dark:border-primary-container dark:bg-primary-container/20'
          : 'border border-outline-variant/30 hover:border-primary bg-white/50 text-on-surface dark:bg-surface-container-lowest/10 dark:border-outline/30 dark:hover:border-primary-container'
      }`}
      aria-pressed={isSelected}
    >
      <span className="text-lg md:text-2xl font-headline-md">{option.label}</span>
    </button>
  );
}

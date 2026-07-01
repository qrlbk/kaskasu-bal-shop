import type { Language } from '../data/mockData';

export interface CustomVolumeInputProps {
  language: Language;
  value: string;
  onChange: (value: string) => void;
}

export function CustomVolumeInput({ language, value, onChange }: Readonly<CustomVolumeInputProps>) {
  const label =
    language === 'kz'
      ? 'Немесе өз салмағыңызды жазыңыз'
      : 'Или укажите нужный вес';
  const placeholder = language === 'kz' ? 'мысалы, 2.5' : 'например, 2.5';
  const hint =
    language === 'kz'
      ? 'Килограмм саны'
      : 'Количество килограмм';

  return (
    <div className="space-y-3">
      <label
        htmlFor="custom-volume"
        className="font-label-md text-on-surface-variant uppercase tracking-[0.12em] block text-[10px] md:text-xs font-bold text-center lg:text-left dark:text-outline-variant"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id="custom-volume"
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-outline-variant/30 bg-white/70 px-4 py-4 md:py-5 pr-14 text-lg md:text-2xl font-headline-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15 dark:bg-surface-container-lowest/10 dark:border-outline/30 dark:text-surface"
          aria-label={hint}
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm md:text-base font-label-md text-on-surface-variant dark:text-outline-variant">
          kg
        </span>
      </div>
    </div>
  );
}

import { SITE_COPY } from '../data/mockData';

export interface NewBadgeProps {
  readonly className?: string;
}

export function NewBadge({ className = '' }: NewBadgeProps) {
  return (
    <div
      className={`absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-tertiary text-on-tertiary p-4 md:p-6 rounded-full flex flex-col items-center justify-center text-center shadow-2xl rotate-12 ring-4 ring-surface dark:ring-on-background ${className}`}
    >
      <span className="font-headline-md text-lg md:text-2xl leading-tight">{SITE_COPY.badgeYear}</span>
      <span className="font-label-md text-[8px] md:text-[10px] uppercase tracking-tighter">
        {SITE_COPY.badgeNew}
      </span>
    </div>
  );
}

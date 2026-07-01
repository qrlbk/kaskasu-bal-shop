import { SITE_COPY } from '../data/mockData';
import type { Language } from '../data/mockData';

export interface FeatureListProps {
  language: Language;
}

export function FeatureList({ language }: Readonly<FeatureListProps>) {
  return (
    <div className="space-y-4 md:hidden border-t border-outline-variant/20 pt-8 dark:border-outline/20">
      {SITE_COPY.features.map((feature) => (
        <div key={feature.icon} className="flex items-center gap-4 text-on-surface-variant dark:text-outline-variant">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed dark:bg-secondary dark:text-on-secondary">
            <span className="material-symbols-outlined text-[20px]">{feature.icon}</span>
          </div>
          <span className="text-sm font-medium">
            {language === 'kz' ? feature.textKz : feature.textRu}
          </span>
        </div>
      ))}
    </div>
  );
}

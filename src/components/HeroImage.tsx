import { SITE_CONFIG } from '../data/mockData';

export interface HeroImageProps {
  badge: React.ReactNode;
}

export function HeroImage({ badge }: Readonly<HeroImageProps>) {
  return (
    <div className="relative order-1 lg:order-1">
      <div className="aspect-[3/4] md:aspect-[3/4.2] rounded-[2rem] md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 amber-glow dark:ring-white/10">
        <img
          alt={SITE_CONFIG.heroImageAlt}
          className="w-full h-full object-cover object-center"
          src={SITE_CONFIG.heroImageUrl}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      {badge}
    </div>
  );
}

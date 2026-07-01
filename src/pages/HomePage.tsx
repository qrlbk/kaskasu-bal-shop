import { Footer } from '../components/Footer';
import { HeroHeader } from '../components/HeroHeader';
import { HeroImage } from '../components/HeroImage';
import { Navigation } from '../components/Navigation';
import { NewBadge } from '../components/NewBadge';
import { OrderPanel } from '../components/OrderPanel';
import type { Language } from '../data/mockData';
import type { VolumeId, VolumeOption } from '../data/mockData';

export interface HomePageProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  volumeOptions: VolumeOption[];
  selectedVolumeId: VolumeId;
  onSelectVolume: (id: VolumeId) => void;
  onOrder: () => void;
}

export function HomePage({
  language,
  onLanguageChange,
  volumeOptions,
  selectedVolumeId,
  onSelectVolume,
  onOrder,
}: Readonly<HomePageProps>) {
  return (
    <div id="top">
      <Navigation language={language} onLanguageChange={onLanguageChange} />
      <main>
        <section className="min-h-screen pt-24 md:pt-32 pb-section-gap-mobile md:pb-section-gap-desktop px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <HeroImage badge={<NewBadge />} />
            <div className="order-2 lg:order-2 flex flex-col gap-8 md:gap-10 lg:sticky lg:top-32">
              <HeroHeader language={language} />
              <OrderPanel
                language={language}
                options={volumeOptions}
                selectedId={selectedVolumeId}
                onSelectVolume={onSelectVolume}
                onOrder={onOrder}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
}

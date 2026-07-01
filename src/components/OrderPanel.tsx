import type { Language, VolumeId, VolumeOption } from '../data/mockData';
import { FeatureList } from './FeatureList';
import { VolumeSelector } from './VolumeSelector';
import { WhatsAppButton } from './WhatsAppButton';

export interface OrderPanelProps {
  language: Language;
  options: VolumeOption[];
  selectedId: VolumeId;
  onSelectVolume: (id: VolumeId) => void;
  onOrder: () => void;
}

export function OrderPanel({
  language,
  options,
  selectedId,
  onSelectVolume,
  onOrder,
}: Readonly<OrderPanelProps>) {
  return (
    <div
      id="order"
      className="bg-surface-container-low p-6 md:p-10 rounded-[2rem] border border-outline-variant/30 space-y-8 md:space-y-10 shadow-sm dark:bg-surface-container dark:border-outline/30 scroll-mt-28"
    >
      <VolumeSelector options={options} selectedId={selectedId} onSelect={onSelectVolume} />
      <FeatureList language={language} />
      <WhatsAppButton onClick={onOrder} />
    </div>
  );
}

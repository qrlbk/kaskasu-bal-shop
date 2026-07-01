import { HomePage } from './pages/HomePage';
import { useLanguage } from './hooks/useLanguage';
import { useVolumeSelection } from './hooks/useVolumeSelection';
import { useWhatsAppOrder } from './hooks/useWhatsAppOrder';

export interface AppProps {
  readonly className?: string;
}

function App(_props: AppProps) {
  const { language, setLanguage } = useLanguage('kz');
  const { options, selectedId, selectedVolume, selectVolume } = useVolumeSelection('0.5');
  const { sendOrder } = useWhatsAppOrder();

  return (
    <HomePage
      language={language}
      onLanguageChange={setLanguage}
      volumeOptions={options}
      selectedVolumeId={selectedId}
      onSelectVolume={selectVolume}
      onOrder={() => sendOrder(selectedVolume, language)}
    />
  );
}

export default App;

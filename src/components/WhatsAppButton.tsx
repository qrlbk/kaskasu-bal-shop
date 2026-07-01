import { SITE_COPY } from '../data/mockData';

export interface WhatsAppButtonProps {
  onClick: () => void;
}

export function WhatsAppButton({ onClick }: Readonly<WhatsAppButtonProps>) {
  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={onClick}
        className="w-full bg-[#25D366] text-white py-5 md:py-6 rounded-full md:rounded-2xl font-bold flex flex-col items-center justify-center gap-0.5 hover:brightness-105 transition-all shadow-lg shadow-green-500/20 active:scale-[0.98] tap-highlight-transparent"
      >
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.757-4.051c1.496.886 3.056 1.355 4.674 1.356 5.403.002 9.799-4.394 9.801-9.799 0-2.618-1.02-5.08-2.871-6.932-1.851-1.852-4.312-2.872-6.931-2.872-5.405 0-9.803 4.398-9.806 9.801 0 1.688.439 3.333 1.268 4.793l-.86 3.141 3.225-.846zm9.297-5.393c-.225-.113-1.332-.656-1.54-.732-.207-.075-.359-.113-.509.113-.15.225-.584.732-.715.882-.132.15-.264.169-.489.056-.225-.112-.949-.349-1.807-1.115-.667-.595-1.117-1.33-1.248-1.555-.131-.225-.014-.346.099-.458.101-.1.225-.262.338-.394.112-.131.15-.225.224-.375.075-.15.037-.281-.019-.394-.056-.113-.509-1.227-.697-1.68-.184-.443-.371-.383-.509-.39l-.434-.006c-.15 0-.395.056-.602.281-.206.225-.788.77-.788 1.875s.806 2.175.918 2.325c.112.15 1.586 2.422 3.842 3.394.536.231.955.369 1.282.473.539.171 1.03.147 1.417.09.431-.063 1.332-.544 1.521-1.069.188-.525.188-.975.131-1.069-.056-.094-.206-.15-.431-.263z" />
          </svg>
          <span className="text-lg md:text-xl">{SITE_COPY.orderButton}</span>
        </div>
        <span className="text-[9px] md:text-[11px] font-medium opacity-90 uppercase tracking-widest">
          {SITE_COPY.orderSubtext}
        </span>
      </button>
      <p className="text-center font-label-md text-outline text-[10px] md:text-xs flex items-center justify-center gap-2 dark:text-outline-variant">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
        {SITE_COPY.processingNote}
      </p>
    </div>
  );
}

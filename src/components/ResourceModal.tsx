import { XMarkIcon, PlayIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { ModalState } from '@/types';

interface ResourceModalProps {
  modal: ModalState;
  onClose: () => void;
  onVideoError: () => void;
  onPdfFallback: () => void;
}

export function ResourceModal({ modal, onClose, onVideoError, onPdfFallback }: ResourceModalProps) {
  if (!modal.isOpen || !modal.type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-95 animate-in fade-in-90 zoom-in-90">
        <ModalHeader 
          type={modal.type}
          title={modal.title}
          onClose={onClose}
        />
        
        <ModalContent
          type={modal.type}
          src={modal.src}
          title={modal.title}
          isLoading={modal.isLoading}
          onVideoError={onVideoError}
          onPdfFallback={onPdfFallback}
        />
      </div>
    </div>
  );
}

// Sub-components for Modal
function ModalHeader({ type, title, onClose }: { type: string, title: string, onClose: () => void }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3">
        {type === 'video' ? (
          <PlayIcon className="w-5 h-5 text-green-600" />
        ) : (
          <DocumentIcon className="w-5 h-5 text-blue-600" />
        )}
        <h3 className="font-semibold text-slate-900 dark:text-white truncate">
          {title}
        </h3>
      </div>
      
      <button
        onClick={onClose}
        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
        aria-label="Close modal"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
    </div>
  );
}

function ModalContent({ type, src, title, isLoading, onVideoError, onPdfFallback }: any) {
  if (type === 'video') {
    return (
      <div className="p-6 space-y-4">
        {isLoading && <LoadingSpinner />}
        <video
          src={src}
          controls
          autoPlay
          className="w-full rounded-lg bg-black"
          onCanPlay={() => {}}
          onError={onVideoError}
        />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      {isLoading && <LoadingSpinner />}
      <iframe
        src={src}
        className="w-full h-[600px] rounded-lg border border-slate-200 dark:border-slate-700"
        title={title}
        onLoad={() => {}}
      />
      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>If the document doesn't load properly:</span>
        <button 
          onClick={onPdfFallback}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          Open in new tab
        </button>
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
    </div>
  );
}
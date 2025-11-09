import { ArrowLeftIcon, ClockIcon } from '@heroicons/react/24/outline';
import { UnitHeader } from './UnitHeader';
import { TopicsList } from './TopicsList';
import { Unit, DiscussionType } from '@/types';

interface UnitDetailViewProps {
  unit: Unit;
  onBack: () => void;
  onResourceAction: (unitTitle: string, topic: string, type: DiscussionType) => void;
}

export function UnitDetailView({ unit, onBack, onResourceAction }: UnitDetailViewProps) {
  return (
    <div className="space-y-8">
      <nav className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to All Units
        </button>
      </nav>

      <UnitHeader unit={unit} />
      <TopicsList unit={unit} onResourceAction={onResourceAction} />
    </div>
  );
}
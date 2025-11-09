import { ClockIcon } from '@heroicons/react/24/outline';
import { getUnitIcon } from '@/utils/icons';
import { Unit } from '@/types';

interface UnitHeaderProps {
  unit: Unit;
}

export function UnitHeader({ unit }: UnitHeaderProps) {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center text-2xl">
          {getUnitIcon(unit.unit_number)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              Unit {unit.unit_number}
            </span>
            <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
              <ClockIcon className="w-4 h-4" />
              {unit.periods} periods
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            {unit.unit_title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Explore learning materials for {unit.topics.length} topics
          </p>
        </div>
      </div>
    </section>
  );
}
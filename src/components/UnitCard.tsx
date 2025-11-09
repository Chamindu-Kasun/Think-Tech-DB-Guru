import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { getUnitIcon } from '@/utils/icons';
import { Unit } from '@/types';

interface UnitCardProps {
  unit: Unit;
  onSelect: (unit: Unit) => void;
}

export function UnitCard({ unit, onSelect }: UnitCardProps) {
  return (
    <button
      onClick={() => onSelect(unit)}
      className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 text-left transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
    >
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center text-2xl mx-auto transition-transform group-hover:scale-110">
          {getUnitIcon(unit.unit_number)}
        </div>
        
        <div className="space-y-3">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              Unit {unit.unit_number}
            </span>
            <h3 className="font-bold text-lg leading-tight text-slate-900 dark:text-white line-clamp-3">
              {unit.unit_title}
            </h3>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              {unit.topics.length} topics
            </span>
          </div>
        </div>

        <div className="text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Explore materials →
        </div>
      </div>
    </button>
  );
}
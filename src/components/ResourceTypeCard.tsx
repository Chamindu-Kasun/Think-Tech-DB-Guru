import { getDiscussionTypeInfo } from '@/utils/discussionTypes';
import { DiscussionType } from '@/types';

interface ResourceTypeCardProps {
  type: DiscussionType;
  unitTitle: string;
  topic: string;
  onAction: (unitTitle: string, topic: string, type: DiscussionType) => void;
}

export function ResourceTypeCard({ type, unitTitle, topic, onAction }: ResourceTypeCardProps) {
  const info = getDiscussionTypeInfo(type);

  return (
    <button
      onClick={() => onAction(unitTitle, topic, type)}
      className={`
        group relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg
        ${info.color} ${info.gradient}
        focus:outline-none focus:ring-4 focus:ring-opacity-50
        ${type === 'video' ? 'focus:ring-green-200' : type === 'tute' ? 'focus:ring-blue-200' : 'focus:ring-purple-200'}
      `}
    >
      <div className="text-center space-y-4">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${info.textColor} bg-white dark:bg-slate-800 shadow-sm`}>
          {info.icon}
        </div>
        
        <div className="space-y-2">
          <h4 className={`font-semibold text-sm ${info.textColor}`}>
            {info.title}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {info.description}
          </p>
        </div>
        
        <div className={`text-xs font-medium ${info.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
          Click to access →
        </div>
      </div>
    </button>
  );
}
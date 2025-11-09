import { ResourceTypeCard } from './ResourceTypeCard';
import { DiscussionType } from '@/types';

interface TopicCardProps {
  topic: string;
  index: number;
  unitTitle: string;
  onResourceAction: (unitTitle: string, topic: string, type: DiscussionType) => void;
}

export function TopicCard({ topic, index, unitTitle, onResourceAction }: TopicCardProps) {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
            {index + 1}
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            {topic}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-8">
          {(['video', 'tute', 'questions'] as DiscussionType[]).map((type) => (
            <ResourceTypeCard
              key={type}
              type={type}
              unitTitle={unitTitle}
              topic={topic}
              onAction={onResourceAction}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
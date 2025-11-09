import { TopicCard } from './TopicCard';
import { Unit, DiscussionType } from '@/types';

interface TopicsListProps {
  unit: Unit;
  onResourceAction: (unitTitle: string, topic: string, type: DiscussionType) => void;
}

export function TopicsList({ unit, onResourceAction }: TopicsListProps) {
  return (
    <section className="space-y-6">
      {unit.topics.map((topic: string, index: number) => (
        <TopicCard
          key={topic}
          topic={topic}
          index={index}
          unitTitle={unit.unit_title}
          onResourceAction={onResourceAction}
        />
      ))}
    </section>
  );
}
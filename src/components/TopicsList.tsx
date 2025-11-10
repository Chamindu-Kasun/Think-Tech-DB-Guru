import { TopicCard } from './TopicCard';
import { Unit, DiscussionType } from '@/types';

/**
 * Interface defining the props for the TopicsList component
 */
interface TopicsListProps {
  unit: Unit;                                                               // The unit whose topics should be displayed
  onResourceAction: (unitTitle: string, topic: string, type: DiscussionType) => void; // Callback for resource interactions
}

/**
 * TopicsList Component
 * 
 * Renders a list of topics for a specific unit as expandable TopicCard components.
 * This component serves as a container that maps over topic data and renders
 * individual TopicCard components with proper props and callbacks.
 * 
 * Key Features:
 * - Maps topic strings to interactive TopicCard components
 * - Passes through resource action callbacks to handle user interactions
 * - Maintains consistent spacing and layout for topic cards
 * - Provides topic indexing for numbered display
 * 
 * Data Flow:
 * 1. Receives unit data containing topic array
 * 2. Maps each topic string to a TopicCard component
 * 3. Passes unit context and callbacks to each card
 * 4. TopicCard handles expansion, resource loading, and user interactions
 * 
 * Layout:
 * - Vertical stack of topic cards with consistent spacing
 * - Each card is independently expandable
 * - Responsive design adapts to different screen sizes
 * 
 * @param unit - Unit object containing topics array and metadata
 * @param onResourceAction - Callback function for handling resource interactions
 */
export function TopicsList({ unit, onResourceAction }: TopicsListProps) {
  return (
    <section className="space-y-6">
      {/* Map over topics array to create individual TopicCard components */}
      {unit.topics.map((topic: string, index: number) => (
        <TopicCard
          key={topic}                    // Unique key for React rendering optimization
          topic={topic}                  // Topic name/title to display
          index={index}                  // Zero-based index for topic numbering (displays as index + 1)
          unitTitle={unit.unit_title}    // Parent unit title for resource URL construction
          onResourceAction={onResourceAction} // Callback to handle resource interactions
        />
      ))}
    </section>
  );
}
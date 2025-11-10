import { ArrowLeftIcon, ClockIcon } from '@heroicons/react/24/outline';
import { UnitHeader } from './UnitHeader';
import { TopicsList } from './TopicsList';
import { Unit, DiscussionType } from '@/types';

/**
 * Interface defining the props for the UnitDetailView component
 */
interface UnitDetailViewProps {
  unit: Unit;                                                               // The unit object to display in detail
  onBack: () => void;                                                       // Callback to return to units grid
  onResourceAction: (unitTitle: string, topic: string, type: DiscussionType) => void; // Callback for resource interactions
}

/**
 * UnitDetailView Component
 * 
 * A comprehensive view component that displays detailed information about a specific
 * educational unit and its associated topics. This component serves as the main
 * interface for exploring a unit's content structure and accessing learning materials.
 * 
 * Key Features:
 * - Navigation breadcrumb with back button to return to units overview
 * - Unit header displaying title, description, and metadata
 * - Topics list with expandable cards for each topic
 * - Resource access integration through callback propagation
 * - Consistent spacing and layout for optimal readability
 * - Responsive design that works across all device sizes
 * 
 * Component Structure:
 * 1. Navigation Bar: Back button to return to units grid
 * 2. Unit Header: Title, description, and unit metadata display
 * 3. Topics List: Expandable topics with inline resource viewing
 * 
 * Data Flow:
 * - Receives unit object with all topic and resource information
 * - Delegates unit header display to UnitHeader component
 * - Delegates topic listing and interaction to TopicsList component
 * - Propagates resource interactions up to parent through callbacks
 * 
 * Navigation Integration:
 * - Back button provides clear path to return to units overview
 * - Maintains user's browsing context and navigation state
 * - Uses semantic navigation elements for accessibility
 * 
 * Layout Design:
 * - Vertical spacing between sections for visual separation
 * - Consistent margins and padding throughout
 * - Responsive navigation that works on all screen sizes
 * - Clean, distraction-free focus on educational content
 * 
 * Accessibility Features:
 * - Semantic navigation structure with proper ARIA roles
 * - Keyboard-accessible back button with visible focus states
 * - Logical tab order for screen reader navigation
 * - Clear visual hierarchy with proper heading structure
 * 
 * @param unit - Complete unit object containing topics and metadata
 * @param onBack - Function to return to the units grid view
 * @param onResourceAction - Function to handle resource interactions from topics
 */
export function UnitDetailView({ unit, onBack, onResourceAction }: UnitDetailViewProps) {
  return (
    <div className="space-y-8">
      {/* Navigation Breadcrumb */}
      {/* Provides clear path back to units overview */}
      <nav className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
          aria-label="Return to units overview"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to All Units
        </button>
      </nav>

      {/* Unit Header Section */}
      {/* Displays unit title, description, and key information */}
      <UnitHeader unit={unit} />
      
      {/* Topics List Section */}
      {/* Renders all topics with expandable cards and inline resource viewing */}
      <TopicsList 
        unit={unit} 
        onResourceAction={onResourceAction} 
      />
    </div>
  );
}
import { ClockIcon } from '@heroicons/react/24/outline';
import { getUnitIcon } from '@/utils/icons';
import { Unit } from '@/types';

/**
 * Interface defining the props for the UnitHeader component
 */
interface UnitHeaderProps {
  unit: Unit; // The unit object containing title, number, periods, and topics
}

/**
 * UnitHeader Component
 * 
 * A prominent header component that displays comprehensive information about
 * an educational unit. Provides visual context and key metadata to help users
 * understand the scope and content of the unit they're about to explore.
 * 
 * Key Features:
 * - Large, visually prominent unit icon for instant recognition
 * - Unit number badge for quick identification
 * - Period count display for time estimation
 * - Large title display for clear content identification
 * - Topic count summary for content scope overview
 * - Responsive layout that works on all device sizes
 * - Dark mode support with theme-aware styling
 * 
 * Visual Design:
 * - Card-based layout with rounded corners and shadows
 * - Horizontal layout with icon on left, content on right
 * - Blue color scheme consistent with application theme
 * - Clear typography hierarchy with proper size relationships
 * - Balanced spacing for optimal readability
 * 
 * Content Structure:
 * 1. Unit Icon: Large visual identifier (left side)
 * 2. Unit Metadata: Number badge and period count (top right)
 * 3. Unit Title: Prominent heading with full title (center right)
 * 4. Summary Text: Topic count and description (bottom right)
 * 
 * Responsive Behavior:
 * - Maintains horizontal layout across all screen sizes
 * - Icon remains fixed size for consistency
 * - Text content scales appropriately
 * - Proper spacing and padding on mobile devices
 * 
 * Information Architecture:
 * - Quick scan elements (icon, badge) for immediate recognition
 * - Detailed content (title, description) for comprehensive context
 * - Metadata (periods, topic count) for planning and expectation setting
 * - Progressive information disclosure from general to specific
 * 
 * Accessibility Features:
 * - Semantic heading structure for screen readers
 * - Proper contrast ratios in both light and dark modes
 * - Clear visual hierarchy with appropriate font sizes
 * - Meaningful content structure for assistive technologies
 * 
 * @param unit - Unit object containing all necessary display information
 */
export function UnitHeader({ unit }: UnitHeaderProps) {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
      <div className="flex items-start gap-6">
        {/* Unit Icon Container */}
        {/* Large icon for visual identification and branding */}
        <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center text-2xl">
          {getUnitIcon(unit.unit_number)} {/* Dynamic icon based on unit number */}
        </div>
        
        {/* Unit Information Content */}
        <div className="flex-1">
          {/* Metadata Row */}
          {/* Unit badge and period information for quick context */}
          <div className="flex items-center gap-3 mb-2">
            {/* Unit number badge */}
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              Unit {unit.unit_number}
            </span>
            
            {/* Period count for time estimation */}
            <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
              <ClockIcon className="w-4 h-4" />
              {unit.periods} periods
            </span>
          </div>
          
          {/* Main Unit Title */}
          {/* Large, prominent heading for clear content identification */}
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            {unit.unit_title}
          </h2>
          
          {/* Unit Description and Summary */}
          {/* Contextual information about content scope */}
          <p className="text-slate-600 dark:text-slate-400">
            Explore learning materials for {unit.topics.length} topics
          </p>
        </div>
      </div>
    </section>
  );
}
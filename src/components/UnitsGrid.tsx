import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { UnitCard } from './UnitCard';
import { Unit } from '@/types';

/**
 * Interface defining the props for the UnitsGrid component
 */
interface UnitsGridProps {
  units: Unit[];                        // Array of unit objects to display
  onUnitSelect: (unit: Unit) => void;   // Callback when a unit is selected
}

/**
 * UnitsGrid Component
 * 
 * A responsive grid layout component that displays educational units as cards.
 * Provides an overview of all available units in the curriculum, allowing users
 * to browse and select units to dive deeper into their content.
 * 
 * Key Features:
 * - Responsive grid layout that adapts to different screen sizes
 * - Consistent card-based presentation for all units
 * - Click handling for unit selection and navigation
 * - Optimized rendering with React keys for performance
 * - Clean separation of data presentation and interaction logic
 * 
 * Grid Responsiveness:
 * - Mobile (default): 1 column - Single unit cards stacked vertically
 * - Tablet (md): 2 columns - Side-by-side unit cards
 * - Desktop (lg): 3 columns - Three units per row
 * - Large Desktop (xl): 4 columns - Four units per row for wide screens
 * 
 * Layout Structure:
 * - Each unit is rendered as an individual UnitCard component
 * - Grid gaps provide consistent spacing between cards
 * - Semantic <section> element for proper document structure
 * - Proper key usage for efficient React re-rendering
 * 
 * Data Flow:
 * 1. Receives array of unit objects from parent component
 * 2. Maps each unit to a UnitCard component
 * 3. Passes unit data and selection callback to each card
 * 4. Handles unit selection through callback propagation
 * 
 * Performance Considerations:
 * - Uses unit_number as React key for stable component identity
 * - Lightweight component focused solely on layout
 * - Delegates complex rendering logic to UnitCard children
 * 
 * @param units - Array of unit objects to render as cards
 * @param onUnitSelect - Function called when user selects a unit
 */
export function UnitsGrid({ units, onUnitSelect }: UnitsGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Map each unit to a UnitCard component */}
      {units.map((unit) => (
        <UnitCard
          key={unit.unit_number}    // Stable key for React rendering optimization
          unit={unit}               // Pass complete unit object to card
          onSelect={onUnitSelect}   // Pass selection callback to handle clicks
        />
      ))}
    </section>
  );
}
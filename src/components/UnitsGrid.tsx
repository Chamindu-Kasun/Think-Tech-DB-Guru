import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { UnitCard } from './UnitCard';
import { Unit } from '@/types';

interface UnitsGridProps {
  units: Unit[];
  onUnitSelect: (unit: Unit) => void;
}

export function UnitsGrid({ units, onUnitSelect }: UnitsGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {units.map((unit) => (
        <UnitCard
          key={unit.unit_number}
          unit={unit}
          onSelect={onUnitSelect}
        />
      ))}
    </section>
  );
}
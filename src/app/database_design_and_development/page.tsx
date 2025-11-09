'use client';

import { useState, useCallback } from 'react';
import ictLessons from '@/data/ict-lessons.json';
import { PageHeader } from '@/components/PageHeader';
import { UnitsGrid } from '@/components/UnitsGrid';
import { UnitDetailView } from '@/components/UnitDetailView';
import { ResourceModal } from '@/components/ResourceModal';
import { useResourceModal } from '@/hooks/useResourceModal';
import { Unit, DiscussionType } from '@/types';

export default function DiscussionsPage() {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const { modal, openModal, closeModal, handleVideoError, handlePdfFallback, buildResourceUrl } = useResourceModal();

  const handleResourceAction = useCallback((
    unitTitle: string, 
    topic: string, 
    discussionType: DiscussionType
  ) => {
    if (discussionType === 'video' || discussionType === 'tute') {
      openModal(unitTitle, topic, discussionType);
      return;
    }

    // For questions, open in new tab
    const pdfUrl = buildResourceUrl(unitTitle, topic, discussionType);
    const newWindow = window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    
    if (!newWindow) {
      alert('Popup blocked! Please allow popups for this site or try the download option.');
    }
  }, [openModal, buildResourceUrl]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <PageHeader 
          subject={ictLessons.subject}
          grade={ictLessons.grade}
        />

        {selectedUnit ? (
          <UnitDetailView
            unit={selectedUnit}
            onBack={() => setSelectedUnit(null)}
            onResourceAction={handleResourceAction}
          />
        ) : (
          <UnitsGrid
            units={ictLessons.units}
            onUnitSelect={setSelectedUnit}
          />
        )}
      </div>

      <ResourceModal
        modal={modal}
        onClose={closeModal}
        onVideoError={handleVideoError}
        onPdfFallback={handlePdfFallback}
      />
    </div>
  );
}
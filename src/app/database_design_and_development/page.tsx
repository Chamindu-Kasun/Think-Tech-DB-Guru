//Main Page
'use client';

import { useState, useCallback } from 'react';
import ictLessons from '@/data/ict-lessons.json';
import { PageHeader } from '@/components/PageHeader';
import { UnitsGrid } from '@/components/UnitsGrid';
import { UnitDetailView } from '@/components/UnitDetailView';
import { Unit, DiscussionType } from '@/types';

export default function DiscussionsPage() {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  const handleResourceAction = useCallback((
    unitTitle: string, 
    topic: string, 
    discussionType: DiscussionType
  ) => {

    // Handle quiz resources navigation
    if (discussionType === 'questions') {
      const folderMap = {
        video: 'Videos',
        tute: 'Tutes', 
        questions: 'Questions'
      };
      
      const S3_BASE_URL = 'https://example-bucket.s3.amazonaws.com/discussions';
      const extension = '.pdf';
      
      const encodedUnit = encodeURIComponent(unitTitle);
      const encodedTopic = encodeURIComponent(topic);
      
      const pdfUrl = `${S3_BASE_URL}/${encodedUnit}/${folderMap[discussionType]}/${encodedTopic}${extension}`;
      
      const newWindow = window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      
      if (!newWindow) {
        alert('Popup blocked! Please allow popups for this site or try the download option.');
      }
    }
    
    console.log(`Resource action: ${unitTitle} -> ${topic} -> ${discussionType}`);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <PageHeader />

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
    </div>
  );
}
'use client';

import { useState, useCallback } from 'react';
import ictLessons from '@/data/ict-lessons.json';
import { PageHeader } from '@/components/PageHeader';
import { UnitsGrid } from '@/components/UnitsGrid';
import { UnitDetailView } from '@/components/UnitDetailView';
import { Unit, DiscussionType } from '@/types';

/**
 * DiscussionsPage Component
 * 
 * Main page component for the Database Design and Development section.
 * This page has been updated to use inline resource viewing instead of modal popups.
 * 
 * Features:
 * - Two-level navigation: Units overview → Topics detail
 * - Inline resource viewing (videos, PDFs, quizzes) within topic cards
 * - Responsive design with modern UI components
 * - Dark mode support throughout the interface
 * - Educational content organized by units and topics
 * 
 * Architecture:
 * 1. Units Grid View: Shows all available units as cards
 * 2. Unit Detail View: Shows topics within a selected unit
 * 3. Topic Cards: Expandable cards with inline resource viewing
 * 4. Resource Types: Video lessons, tutorial notes, and practice quizzes
 * 
 * Data Structure:
 * - Loads from ict-lessons.json containing curriculum data
 * - Organized as: Subject → Units → Topics → Resources
 * - Resources stored in S3 with predictable URL patterns
 */
export default function DiscussionsPage() {
  // State for tracking which unit is currently selected for detailed view
  // null = show units grid, Unit object = show unit details with topics
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  /**
   * Handles resource interactions from topic cards
   * 
   * This callback is triggered when users interact with resources in topic cards.
   * Since we've moved to inline viewing, most resource loading is handled within
   * the TopicCard component itself. This callback serves as a centralized handler
   * for any remaining resource actions that need page-level coordination.
   * 
   * Current behavior:
   * - Video and PDF resources: Handled inline within TopicCard
   * - Quiz resources: Option to open in new tab (if external quiz system)
   * - Logging: Track user interactions for analytics
   * 
   * @param unitTitle - The unit containing the resource
   * @param topic - The specific topic being accessed
   * @param discussionType - Type of resource (video/tute/questions)
   */
  const handleResourceAction = useCallback((
    unitTitle: string, 
    topic: string, 
    discussionType: DiscussionType
  ) => {
    // Handle quiz resources that might need external navigation
    if (discussionType === 'questions') {
      // S3 URL construction for quiz PDFs (if using external quiz files)
      const folderMap = {
        video: 'Videos',      // Video lesson files (.mp4)
        tute: 'Tutes',        // Tutorial/notes files (.pdf)
        questions: 'Questions' // Quiz/exercise files (.pdf)
      };
      
      // Base S3 bucket URL for educational resources
      const S3_BASE_URL = 'https://example-bucket.s3.amazonaws.com/discussions';
      const extension = '.pdf';
      
      // URL encode components to handle special characters in names
      const encodedUnit = encodeURIComponent(unitTitle);
      const encodedTopic = encodeURIComponent(topic);
      
      // Construct full S3 path for quiz resource
      const pdfUrl = `${S3_BASE_URL}/${encodedUnit}/${folderMap[discussionType]}/${encodedTopic}${extension}`;
      
      // Attempt to open quiz in new tab
      const newWindow = window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      
      // Handle popup blocker scenarios
      if (!newWindow) {
        alert('Popup blocked! Please allow popups for this site or try the download option.');
      }
    }
    
    // Log resource interactions for analytics/debugging
    // This helps track which resources are being accessed most frequently
    console.log(`Resource action: ${unitTitle} -> ${topic} -> ${discussionType}`);
  }, []);

  return (
    // Main page container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Content container with responsive padding and max width */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page header showing subject and grade information */}
        <PageHeader 
          subject={ictLessons.subject}  // "Information & Communication Technology"
          grade={ictLessons.grade}      // "Grade 13 (A/L)"
        />

        {/* Conditional rendering based on navigation state */}
        {selectedUnit ? (
          // Unit Detail View - Shows topics within the selected unit
          <UnitDetailView
            unit={selectedUnit}                    // Currently selected unit data
            onBack={() => setSelectedUnit(null)}   // Return to units grid
            onResourceAction={handleResourceAction} // Handle resource interactions
          />
        ) : (
          // Units Grid View - Shows all available units as cards
          <UnitsGrid
            units={ictLessons.units}      // Array of all units from JSON data
            onUnitSelect={setSelectedUnit} // Navigate to unit detail view
          />
        )}
      </div>
    </div>
  );
}
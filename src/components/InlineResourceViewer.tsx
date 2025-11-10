import { useState, useEffect } from 'react';
import { PlayIcon, DocumentIcon, PuzzlePieceIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { DiscussionType } from '@/types';

/**
 * Interface defining the props for the InlineResourceViewer component
 */
interface InlineResourceViewerProps {
  type: DiscussionType;       // Type of resource to display (video/tute/questions)
  src?: string;               // Optional source URL for the resource
  title: string;              // Display title for the resource
  isLoading: boolean;         // Loading state indicator
  onVideoError?: () => void;  // Optional callback for video playback errors
  onPdfFallback?: () => void; // Optional callback for PDF viewing fallback
}

/**
 * InlineResourceViewer Component
 * 
 * A versatile component that displays different types of educational resources inline.
 * Supports three main resource types:
 * 
 * 1. Video Resources:
 *    - Displays HTML5 video player with controls
 *    - Handles video loading errors gracefully
 *    - Optimized sizing for inline viewing
 * 
 * 2. Tutorial/Notes (PDF):
 *    - Embeds PDF documents using iframe
 *    - Provides fallback option to open in new tab
 *    - Handles PDF loading failures
 * 
 * 3. Quiz/Questions:
 *    - Shows interactive quiz interface placeholder
 *    - Ready for quiz functionality integration
 *    - Maintains consistent styling with other resource types
 * 
 * Features:
 * - Loading states with spinners
 * - Error handling with user-friendly messages
 * - Responsive design for different screen sizes
 * - Dark mode support
 * - Consistent theming across resource types
 * 
 * @param type - The type of resource being displayed
 * @param src - URL source for video/PDF resources
 * @param title - Human-readable title for the resource
 * @param isLoading - Whether the resource is currently loading
 * @param onVideoError - Callback for video playback failures
 * @param onPdfFallback - Callback for PDF viewing fallback
 */
export function InlineResourceViewer({ 
  type, 
  src, 
  title, 
  isLoading, 
  onVideoError, 
  onPdfFallback 
}: InlineResourceViewerProps) {
  // Local error state for tracking resource loading failures
  const [hasError, setHasError] = useState(false);

  /**
   * Reset error state when resource changes
   * This ensures that switching between resources clears previous error states
   */
  useEffect(() => {
    setHasError(false);
  }, [src, type]);

  /**
   * Returns consistent styling and metadata for each resource type
   * Centralizes the visual identity and theming for different resource categories
   * 
   * @param resourceType - The type of resource to get styling for
   * @returns Object containing icon, title, colors, and CSS classes
   */
  const getResourceTypeInfo = (resourceType: DiscussionType) => {
    switch (resourceType) {
      case 'video':
        return {
          icon: <PlayIcon className="w-6 h-6" />,
          title: 'Video Lesson',
          color: 'text-green-600',          // Green theme for video content
          bgColor: 'bg-green-50 dark:bg-green-900/20',
          borderColor: 'border-green-200 dark:border-green-800'
        };
      case 'tute':
        return {
          icon: <DocumentIcon className="w-6 h-6" />,
          title: 'Tutorial Notes',
          color: 'text-blue-600',           // Blue theme for text/document content
          bgColor: 'bg-blue-50 dark:bg-blue-900/20',
          borderColor: 'border-blue-200 dark:border-blue-800'
        };
      case 'questions':
        return {
          icon: <PuzzlePieceIcon className="w-6 h-6" />,
          title: 'Practice Quiz',
          color: 'text-purple-600',         // Purple theme for interactive content
          bgColor: 'bg-purple-50 dark:bg-purple-900/20',
          borderColor: 'border-purple-200 dark:border-purple-800'
        };
    }
  };

  const resourceInfo = getResourceTypeInfo(type);

  /**
   * Loading State Display
   * Shows animated spinner with descriptive text while resource loads
   */
  if (isLoading) {
    return (
      <div className={`rounded-lg border p-6 ${resourceInfo.bgColor} ${resourceInfo.borderColor}`}>
        <div className="flex items-center justify-center py-8">
          {/* Animated loading spinner */}
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-current opacity-50"></div>
          <span className="ml-3 text-sm text-slate-600 dark:text-slate-400">
            Loading {resourceInfo.title.toLowerCase()}...
          </span>
        </div>
      </div>
    );
  }

  /**
   * Empty State Display
   * Shows when no resource source is provided - typically the initial state
   */
  if (!src) {
    return (
      <div className={`rounded-lg border-2 border-dashed p-8 text-center ${resourceInfo.bgColor} ${resourceInfo.borderColor}`}>
        {/* Large icon display */}
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-white dark:bg-slate-800 shadow-sm`}>
          <div className={resourceInfo.color}>
            {resourceInfo.icon}
          </div>
        </div>
        
        {/* Resource type title */}
        <h4 className={`text-lg font-semibold mb-2 ${resourceInfo.color}`}>
          {resourceInfo.title}
        </h4>
        
        {/* Descriptive text for each resource type */}
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {type === 'video' && 'Watch the detailed video explanation'}
          {type === 'tute' && 'View the printable tutorial notes (PDF)'}
          {type === 'questions' && 'Practice with interactive questions and exercises'}
        </p>
        
        {/* Call-to-action text */}
        <div className="text-sm text-slate-500 dark:text-slate-400">
          Click to load content
        </div>
      </div>
    );
  }

  /**
   * Error State Display
   * Shows when resource loading has failed with recovery options
   */
  if (hasError) {
    return (
      <div className={`rounded-lg border p-6 ${resourceInfo.bgColor} ${resourceInfo.borderColor}`}>
        <div className="text-center py-8">
          {/* Error icon */}
          <ExclamationTriangleIcon className="w-12 h-12 text-red-500 mx-auto mb-4" />
          
          {/* Error message */}
          <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
            Failed to load {resourceInfo.title.toLowerCase()}
          </h4>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            There was an error loading this resource.
          </p>
          
          {/* PDF-specific fallback option */}
          {type === 'tute' && onPdfFallback && (
            <button 
              onClick={onPdfFallback}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Try opening in new tab
            </button>
          )}
        </div>
      </div>
    );
  }

  /**
   * Main Resource Display
   * Renders the actual resource content based on type
   */
  return (
    <div className={`rounded-lg border overflow-hidden ${resourceInfo.bgColor} ${resourceInfo.borderColor}`}>
      {/* Resource Header - Shows title and type icon */}
      <div className="px-4 py-3 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-3">
          <div className={resourceInfo.color}>
            {resourceInfo.icon}
          </div>
          <h4 className="font-semibold text-slate-900 dark:text-white">
            {title}
          </h4>
        </div>
      </div>

      {/* Resource Content Area */}
      <div className="p-4">
        {/* Video Resource Display */}
        {type === 'video' && (
          <div className="space-y-4">
            <video
              src={src}
              controls
              className="w-full rounded-lg bg-black"
              onError={() => {
                setHasError(true);
                onVideoError?.();
              }}
              style={{ maxHeight: '400px' }} // Prevent videos from becoming too large
            />
          </div>
        )}
        
        {/* PDF/Tutorial Resource Display */}
        {type === 'tute' && (
          <div className="space-y-4">
            {/* Embedded PDF viewer */}
            <iframe
              src={src}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-700"
              style={{ height: '500px' }} // Fixed height for consistent layout
              title={title}
              onError={() => setHasError(true)}
            />
            
            {/* PDF viewing help text and fallback option */}
            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>If the document doesn't load properly:</span>
              {onPdfFallback && (
                <button 
                  onClick={onPdfFallback}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Open in new tab
                </button>
              )}
            </div>
          </div>
        )}
        
        {/* Quiz/Questions Resource Display */}
        {type === 'questions' && (
          <div className="space-y-4">
            {/* Quiz interface placeholder - ready for integration */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-center">
                {/* Quiz icon */}
                <PuzzlePieceIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                
                {/* Quiz title */}
                <h4 className="text-lg font-semibold text-purple-600 mb-2">
                  Interactive Quiz
                </h4>
                
                {/* Quiz description */}
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Test your knowledge with practice questions
                </p>
                
                {/* Start quiz button - ready for quiz functionality integration */}
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
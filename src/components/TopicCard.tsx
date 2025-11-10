import { useState, useCallback } from 'react';
import { ChevronDownIcon, ChevronUpIcon, PlayIcon, DocumentIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { InlineResourceViewer } from './InlineResourceViewer';
import { DiscussionType } from '@/types';

/**
 * Interface defining the props for the TopicCard component
 */
interface TopicCardProps {
  topic: string;              // The topic title to display
  index: number;              // Zero-based index for numbering topics
  unitTitle: string;          // The unit this topic belongs to
  onResourceAction: (unitTitle: string, topic: string, type: DiscussionType) => void; // Callback for resource actions
}

// Base URL for S3 bucket containing educational resources
const S3_BASE_URL = 'https://example-bucket.s3.amazonaws.com/discussions';

/**
 * TopicCard Component
 * 
 * An expandable card component that displays a topic and its associated learning resources.
 * Features:
 * - Collapsible content with smooth animations
 * - Three resource types: Video, Notes (PDF), and Quiz
 * - Inline resource viewing without modal popups
 * - Tab-based navigation between resource types
 * - Dynamic resource loading with loading states
 * 
 * @param topic - The topic name to display
 * @param index - Topic number for visual ordering
 * @param unitTitle - Parent unit for resource URL construction
 * @param onResourceAction - Callback when user interacts with resources
 */
export function TopicCard({ topic, index, unitTitle, onResourceAction }: TopicCardProps) {
  // State for controlling card expansion/collapse
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Currently selected resource type (video, notes, or quiz)
  const [currentResourceType, setCurrentResourceType] = useState<DiscussionType>('video');
  
  // URL of the currently loaded resource
  const [resourceSrc, setResourceSrc] = useState<string>('');
  
  // Loading state for resource fetching
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Constructs the S3 URL for a specific resource
   * 
   * @param unitTitle - The unit name for folder structure
   * @param topic - The topic name for file naming
   * @param discussionType - Type of resource (video/tute/questions)
   * @returns Complete S3 URL for the resource
   */
  const buildResourceUrl = useCallback((
    unitTitle: string, 
    topic: string, 
    discussionType: DiscussionType
  ): string => {
    // Map discussion types to S3 folder names
    const folderMap = {
      video: 'Videos',      // Video lessons
      tute: 'Tutes',        // Tutorial PDFs
      questions: 'Questions' // Quiz/exercise PDFs
    };
    
    // File extensions based on resource type
    const extension = discussionType === 'video' ? '.mp4' : '.pdf';
    
    // URL encode components to handle special characters
    const encodedUnit = encodeURIComponent(unitTitle);
    const encodedTopic = encodeURIComponent(topic);
    
    // Construct full S3 path: /unit/folder/topic.extension
    return `${S3_BASE_URL}/${encodedUnit}/${folderMap[discussionType]}/${encodedTopic}${extension}`;
  }, []);

  /**
   * Handles resource type tab clicks
   * - Sets the active resource type
   * - Expands the card if collapsed
   * - Initiates resource loading
   * - Triggers the parent callback
   * 
   * @param type - The selected resource type
   */
  const handleResourceTypeClick = (type: DiscussionType) => {
    // Update current resource type
    setCurrentResourceType(type);
    
    // Auto-expand card if not already expanded
    if (!isExpanded) {
      setIsExpanded(true);
    }
    
    // Start loading process
    setIsLoading(true);
    const url = buildResourceUrl(unitTitle, topic, type);
    setResourceSrc(url);
    
    // Simulate loading time (remove in production or replace with actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Notify parent component of resource interaction
    onResourceAction(unitTitle, topic, type);
  };

  /**
   * Error handler for video playback failures
   * Displays user-friendly error message with troubleshooting tips
   */
  const handleVideoError = useCallback(() => {
    setIsLoading(false);
    alert(`Failed to load video. Please check:\n• Network connection\n• File availability`);
  }, []);

  /**
   * Fallback handler for PDF viewing issues
   * Opens the PDF in a new browser tab
   */
  const handlePdfFallback = useCallback(() => {
    if (resourceSrc) {
      window.open(resourceSrc, '_blank', 'noopener,noreferrer');
    }
  }, [resourceSrc]);

  /**
   * Returns styling and metadata for each resource type
   * Centralizes the visual identity for each resource category
   * 
   * @param type - The resource type to get info for
   * @returns Object containing icon, title, colors, and styling classes
   */
  const getResourceTypeInfo = (type: DiscussionType) => {
    switch (type) {
      case 'video':
        return {
          icon: <PlayIcon className="w-5 h-5" />,
          title: 'Video Lesson',
          description: 'Detailed video explanation',
          color: 'text-green-600',          // Green theme for videos
          bgColor: 'bg-green-50 dark:bg-green-900/20',
          borderColor: 'border-green-200 dark:border-green-800'
        };
      case 'tute':
        return {
          icon: <DocumentIcon className="w-5 h-5" />,
          title: 'View Notes',
          description: 'Printable tutorial (PDF)',
          color: 'text-blue-600',           // Blue theme for notes
          bgColor: 'bg-blue-50 dark:bg-blue-900/20',
          borderColor: 'border-blue-200 dark:border-blue-800'
        };
      case 'questions':
        return {
          icon: <PuzzlePieceIcon className="w-5 h-5" />,
          title: 'Quiz',
          description: 'Question set & exercises',
          color: 'text-purple-600',         // Purple theme for quizzes
          bgColor: 'bg-purple-50 dark:bg-purple-900/20',
          borderColor: 'border-purple-200 dark:border-purple-800'
        };
    }
  };

  return (
    <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Topic Header - Always Visible */}
      <div 
        className="p-6 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          {/* Topic Title with Number Badge */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              {topic}
            </h3>
          </div>
          
          {/* Expand/Collapse Indicator */}
          <div className="flex items-center gap-2">
            {isExpanded ? (
              <ChevronUpIcon className="w-5 h-5 text-slate-500" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-slate-500" />
            )}
          </div>
        </div>
      </div>
      
      {/* Expandable Content - Resource Tabs and Viewer */}
      {isExpanded && (
        <div className="border-t border-slate-200 dark:border-slate-700">
          {/* Resource Type Navigation Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-700">
            {(['video', 'tute', 'questions'] as DiscussionType[]).map((type) => {
              const info = getResourceTypeInfo(type);
              const isActive = currentResourceType === type;
              
              return (
                <button
                  key={type}
                  onClick={() => handleResourceTypeClick(type)}
                  className={`
                    flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors
                    ${isActive 
                      ? `${info.color} border-current bg-slate-50 dark:bg-slate-700/50` 
                      : 'text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                    }
                  `}
                >
                  <div className="flex items-center justify-center gap-2">
                    {info.icon}
                    <span>{info.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Resource Content Display Area */}
          <div className="p-6">
            <InlineResourceViewer
              type={currentResourceType}
              src={currentResourceType === currentResourceType ? resourceSrc : ''}
              title={`${topic} — ${getResourceTypeInfo(currentResourceType).title}`}
              isLoading={isLoading}
              onVideoError={handleVideoError}
              onPdfFallback={handlePdfFallback}
            />
          </div>
        </div>
      )}
    </article>
  );
}
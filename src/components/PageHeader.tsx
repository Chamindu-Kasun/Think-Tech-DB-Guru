import { BookOpenIcon } from '@heroicons/react/24/outline';

/**
 * Interface defining the props for the PageHeader component
 */
interface PageHeaderProps {
  subject: string; // The academic subject name (e.g., "Information & Communication Technology")
  grade: string;   // The grade level (e.g., "13" for A/L, "10" for O/L)
}

/**
 * PageHeader Component
 * 
 * A reusable header component that displays the subject and grade information
 * for educational content pages. Provides a consistent header design across
 * different sections of the application.
 * 
 * Key Features:
 * - Responsive design that adapts to different screen sizes
 * - Gradient text effect for visual appeal
 * - Subject and grade display with book icon
 * - Resource type indicators (Videos, Tutorials, Practice Questions)
 * - Centered layout with proper spacing
 * - Dark mode support with theme-aware colors
 * 
 * Layout Structure:
 * 1. Main Title: "Learning Resources" with gradient text effect
 * 2. Subject Line: Book icon + subject name + grade level
 * 3. Resource Types: List of available resource types
 * 
 * Responsive Behavior:
 * - Mobile: Stacked vertical layout for subject and resource types
 * - Desktop: Horizontal layout with separator dots
 * 
 * Design Elements:
 * - Gradient text using blue-to-purple color scheme
 * - Heroicons for consistent iconography
 * - Proper semantic HTML with header tag
 * - Accessible color contrast in both light and dark modes
 * 
 * @param subject - The academic subject name to display
 * @param grade - The grade level to display
 */
export function PageHeader({ subject, grade }: PageHeaderProps) {
  return (
    <header className="mb-12 text-center">
      {/* Main page title with gradient text effect */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
        Learning Resources
      </h1>
      
      {/* Subject and resource type information */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg text-slate-600 dark:text-slate-400">
        {/* Subject and grade display with book icon */}
        <span className="flex items-center gap-2">
          <BookOpenIcon className="w-5 h-5" />
          {subject} - Grade {grade}
        </span>
        
        {/* Separator dot - hidden on mobile, visible on desktop */}
        <span className="hidden sm:block">•</span>
        
        {/* Available resource types */}
        <span>Videos • Tutorials • Practice Questions</span>
      </div>
    </header>
  );
}
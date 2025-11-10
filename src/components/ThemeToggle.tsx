'use client';

import * as React from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { useTheme } from './ThemeProvider';

/**
 * Interface defining the props for the ThemeToggle component
 */
interface ThemeToggleProps {
  className?: string;  // Optional additional CSS classes for styling
  showLabel?: boolean; // Whether to show text label next to the icon
}

/**
 * ThemeToggle Component
 * 
 * A button component that allows users to cycle through different theme modes.
 * Integrates with the ThemeProvider to manage global theme state across the application.
 * 
 * Key Features:
 * - Cycles through three theme modes: Light → Dark → System → Light (repeat)
 * - Visual feedback with appropriate icons for each theme state
 * - Optional text labels for better accessibility and clarity
 * - Responsive design that adapts to different screen sizes
 * - SSR-safe rendering with hydration protection
 * - Hover states and smooth transitions for better UX
 * - Accessibility features with descriptive titles and keyboard support
 * 
 * Theme Cycle:
 * 1. Light Mode: Shows sun icon, switches to dark mode on click
 * 2. Dark Mode: Shows moon icon, switches to system mode on click
 * 3. System Mode: Shows computer icon, switches to light mode on click
 * 
 * Visual States:
 * - Each theme has a distinct icon (sun, moon, computer)
 * - Optional text label showing current theme name
 * - Hover effects for interactive feedback
 * - Dark mode styling that adapts to current theme
 * 
 * Accessibility:
 * - Descriptive title attribute showing next theme in cycle
 * - Keyboard accessible button element
 * - Sufficient color contrast in all theme modes
 * - Meaningful icons with consistent sizing
 * 
 * @param className - Additional CSS classes for custom styling
 * @param showLabel - Whether to display text label (default: true)
 */
export function ThemeToggle({ className = '', showLabel = true }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  
  // Track component mount state to prevent SSR hydration mismatches
  const [mounted, setMounted] = React.useState(false);

  /**
   * Effect to mark component as mounted
   * Prevents hydration issues by ensuring client-side only rendering of theme state
   */
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything during SSR to prevent hydration mismatches
  if (!mounted) {
    return null;
  }

  /**
   * Handles theme switching logic
   * Cycles through the three available theme modes in order
   */
  const toggleTheme = () => {
    console.log('Current theme:', theme);
    
    if (theme === 'light') {
      console.log('Switching to dark');
      setTheme('dark');
    } else if (theme === 'dark') {
      console.log('Switching to system');
      setTheme('system');
    } else {
      console.log('Switching to light');
      setTheme('light');
    }
  };

  /**
   * Returns the appropriate icon for the current theme
   * @returns JSX element with the theme-specific icon
   */
  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon className="h-4 w-4" />;
      case 'dark':
        return <MoonIcon className="h-4 w-4" />;
      case 'system':
        return <ComputerDesktopIcon className="h-4 w-4" />;
      default:
        return <SunIcon className="h-4 w-4" />; // Fallback to light icon
    }
  };

  /**
   * Returns the text label for the current theme
   * @returns String representing the current theme name
   */
  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return 'System';
      default:
        return 'Light'; // Fallback to light label
    }
  };

  /**
   * Returns the next theme in the cycle for the title attribute
   * @returns String representing the next theme name
   */
  const getNextTheme = () => {
    switch (theme) {
      case 'light':
        return 'dark';
      case 'dark':
        return 'system';
      case 'system':
        return 'light';
      default:
        return 'dark';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
        text-gray-700 dark:text-gray-300 
        hover:bg-gray-100 dark:hover:bg-gray-800
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-900
        ${className}
      `}
      title={`Switch to ${getNextTheme()} mode`} // Accessibility: shows what will happen on click
      aria-label={`Current theme: ${getLabel()}. Click to switch to ${getNextTheme()} mode.`}
    >
      {/* Theme icon - always visible */}
      {getIcon()}
      
      {/* Optional text label - controlled by showLabel prop */}
      {showLabel && (
        <span className="text-sm font-medium">{getLabel()}</span>
      )}
    </button>
  );
}

export default ThemeToggle;
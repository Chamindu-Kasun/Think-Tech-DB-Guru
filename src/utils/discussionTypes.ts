import React from 'react';
import { VideoCameraIcon, DocumentTextIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { DiscussionType } from '@/types';

/**
 * Discussion Type Configuration Utility
 * 
 * Provides centralized configuration for the three types of educational resources
 * available throughout the application. Each resource type has its own distinct
 * visual identity including icons, colors, and descriptive text.
 * 
 * This utility ensures consistent presentation of resource types across all
 * components while maintaining a single source of truth for visual styling.
 * 
 * Resource Types:
 * 1. Video Lessons - Interactive video content with explanations
 * 2. Tutorials - PDF documents with detailed instructions and notes
 * 3. Practice Questions - Interactive exercises and assessment materials
 * 
 * Color Themes:
 * - Video: Green theme (associated with play/go/success)
 * - Tutorial: Blue theme (associated with information/documentation)
 * - Questions: Purple theme (associated with creativity/thinking)
 * 
 * @param type - The discussion/resource type to get configuration for
 * @returns Configuration object with visual and textual properties
 */
export const getDiscussionTypeInfo = (type: DiscussionType) => {
  /**
   * Configuration object mapping each resource type to its visual properties
   * Each configuration includes:
   * - icon: React element with appropriate Heroicon
   * - title: User-friendly name for the resource type
   * - description: Brief explanation of what the resource contains
   * - color: Border color classes for theming
   * - textColor: Text color classes with dark mode variants
   * - gradient: Background gradient classes for enhanced visual appeal
   */
  const config = {
    // Video Learning Resources
    video: {
      icon: React.createElement(VideoCameraIcon, { className: "w-5 h-5" }),
      title: 'Video Lesson',
      description: 'Detailed video explanation',
      color: 'border-green-200 dark:border-green-800',              // Green border theme
      textColor: 'text-green-700 dark:text-green-300',             // Green text with dark mode
      gradient: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20' // Subtle green gradient
    },
    
    // Tutorial/Documentation Resources
    tute: {
      icon: React.createElement(DocumentTextIcon, { className: "w-5 h-5" }),
      title: 'Tutorial',
      description: 'Printable tutorial (PDF)',
      color: 'border-blue-200 dark:border-blue-800',               // Blue border theme
      textColor: 'text-blue-700 dark:text-blue-300',              // Blue text with dark mode
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20' // Subtle blue gradient
    },
    
    // Practice Questions and Exercises
    questions: {
      icon: React.createElement(PencilSquareIcon, { className: "w-5 h-5" }),
      title: 'Practice Questions',
      description: 'Question set & exercises',
      color: 'border-purple-200 dark:border-purple-800',           // Purple border theme
      textColor: 'text-purple-700 dark:text-purple-300',          // Purple text with dark mode
      gradient: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20' // Subtle purple gradient
    }
  };
  
  return config[type];
};
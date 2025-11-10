import { ReactElement } from 'react';

/**
 * Educational Unit Interface
 * 
 * Defines the structure of an educational unit within the curriculum.
 * Each unit represents a major topic or chapter in the course material.
 */
export interface Unit {
  unit_number: number;    // Sequential number identifying the unit (e.g., 1, 2, 3)
  unit_title: string;     // Full descriptive title of the unit
  periods: number;        // Number of class periods allocated to this unit
  topics: string[];       // Array of topic titles within this unit
}

/**
 * Discussion/Resource Type Union
 * 
 * Defines the three types of learning resources available for each topic.
 * Each type provides a different learning modality to accommodate various learning styles.
 */
export type DiscussionType = 'video' | 'tute' | 'questions';
// 'video' - Video lessons with visual and auditory learning
// 'tute' - Tutorial documents (PDFs) for reading and reference
// 'questions' - Practice questions and exercises for assessment

/**
 * Discussion Type Information Interface
 * 
 * Contains all the visual and textual information needed to display
 * a specific resource type in the UI. Used for consistent theming
 * and presentation across different components.
 */
export interface DiscussionTypeInfo {
  icon: ReactElement;     // React icon component for visual representation
  title: string;          // Human-readable title for the resource type
  description: string;    // Brief description of what the resource contains
  color: string;          // Primary color for theming (CSS class)
  textColor: string;      // Text color for contrast (CSS class)
  gradient: string;       // Gradient background for enhanced visuals (CSS class)
}

/**
 * Modal State Interface
 * 
 * Manages the state of modal dialogs used for displaying resources.
 * Note: This interface is maintained for legacy compatibility but may
 * be deprecated as the application moves to inline resource viewing.
 */
export interface ModalState {
  isOpen: boolean;                    // Whether the modal is currently visible
  type: 'video' | 'pdf' | null;     // Type of content being displayed in modal
  src: string;                       // URL source of the content
  title: string;                     // Title to display in modal header
  isLoading: boolean;                // Whether content is currently loading
}
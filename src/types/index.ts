import { ReactElement } from 'react';

export interface Unit {
  unit_number: number;
  unit_title: string;
  periods: number;
  topics: string[];
}

export type DiscussionType = 'video' | 'tute' | 'questions';

export interface DiscussionTypeInfo {
  icon: ReactElement;
  title: string;
  description: string;
  color: string;
  textColor: string;
  gradient: string;
}

export interface ModalState {
  isOpen: boolean;
  type: 'video' | 'pdf' | null;
  src: string;
  title: string;
  isLoading: boolean;
}
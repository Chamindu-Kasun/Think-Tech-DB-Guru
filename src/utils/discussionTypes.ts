import React from 'react';
import { VideoCameraIcon, DocumentTextIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { DiscussionType } from '@/types';

export const getDiscussionTypeInfo = (type: DiscussionType) => {
  const config = {
    video: {
      icon: React.createElement(VideoCameraIcon, { className: "w-5 h-5" }),
      title: 'Video Lesson',
      description: 'Detailed video explanation',
      color: 'border-green-200 dark:border-green-800',
      textColor: 'text-green-700 dark:text-green-300',
      gradient: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'
    },
    tute: {
      icon: React.createElement(DocumentTextIcon, { className: "w-5 h-5" }),
      title: 'Tutorial',
      description: 'Printable tutorial (PDF)',
      color: 'border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-700 dark:text-blue-300',
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20'
    },
    questions: {
      icon: React.createElement(PencilSquareIcon, { className: "w-5 h-5" }),
      title: 'Practice Questions',
      description: 'Question set & exercises',
      color: 'border-purple-200 dark:border-purple-800',
      textColor: 'text-purple-700 dark:text-purple-300',
      gradient: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20'
    }
  };
  
  return config[type];
};
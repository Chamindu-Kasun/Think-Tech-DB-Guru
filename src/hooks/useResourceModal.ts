import { useState, useCallback } from 'react';
import { ModalState, DiscussionType } from '@/types';

const S3_BASE_URL = 'https://example-bucket.s3.amazonaws.com/discussions';

export const useResourceModal = () => {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: null,
    src: '',
    title: '',
    isLoading: false
  });

  const buildResourceUrl = useCallback((
    unitTitle: string, 
    topic: string, 
    discussionType: DiscussionType
  ): string => {
    const folderMap = {
      video: 'Videos',
      tute: 'Tutes',
      questions: 'Questions'
    };
    
    const extension = discussionType === 'video' ? '.mp4' : '.pdf';
    const encodedUnit = encodeURIComponent(unitTitle);
    const encodedTopic = encodeURIComponent(topic);
    
    return `${S3_BASE_URL}/${encodedUnit}/${folderMap[discussionType]}/${encodedTopic}${extension}`;
  }, []);

  const openModal = useCallback((
    unitTitle: string, 
    topic: string, 
    discussionType: DiscussionType
  ) => {
    const url = buildResourceUrl(unitTitle, topic, discussionType);
    const modalType = discussionType === 'video' ? 'video' : 'pdf';
    const title = `${topic} — ${discussionType === 'video' ? 'Video Lesson' : 'Tutorial'}`;
    
    setModal({
      isOpen: true,
      type: modalType,
      src: url,
      title,
      isLoading: true
    });
  }, [buildResourceUrl]);

  const closeModal = useCallback(() => {
    setModal(prev => ({ ...prev, isOpen: false }));
    setTimeout(() => {
      setModal({
        isOpen: false,
        type: null,
        src: '',
        title: '',
        isLoading: false
      });
    }, 300);
  }, []);

  const handleVideoError = useCallback(() => {
    setModal(prev => ({ ...prev, isLoading: false }));
    alert(`Failed to load video. Please check:\n• Network connection\n• File availability\n• URL: ${modal.src}`);
  }, [modal.src]);

  const handlePdfFallback = useCallback(() => {
    window.open(modal.src, '_blank', 'noopener,noreferrer');
  }, [modal.src]);

  return {
    modal,
    openModal,
    closeModal,
    handleVideoError,
    handlePdfFallback,
    buildResourceUrl
  };
};
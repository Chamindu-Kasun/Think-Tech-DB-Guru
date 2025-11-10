'use client';

import React, { createContext, useState } from 'react';

// Context types
export interface QuizLockContextType {
  locked: boolean;                    // Current lock state
  setLocked: (v: boolean) => void;   // Function to update lock state
}

// Default context values
export const QuizLockContext = createContext<QuizLockContextType>({
  locked: false,
  setLocked: () => {},
});

// Provider component to manage quiz lock state across the app
export function QuizLockProvider({ children }: { children: React.ReactNode }) {
  const [locked, setLocked] = useState(false);
  
  return (
    <QuizLockContext.Provider value={{ locked, setLocked }}>
      {children}
    </QuizLockContext.Provider>
  );
}
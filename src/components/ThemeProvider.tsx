// Theme context provider for managing light/dark/system themes across the application
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;  
  defaultTheme?: Theme;       // Default theme if none stored
  storageKey?: string;        // localStorage key for persistence
};

type ThemeProviderState = {
  theme: Theme;              // Current theme preference
  setTheme: (theme: Theme) => void; // Function to update theme
};

// Initial context state
const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'think-tech-theme',
  ...props
}: ThemeProviderProps) {
  // Initialize theme from localStorage or use default
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme; // SSR fallback
    
    try {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    } catch {
      return defaultTheme; // localStorage unavailable
    }
  });

  // Apply theme changes to DOM
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');

    // Resolve system theme to actual light/dark
    let actualTheme = theme;
    if (theme === 'system') {
      actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    }

    // Apply theme class and color scheme
    root.classList.add(actualTheme);
    root.style.colorScheme = actualTheme;
  }, [theme]);

  // Context value with theme state and setter
  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch (error) {
        console.warn('Failed to save theme:', error);
      }
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Hook to access theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
// Main layout component
'use client';

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

interface LayoutWrapperProps {
  children: React.ReactNode; // Main content to render inside layout
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    // Root container
    <div 
      className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900" 
      style={{ 
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      {/* Mobile header - visible only on small screens */}
      <div 
        className="md:hidden flex items-center justify-between py-4 px-6 border-b shadow-sm" 
        style={{ 
          backgroundColor: 'var(--background)',
          borderColor: 'var(--border)'
        }}
      >
        {/* title for mobile */}
        <div className="flex-1 flex justify-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Database Guru
          </h1>
        </div>
        
        {/* Theme toggle for mobile */}
        <div className="flex-shrink-0">
          <ThemeToggle 
            showLabel={false}
            className="p-2"
          />
        </div>
      </div>
      
      {/* Main content area with sidebar and scrollable content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
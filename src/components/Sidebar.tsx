'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

interface SidebarItem {
  name: string;
  path: string;
  icon: string;
}

const sidebarItems: SidebarItem[] = [
  {
    name: "Home",
    path: "/about",
    icon: "ℹ️"
  },
  {
    name: "Database Design & Development",
    path: "/database_design_and_development",
    icon: "🗄️",
  },
  {
    name: "Questions",
    path: "/quiz-english",
    icon: "❓",
  },
  {
    name: "Contact",
    path: "/contact",
    icon: "📞"
  }
];

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Mobile header + hamburger (visible on small screens) - fixed to top */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <header className="flex items-center justify-between px-3 py-2 border-b bg-white dark:bg-slate-900 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              <svg className="h-6 w-6 text-slate-700 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <span className="text-sm font-semibold">Think Tech</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle showLabel={false} />
          </div>
        </header>

        {/* Mobile slide-over menu */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <div className="absolute left-0 top-0 h-full w-80 bg-white dark:bg-slate-900 shadow-lg p-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                  <svg className="h-6 w-6 text-slate-700 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile nav */}
              <nav className="space-y-2">
                {sidebarItems.map((item) => {
                  const isActive = pathname === item.path;

                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        handleItemClick(item.path);
                        setMobileOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-slate-800 ${isActive ? 'bg-blue-100 text-blue-600' : ''
                        }`}
                    >
                      <div className="text-lg">{item.icon}</div>
                      <span className="font-medium break-words leading-tight">{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar - hidden on small screens */}
      <div
        className={`
          sidebar
          hidden md:flex
          ${isCollapsed ? 'w-16' : 'w-16 md:w-64'} 
          border-r 
          transition-all duration-300 ease-in-out flex flex-col shadow-lg
        `}
        style={{ height: '100vh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b sidebar-item flex-shrink-0 hidden md:flex">
          {!isCollapsed && (
            <h2 className="text-xl font-bold sidebar-item hidden md:block">
              Think Tech
            </h2>
          )}
          <button
            onClick={toggleSidebar}
            className="sidebar-item p-2 rounded-lg transition-colors hidden md:block"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRightIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronLeftIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() => handleItemClick(item.path)}
                className={`
                  sidebar-item w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200
                  ${isActive
                    ? 'bg-blue-100 text-blue-600 border-r-2 border-blue-500'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                  ${isCollapsed ? 'justify-center' : 'justify-center md:justify-start'}
                  group
                `}
                title={isCollapsed ? item.name : undefined}
              >
                <div className="flex items-center">
                  {/* Icon */}
                  <div className={`
                    flex items-center justify-center text-lg
                    ${isCollapsed ? '' : 'md:mr-3'}
                  `}>
                    {item.icon}
                  </div>
                  {/* Name */}
                  {!isCollapsed && (
                    <span className="font-medium break-words hidden md:inline leading-tight">
                      {item.name}
                    </span>
                  )}
                </div>

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-16 ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {item.name}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="sidebar-item p-4 border-t space-y-3 flex-shrink-0">
          {/* Theme Toggle */}
          <div className="hidden md:flex justify-center">
            <ThemeToggle
              showLabel={!isCollapsed}
              className={isCollapsed ? 'px-2 py-2' : ''}
            />
          </div>

          {!isCollapsed && (
            <div className="text-xs text-center hidden md:block" style={{ color: 'var(--sidebar-text)', opacity: 0.6 }}>
              © All rights reserved.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
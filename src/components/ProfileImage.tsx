// Profile Image Component with Rotating Logo and Image
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ProfileImageProps {
  isVisible: boolean;
}

export default function ProfileImage({ isVisible }: ProfileImageProps) {
  return (
    <div className={`flex justify-center lg:justify-end transition-all duration-1500 delay-500 ${
      isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3'
    }`}>
      <div className="relative">
        {/* Floating Decorative Elements */}
        <FloatingElements />
        
        {/* Main Image Container */}
        <div className="relative">
          <GradientBorder />
          <LogoDisplay />
          <AchievementBadge />
        </div>
      </div>
    </div>
  );
}

// Animated Floating Elements
function FloatingElements() {
  return (
    <>
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce" />
      <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" />
      <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping" />
    </>
  );
}

// Gradient Border Effect
function GradientBorder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-full p-1">
      <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full" />
    </div>
  );
}

// Elegant Logo Display Component with Rotation
function LogoDisplay() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo(prev => !prev);
    }, 2000); // Rotate every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group relative w-80 h-80 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-white/80 via-blue-50/40 to-purple-50/60 dark:from-gray-800/90 dark:via-gray-900/70 dark:to-indigo-900/60 flex items-center justify-center border border-white/20 dark:border-gray-600/30 backdrop-blur-sm transition-all duration-700 hover:shadow-3xl hover:scale-105">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-16 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-indigo-400/60 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-12 right-12 w-1 h-1 bg-blue-300/60 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      {/* Rotating Ring Effect */}
      <div className="absolute inset-4 border border-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-full animate-spin-slow"></div>
      
      {/* Logo Content with Fade Transition */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
        showLogo ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="relative text-center z-10 group-hover:scale-110 transition-transform duration-500">
          {/* Brand Name */}
          <div className="relative mb-4">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent tracking-tight leading-none">
              Think Tech
            </div>
            {/* Subtle underline */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 opacity-70"></div>
          </div>
          
          {/* Tagline */}
          <div className="text-lg font-medium text-gray-700 dark:text-gray-300 tracking-wider opacity-90">
            <span className="inline-block transform transition-transform duration-300 hover:scale-110">Design</span>
            <span className="mx-2 text-blue-500">•</span>
            <span className="inline-block transform transition-transform duration-300 hover:scale-110 delay-100">Develop</span>
            <span className="mx-2 text-purple-500">•</span>
            <span className="inline-block transform transition-transform duration-300 hover:scale-110 delay-200">Master</span>
          </div>
        </div>
      </div>

      {/* Profile Image with Fade Transition */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        showLogo ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src="/assets/profile-picture.JPG"
            alt="Chamindu Kasun Karunarathna - IT Instructor"
            width={320}
            height={320}
            className="w-full h-full object-cover object-top"
            priority
          />
          {/* Overlay gradient for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </div>
      
      {/* Elegant Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-indigo-400/0 group-hover:from-blue-400/5 group-hover:via-purple-400/5 group-hover:to-indigo-400/5 transition-all duration-700"></div>
    </div>
  );
}

// Elegant Achievement Badge
function AchievementBadge() {
  return (
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-8 py-3 rounded-full shadow-xl border-2 border-white/20 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-2xl">
        {/* Elegant glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-indigo-400/0 group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-indigo-400/20 rounded-full transition-all duration-300"></div>
        
        <div className="relative text-center">
          <div className="text-xs opacity-90 font-light tracking-wide">Information Technology</div>
        </div>
        
        {/* Subtle animated dots */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
}
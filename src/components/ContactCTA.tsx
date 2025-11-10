'use client';

import { RocketLaunchIcon } from '@heroicons/react/24/outline';

interface ContactCTAProps {
  isVisible: boolean;
}

export default function ContactCTA({ isVisible }: ContactCTAProps) {
  return (
    <section className="text-center mb-16">
      <div className={`transition-all duration-1500 delay-2000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
          <span className="font-semibold text-lg">Start Learning Database Design Today</span>
          <RocketLaunchIcon className="w-6 h-6" />
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
          Get support: +94 764629040
        </p>
      </div>
    </section>
  );
}
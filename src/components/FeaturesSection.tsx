'use client';

import { CodeBracketIcon, BeakerIcon, StarIcon } from '@heroicons/react/24/outline';

// FeaturesSection component - Displays three key value propositions in card format

interface FeaturesSectionProps {
  isVisible: boolean;
}

export default function FeaturesSection({ isVisible }: FeaturesSectionProps) {
  const features = [
    {
      icon: CodeBracketIcon,
      title: "Database Design",
      description: "Learn relational database design, normalization, ER modeling, and schema optimization for efficient data storage.",
      gradient: "from-blue-500 to-purple-600",
      delay: '1100ms'
    },
    {
      icon: BeakerIcon,
      title: "SQL Mastery", 
      description: "Master SQL queries, joins, stored procedures, and advanced database programming techniques with hands-on practice.",
      gradient: "from-green-500 to-blue-600",
      delay: '1300ms'
    },
    {
      icon: StarIcon,
      title: "Real-World Projects",
      description: "Build complete database applications using modern tools and technologies used in the industry.",
      gradient: "from-purple-500 to-pink-600", 
      delay: '1500ms'
    }
  ];

  return (
    <section className="relative mb-20">
      {/* Background with subtle skew effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 rounded-3xl transform -skew-y-1" />
      
      <div className="relative p-8 md:p-16">
        {/* Section Header */}
        <SectionHeader isVisible={isVisible} />
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Section Header Component
 */
function SectionHeader({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-1500 delay-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        Master Database Technologies
      </h2>
      <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-1500 delay-900 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}>
        Comprehensive database education with modern design principles and practical development skills
      </p>
    </div>
  );
}

/**
 * Individual Feature Card Component
 */
function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  gradient,
  delay,
  isVisible 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
  delay: string;
  isVisible: boolean;
}) {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} 
      style={{ transitionDelay: delay }}
    >
      <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
}
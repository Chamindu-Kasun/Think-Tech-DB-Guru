'use client';

import { CheckCircleIcon, PlayCircleIcon, DocumentTextIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

interface LearningPathProps {
  isVisible: boolean;
}

/**
 * LearningPath Component
 * 
 * Displays the structured learning journey for database design and development.
 * Shows the progression from basics to advanced topics with visual indicators.
 */
export default function LearningPath({ isVisible }: LearningPathProps) {
  const learningSteps = [
    {
      id: 1,
      title: "Database Fundamentals",
      description: "Learn core database concepts, data types, and basic principles",
      topics: ["What is a Database?", "DBMS Overview", "Data Models"],
      icon: "🏗️",
      status: "available"
    },
    {
      id: 2,
      title: "Entity Relationship Modeling",
      description: "Master ER diagrams, entities, attributes, and relationships",
      topics: ["ER Diagrams", "Entities & Attributes", "Relationships"],
      icon: "📊",
      status: "available"
    },
    {
      id: 3,
      title: "Database Design & Normalization",
      description: "Design efficient databases and apply normalization techniques",
      topics: ["Logical Design", "1NF, 2NF, 3NF", "BCNF"],
      icon: "⚙️",
      status: "available"
    },
    {
      id: 4,
      title: "SQL Programming",
      description: "Write complex queries, joins, and stored procedures",
      topics: ["SELECT Queries", "Joins", "Stored Procedures"],
      icon: "💻",
      status: "available"
    },
    {
      id: 5,
      title: "Database Implementation",
      description: "Create tables, indexes, and implement database solutions",
      topics: ["DDL Commands", "Indexing", "Performance"],
      icon: "🚀",
      status: "available"
    },
    {
      id: 6,
      title: "Advanced Topics",
      description: "Explore transactions, security, and modern database technologies",
      topics: ["Transactions", "Security", "NoSQL Basics"],
      icon: "⭐",
      status: "coming-soon"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Your Database Learning Journey
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-1500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Follow our structured curriculum from database fundamentals to advanced implementation
          </p>
        </div>

        {/* Learning Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningSteps.map((step, index) => (
            <LearningStepCard
              key={step.id}
              step={step}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Start Your Database Journey
          </button>
        </div>
      </div>
    </section>
  );
}

/**
 * Individual Learning Step Card Component
 */
function LearningStepCard({ 
  step, 
  index, 
  isVisible 
}: { 
  step: any; 
  index: number; 
  isVisible: boolean; 
}) {
  const delay = `${500 + index * 200}ms`;
  
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${step.status === 'coming-soon' ? 'opacity-75' : ''}`}
      style={{ transitionDelay: delay }}
    >
      {/* Step Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
          {step.icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Step {step.id}
            </span>
            {step.status === 'coming-soon' && (
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                Coming Soon
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {step.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {step.description}
      </p>

      {/* Topics List */}
      <div className="space-y-2 mb-6">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Key Topics:
        </h4>
        <ul className="space-y-1">
          {step.topics.map((topic: string, topicIndex: number) => (
            <li key={topicIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Resource Types */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-3">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <PlayCircleIcon className="w-4 h-4 text-green-600" />
            <span>Videos</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <DocumentTextIcon className="w-4 h-4 text-blue-600" />
            <span>Notes</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <PuzzlePieceIcon className="w-4 h-4 text-purple-600" />
            <span>Quiz</span>
          </div>
        </div>
      </div>
    </div>
  );
}
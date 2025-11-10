'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import { AcademicCapIcon, BriefcaseIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface TestimonialsProps {
  isVisible: boolean;
}

/**
 * Testimonials Component
 * 
 * Displays student success stories and testimonials for the Database Design & Development platform.
 * Shows different types of learners and their achievements.
 */
export default function Testimonials({ isVisible }: TestimonialsProps) {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Computer Science Student",
      avatar: "👩‍💻",
      rating: 5,
      quote: "The step-by-step approach to database design made complex concepts so much clearer. I went from struggling with normalization to acing my database course!",
      achievement: "Improved grade from C to A+",
      type: "academic",
      icon: AcademicCapIcon
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Software Developer",
      avatar: "👨‍💼",
      rating: 5,
      quote: "As a self-taught developer, I had gaps in my database knowledge. This platform filled those gaps perfectly. Now I design efficient databases for our startup.",
      achievement: "Landed database developer role",
      type: "career",
      icon: BriefcaseIcon
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Data Analyst",
      avatar: "👩‍🔬",
      rating: 5,
      quote: "The SQL sections were incredibly practical. I can now write complex queries and optimize database performance for our analytics team.",
      achievement: "Promoted to Senior Analyst",
      type: "career",
      icon: CodeBracketIcon
    },
    {
      id: 4,
      name: "James Wilson",
      role: "ICT A-Level Student",
      avatar: "👨‍🎓",
      rating: 5,
      quote: "The quiz system helped me practice for my A-Level ICT exams. The explanations were clear and the progress tracking kept me motivated.",
      achievement: "A* in ICT A-Levels",
      type: "academic",
      icon: AcademicCapIcon
    }
  ];

  const stats = [
    { number: "1,200+", label: "Students Taught", subtext: "Across 25+ countries" },
    { number: "95%", label: "Success Rate", subtext: "Students pass their exams" },
    { number: "4.9/5", label: "Average Rating", subtext: "From student feedback" },
    { number: "50+", label: "Hours of Content", subtext: "Video lessons & resources" }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Student Success Stories
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-1500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Join thousands of students who have mastered database design and development
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1500 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Start your database learning journey today and join thousands of successful students worldwide.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Begin Learning Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Individual Testimonial Card Component
 */
function TestimonialCard({ 
  testimonial, 
  index, 
  isVisible 
}: { 
  testimonial: any; 
  index: number; 
  isVisible: boolean; 
}) {
  const delay = `${700 + index * 200}ms`;
  const IconComponent = testimonial.icon;
  
  return (
    <div 
      className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: delay }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
          {testimonial.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-gray-900 dark:text-white">
              {testimonial.name}
            </h4>
            <IconComponent className="w-5 h-5 text-gray-500" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.role}
          </p>
          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
        "{testimonial.quote}"
      </blockquote>

      {/* Achievement Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium ${
        testimonial.type === 'academic' 
          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
      }`}>
        <span className="w-2 h-2 rounded-full bg-current"></span>
        {testimonial.achievement}
      </div>
    </div>
  );
}
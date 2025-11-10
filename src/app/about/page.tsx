/**
 * About Page Component
 * 
 * Provides detailed information about the Database Design & Development learning platform,
 * its mission, methodology, and the team behind it.
 */
'use client';

import { useState, useEffect } from 'react';
import { BookOpenIcon, UsersIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" 
      style={{ 
        backgroundColor: 'var(--background)', 
        color: 'var(--foreground)' 
      }}
    >
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About Database Guru
          </h1>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-1500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Empowering students worldwide to master database design and development through 
            comprehensive, practical, and accessible learning experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1500 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              To bridge the gap between theoretical database concepts and practical implementation skills, 
              making database education accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpenIcon,
                title: "Comprehensive Curriculum",
                description: "From basic concepts to advanced implementation, covering all essential database topics."
              },
              {
                icon: UsersIcon,
                title: "Student-Centered",
                description: "Designed based on real student needs and common learning challenges."
              },
              {
                icon: AcademicCapIcon,
                title: "Academic Excellence",
                description: "Aligned with academic standards and industry best practices."
              },
              {
                icon: GlobeAltIcon,
                title: "Global Accessibility",
                description: "Available to students worldwide, breaking down geographical barriers."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-700 transition-all duration-500 delay-${700 + index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1500 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Database Guru was born from a simple observation: students often struggle with database concepts 
                because traditional teaching methods focus too heavily on theory without enough practical application. 
                As educators and industry professionals, we recognized the need for a more balanced approach.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our platform combines the rigor of academic database theory with real-world implementation scenarios. 
                We believe that understanding how databases work in practice is just as important as knowing the 
                theoretical foundations.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Today, Database Guru serves students from over 25 countries, helping them excel in their database 
                courses, prepare for certifications, and build careers in data-driven industries. Our success is 
                measured not just in grades and test scores, but in the confidence our students gain when working 
                with databases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1500 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "Every lesson, quiz, and resource is carefully crafted to ensure maximum learning value and accuracy."
              },
              {
                title: "Practical Focus",
                description: "We emphasize hands-on learning with real database scenarios and industry-relevant examples."
              },
              {
                title: "Continuous Improvement",
                description: "We constantly update our content based on student feedback and industry developments."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`p-6 border-l-4 border-blue-600 bg-blue-50 dark:bg-blue-900/20 transition-all duration-500 delay-${1400 + index * 100} ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white transition-all duration-1500 delay-1600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <h2 className="text-3xl font-bold mb-4">
              Ready to Master Databases?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of students who have already started their database learning journey with us.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              Start Learning Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
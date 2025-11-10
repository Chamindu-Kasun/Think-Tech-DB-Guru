/**
 * Contact Page Component
 * 
 * Provides comprehensive contact information and communication channels for the
 * Database Design & Development learning platform.
 */
'use client';

import { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  ClockIcon, 
  GlobeAltIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about database design and development? Need help with your learning journey? 
            We're here to support you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Send Us a Message
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="learning">Learning Path Guidance</option>
                  <option value="technical">Technical Support</option>
                  <option value="content">Content Feedback</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="careers">Career Guidance</option>
                  <option value="other">Other Inquiries</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                  placeholder="Tell us how we can help you with your database learning journey..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <PhoneIcon className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Quick Contact
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">support@databaseguru.com</p>
                    <p className="text-gray-600 dark:text-gray-400">info@databaseguru.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Live Chat</h3>
                    <p className="text-gray-600 dark:text-gray-400">Available on our learning platform</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Monday - Friday, 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <BookOpenIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Learning Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">Get help with lessons and assignments</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Dedicated learning mentors available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <ClockIcon className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Support Hours
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">Monday - Friday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">Saturday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-gray-300">Sunday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Closed</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Need urgent help?</strong> Email us anytime and we'll respond within 24 hours, 
                  even on weekends for critical learning support.
                </p>
              </div>
            </div>

            {/* Global Reach */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <GlobeAltIcon className="w-6 h-6" />
                <h2 className="text-2xl font-bold">
                  Global Learning Community
                </h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">25+</div>
                  <div className="text-sm opacity-90">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">1,200+</div>
                  <div className="text-sm opacity-90">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-90">Platform Access</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
              </div>

              <p className="text-sm opacity-90">
                Join our global community of database enthusiasts and professionals. 
                Learn from anywhere, anytime, with support from experts worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Quick answers to common questions about our database learning platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                How do I start learning database design?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Begin with our Database Fundamentals module, then progress through our structured learning path. 
                Each step builds upon the previous one, ensuring comprehensive understanding.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                Do you offer certificates?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Yes! Complete our learning modules and assessments to earn industry-recognized certificates 
                that showcase your database design and development skills.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                Can I get help with assignments?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Absolutely! Our learning mentors provide personalized guidance on assignments, projects, 
                and practical implementations. Contact us for dedicated support.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                Is the platform suitable for beginners?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Yes! Our curriculum starts from the basics and gradually progresses to advanced topics. 
                No prior database experience is required to begin your learning journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
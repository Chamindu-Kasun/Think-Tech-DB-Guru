"use client";

import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import ProfileImage from "./ProfileImage";

interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.3),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <LeftContent isVisible={isVisible} />

          {/* Right Image Section */}
          <ProfileImage isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}

function LeftContent({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="space-y-8">
      {/* Brand Header */}
      <div
        className={`transition-all duration-1500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Database Guru
          </span>
          <br />
          <span className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-semibold">
            Master Database Design & Development
          </span>
        </h1>
      </div>

      {/* Description and Features */}
      <div
        className={`transition-all duration-1500 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <Description />
        <FeatureHighlights />
      </div>
    </div>
  );
}

// Main Description Text
function Description() {
  return (
    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Develop expert-level database skills through our structured learning path.
    Progress from fundamental concepts to advanced development techniques
    while gaining practical experience with interactive tutorials and
    real-world projects designed to meet current industry standards.
    </p>
  );
}

// Feature Highlights Section
function FeatureHighlights() {
  const features = [
    {
      icon: AcademicCapIcon,
      title: "Structured Learning",
      description: "Progressive curriculum",
      color: "blue",
    },
    {
      icon: ComputerDesktopIcon,
      title: "Hands-on Practice",
      description: "Real-world projects and exercises",
      color: "purple",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}

// Individual Feature Card Component
function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}) {
  const colorClasses = {
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    purple:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          colorClasses[color as keyof typeof colorClasses]
        }`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

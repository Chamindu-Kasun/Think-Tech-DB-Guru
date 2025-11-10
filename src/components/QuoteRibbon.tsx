// Quote Ribbon Component - Displays inspirational quote at the bottom of the page
'use client';

interface QuoteRibbonProps {
  isVisible: boolean;
}

export default function QuoteRibbon({ isVisible }: QuoteRibbonProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
        
        {/* Content */}
        <div className="relative px-6 py-8 text-center">
          <div className={`transition-all duration-1500 delay-2500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <blockquote className="text-gray-100 text-lg md:text-xl font-medium italic mb-2 max-w-4xl mx-auto">
              "Data is the new oil, but databases are the refineries that make it valuable"
            </blockquote>
            <cite className="text-gray-300 text-sm md:text-base not-italic">
              — Modern Data Architecture 🗄️
            </cite>
          </div>
        </div>
        
        {/* Ribbon Edge Effects */}
        <RibbonEdges />
      </div>
    </section>
  );
}

function RibbonEdges() {
  return (
    <>
      <div className="absolute left-0 top-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[60px] border-b-gray-800/30" />
      <div className="absolute right-0 top-0 w-0 h-0 border-r-[30px] border-r-transparent border-b-[60px] border-b-gray-900/30" />
    </>
  );
}
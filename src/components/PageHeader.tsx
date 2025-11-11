export function PageHeader() {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
        Database Design & Development
      </h1>
      
      <div className="flex flex-col items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span>Comprehensive course covering database fundamentals, design principles, development techniques, and advanced database concepts for modern applications</span>
        </div>
        
        <div className="flex items-center gap-3 text-xs">
          <span>📹 Videos</span>
          <span>•</span>
          <span>📚 Tutorials</span>
          <span>•</span>
          <span>❓ Practice Questions</span>
        </div>
      </div>
    </header>
  );
}
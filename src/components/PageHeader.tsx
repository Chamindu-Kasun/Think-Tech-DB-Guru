import { BookOpenIcon } from '@heroicons/react/24/outline';

interface PageHeaderProps {
  subject: string;
  grade: string;
}

export function PageHeader({ subject, grade }: PageHeaderProps) {
  return (
    <header className="mb-12 text-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
        Learning Resources
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg text-slate-600 dark:text-slate-400">
        <span className="flex items-center gap-2">
          <BookOpenIcon className="w-5 h-5" />
          {subject} - Grade {grade}
        </span>
        <span className="hidden sm:block">•</span>
        <span>Videos • Tutorials • Practice Questions</span>
      </div>
    </header>
  );
}
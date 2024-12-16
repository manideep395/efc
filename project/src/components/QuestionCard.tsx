import React from 'react';
import { ChevronRight, ChevronLeft, Info } from 'lucide-react';

interface QuestionCardProps {
  question: string;
  description?: string;
  children: React.ReactNode;
  onNext?: () => void;
  onPrev?: () => void;
  showPrev?: boolean;
  showNext?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  description,
  children,
  onNext,
  onPrev,
  showPrev = true,
  showNext = true,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{question}</h2>
      {description && (
        <p className="text-gray-600 mb-6 flex items-center gap-2">
          <Info className="w-4 h-4" />
          {description}
        </p>
      )}
      
      <div className="my-8">{children}</div>
      
      <div className="flex justify-between mt-8">
        {showPrev && (
          <button
            onClick={onPrev}
            className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>
        )}
        {showNext && (
          <button
            onClick={onNext}
            className="flex items-center px-4 py-2 text-green-600 hover:text-green-700 ml-auto"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};
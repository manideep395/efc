import React, { useState } from 'react';
import { Utensils, ChevronDown, ChevronUp } from 'lucide-react';
import { QuestionCard } from '../QuestionCard';
import { MultipleChoice } from '../MultipleChoice';
import { Slider } from '../Slider';
import type { FoodAnswers } from '../../types';

interface FoodSectionProps {
  answers: FoodAnswers;
  onAnswerChange: (answers: FoodAnswers) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const FoodSection: React.FC<FoodSectionProps> = ({
  answers,
  onAnswerChange,
  onNext,
  onPrev,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const frequencyChoices = [
    { value: 'never', label: 'Never' },
    { value: 'infrequently', label: 'Infrequently' },
    { value: 'occasionally', label: 'Occasionally' },
    { value: 'often', label: 'Often' },
    { value: 'very-often', label: 'Very Often' },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <QuestionCard
        question="How often do you eat animal-based products?"
        description="Including beef, pork, chicken, fish, eggs, dairy products"
        icon={<Utensils className="w-6 h-6 text-green-600" />}
        onNext={onNext}
        onPrev={onPrev}
      >
        <div className="space-y-6">
          <MultipleChoice
            choices={frequencyChoices}
            selected={answers.frequency}
            onChange={(value) => onAnswerChange({ ...answers, frequency: value })}
          />

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-center w-full py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            {showDetails ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Hide Details
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Add Details to Improve Accuracy
              </>
            )}
          </button>

          {showDetails && (
            <div className="space-y-6 pt-4">
              <Slider
                label="How often do you eat beef or lamb?"
                value={answers.beef}
                onChange={(value) => onAnswerChange({ ...answers, beef: value })}
                min={0}
                max={7}
                step={1}
              />
              <Slider
                label="How often do you eat pork?"
                value={answers.pork}
                onChange={(value) => onAnswerChange({ ...answers, pork: value })}
                min={0}
                max={7}
                step={1}
              />
              <Slider
                label="How often do you eat poultry?"
                value={answers.poultry}
                onChange={(value) => onAnswerChange({ ...answers, poultry: value })}
                min={0}
                max={7}
                step={1}
              />
              <Slider
                label="How often do you eat fish?"
                value={answers.fish}
                onChange={(value) => onAnswerChange({ ...answers, fish: value })}
                min={0}
                max={7}
                step={1}
              />
              <Slider
                label="How often do you eat eggs, cheese, or dairy?"
                value={answers.dairy}
                onChange={(value) => onAnswerChange({ ...answers, dairy: value })}
                min={0}
                max={7}
                step={1}
              />
            </div>
          )}
        </div>
      </QuestionCard>
    </div>
  );
};
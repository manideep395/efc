import React from 'react';
import { Users } from 'lucide-react';
import { QuestionCard } from '../../QuestionCard';
import { Slider } from '../../Slider';
import { MultipleChoice } from '../../MultipleChoice';

interface HouseDetailsQuestionProps {
  residents: number;
  size: 'tiny' | 'medium' | 'large' | 'huge';
  onResidentsChange: (value: number) => void;
  onSizeChange: (value: 'tiny' | 'medium' | 'large' | 'huge') => void;
  onNext: () => void;
  onPrev: () => void;
}

export const HouseDetailsQuestion: React.FC<HouseDetailsQuestionProps> = ({
  residents,
  size,
  onResidentsChange,
  onSizeChange,
  onNext,
  onPrev,
}) => (
  <QuestionCard
    question="Tell us about your household"
    icon={<Users className="w-6 h-6 text-green-600" />}
    onNext={onNext}
    onPrev={onPrev}
  >
    <div className="space-y-8">
      <Slider
        label="How many people live in your house?"
        value={residents}
        onChange={onResidentsChange}
        min={1}
        max={10}
        step={1}
      />
      
      <div>
        <p className="text-sm text-gray-600 mb-4">How big is your house?</p>
        <MultipleChoice
          choices={[
            { value: 'tiny', label: 'Tiny (< 50m²)' },
            { value: 'medium', label: 'Medium (50-120m²)' },
            { value: 'large', label: 'Large (120-200m²)' },
            { value: 'huge', label: 'Huge (> 200m²)' },
          ]}
          selected={size}
          onChange={(value) => onSizeChange(value as 'tiny' | 'medium' | 'large' | 'huge')}
        />
      </div>
    </div>
  </QuestionCard>
);
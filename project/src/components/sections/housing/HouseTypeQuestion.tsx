import React from 'react';
import { Home } from 'lucide-react';
import { QuestionCard } from '../../QuestionCard';
import { MultipleChoice } from '../../MultipleChoice';
import type { HousingType } from '../../../types';

interface HouseTypeQuestionProps {
  value: HousingType;
  onChange: (value: HousingType) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const HouseTypeQuestion: React.FC<HouseTypeQuestionProps> = ({
  value,
  onChange,
  onNext,
  onPrev,
}) => (
  <QuestionCard
    question="Which housing type describes your home best?"
    icon={<Home className="w-6 h-6 text-green-600" />}
    onNext={onNext}
    onPrev={onPrev}
  >
    <MultipleChoice
      choices={[
        { value: 'no-water', label: 'Freestanding, no running water' },
        { value: 'with-water', label: 'Freestanding, running water' },
        { value: 'apartment', label: 'Multi-storey apartment' },
        { value: 'duplex', label: 'Duplex, row house or building with 2-4 housing units' },
        { value: 'luxury', label: 'Luxury condominium' },
      ]}
      selected={value}
      onChange={(value) => onChange(value as HousingType)}
    />
  </QuestionCard>
);
import React from 'react';
import { Warehouse } from 'lucide-react';
import { QuestionCard } from '../../QuestionCard';
import { MultipleChoice } from '../../MultipleChoice';
import type { HouseMaterial } from '../../../types';

interface HouseMaterialQuestionProps {
  value: HouseMaterial;
  onChange: (value: HouseMaterial) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const HouseMaterialQuestion: React.FC<HouseMaterialQuestionProps> = ({
  value,
  onChange,
  onNext,
  onPrev,
}) => (
  <QuestionCard
    question="What material is your house constructed with?"
    icon={<Warehouse className="w-6 h-6 text-green-600" />}
    onNext={onNext}
    onPrev={onPrev}
  >
    <MultipleChoice
      choices={[
        { value: 'straw-bamboo', label: 'Straw/Bamboo' },
        { value: 'wood', label: 'Wood' },
        { value: 'brick-concrete', label: 'Brick/Concrete' },
        { value: 'adobe', label: 'Adobe' },
        { value: 'steel', label: 'Steel/Other' },
      ]}
      selected={value}
      onChange={(value) => onChange(value as HouseMaterial)}
    />
  </QuestionCard>
);
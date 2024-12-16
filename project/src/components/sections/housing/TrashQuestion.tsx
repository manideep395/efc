import React from 'react';
import { Trash2 } from 'lucide-react';
import { QuestionCard } from '../../QuestionCard';
import { MultipleChoice } from '../../MultipleChoice';
import type { TrashAmount } from '../../../types';

interface TrashQuestionProps {
  value: TrashAmount;
  onChange: (value: TrashAmount) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const TrashQuestion: React.FC<TrashQuestionProps> = ({
  value,
  onChange,
  onNext,
  onPrev,
}) => (
  <QuestionCard
    question="How much trash do you generate compared to your neighbors?"
    icon={<Trash2 className="w-6 h-6 text-green-600" />}
    onNext={onNext}
    onPrev={onPrev}
  >
    <MultipleChoice
      choices={[
        { value: 'much-less', label: 'Much Less' },
        { value: 'less', label: 'Less' },
        { value: 'same', label: 'Same' },
        { value: 'more', label: 'More' },
        { value: 'much-more', label: 'Much More' },
      ]}
      selected={value}
      onChange={(value) => onChange(value as TrashAmount)}
    />
  </QuestionCard>
);
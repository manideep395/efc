import React from 'react';
import { Bus } from 'lucide-react';
import { QuestionCard } from '../../QuestionCard';
import { Slider } from '../../Slider';
import { MultipleChoice } from '../../MultipleChoice';

interface PublicTransportQuestionProps {
  distance: number;
  onDistanceChange: (value: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const PublicTransportQuestion: React.FC<PublicTransportQuestionProps> = ({
  distance,
  onDistanceChange,
  onNext,
  onPrev,
}) => (
  <QuestionCard
    question="How far do you travel by public transport?"
    description="Include bus, train, and tram journeys"
    icon={<Bus className="w-6 h-6 text-green-600" />}
    onNext={onNext}
    onPrev={onPrev}
  >
    <Slider
      label="Weekly public transport distance (km)"
      value={distance}
      onChange={onDistanceChange}
      min={0}
      max={500}
      step={5}
    />
  </QuestionCard>
);
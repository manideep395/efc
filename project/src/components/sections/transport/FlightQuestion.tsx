import React from 'react';
import { Plane } from 'lucide-react';
import { QuestionCard } from '../../QuestionCard';
import { Slider } from '../../Slider';

interface FlightQuestionProps {
  hours: number;
  onHoursChange: (value: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const FlightQuestion: React.FC<FlightQuestionProps> = ({
  hours,
  onHoursChange,
  onNext,
  onPrev,
}) => (
  <QuestionCard
    question="How many hours do you fly each year?"
    description="Include both domestic and international flights"
    icon={<Plane className="w-6 h-6 text-green-600" />}
    onNext={onNext}
    onPrev={onPrev}
  >
    <Slider
      label="Annual flight hours"
      value={hours}
      onChange={onHoursChange}
      min={0}
      max={200}
      step={1}
    />
  </QuestionCard>
);
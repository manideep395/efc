import React from 'react';
import { Bike } from 'lucide-react';
import { QuestionCard } from '../../QuestionCard';
import { Slider } from '../../Slider';

interface BikeQuestionProps {
  distance: number;
  fuelEconomy: number;
  onDistanceChange: (value: number) => void;
  onFuelEconomyChange: (value: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const BikeQuestion: React.FC<BikeQuestionProps> = ({
  distance,
  fuelEconomy,
  onDistanceChange,
  onFuelEconomyChange,
  onNext,
  onPrev,
}) => (
  <QuestionCard
    question="Tell us about your motorcycle usage"
    description="Include regular commuting and leisure trips"
    icon={<Bike className="w-6 h-6 text-green-600" />}
    onNext={onNext}
    onPrev={onPrev}
  >
    <div className="space-y-8">
      <Slider
        label="Weekly motorcycle distance (km)"
        value={distance}
        onChange={onDistanceChange}
        min={0}
        max={500}
        step={5}
      />
      <Slider
        label="Average fuel consumption (L/100km)"
        value={fuelEconomy}
        onChange={onFuelEconomyChange}
        min={2}
        max={10}
        step={0.5}
      />
    </div>
  </QuestionCard>
);
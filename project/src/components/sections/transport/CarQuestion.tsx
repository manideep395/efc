import React from 'react';
import { Car } from 'lucide-react';
import { QuestionCard } from '../../QuestionCard';
import { Slider } from '../../Slider';

interface CarQuestionProps {
  distance: number;
  fuelEconomy: number;
  onDistanceChange: (value: number) => void;
  onFuelEconomyChange: (value: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const CarQuestion: React.FC<CarQuestionProps> = ({
  distance,
  fuelEconomy,
  onDistanceChange,
  onFuelEconomyChange,
  onNext,
  onPrev,
}) => (
  <QuestionCard
    question="Tell us about your car usage"
    description="Include regular commuting and leisure trips"
    icon={<Car className="w-6 h-6 text-green-600" />}
    onNext={onNext}
    onPrev={onPrev}
  >
    <div className="space-y-8">
      <Slider
        label="Weekly car distance (km)"
        value={distance}
        onChange={onDistanceChange}
        min={0}
        max={1000}
        step={10}
      />
      <Slider
        label="Average fuel consumption (L/100km)"
        value={fuelEconomy}
        onChange={onFuelEconomyChange}
        min={4}
        max={20}
        step={0.5}
      />
    </div>
  </QuestionCard>
);
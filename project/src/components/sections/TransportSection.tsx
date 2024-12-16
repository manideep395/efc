import React, { useState } from 'react';
import { CarQuestion } from './transport/CarQuestion';
import { BikeQuestion } from './transport/BikeQuestion';
import { PublicTransportQuestion } from './transport/PublicTransportQuestion';
import { FlightQuestion } from './transport/FlightQuestion';
import type { TransportAnswers } from '../../types';

interface TransportSectionProps {
  answers: TransportAnswers;
  onAnswerChange: (answers: TransportAnswers) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const TransportSection: React.FC<TransportSectionProps> = ({
  answers,
  onAnswerChange,
  onNext,
  onPrev,
}) => {
  const [step, setStep] = useState(0);

  const updateAnswers = (updates: Partial<TransportAnswers>) => {
    onAnswerChange({ ...answers, ...updates });
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onNext();
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      onPrev();
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <CarQuestion
            distance={answers.carDistance}
            fuelEconomy={answers.carFuelEconomy}
            onDistanceChange={(value) => updateAnswers({ carDistance: value })}
            onFuelEconomyChange={(value) => updateAnswers({ carFuelEconomy: value })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 1:
        return (
          <BikeQuestion
            distance={answers.bikeDistance}
            fuelEconomy={answers.bikeFuelEconomy}
            onDistanceChange={(value) => updateAnswers({ bikeDistance: value })}
            onFuelEconomyChange={(value) => updateAnswers({ bikeFuelEconomy: value })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 2:
        return (
          <PublicTransportQuestion
            distance={answers.publicTransport}
            onDistanceChange={(value) => updateAnswers({ publicTransport: value })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <FlightQuestion
            hours={answers.flightHours}
            onHoursChange={(value) => updateAnswers({ flightHours: value })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      {renderStep()}
    </div>
  );
};
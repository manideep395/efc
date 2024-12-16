import React, { useState } from 'react';
import { HouseTypeQuestion } from './housing/HouseTypeQuestion';
import { HouseMaterialQuestion } from './housing/HouseMaterialQuestion';
import { HouseDetailsQuestion } from './housing/HouseDetailsQuestion';
import { TrashQuestion } from './housing/TrashQuestion';
import type { HousingAnswers } from '../../types';

interface HousingSectionProps {
  answers: HousingAnswers;
  onAnswerChange: (answers: HousingAnswers) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const HousingSection: React.FC<HousingSectionProps> = ({
  answers,
  onAnswerChange,
  onNext,
  onPrev,
}) => {
  const [step, setStep] = useState(0);

  const updateAnswers = (updates: Partial<HousingAnswers>) => {
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
          <HouseTypeQuestion
            value={answers.type}
            onChange={(type) => updateAnswers({ type })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 1:
        return (
          <HouseMaterialQuestion
            value={answers.material}
            onChange={(material) => updateAnswers({ material })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 2:
        return (
          <HouseDetailsQuestion
            residents={answers.residents}
            size={answers.size}
            onResidentsChange={(residents) => updateAnswers({ residents })}
            onSizeChange={(size) => updateAnswers({ size })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <TrashQuestion
            value={answers.trash}
            onChange={(trash) => updateAnswers({ trash })}
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
import React from 'react';
import { Cigarette } from 'lucide-react';
import { calculateCO2Equivalent, convertCO2ToCigarettes } from '../utils/calculations';
import type { FoodAnswers, HousingAnswers, TransportAnswers } from '../types';

interface ResultsPageProps {
  foodAnswers: FoodAnswers;
  housingAnswers: HousingAnswers;
  transportAnswers: TransportAnswers;
  onRestart: () => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({
  foodAnswers,
  housingAnswers,
  transportAnswers,
  onRestart,
}) => {
  const totalCO2 = calculateCO2Equivalent(foodAnswers, housingAnswers, transportAnswers);
  const cigaretteCount = convertCO2ToCigarettes(totalCO2);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Your Ecological Footprint
        </h1>

        <div className="flex justify-center items-center space-x-4 mb-8">
          <Cigarette className="w-12 h-12 text-red-500" />
          <span className="text-5xl font-bold text-gray-900">{cigaretteCount}</span>
        </div>

        <p className="text-xl text-gray-600 mb-8">
          If everyone lived like you, it would be equivalent to smoking{' '}
          <span className="font-semibold">{cigaretteCount} cigarettes</span> per day
          in terms of environmental impact.
        </p>

        <button
          onClick={onRestart}
          className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
        >
          Calculate Again
        </button>
      </div>
    </div>
  );
};
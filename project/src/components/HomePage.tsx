import React from 'react';
import { Footprints, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onStart: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        What is Your Ecological Footprint?
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-600 mb-4">
        How many cigarettes do we smoke if everyone lives like you?
      </p>
      
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        When is your personal Overshoot Day?
      </p>

      <Footprints className="w-24 h-24 text-green-600 mb-8" />
      
      <button
        onClick={onStart}
        className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors"
      >
        Take the First Step
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};
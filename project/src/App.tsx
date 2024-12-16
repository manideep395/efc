import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { FoodSection } from './components/sections/FoodSection';
import { HousingSection } from './components/sections/HousingSection';
import { TransportSection } from './components/sections/TransportSection';
import { ResultsPage } from './components/ResultsPage';
import type { Step, FoodAnswers, HousingAnswers, TransportAnswers } from './types';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('home');
  const [foodAnswers, setFoodAnswers] = useState<FoodAnswers>({
    frequency: '',
    beef: 0,
    pork: 0,
    poultry: 0,
    fish: 0,
    dairy: 0,
  });
  
  const [housingAnswers, setHousingAnswers] = useState<HousingAnswers>({
    type: 'apartment',
    material: 'brick-concrete',
    residents: 2,
    size: 'medium',
    trash: 'same',
  });
  
  const [transportAnswers, setTransportAnswers] = useState<TransportAnswers>({
    carDistance: 0,
    bikeDistance: 0,
    carFuelEconomy: 8,
    bikeFuelEconomy: 4,
    publicTransport: 0,
    flightHours: 0,
  });

  const restart = () => {
    setCurrentStep('home');
    setFoodAnswers({
      frequency: '',
      beef: 0,
      pork: 0,
      poultry: 0,
      fish: 0,
      dairy: 0,
    });
    setHousingAnswers({
      type: 'apartment',
      material: 'brick-concrete',
      residents: 2,
      size: 'medium',
      trash: 'same',
    });
    setTransportAnswers({
      carDistance: 0,
      bikeDistance: 0,
      carFuelEconomy: 8,
      bikeFuelEconomy: 4,
      publicTransport: 0,
      flightHours: 0,
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'home':
        return <HomePage onStart={() => setCurrentStep('food')} />;
      
      case 'food':
        return (
          <FoodSection
            answers={foodAnswers}
            onAnswerChange={setFoodAnswers}
            onNext={() => setCurrentStep('housing')}
            onPrev={() => setCurrentStep('home')}
          />
        );
      
      case 'housing':
        return (
          <HousingSection
            answers={housingAnswers}
            onAnswerChange={setHousingAnswers}
            onNext={() => setCurrentStep('transport')}
            onPrev={() => setCurrentStep('food')}
          />
        );
      
      case 'transport':
        return (
          <TransportSection
            answers={transportAnswers}
            onAnswerChange={setTransportAnswers}
            onNext={() => setCurrentStep('results')}
            onPrev={() => setCurrentStep('housing')}
          />
        );
      
      case 'results':
        return (
          <ResultsPage
            foodAnswers={foodAnswers}
            housingAnswers={housingAnswers}
            transportAnswers={transportAnswers}
            onRestart={restart}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <Layout>
      {renderStep()}
    </Layout>
  );
}

export default App;
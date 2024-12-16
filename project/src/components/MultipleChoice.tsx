import React from 'react';

interface Choice {
  value: string;
  label: string;
}

interface MultipleChoiceProps {
  choices: Choice[];
  selected: string;
  onChange: (value: string) => void;
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  choices,
  selected,
  onChange,
}) => {
  return (
    <div className="space-y-3">
      {choices.map((choice) => (
        <button
          key={choice.value}
          onClick={() => onChange(choice.value)}
          className={`w-full p-4 text-left rounded-lg transition-colors ${
            selected === choice.value
              ? 'bg-green-100 border-2 border-green-600'
              : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
          }`}
        >
          <span className={`font-medium ${
            selected === choice.value ? 'text-green-800' : 'text-gray-700'
          }`}>
            {choice.label}
          </span>
        </button>
      ))}
    </div>
  );
};
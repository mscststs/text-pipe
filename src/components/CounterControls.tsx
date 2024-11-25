import React from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';

interface CounterControlsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
  isMinValue: boolean;
  isMaxValue: boolean;
}

export const CounterControls: React.FC<CounterControlsProps> = ({
  onIncrement,
  onDecrement,
  onReset,
  isMinValue,
  isMaxValue,
}) => (
  <div className="flex gap-4 justify-center mb-6">
    <button
      onClick={onDecrement}
      disabled={isMinValue}
      className="p-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      <Minus size={24} />
    </button>
    
    <button
      onClick={onReset}
      className="p-3 rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition-all"
    >
      <RotateCcw size={24} />
    </button>
    
    <button
      onClick={onIncrement}
      disabled={isMaxValue}
      className="p-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      <Plus size={24} />
    </button>
  </div>
);
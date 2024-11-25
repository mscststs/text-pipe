import React from 'react';

interface CounterInputProps {
  count: number;
  onValueChange: (value: number) => void;
}

export const CounterInput: React.FC<CounterInputProps> = ({ count, onValueChange }) => (
  <div className="flex gap-4 items-center justify-center">
    <input
      type="number"
      value={count}
      onChange={(e) => onValueChange(Number(e.target.value))}
      className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <span className="text-sm text-gray-500">
      Range: -10 to 10
    </span>
  </div>
);
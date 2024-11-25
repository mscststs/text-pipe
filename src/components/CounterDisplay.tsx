import React from 'react';

interface CounterDisplayProps {
  count: number;
}

export const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => (
  <div className="text-center mb-8">
    <span className="text-6xl font-bold text-gray-700">{count}</span>
  </div>
);
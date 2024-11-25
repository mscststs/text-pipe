import { useState, useCallback } from 'react';

interface UseCounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

export const useCounter = ({
  initialValue = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
}: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prev) => Math.min(prev + step, max));
  }, [max, step]);

  const decrement = useCallback(() => {
    setCount((prev) => Math.max(prev - step, min));
  }, [min, step]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const setValue = useCallback((value: number) => {
    setCount(Math.max(min, Math.min(max, value)));
  }, [max, min]);

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
    isMinValue: count === min,
    isMaxValue: count === max,
  };
};
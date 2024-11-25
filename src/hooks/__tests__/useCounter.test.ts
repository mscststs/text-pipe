import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCounter } from '../useCounter';

describe('useCounter', () => {
  it('should initialize with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should initialize with custom value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10 }));
    expect(result.current.count).toBe(10);
  });

  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should decrement counter', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });

  it('should respect max value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 8, max: 10 }));
    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(10);
    expect(result.current.isMaxValue).toBe(true);
  });

  it('should respect min value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 2, min: 0 }));
    act(() => {
      result.current.decrement();
      result.current.decrement();
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
    expect(result.current.isMinValue).toBe(true);
  });

  it('should reset to initial value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));
    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(5);
  });

  it('should set custom value within bounds', () => {
    const { result } = renderHook(() => 
      useCounter({ initialValue: 5, min: 0, max: 10 })
    );
    act(() => {
      result.current.setValue(7);
    });
    expect(result.current.count).toBe(7);

    act(() => {
      result.current.setValue(15);
    });
    expect(result.current.count).toBe(10);

    act(() => {
      result.current.setValue(-5);
    });
    expect(result.current.count).toBe(0);
  });
});
import { useState, useEffect, useRef } from 'react';

interface UseTextPipeOptions {
  /** Speed in characters per second */
  speed?: number;
  /** Maximum delay in seconds to complete the text output */
  maxDelay?: number;
}

/**
 * A hook that creates a typewriter effect by streaming text at a specified speed
 * @param text The text to stream
 * @param options Configuration options
 * @returns The currently streamed text
 */
const useTextPipe = (
  text: string, 
  { speed = 10, maxDelay = Infinity }: UseTextPipeOptions = {}
) => {
  const [streamedText, setStreamedText] = useState('');
  const progressRef = useRef(0);
  const prevTextLengthRef = useRef(text.length);

  useEffect(() => {
    // Immediately clear text when input is empty
    if (text.length === 0) {
      progressRef.current = 0;
      setStreamedText('');
      return;
    }

    // If text becomes shorter, adjust progress
    if (text.length < prevTextLengthRef.current) {
      progressRef.current = Math.min(progressRef.current, text.length);
      setStreamedText(text.slice(0, progressRef.current));
    }
    prevTextLengthRef.current = text.length;

    // Input validation
    if (speed <= 0) {
      console.warn('useTextPipe: speed must be greater than 0, defaulting to 10');
      speed = 10;
    }

    if (maxDelay <= 0) {
      console.warn('useTextPipe: maxDelay must be greater than 0, defaulting to Infinity');
      maxDelay = Infinity;
    }

    // Calculate speeds based on both regular speed and maxDelay
    const baseInterval = 1000 / speed;
    const maxDelayInterval = (maxDelay * 1000) / Math.max(text.length - progressRef.current, 1);
    
    // Use the faster speed (smaller interval) between the two
    const intervalMs = Math.min(baseInterval, maxDelayInterval);

    const intervalId = setInterval(() => {
      if (progressRef.current < text.length) {
        progressRef.current++;
        setStreamedText(text.slice(0, progressRef.current));
      } else {
        clearInterval(intervalId);
      }
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, [text, speed, maxDelay]);

  return streamedText;
};

export default useTextPipe;
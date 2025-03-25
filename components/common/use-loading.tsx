"use client";

import { useState, useEffect, useCallback } from "react";

interface UseLoadingReturn {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  toggleLoading: () => void;
}

export default function useLoading(
  initialState = false,
  delayMs = 0
): UseLoadingReturn {
  const [isLoading, setIsLoading] = useState(initialState);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    if (delayMs > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, delayMs);
    } else {
      setIsLoading(false);
    }
  }, [delayMs]);

  const toggleLoading = useCallback(() => {
    setIsLoading((prev) => !prev);
  }, []);

  // クリーンアップ
  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return {
    isLoading,
    startLoading,
    stopLoading,
    toggleLoading,
  };
}

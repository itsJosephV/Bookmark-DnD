import React, { useEffect, useState } from "react";

export function useBookmarksLS(key, defaultValue) {
  const [state, setState] = useState(() => {
    const storedBms = localStorage.getItem(key);
    return storedBms ? JSON.parse(storedBms) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

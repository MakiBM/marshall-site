"use client";

import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    setMatches(window.matchMedia(query).matches);
    const handleChange = () => setMatches(window.matchMedia(query).matches);
    window.matchMedia(query).addEventListener("change", handleChange);
    return () => window.matchMedia(query).removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};

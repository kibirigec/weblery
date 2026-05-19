'use client';

import { useState, useEffect } from 'react';

// Global client-side cache to prevent double-renders on page transitions
let cachedIsUS = null;

export function isUSMarket() {
  if (typeof window === 'undefined') return false;

  // 1. Check URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('market') === 'us') {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('market', 'us');
    }
    return true;
  }
  if (urlParams.get('market') === 'ug') {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('market');
    }
    return false;
  }

  // 2. Check persisted session storage (useful for local testing)
  if (typeof sessionStorage !== 'undefined') {
    if (sessionStorage.getItem('market') === 'us') {
      return true;
    }
  }

  // 3. Check hostname
  const hostname = window.location.hostname;
  if (hostname.startsWith('us.') || hostname === 'us.weblery.com') {
    return true;
  }

  return false;
}

export function useIsUSMarket() {
  // Initialize with cached value if already resolved client-side to prevent double JIT renders
  const [isUS, setIsUS] = useState(() => {
    if (cachedIsUS !== null) return cachedIsUS;
    return false;
  });

  useEffect(() => {
    const resolved = isUSMarket();
    cachedIsUS = resolved;
    setIsUS(resolved);
  }, []);

  return isUS;
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Holds a sheet on screen long enough to animate itself out.
 *
 * Unmounting on close is why sheets usually slide up and then vanish: the
 * element is gone before an exit animation can run. This keeps it mounted for
 * the length of the slide down, then hands control back.
 *
 * Under reduced motion it closes immediately — there is no animation to wait
 * for, and holding the sheet open for one would just feel unresponsive.
 */
export function useSheetDismiss(onClose, duration = 320) {
  const [closing, setClosing] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const requestClose = useCallback(() => {
    if (closing) return; // a second tap mid-slide shouldn't restart it
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onClose();
      return;
    }
    setClosing(true);
    timer.current = setTimeout(() => {
      setClosing(false);
      onClose();
    }, duration);
  }, [closing, onClose, duration]);

  return { closing, requestClose };
}

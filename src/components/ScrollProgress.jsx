"use client";

import { useEffect, useRef, useCallback } from "react";

const ScrollProgress = () => {
  const progressRef = useRef(null);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = `${(totalScroll / windowHeight) * 100}%`;
        if (progressRef.current) {
          progressRef.current.style.width = scroll;
        }
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-100 ease-out"
      style={{ width: "0%" }}
    />
  );
};

export default ScrollProgress;

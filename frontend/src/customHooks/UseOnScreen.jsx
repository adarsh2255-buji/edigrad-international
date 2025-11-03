import React, { useEffect, useRef, useState } from 'react'

const UseOnScreen = (options = { threshold: 0.1 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // When element is intersecting, set visible
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop observing once it's visible
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]); // Only re-run if ref or options change

  return [ref, isVisible];
}

export default UseOnScreen
import { useState, useEffect, RefObject } from 'react';

// HEADER SCROLL & CLICK LOGIC
export const useHeaderScroll = (headerRef: RefObject<HTMLElement | null>) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // SCROLL HANDLER
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // HIDE ON DOWN
        } else {
          setIsVisible(true); // SHOW ON UP
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // CLICK OUTSIDE HANDLER
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // PREVENT HIDE IF CLICKED ON A COMPONENT EXPLICITLY MARKED
      if ((event.target as Element).closest?.('[data-ignore-header-hide="true"]')) {
        return;
      }
      
      if (!isAtTop && isVisible && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isAtTop, isVisible, headerRef]);

  // FORCE SHOW HEADER VIA CUSTOM EVENT
  useEffect(() => {
    const forceShow = () => setIsVisible(true);
    window.addEventListener('forceShowHeader', forceShow);
    return () => window.removeEventListener('forceShowHeader', forceShow);
  }, []);

  return { isVisible, isAtTop, setIsVisible };
};



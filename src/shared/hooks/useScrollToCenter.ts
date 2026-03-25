import React, { RefObject } from "react";

export const useScrollToCenter = (ref?: RefObject<HTMLElement | null>) => {
  const scrollToCenter = (e?: React.MouseEvent) => {
    // if EVENT is passed, scroll to the event target
    if (e) {
      (e.currentTarget as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    // if REF is passed, scroll to the ref
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return { scrollToCenter };
};

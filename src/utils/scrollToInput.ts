import { RefObject } from 'react';

interface StatisticsProps {
  scrollTargetRef: RefObject<HTMLDivElement>;
}

export const handleScroll = (scrollTargetRef: RefObject<HTMLDivElement>) => {
  if (scrollTargetRef.current) {
    window.scrollTo({
      top: scrollTargetRef.current.offsetTop - 250,
      behavior: "smooth",
    });
  }
};

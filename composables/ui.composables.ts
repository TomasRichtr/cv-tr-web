import { useMediaQuery } from '@vueuse/core';
import { BREAKPOINTS } from '../enums/ui.enums';

export const useBreakpoints = () => {
  const isSmallScreen = useMediaQuery(`(max-width: ${BREAKPOINTS.SMALL})`);
  const isMediumScreen = useMediaQuery(`(max-width: ${BREAKPOINTS.MEDIUM})`);
  const isLargeScreen = useMediaQuery(`(max-width: ${BREAKPOINTS.LARGE})`);

  return {
    isSmallScreen, isMediumScreen, isLargeScreen,
  };
};

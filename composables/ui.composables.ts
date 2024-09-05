import { useMediaQuery } from '@vueuse/core';
import { Breakpoints } from '~/enums/ui.enums';

export const useBreakpoints = () => {
  const isSmallScreen = useMediaQuery(`(max-width: ${Breakpoints.Small})`);
  const isMediumScreen = useMediaQuery(`(max-width: ${Breakpoints.Medium})`);
  const isLargeScreen = useMediaQuery(`(max-width: ${Breakpoints.Large})`);

  return {
    isSmallScreen, isMediumScreen, isLargeScreen,
  };
};

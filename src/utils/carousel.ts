import { Award } from '@/constants/award';

// not used after using embla carousel

// export const MOBILE_CAROUSEL_SIZE = 1;
// export const TABLET_CAROUSEL_SIZE = 2;
// export const PC_CAROUSEL_SIZE = 3;

// export const sliceByPage = (
//   awards: Award[],
//   page: number,
//   isTabletSize: boolean,
//   isMobileSize: boolean,
//   startPage?: number
// ) => {
//   const initialPage = startPage !== undefined ? startPage : page - 1;

//   if (isMobileSize) {
//     return awards.slice(MOBILE_CAROUSEL_SIZE * initialPage, MOBILE_CAROUSEL_SIZE * page);
//   }
//   if (isTabletSize) {
//     return awards.slice(TABLET_CAROUSEL_SIZE * initialPage, TABLET_CAROUSEL_SIZE * page);
//   }

//   return awards.slice(PC_CAROUSEL_SIZE * initialPage, PC_CAROUSEL_SIZE * page);
// };

export const getCurrentAwards = (awards: Award[], currentYear: string) =>
  awards.filter(award => award.year === String(currentYear));

import { Activity } from '@/constants/activity';

export const MOBILE_PAGE_SIZE = 6;
export const TABLET_PAGE_SIZE = 6;
export const PC_PAGE_SIZE = 9;

export const sliceByPage = (
  activities: Activity[],
  page: number,
  isTabletSize: boolean,
  isMobileSize: boolean,
  startPage?: number
) => {
  const initialPage = startPage !== undefined ? startPage : page - 1;

  if (isMobileSize) {
    return activities.slice(MOBILE_PAGE_SIZE * initialPage, MOBILE_PAGE_SIZE * page);
  }
  if (isTabletSize) {
    return activities.slice(TABLET_PAGE_SIZE * initialPage, TABLET_PAGE_SIZE * page);
  }

  return activities.slice(PC_PAGE_SIZE * initialPage, PC_PAGE_SIZE * page);
};

export const getCurrentActivities = (activities: Activity[], currentTab: string) =>
  activities.filter(activity => activity.year === currentTab)

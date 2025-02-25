// pagination.ts
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

// year가 string | string[]이므로 아래와 같이 수정
export const getCurrentActivities = (activities: Activity[], currentTab: string) => {
  if (currentTab === '전체') return activities;

  return activities.filter((activity) => {
    const { year } = activity;
    if (Array.isArray(year)) {
      // year가 배열이면 해당 탭이 포함되어 있는지 확인
      return year.includes(currentTab);
    } else {
      // 단일 문자열이면 기존 로직
      return year === currentTab;
    }
  });
};

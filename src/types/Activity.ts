// types/Activity.ts
export type ActivityType = '세미나' | '행사' | '스터디' | '기타' | '친목활동';

export type Activity = {
  title: string;
  type: ActivityType;
  // string 또는 string[] 허용
  year: string | string[];
  date: string;
  description: string;
};
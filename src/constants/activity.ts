export type ActivityType = '세미나' | '행사' | '스터디' | '기타';

export type Activity = {
    title: string;
    type: ActivityType;
    year: string;
    date: string;
    description: string;
}

export const YEAR_LIST = ['전체', '7기', '6기', '5기'];

export const ACTIVITY_LIST: Activity[] = [
    {
        title: '스마일게이트 견학',
        type: '기타',
        year: '7기',
        date: '2024.08.29',
        description: '프로젝트 회고 세미나',
    },
    {
        title: '24-2 Ludens 게임 제작 발표회',
        type: '세미나',
        year: '7기',
        date: '2024.12.20',
        description: '프로젝트 회고 세미나',
    },
    {
        title: '24-1 개강총회',
        type: '행사',
        year: '6기',
        date: '2024.03.07',
        description: '프로젝트 회고 세미나',
    },
];
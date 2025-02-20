import { Link } from '@/components/common/ProjectCard';

export type Project = {
    title: string;
    subTitle: string;
    description: string;
    thumbnailFormat?: string;
    links?: Link[];
};

export const PROJECT_LIST: Project[] = [
    {
        title: 'Urban Design Tool (UDT)',
        subTitle: '환경 친화적인 도시를 설계할 수 있는 능력을 키우는 학습 도구',
        description: '긴 설명',
    },
    {
        title: 'KingMini',
        subTitle: '3D 싱글 플랫포머 게임',
        description: '긴 설명',
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?v=Z_AtXHbdEzY&ab_channel=ZileYe',
            },
            { type: 'github', href: 'https://github.com/Giggle-Games' },
            { type: 'steam', href: 'https://store.steampowered.com/app/2336310/KingMini/' },
        ],
    },
    {
        title: 'Hey Joody?',
        subTitle: '3D 액션 공포 게임',
        description: '긴 설명',
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?v=muBwu7IZQuY&ab_channel=%E2%80%8D%ED%97%88%EA%B1%B4%ED%98%B8',
            },
        ],
    },
    {
        title: '쇼츠만 본지 30년하고 8개월, 내가 던전을 깰 수 있을 리 없잖아 무리무리! (※ 무리가 아니었다?!)',
        subTitle: '2D 장애물 피하기 게임',
        description: '긴 설명',
    },
    {
        title: 'Sun Mouse',
        subTitle: '2D 싱글 슈팅 게임',
        description: '긴 설명',
        links: [
            {
                type: 'youtube',
                href: 'https://youtu.be/RXhIEMLQea0',
            },
        ],
    },
    {
        title: 'Elementee',
        subTitle: '2D 모바일 퍼즐 액션 게임',
        description: '긴 설명',
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?v=aIhGWxj5F2w&ab_channel=ZileYe',
            },
        ],
    },
    {
        title: '캣 쥐 미 이프 유 캔',
        subTitle: '3D 퍼즐 잠입 게임',
        description: '긴 설명',
        links: [
            { type: 'github', href: 'https://github.com/CuriHuS/Cat-G-Me-If-You-Can' },
        ],
    },
    {
        title: 'Strange Saviors',
        subTitle: '3D 액션 RPG 게임',
        description: '긴 설명',
        links: [
            {
                type: 'youtube',
                href: 'https://youtu.be/_bND5x9Bou4',
            },
        ],
    },
    {
        title: 'VR Safe Simulation with RL',
        subTitle: '강화학습을 이용한 VR 안전 교육',
        description: '긴 설명',
        thumbnailFormat: 'gif',
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?app=desktop&v=6vQ57Ax0qo4&list=PLjf3D7JCDKSGdQCjbeQ_cmavLAdQ5QfSp&index=11',
            },
        ],
    },
    {
        title: 'A Little Prince',
        subTitle: '어린이 교육용 VR 콘텐츠',
        description: '긴 설명',
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?v=hmH5L3QGY1U',
            },
        ],
    },
];
import { Link } from '@/features/Project/components/projectCard';

export type Project = {
    id: string;
    title: string;
    subTitle: string;
    teamMembers?: string;
    period?: string;
    techStack?: string;
    description: string;
    thumbnailFormat?: string;
    links?: Link[];
};

export const PROJECT_LIST: Project[] = [
    {
        id: 'wizard',
        title: 'Wi, Zard!',
        subTitle: '2인용 멀티 3D 협동 소울라이크 게임',
        teamMembers: '개발: 김수연(소융22), 신동준(소융23), 최현승(소융20), 허건호(소융21) \n 아트: 마현아(디콘21), 이윤아(디콘22)',
        period: '2024.06 ~ 2024.11',
        description: '긴 설명',
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?v=BJxZDun471U',
            },
        ]
    },
    {
        id: 'udt',
        title: 'Urban Design Tool (UDT)',
        subTitle: '환경 친화적인 도시를 설계할 수 있는 능력을 키우는 학습 도구',
        description: '긴 설명',
        links: [
            {
                type: 'github',
                href: 'https://github.com/TeamRGD/Project-UDT',
            }
        ]
    },
    {
        id: 'kingmini',
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
        id: 'hey-joody',
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
        id: 'moori',
        title: '쇼츠만 본지 30년하고 8개월, 내가 던전을 깰 수 있을 리 없잖아 무리무리! (※ 무리가 아니었다?!)',
        subTitle: '2D 장애물 피하기 게임',
        description: '긴 설명',
        links: [
            {
                type: 'youtube',
                href: 'https://youtu.be/TnGSAI4c7uI',
            }
        ]
    },
    {
        id: 'sun-mouse',
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
        id: 'elementee',
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
        id: 'cat-g-me-if-you-can',
        title: '캣 쥐 미 이프 유 캔',
        subTitle: '3D 퍼즐 잠입 게임',
        description: '긴 설명',
        links: [
            { type: 'github', href: 'https://github.com/CuriHuS/Cat-G-Me-If-You-Can' },
        ],
    },
    {
        id: 'strange-saviors',
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
        id: 'vr-safe-simulation-with-rl',
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
        id: 'a-little-prince',
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
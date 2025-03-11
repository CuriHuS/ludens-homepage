import { Link } from '@/features/Project/components/projectCard';

export type Project = {
    id: string;
    title: string;
    subTitle: string;
    teamMembers?: string;
    period?: string;
    techStack?: string[];
    description: string;
    thumbnailFormat?: string;
    links?: Link[];
    extraImages?: string[];
};

export const PROJECT_LIST: Project[] = [
    {
        id: 'wizard',
        title: 'Wi, Zard!',
        subTitle: '2인용 멀티 3D 협동 소울라이크 게임',
        teamMembers: '개발: 최현승(소융20), 허건호(소융21), 김수연(소융22), 신동준(소융23) \n아트: 마현아(디콘21), 이윤아(디콘22)',
        period: '2024.06 ~ 2024.11',
        description: '긴 설명 \n dd \n dd \n dd \n dd \n dd \n dd \n dd \n dd \n dd \n dd \n dd \n dd \n dd \n dd \n dd',
        techStack: ['Unity', 'Git', 'Photon PUN2'],
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?v=BJxZDun471U',
            },
        ],
        extraImages: [
            '/images/project/wizard/1.webp',
            '/images/project/wizard/2.webp',
            '/images/project/wizard/3.webp'
          ],
    },
    {
        id: 'sekhmet43',
        title: 'Sekhmet-43',
        subTitle: '3D 스페이스 호러 게임',
        description: '긴 설명',
        links: [
            {
                type: 'youtube',
                href: 'https://youtu.be/2vgQ1L274mo?si=39tO5KNNsrlK-_jh',
            },
            { type: 'github', href: 'https://github.com/Show-Boo/Sekhmet-43' },

        ]
    },
    {
        id: 'udt',
        title: 'Urban Design Tool (UDT)',
        subTitle: '환경 친화적인 도시를 설계할 수 있는 능력을 키우는 학습 도구',
        teamMembers: '최현승(소융20), 허건호(소융21), 김수연(소융22), 신동준(소융23)',
        period: '2024.05.10 ~ 2024.05.11',
        description: '긴 설명',
        techStack: ['Unity', 'Git'],
        links: [
            {
                type: 'github',
                href: 'https://github.com/TeamRGD/Project-UDT',
            }
        ]
    },
    {
        id: 'SoulShard',
        title: 'SoulShard',
        subTitle: 'Sekiro 전투 형식의 액션 RPG 게임',
        description: '다크소울과 엘든링에 나오는 보스들과 세키로의 전투 시스템을 합치면 재밌을 것 같다는 생각에서 시작한 프로젝트입니다. \n 보스들은 엘든링과 보스들의 패턴과 유사한 점이 많습니다. 이러한 적들을 세키로의 패링 시스템을 이용하여 무찔러야 합니다. \n게임은 언리얼 엔진5로 제작했습니다.',
        links: [
            {
                type: 'youtube',
                href: 'https://youtu.be/nEiit4C9zJs?si=n9tbqRvqjJH3vM70',
            },
            {
                type: 'github',
                href: 'https://github.com/geokim4491/SoulShard',
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
        teamMembers: '김수은, 권신혁, 송예린, 최현승',
        period: '2023.08 ~ 2023.11',
        techStack: ['Unity', 'Git'],
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
        id: 'soulTypeRPGgame',
        title: '소울 형식 RPG 게임',
        subTitle: '소울 형식 RPG 게임',
        description: '이 게임의 목표는 적들과 싸워 적을 무찌르는 것 입니다. 적을 무찌른다는 하나의 큰 목적을 가지고 플레이어는 체력과 스테미나를 잘 활용해 게임을 플레이합니다.',
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?v=zujtHZ-2FRo',
            },
            {
                type: 'github',
                href: 'https://github.com/geokim4491/Soul-Style-Game',
            }
        ]
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
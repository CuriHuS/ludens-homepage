import { ProjectLink } from "@/types/projectLink";

export type Project = {
    id: string;
    title: string;
    subTitle: string;
    thumbnailFormat?: string;
    links?: ProjectLink[];
};

export const PROJECT_LIST: Project[] = [

    {
        id: 'wizard',
        title: 'Wi, Zard!',
        subTitle: '2인용 멀티 3D 협동 소울라이크 게임',
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?v=BJxZDun471U',
            },
        ],
    },
    {
        id: 'sekhmet43',
        title: 'Sekhmet-43',
        subTitle: '3D 스페이스 호러 게임',
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
        links: [
            {
                type: 'github',
                href: 'https://github.com/TeamRGD/Project-UDT',
            }
        ]
    },
    {
        id: 'soulshard',
        title: 'SoulShard',
        subTitle: 'Sekiro 전투 형식의 액션 RPG 게임',
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
        links: [
            {
                type: 'youtube',
                href: 'https://youtu.be/TnGSAI4c7uI',
            }
        ]
    },
    {
        id: 'iceddaeng',
        title: 'ICE DDAENG!',
        subTitle: '상대를 눈사람으로 만들고 부수는 멀티 FPS 게임',
        links: [
            {
                type: 'youtube',
                href: 'https://youtu.be/TnGSAI4c7uI',
            }
        ]
    },
    {
        id: 'shut-the-mouse',
        title: 'Shut The Mouse',
        subTitle: '2D 싱글 슈팅 게임',
        links: [
            {
                type: 'youtube',
                href: 'https://youtu.be/RXhIEMLQea0',
            },
        ],
    },
    {
        id: 'sketcheez',
        title: 'Sketcheez',
        subTitle: '2D 모바일 퍼즐 액션 게임',
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
        links: [
            { type: 'github', href: 'https://github.com/CuriHuS/Cat-G-Me-If-You-Can' },
        ],
    },
    {
        id: 'strange-saviors',
        title: 'Strange Saviors',
        subTitle: '3D 액션 RPG 게임',
        links: [
            {
                type: 'youtube',
                href: 'https://youtu.be/_bND5x9Bou4',
            },
        ],
    },
    {
        id: 'soul-type-rpg-game',
        title: '소울 형식 RPG 게임',
        subTitle: '소울 형식 RPG 게임',
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
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?v=hmH5L3QGY1U',
            },
        ],
    },
];

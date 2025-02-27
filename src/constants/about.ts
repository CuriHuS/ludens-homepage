export type QuantifiedInfoType = {
    title: string;
    number: number;
    unit: string;
}

export type ActivityType = {
    title: string;
    description: string;
    img: string;
    imgAlt: string;
}

export const QUANTIFIED_INFO: QuantifiedInfoType[] = [
    {
        title: '루덴스가 시작한지',
        number: 4,
        unit: '년',
    },
    {
        title: '교내외 공모전 수상',
        number: 20,
        unit: '회',
    },
    {
        title: '진행한 프로젝트',
        number: 20,
        unit: '개↑',
    },
    {
        title: '6기 부원 수',
        number: 100,
        unit: '명↑',
    },
];

export const ACTIVITY: ActivityType[] = [
    {
        title: "📚 스터디",
        description: "게임 개발에 필요한 다양한 기술과 지식을 함께 공부하는 스터디 활동을 진행합니다.",
        img: "/images/about/study.jpg",
        imgAlt: "스터디",
    },
    {
        title: "👾 게임 제작 발표회",
        description: "루덴스 부원들이 직접 제작한 게임을 서로 공유하며 같이 플레이 해볼 수 있는, 1년을 마무리 하는 행사입니다.",
        img: "/images/about/game-conference.png",
        imgAlt: "게임 제작 발표회",
    },
    {
        title: "🏢 게임 회사 견학",
        description: "게임 업계의 현업자 분들과의 만남을 통해 더욱 게임에 대한 흥미를 키우며 궁금증을 해결할 수 있는 행사입니다.",
        img: "/images/about/company.webp",
        imgAlt: "게임 회사 방문 & 설명회",
    },
    {
        title: "🍺 친목 활동",
        description: "MT, 개강총회 등 다양한 친목 활동을 통해 부원들과 즐거운 대학 생활을 함께 만들어갑니다.",
        img: "/images/about/social.jpg",
        imgAlt: "친목 활동",
    },
];

export type ActivityType = "세미나" | "행사" | "스터디" | "기타" | "친목활동";

// year를 string 혹은 string[]로 모두 허용
export type Activity = {
  id: string;
  title: string;
  type: ActivityType;
  year: string | string[]; // <-- changed
  date: string;
  description: string;
};

export const YEAR_LIST = ["전체", "7기", "6기"];

// 예시로 언리얼 스터디 항목을 배열 형태로 변경
export const ACTIVITY_LIST: Activity[] = [
  {
    id: "11",
    title: "스마일게이트 견학",
    type: "기타",
    year: "7기",
    date: "2024.08.29",
    description: "게임 업계 방문 및 현업자 Q&A",
  },
  {
    id: "10",
    title: "24-2 Ludens 게임 제작 발표회",
    type: "세미나",
    year: "7기",
    date: "2024.12.20",
    description: "프로젝트 회고 세미나",
  },
  {
    id: "9",
    title: "24-1 개강총회",
    type: "행사",
    year: "6기",
    date: "2024.03.07",
    description: "개강 총회",
  },
  {
    id: "8",
    title: "24-1 아주대 게임 교류회",
    type: "행사",
    year: "6기",
    date: "2024.05.24",
    description: "아주대 게임 제작 동아리 브레인스톰, TML과 게임 교류회",
  },
  {
    id: "7",
    title: "7기 정기총회",
    type: "세미나",
    year: "7기",
    date: "2024.09.04",
    description: "매주 진행하는 루덴스 부원간의 세미나",
  },
  {
    id: "6",
    title: "2024 Summer Unreal Study",
    type: "스터디",
    // year를 복수 기수로 설정하는 예시
    year: ["6기", "7기"], // <-- changed
    date: "2024.07.23 - 2024.08.09",
    description: "여름방학 동안 진행한 언리얼 엔진5 입문 스터디",
  },
  {
    id: "5",
    title: "24-1 유니티 기초 세션",
    type: "스터디",
    year: "6기",
    date: "2024.03.15 - 2024.04.05",
    description: "직접 수행하는 유니티 엔진 기본 익히기",
  },
  {
    id: "4",
    title: "24-1 유니티 심화 세션",
    type: "스터디",
    year: "6기",
    date: "2024.05.12 - 2024.05.26",
    description: "Photon을 이용한 3D 레이싱 멀티 게임 제작",
  },
  {
    id: "3",
    title: "24-1 컴투스 인턴십 채용 설명회",
    type: "행사",
    year: "6기",
    date: "2024.03.15 - 2024.04.05",
    description: "직접 수행하는 유니티 엔진 기본 익히기",
  },
  {
    id: "2",
    title: "24-1 MT",
    type: "친목활동",
    year: "6기",
    date: "2024.03.16",
    description: "부원간의 네트워킹 및 단결 활동 진행",
  },
  {
    id: "1",
    title: "24-1 알고리즘 스터디",
    type: "스터디",
    year: "6기",
    date: "2024.03.04 - 2024.04.04",
    description: "알고리즘 입문 스터디",
  },
];

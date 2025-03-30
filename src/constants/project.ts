import { Link } from "@/features/Project/components/projectCard";

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
        description: '협동 레이드와 퍼즐, ‘소인과 거인’이라는 게임의 메인 아이덴티티를 레벨 디자인 및 애니메이션, 게임 플레이 전반에 적용하였습니다. Maya와 Unity를 활용하여 맵과 메인 캐릭터, 보스 애니메이션을 직접 제작하였습니다. \n\n📑 게임 전반의 디자인 기획\n매주 2~3회 회의를 통해 게임 기획과 디자인을 논의하였습니다. 게임의 아이덴티티를 게임 전반에 반영하기 위해 기획 단계부터 아이덴티티를 명확히하고, 이를 디자인에 반영하는 작업을 중점적으로 진행했습니다. 이 단계에서는 팀원들과 실시간, 비실시간 회의를 지속적으로 진행하며 의견을 교환했습니다. 이를 통해 게임의 방향성을 보다 구체화하고, 개발 및 디자인 작업의 로드맵을 계획했습니다.\n\n🏃‍♂️ 플레이어, 보스별 3D 애니메이션 제작 \n Maya를 사용하여 플레이어와 보스 캐릭터 Rigging 작업을 진행하고 3D 애니메이션을 제작하였습니다. 각 캐릭터별 성격과 특징을 반영하여 모션을 기획한 뒤 Idle, Walk, Jump, Groggy 등 여러 기본 모션과 더불어 플레이어의 공격, 궁극기 모션, 보스의 각 패턴 별 공격 모션 등 게임에 필요한 애니메이션을 직접 제작하였습니다. 작업 과정에서 SyncSketch를 활용하여 결과물을 공유하고 피드백을 주고받으며, 게임 전체의 퀄리티를 높이고 캐릭터 특성에 최적화된 애니메이션을 제작하고자 하였습니다. 이후 게임 플레이로 구현이 어려운 공간이동이나 보스 등장 등 상황에 맞춰 스테이지별 컷씬을 추가할 예정입니다. 게임 플레이만으로는 전달이 어려운 캐릭터들의 감정, 위기 상황 등을 연출하여 플레이어의 몰입도와 기대감을 높이고자 합니다. 이는 전투의 긴장감을 조성할 뿐만 아니라 이동 경로, 플레이 방식, 중요한 아이템 등을 직관적으로 안내하여 게임 플레이의 이해를 돕습니다. 이를 통해 게임 전체의 완성도를 향상시키는 것을 목표로 하고 있습니다. \n\n🔨 인게임 에셋 제작 \n 게임 기획 단계에서 설정된 캐릭터, 아이템, 맵 구성 등을 바탕으로 게임 플레이 시 캐릭터에게 필요한 아이템과, 맵에 활용되는 상호작용 오브젝트 등을 제작하였습니다. 또한 본격적인 레벨 디자인에 앞서 더미 모델링을 통해 플레이어와 보스, 맵 오브젝트 간의 스케일을 조정하며 구조를 설계하였습니다. \n\n🌏 캐릭터 간 크기 차이를 활용한 맵 디자인\n 소인 마법사들이 거인들의 도서관에 몰래 들어왔다는 컨셉을 살려 거인들이 사용하는 도구, 가구, 건축물 등을 맵 오브젝트로 활용하고 플레이어와 크기 및 높이의 차이를 강조하였습니다. 이 점을 통해 자연스럽게 공간을 분리하고, 스토리텔링을 연출할 수 있도록 맵을 디자인하였습니다. \n\n🎮 게임의 흐름을 반영한 레벨디자인\n 두 플레이어는 퍼즐을 풀 때에 다른 층으로 분리되어 있다가 보스 레이드 진행 시에 다시 재회하게 됩니다. 이에 따라 퍼즐 맵의 구조를 1층과 2층으로 나누어 체계적으로 설계하고 상호작용할 수 있는 주요 오브젝트를 각 층에 적절히 배치하였습니다. 스토리텔링과 연계하여 퍼즐을 풀어가면 두 플레이어가 자연스럽게 만나게 되어 게임의 흐름이 일관성 있게 유지되도록 디자인하였습니다. \n\n🎭 시각적 요소를 통한 분위기 연출\n 각 스테이지와 맵을 인위적으로 분리하지 않고, 맵의 구조와 라이팅에 변화를 주어 구분하도록 기획하였습니다. 밝고 차분한 분위기의 지상 맵에서 시작하여 보스 맵 등 이어서 만나게 되는 맵들을 더 어둡고 위험한 분위기로 연출하였고 이를 통해플레이어가 자연스럽게 게임에 몰입할 수 있도록 하였습니다. \n\n🥏 게임 진행도에 따른 기믹요소와 다양한 상호작용 오브젝트\n 게임의 후반부로 갈수록 맵 구조가 복잡해지고 퍼즐의 난이도가 올라갑니다. 이 과정에서 각 퍼즐과 스테이지마다 새로운 기믹을 도입하였습니다. 퍼즐 맵에서 등장하는 각도 퍼즐, 상형 문자 퍼즐, 체스 암호 퍼즐 등 세 가지와 더불어 액자, 계단, 전등, 체스 말, 서랍, 쪽지, 책, 짚라인 등 여러 상호작용 오브젝트를 통해 퍼즐에 재미 요소를 더했습니다. 또한 텍스쳐 작업을 통해 퍼즐 단서나 약도 등 게임 플레이에 필요한 정보를 발견할 수 있도록 디자인했습니다. \n\n🎵 음향: 손수 만든 BGM\n Wi, Zard!는 단순히 기획, 개발, 아트만 만들어내지 않았습니다. 게임의 컨셉인 마법사의 여행, 거인과 소인이라는 것을 극대화시키기 위해 배경음악 또한 직접 제작하였습니다. \n 소인 시점에서 진행되는 게임에서 거인이 등장하기에, 여기서 나오는 웅장함을 극대화 시키기 위해 오케스트라 장르를 채택했습니다. \n그리고, 퍼즐 단계의 배경음악은 호기심을 자극하는 윈드와 퍼커션를 주로 사용하고, 중간중간 스트링과 살살 들려오는 하이 톤의 퍼커션 소리로 주로 사용된 악기들을 강조했습니다. 약간의 긴장감을 위해 반음을 많이 섞기도 하였습니다. \n 또한, 게임 시스템에서 알 수 있듯 퍼즐에서 사용된 기믹을 보스가 패턴으로써 가지고 있기 때문에, 음악에서도 이를 표현했습니다. 퍼즐 배경음악에서 사용된 멜로디 진행이나 BPM등을 그대로 그 단계의 보스 배경음악으로 사용했습니다. 그리고, 보스전이기에, 호른과 트럼펫같은 웅장함을 강조하는 악기를 더욱 채용하고 퍼커션과 윈드류의 악기들은 뺐습니다. 그리고 저음역대를 강조하는 베이스나 첼로같은 스트링을 사용하여 사용자에게 위압감과 긴장감을 제공하고자 했습니다.',
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
        teamMembers: '김부성(글커20), 한채연(소융22), 도유정(소융22)',
        period: "2024.03 ~ 2024.11",
        description:
            '🎮게임 제목\n Sekhmet-43 \n\n 📑기획 의도\n 스토리 속 주인공이 느끼는 압박감과 긴장감을 플레이어에게도 전달하는 게임 \n\n 🧟장르\n 어드벤처 요소와 공포 요소가 가미된 스토리 중심의 게임 \n\n 👦이용대상자\n 19세 이상 게이머 \n\n 🗺️세계관 및 줄거리\n 2130년, 치명적인 바이러스 BCY-100에 의한 감염체들은 Sekhmet-43에서 격리되어 연구된다. 어느날 평화롭던 Sekhmet-43호는 태양풍에 휩쓸리고 주인공은 동료들의 싸늘한 시체와 깨진 캡슐을 마주하게 되는데... \n\n🎥몰입형 게임플레이를 완성하는 설계와 연출 \n컷씬을 활용한 스토리 중심의 게임 플레이를 통해 긴장감을 의도적으로 조절하고, 퀘스트 기반의 진행 방식으로 공간별 분위기를 차별화합니다. 방에서는 긴장감을 높이고, 통로에서는 긴장을 완화시키며, 동일한 출입구를 가진 폐쇄된 방을 배치하여 긴장감을 점진적으로 고조시킵니다. 또한, 디테일한 맵 분위기 조성과 사운드 연출을 활용해 몰입감을 극대화합니다. 예를 들어, 적의 심장 소리를 통해 접근을 직관적으로 인지할 수 있도록 하며, 옷장에 은신하여 적의 추적을 피하고 외부 상황을 파악할 수 있도록 설계하여 플레이어가 더욱 깊이 몰입할 수 있도록 합니다.',
        techStack: ["Unity", "Git"],
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
        description: '"Urban Desing Tool?\n\n- 환경 친화적인 도시를 설계할 수 있는 능력을 키우는 학습 도구\n\n필요성\n\n- 지구온난화와 도시화 속도가 급증함에 따라, 환경 친화적인 도시 설계의 필요성이 요구되었습니다.\n- 하지만, 환경과 비용을 고려한 도시 설계 연습 수단이 부족합니다.\n\n모델 구조\n\n1. 도시 설계\n\n> Unity를 통해 구현한 도구를 이용하여 사용자가 직접 도시를 설계\n\n도구 활성화\n\n- 타이틀 화면\n- 초기 화면에서 타이틀을 클릭하면 도구가 활성화됩니다. 이는 사용자가 도구를 쉽게 시작할 수 있도록 직관적인 접근성을 제공합니다.\n\n건물 배치\n\n- 사용자 인터페이스(UI)\n- UI는 건물을 주거, 자연, 발전소, 상업, 쓰레기 등 다양한 카테고리로 분류하여 제공합니다. 사용자는 원하는 건물을 클릭하여 배치할 준비를 할 수 있습니다.\n\n배치 탐색\n\n- 사용자가 맵 내에서 배치할 공간을 탐색할 때, 배치 가능한 위치는 초록색으로, 불가능한 위치는 빨간색으로 표시됩니다. 이는 사용자가 적절한 위치를 쉽게 찾을 수 있도록 도와줍니다.\n\n건물 회전 및 삭제\n\n- 회전 기능\n- Q, E 버튼을 사용하여 건물을 회전시킬 수 있습니다. 이는 건물이 주변 환경과 조화를 이루도록 배치할 수 있게 합니다.\n\n- 삭제 기능\n- X버튼을 눌러 이미 배치한 건물을 삭제할 수 있습니다. 이를 통해 사용자는 설계를 자유롭게 수정할 수 있습니다.\n\n설계 결과 분석\n\n> GPT를 이용하여 설계한 도시에 대한 분석 결과를 제시\n\n환경적 측면 평가 기준\n\n- 녹색도시 평가 기준 by 국토교통부\n\n비용적 측면 평가 기준\n\n- 2024년도 상반기 건설공사 표준시장단가 by 국토교통부, 한국건설기술연구\n\n💰 수익 모델\n\n교육 시장\n- 라이센스 제공 & 구독 서비스\n\n건설사 및 설계사\n- 기업용 라이센스 제공 & 맞춤형 솔루션 + 연간 유지보수 및 업데이트 서비스\n\n정부 및 공공기관\n- 도시 계획 프로젝트',
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
        teamMembers: '박성령(소융21)',
        period: '2024.09.07 ~ 2024.11.25',
        description: '다크소울과 엘든링에 나오는 보스들과 세키로의 전투 시스템을 합치면 재밌을 것 같다는 생각에서 시작한 프로젝트입니다. \n 보스들은 엘든링과 보스들의 패턴과 유사한 점이 많습니다. 이러한 적들을 세키로의 패링 시스템을 이용하여 무찔러야 합니다. \n게임은 언리얼 엔진5로 제작했습니다.',
        techStack: ['Unreal Engine 5', 'Blueprint'],
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
        teamMembers: '김채연(소융21), 송인서(소융21), 조소연(소융21), 한세은(소융21), 허건호(소융21)',
        period: '2023.01 ~ 2023.03(약 3개월)',
        description: 'KingMini는 3D 싱글 플레이어 플랫포머 게임입니다. 귀엽고 아기자기한 로우폴리 그래픽으로 되어 있으며 장애물들을 피해 목적지에 도달해야하는 게임입니다! \n\n✔ 다양한 맵\n 사무실, 탁구장, 다용도실, 화장실 등등 다양한 스테이지를 클리어해 보세요!\n\n 🔥 어려운 난이도\n 이 게임은 어렵습니다! 예상치 못한 함정이 쏟아집니다! \n\n 🗺 길 찾기\n회사 곳곳 배치되어 있는 물건들을 활용해 길을 개척해 나가세요!',
        techStack: ['Unity', 'Git'],
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?v=Z_AtXHbdEzY&ab_channel=ZileYe',
            },
            { type: 'github', href: 'https://github.com/Giggle-Games' },
            { type: 'steam', href: 'https://store.steampowered.com/app/2336310/KingMini/' },
        ],
        extraImages: [
            '/images/project/kingmini/1.webp',
            '/images/project/kingmini/2.webp',
         
          ],
        

    },
    {
        id: 'hey-joody',
        title: 'Hey Joody?',
        subTitle: '3D 액션 공포 게임',
        teamMembers: '전재현(소융19), 허건호(소융21)',
        description: '',
        techStack: ['Unreal Engine 5', 'Git'],
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
        teamMembers: '최현승(소융20), 권신혁(소융23), 김수은(소융23), 송예린(소융23)',
        period: '2023.08 ~ 2023.11',
        techStack: ['Unity', 'Git'],
        description: '',
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
        teamMembers: '유다인(소융 21), 한세은(소융 21)',
        period: '2023.02 ~ 2023.10',
        techStack: ['Unity', 'Photon PUN2/Fusion2','Photon Chat'],
        description: '',
        extraImages: [
            '/images/project/iceddaeng/1.webp',
            '/images/project/iceddaeng/2.webp',
         
          ],
        
    },
    {
        id: 'shut-the-mouse',
        title: 'Shut The Mouse',
        subTitle: '2D 싱글 슈팅 게임',
        teamMembers: '김채연(소융21), 송인서(소융21), 한세은(소융21), 허건호(소융21)',
        period:' 2022.09~2022.12',
        description: 'Shut The Mouse는 2D 탑뷰 슈팅 게임입니다. 플레이어는 맵 속 다양한 적과 함정을 마주하게 됩니다. 다양한 무기를 습득하고 적들의 공격을 피하여 앞으로 나아가야 합니다. \n\n👾다양한 적\n서로 다른 방법으로 공격해 오는 적들에 맞서 싸우세요!\n\n🔫다양한 무기\n특색있는 무기들을 찾아 다양한 방법으로 싸워보세요!\n\n👑보스 몬스터\n다양한 패턴으로 공격해오는 보스를 이겨 스테이지를 클리어하세요!',
        techStack: ['Unity'],
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
        teamMembers: '김채연(소융21), 조소연(소융21), 한세은(소융21), 허건호(소융21)',
        period: '2023.09 ~ 2024.09 (약 6개월)',
        description: '직접 그린 무기로 싸우는 모바일 2D 플랫포머 게임 \n\n -플랫폼: Android\n -구글 플레이스토어 출시 (2024.09.) \n- 2024 버닝비버 전시 (2024.12.)',
        techStack: ['Unity'],
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?v=aIhGWxj5F2w&ab_channel=ZileYe',
            },
        ],
        extraImages: [
            '/images/project/sketcheez/1.webp',
            '/images/project/sketcheez/2.webp',
            '/images/project/sketcheez/3.webp',
            '/images/project/sketcheez/4.webp',
            '/images/project/sketcheez/5.webp',
            '/images/project/sketcheez/6.webp',
            '/images/project/sketcheez/7.webp',
            '/images/project/sketcheez/8.webp',
         
          ],
    },
    {
        id: 'cat-g-me-if-you-can',
        title: '캣 쥐 미 이프 유 캔',
        subTitle: '3D 퍼즐 잠입 게임',
        description: '',
        links: [
            { type: 'github', href: 'https://github.com/CuriHuS/Cat-G-Me-If-You-Can' },
        ],
    },
    {
        id: 'strange-saviors',
        title: 'Strange Saviors',
        subTitle: '3D 액션 RPG 게임',
        teamMembers: '김솔미, 송인서(소융21), 허건호(소융21)',
        period: '2022.09~2022.12 (약 3개월)',
        description: 'Strange Savior은 싱글 플레이어 액션 게임입니다.플레이어는 3개의 캐릭터를 조작하여 적과 싸워야 합니다. 화려한 액션과 다양한 조작을 활용하여 적을 무찌르고, 도시를 구하세요! \n\n⚔화려한 액션\n 콤보 어택으로 다양한 모션을 즐기세요! 화려한 이펙트로 타격감을 느끼세요! \n\n 💀보스 몬스터\n다양한 패턴으로 공격해오는 보스에 맞서 싸우세요! \n\n🔁캐릭터 교체\n3개의 캐릭터를 교체하면서 서로 다른 스킬을 사용해보세요! 특수 스킬은 연계해서 사용할 수 있습니다!',
        techStack: ['Unreal Engine 5'],
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
        period: '2021.10.20 ~ 2021.11.17',
        teamMembers: '박성령(소융21)',
        description: '이 게임의 목표는 적들과 싸워 적을 무찌르는 것 입니다. 적을 무찌른다는 하나의 큰 목적을 가지고 플레이어는 체력과 스테미나를 잘 활용해 게임을 플레이합니다.',
        techStack: ['Unreal Engine 4', 'Blueprint', 'Maya'],
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
        teamMembers: '김채연(소융21), 조소연(소융21), 한세은(소융21), 허건호(소융21)',
        description: '',
        techStack: ['Unity', 'Git'],
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
        techStack: ['Unity', 'Git'],
        description: '',
        links: [
            {
                type: 'youtube',
                href: 'https://www.youtube.com/watch?v=hmH5L3QGY1U',
            },
        ],
    },
];

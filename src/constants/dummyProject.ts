import { Link } from '@/components/common/Thumbnail';

export type Project = {
  title: string;
  subTitle: string;
  description: string;
  links?: Link[];
};

export const TAB_LIST = ['전체', '15기', '14기', '13기', '12기', '11기', '~10기'];
export const PROJECT_LIST: Project[] = [
  {
    title: '모링(moring)',
    subTitle: '15기',
    description: '모임으로 하나되는 우리 -<br/>릴레이 질문으로 채워나가는 나만의 자기소개',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/206508371/(moring)-',
      },
      { type: 'Github', href: 'https://github.com/depromeet/15th-team3-FE' },
      { type: 'Web', href: 'https://www.moring.one/' },
    ],
  },
  {
    title: '왈왈(WALWAL)',
    subTitle: '15기',
    description: '반려동물과 함께 추억을 기록하고 공유하는<br/>새로운 펫 커뮤니티 서비스',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/207768545/WALWAL-%08PET-SERVICE',
      },
      { type: 'Github', href: 'https://github.com/depromeet/WalWal-iOS' },
      { type: 'iOS', href: 'https://apps.apple.com/kr/app/%EC%99%88%EC%99%88/id6553981069' },
    ],
  },
  {
    title: 'SPOT!',
    subTitle: '15기',
    description: '내가 만들어가는 야구장 시야 서비스<br/>My BallPark Seat View Service',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/207588847/SPOT-My-BallPark-Seat-View-Service',
      },
      { type: 'Github', href: 'https://github.com/depromeet/SPOT-Android' },
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.dpm.spot',
      },
    ],
  },
  {
    title: 'BBOGAK 뽀각',
    subTitle: '15기',
    description: '취준 정보 정리를 돕는, 나의 취뽀 도우미 뽀각',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/207843619/BBOGAK-',
      },
      { type: 'Github', href: 'https://github.com/depromeet/bbo-gak-server' },
      {
        type: 'Web',
        href: 'https://www.bbogak.com/login',
      },
    ],
  },
  {
    title: 'swimie',
    subTitle: '15기',
    description: '친구들의 응원과 함께하는 수영 일기',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/207850709/swimie-l-',
      },
      { type: 'Github', href: 'https://github.com/depromeet/Swimie-Web' },
      {
        type: 'Web',
        href: 'https://apps.apple.com/ca/app/swimie/id6670447205',
      },
    ],
  },
  {
    title: 'Layer',
    subTitle: '15기',
    description: '성장하는 당신을 위한 회고 서비스<br/>Retrospective service',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/207850381/Layer-Retrospective-service',
      },
      { type: 'Github', href: 'https://github.com/depromeet/layer' },
      {
        type: 'Web',
        href: 'https://www.layerapp.io/login',
      },
    ],
  },
  {
    title: '반디부디',
    subTitle: '14기',
    description: '내가 그리는 나의 인생지도<br/>Draw your life map',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/191517975/BANDIBOODI-Draw-your-life-map?tracking_source=search_projects|bandiboodi',
      },
      { type: 'Github', href: 'https://github.com/depromeet/amazing3-fe' },
      { type: 'Web', href: 'https://www.bandiboodi.com' },
    ],
  },
  {
    title: 'PRAISE-UP',
    subTitle: '14기',
    description: '이미지로 소통하는 칭찬 SNS',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/191497631/praise-up-SNS',
      },
      { type: 'Github', href: 'https://github.com/depromeet/praise-up-client' },
      { type: 'Web', href: 'https://www.praise-up.app/' },
    ],
  },
  {
    title: '10MM (10분만)',
    subTitle: '14기',
    description: '하루 10분으로 시작하는 시간 관리 서비스<br/>Time management App',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/191522849/10-10-Time-management-%08App?tracking_source=search_projects%7C10mm',
      },
      { type: 'Github', href: 'https://github.com/depromeet/10mm-client-web' },
      { type: 'Web', href: 'https://www.10mm.today/auth/login?redirect=/' },
    ],
  },
  {
    title: '틈틈',
    subTitle: '14기',
    description: 'IT Career Growth Networking Service',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/191510163/%08TEUMTEUM-IT-Career-Growth-Networking-Service',
      },
      { type: 'Github', href: 'https://github.com/depromeet/TeumTeum-Android' },
      {
        type: 'APP',
        href: 'https://play.google.com/store/apps/details?id=com.teumteum.teumteum&pli=1',
      },
    ],
  },
  {
    title: '또잇또잇',
    subTitle: '14기',
    description: '재방문 맛집 공유<br/>Revisit Eatery Sharing',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/191512505/DDOEAT-DDOEAT-Revisit-Eatery-Sharing',
      },
      { type: 'Github', href: 'https://github.com/depromeet/ddoeat_client' },
      {
        type: 'Web',
        href: 'https://www.ddoeat.site/',
      },
    ],
  },
  {
    title: '삐삐',
    subTitle: '14기',
    description: '하루 한 번, 가족에게 보내는 생존신고 서비스<br/>Family Widget Service',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/191508405/-Family-Widget-Service',
      },
      { type: 'Github', href: 'https://github.com/depromeet/14th-team5-iOS' },
      {
        type: 'APP',
        href: 'https://no5ing.kr/',
      },
    ],
  },
];
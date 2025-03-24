// award.ts
export type Award = {
    year: string;
    title: string;
    place: string;
    holder?: string;
  };
  
  export const YEAR_LIST = ['전체', '2024', '2023', '2022'];
  
  export const AWARD_LIST: Award[] = [
    {
      year: '2024',
      title: '경희대학교 SW페스티벌',
      place: '대상',
      holder: 'Sketcheez',
    },
    {
      year: '2024',
      title: '경희대학교 예술적인 소프트웨어',
      place: '대상',
      holder: 'Wi, Zard!',
    },
    {
      year: '2024',
      title: '2024 실감미디어 경진대회',
      place: '최우수상',
      holder: 'Wi, Zard!',
    },
    {
      year: '2024',
      title: '경희대학교 KHUTHON',
      place: '최우수상',
      holder: 'Urban Design Tool (UDT)',
    },
    {
      year: '2024',
      title: '경희대학교 SW페스티벌',
      place: '우수상',
      holder: 'Wi, Zard!',
    },
    {
      year: '2024',
      title: '경희대학교 KHreative Startup Dream 2.0',
      place: '창의상',
      holder: 'Urban Design Tool (UDT)',
    },
    {
      year: '2023',
      title: '경희대학교 SW Festival',
      place: '최우수상',
      holder: 'KingMini',
    },
    {
      year: '2023',
      title: '경희대학교 SW Festival',
      place: '주니어상',
      holder: '쇼츠만 본지 30년하고 8개월, 내가 던전을 깰 수 있을 리 없잖아 무리무리! (※ 무리가 아니었다?!)',
    },
    {
      year: '2023',
      title: '경희대학교 SW 창업 아이디어 경진 대회',
      place: '장려상',
      holder: 'Elementee',
    },
    {
      year: '2023',
      title: '경희대학교 SW made game',
      place: '최우수상',
      holder: 'KingMini',
    },
    {
      year: '2022',
      title: '코로나 극복 동아리 대항전',
      place: '우수상',
    },
    {
      year: '2022',
      title: '경희대학교 Khuthon',
      place: '대상',
      holder: 'sul타버스',
    },
    {
      year: '2022',
      title: '경희대학교 Khuthon',
      place: '최우수상',
      holder: 'Trapped in Metaverse',
    },
    {
      year: '2022',
      title: '경희대학교 Khuthon',
      place: '최우수상',
      holder: 'PORTFOLIA',
    },
    {
      year: '2022',
      title: '경희대학교 Khuthon',
      place: '다우 기술상',
      holder: 'PORTFOLIA',
    },
    {
      year: '2022',
      title: '경희대학교 SW Festival',
      place: '대상',
      holder: 'Dungeon and Signal',
    },
    {
      year: '2022',
      title: '경희대학교 SW Festival',
      place: '우수상',
      holder: 'Zero dream',
    },
    {
      year: '2022',
      title: '경희대학교 SW Festival',
      place: '주니어상',
      holder: 'Shut The Mouse',
    },
  ];
  
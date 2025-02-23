import khuLogo from '@/assets/icons/khu.png';
import com2usLogo from '@/assets/icons/com2us.png';
import { StaticImageData } from 'next/image';

export type Sponsor = {
    title: string;
    image: StaticImageData;
    link: string;
}

export const SPONSOR_LIST: Sponsor[] = [
    {
        title: '경희대학교 소프트웨어융합대학',
        image: khuLogo,
        link: 'https://software.khu.ac.kr/',
    },
    {
        title: '컴투스',
        image: com2usLogo,
        link: 'https://software.khu.ac.kr/',
    },
]
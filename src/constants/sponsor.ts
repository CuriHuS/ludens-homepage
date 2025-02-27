import khuLogo from '@/assets/icons/khu.png';
import kogLogo from '@/assets/icons/kog.png';
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
        title: '코그',
        image: kogLogo,
        link: 'https://www.kog.co.kr/',
    },
]
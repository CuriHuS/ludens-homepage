'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ActivityType } from '@/constants/activity';
import { defaultFadeIn } from '@/constants/motion'

type ActivityCardProps = {
    title: string;
    type: ActivityType;
    year: string;
    date: string;
    img: string;
};

export function ActivityCard({ title, type, year, date, img }: ActivityCardProps) {
    return (
        <motion.article
            className="relative h-[220px] w-full overflow-hidden rounded-xl hover:cursor-pointer group"
            initial="initial"
            animate="animate"
            variants={defaultFadeIn}
        >
            <Image
                className="object-cover object-center rounded-xl group-hover:brightness-[0.3]"
                src={img}
                alt={title}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-0" />
            <div className="absolute inset-0 flex flex-col justify-end gap-0 p-6 z-20 group-hover:backdrop-blur-sm">
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <span className="px-2.5 py-1 text-base font-medium bg-neutral-700 backdrop-blur-sm rounded-lg text-white">
                        {type}
                    </span>
                    <span className="px-2.5 py-1 text-base font-medium bg-kyunghee-red-950 backdrop-blur-sm rounded-lg text-white">
                        {year}
                    </span>
                </div>
                <p className="mt-0.5 text-2xl font-bold leading-[150%] text-white">{title}</p>
                <p className="text-base font-semibold leading-[150%] text-white/60 whitespace-pre-wrap">{date}</p>
            </div>
        </motion.article>
    );
}

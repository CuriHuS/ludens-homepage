'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import youtubeLogo from '../../../assets/icons/youtube.svg';
import githubLogo from '../../../assets/icons/github.svg';
import steamLogo from '../../../assets/icons/steam.svg';

export type Link = {
    type: 'youtube' | 'github' | 'steam';
    href: string;
};

type ProjectCardProps = {
    title: string;
    subTitle?: string;
    img: string;
    links?: Link[];
};

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const logoMap = {
    youtube: youtubeLogo,
    github: githubLogo,
    steam: steamLogo
};

export function ProjectCard({ title, subTitle, img, links }: ProjectCardProps) {
    return (
        <motion.article
            className="relative h-[220px] w-full overflow-hidden rounded-xl hover:cursor-pointer group"
            initial="initial"
            animate="animate"
            variants={fadeIn}
        >
            <Image
                className="object-cover object-center rounded-xl transition-all duration-300 group-hover:brightness-[0.3]"
                src={img}
                alt={title}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />
            <div className="absolute bottom-0 w-full h-[172px]" />
            <div className="absolute inset-0 flex flex-col gap-2 p-6 opacity-0 group-hover:opacity-100 hover:backdrop-blur-sm transition-opacity duration-300">
                <p
                    className="mt-0.5 text-2xl font-semibold leading-[150%] text-white"
                    dangerouslySetInnerHTML={{ __html: title as string }}
                />
                <p
                    className="text-[15px] font-medium leading-[150%] text-white whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: subTitle as string }}
                />
                {links && (
                    <div className="mt-auto flex items-center gap-1">
                        {links.map(link => (
                            <span key={link.type} className="flex items-center">
                                <a
                                    href={link.href}
                                    target="_blank"
                                    className="mr-0.5 z-10"
                                    rel="noreferrer"
                                >
                                    <Image className="cursor-pointer hover:scale-110 transition-all duration-300"
                                        src={logoMap[link.type]}
                                        width={40}
                                        height={40}
                                        id={link.type}
                                        alt={`${link.type} link`}
                                    />
                                </a>
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.article>
    );
}

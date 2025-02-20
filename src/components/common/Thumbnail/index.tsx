'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export type Link = {
  type: 'Behance' | 'Github' | 'Web' | 'Android' | 'iOS' | 'APP' | 'MEDIUM';
  href: string;
};

type ThumbnailProps = {
  title: string;
  subTitle?: string;
  img: string;
  description?: string;
  links?: Link[];
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function Thumbnail({ title, subTitle, img, description, links }: ThumbnailProps) {
  return (
    <motion.article 
      className="relative h-[220px] w-full overflow-hidden rounded-xl hover:cursor-pointer group"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <Image 
        className="object-cover object-center rounded-xl transition-all duration-300 group-hover:brightness-50"
        src={img} 
        alt={title} 
        fill 
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <div className="absolute bottom-0 w-full h-[172px]" />
      <div className="absolute inset-0 flex flex-col gap-2 p-6 opacity-0 group-hover:opacity-100 hover:backdrop-blur-sm transition-opacity duration-300">
        <div>
          <p className="text-sm font-medium leading-[150%] text-white/46">{subTitle}</p>
          <p 
            className="mt-0.5 text-2xl font-semibold leading-[150%] text-white"
            dangerouslySetInnerHTML={{ __html: title as string }} 
          />
        </div>
        <p 
          className="text-[15px] font-medium leading-[150%] text-white whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: description as string }} 
        />
        {links && (
          <div className="mt-auto flex items-center gap-3">
            {links.map(link => (
              <span key={link.type} className="flex items-center">
                <a 
                  href={link.href} 
                  target="_blank" 
                  className="text-base font-semibold text-[#9BE4E3] mr-0.5 z-10" 
                  rel="noreferrer"
                >
                  {link.type}
                </a>
                <ArrowRight
                  className="text-[#9BE4E3]"
                  size={16}
                />
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

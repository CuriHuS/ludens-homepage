// projectCard.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import youtubeLogo from "@/assets/icons/youtube.svg";
import githubLogo from "@/assets/icons/github.svg";
import steamLogo from "@/assets/icons/steam.svg";
import { defaultFadeIn } from "@/constants/motion";
import Link from "next/link";
import { ProjectLink } from "@/types/projectLink";
import { useRouter } from "next/navigation";

type ProjectCardProps = {
  id: string;
  title: string;
  subTitle?: string;
  img: string;
  links?: ProjectLink[];
};

const logoMap = {
  youtube: youtubeLogo,
  github: githubLogo,
  steam: steamLogo,
};

export function ProjectCard({
  id,
  title,
  subTitle,
  img,
  links,
}: ProjectCardProps) {
  const router = useRouter();

  return (
    <motion.article
      className="relative h-[220px] w-full overflow-hidden rounded-xl hover:cursor-pointer group"
      initial="initial"
      animate="animate"
      variants={defaultFadeIn}
      onClick={() => router.push(`/project/${id}`)}
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
      <div className="absolute inset-0 flex flex-col gap-2 p-6 opacity-0 group-hover:opacity-100 hover:backdrop-blur-sm transition-opacity duration-300">
        <p className="mt-0.5 text-2xl font-bold leading-[150%] text-white">
          {title}
        </p>
        <p className="text-base font-medium leading-[150%] text-gray-300 whitespace-pre-wrap">
          {subTitle}
        </p>
        {links && (
          <div className="mt-auto flex items-center gap-1">
            {links.map((link) => (
              <span key={link.type} className="flex items-center">
                <Link href={link.href} target="_blank" rel="noreferrer" prefetch>
                  <Image
                    className="cursor-pointer hover:scale-110 transition-all duration-300"
                    src={logoMap[link.type]}
                    width={40}
                    height={40}
                    id={link.type}
                    alt={`${link.type} link`}
                  />
                </Link>
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

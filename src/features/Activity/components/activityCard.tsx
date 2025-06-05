"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ActivityType } from "@/constants/activity";
import { defaultFadeIn } from "@/constants/motion";

type ActivityCardProps = {
  id?: string;
  title: string;
  type: ActivityType;
  // year가 string | string[] 모두 가능
  year: string | string[]; // <-- changed
  date: string;
  img: string;
  onClick?: () => void;
};

export function ActivityCard({
  id,
  title,
  type,
  year,
  date,
  img,
  onClick,
}: ActivityCardProps) {
  // UI 표시용으로 처리
  const yearText = Array.isArray(year) ? year.join("·") : year; // <-- changed

  return (
    <motion.article
      className="relative h-[220px] w-full overflow-hidden rounded-xl hover:cursor-pointer group"
      initial="initial"
      animate="animate"
      variants={defaultFadeIn}
      onClick={() => {
        if (onClick) {
          onClick();
        } else if (id) {
          window.location.href = `/activity/${id}`;
        }
      }}
    >
      <Image
        className="object-cover object-center rounded-xl group-hover:brightness-[0.3] transition-all duration-200"
        src={img}
        alt={title}
        fill
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end gap-0 p-6 z-20 group-hover:backdrop-blur-sm">
        <div className="absolute top-4 left-4 flex gap-2 z-20">
          <span className="px-2.5 py-1 text-base font-medium bg-neutral-700 backdrop-blur-sm rounded-lg text-white">
            {type}
          </span>
          <span className="px-2.5 py-1 text-base font-medium bg-kyunghee-red-950 backdrop-blur-sm rounded-lg text-white">
            {yearText}
          </span>
        </div>
        <p className="mt-0.5 text-2xl font-bold leading-[150%] text-white">
          {title}
        </p>
        <p className="text-base font-medium leading-[150%] text-white/60 whitespace-pre-wrap">
          {date}
        </p>
      </div>
    </motion.article>
  );
}

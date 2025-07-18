// src/features/Project/sections/projectSection.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/features/Project/components/projectCard";
import { ProjectLink } from "@/types/projectLink";
import { staggerHalf } from "@/constants/motion";
import { PROJECT_LIST } from "@/constants/project";

const INITIAL_VISIBLE_PROJECTS = 6;

export default function ProjectSection() {
  const [visibleProjects, setVisibleProjects] = useState(
    INITIAL_VISIBLE_PROJECTS
  );

  const onClickShowMore = () => {
    setVisibleProjects((prev) => prev + INITIAL_VISIBLE_PROJECTS);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <p className="text-3xl text-white text-center font-semibold mt-48 mb-12">
        프로젝트
      </p>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="w-full mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={staggerHalf}
        >
          {PROJECT_LIST.slice(0, visibleProjects).map((project) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              img={`/images/project/${project.id}/thumbnail.${
                project.thumbnailFormat || "webp"
              }`}
              title={project.title}
              subTitle={project.subTitle}
              links={project.links as ProjectLink[]}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      {visibleProjects < PROJECT_LIST.length && (
        <button
          onClick={onClickShowMore}
          className="mt-12 py-2.5 px-6 text-base font-semibold rounded-full bg-white text-black"
        >
          더보기
        </button>
      )}
    </div>
  );
}

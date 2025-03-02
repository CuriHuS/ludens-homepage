// projectModal.tsx (예시)
'use client';

import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Project } from '@/constants/project';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-neutral-900 text-white rounded-xl p-8"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* 프로젝트 요약 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">프로젝트 요약</h2>
          <div className="flex flex-col gap-2 text-base leading-6">
            <p>
              <span className="font-semibold">프로젝트명: </span>
              {project.title}
            </p>
            <p>
              <span className="font-semibold">한 줄 소개: </span>
              {project.subTitle}
            </p>
            <p>
              <span className="font-semibold">팀 구성: </span>
              {project.teamMembers || '미등록'}
            </p>
            <p>
              <span className="font-semibold">프로젝트 기간: </span>
              {project.period || '미등록'}
            </p>
            <p>
              <span className="font-semibold">사용 기술 스택: </span>
              {project.techStack || '미등록'}
            </p>
          </div>
        </section>

        {/* 프로젝트 설명 */}
        <section>
          <h2 className="text-xl font-bold mb-4">프로젝트 설명</h2>
          <p className="text-base leading-6 whitespace-pre-wrap">
            {project.description}
          </p>
        </section>
      </motion.div>
    </motion.div>
  );
}

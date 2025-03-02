// src/features/Project/components/index.tsx
'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { Project } from '@/constants/project';

export type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Wrapper */}
      <div
        className="
          relative 
          w-full max-w-[944px] 
          bg-[rgba(21,21,25,0.9)] 
          text-white font-suit 
          rounded-xl 
          p-8
          "
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={onClose} className="cursor-pointer">
            <XMarkIcon className="h-6 w-6 hover:text-gray-300" />
          </button>
        </div>

        {/* 전체 레이아웃: 왼쪽은 내용, 오른쪽은 이미지 */}
        <div className="flex flex-col lg:flex-row mt-4">
          {/* Left: 텍스트 영역 */}
          <div className="flex flex-col justify-between w-full lg:w-[544px] space-y-8">
            {/* 프로젝트 요약 */}
            <section className="bg-[#5d5e67] rounded-[10px] p-6">
              <h2 className="text-[20px] font-bold mb-4">프로젝트 요약</h2>
              <div className="space-y-2 text-base leading-6">
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
            <section className="bg-[#2f3038] rounded-[10px] p-6">
              <h2 className="text-[20px] font-bold mb-4">프로젝트 설명</h2>
              <p className="text-base leading-6 whitespace-pre-wrap overflow-auto scrollbar-hidden">
                {project.description}
              </p>
            </section>
          </div>

          {/* Right: 썸네일 이미지 (lg 이상에서 보임) */}
          <div className="hidden lg:block w-[384px] h-[542px] ml-8">
            <img
              src={`/images/project/${project.id}/thumbnail.${project.thumbnailFormat || 'webp'}`}
              alt={project.title}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

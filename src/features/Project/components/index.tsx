"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Project } from "@/constants/project";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const thumbnail = `/images/project/${project.id}/thumbnail.${
    project.thumbnailFormat || "webp"
  }`;
  const extraImages = project.extraImages ?? [];
  const images = [thumbnail, ...extraImages];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-neutral-900 text-white rounded-xl p-4 md:p-8 scrollbar-hide">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="flex flex-col gap-6 mt-8">
          <div className="bg-gray-700/70 rounded -[10px] p-6">
            <p className="font-bold text-4xl mb-1">{project.title}</p>
            <p>{project.subTitle}</p>
          </div>
          {/* 상단: 이미지 슬라이더 + 프로젝트 요약 */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* 왼쪽 열: 이미지 슬라이더 */}
            <div className="w-full md:w-[600px]">
              <div className="relative aspect-[16/9]">
                <img
                  src={images[currentImageIndex]}
                  alt={`${project.title} image ${currentImageIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-300"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
                    >
                      &lt;
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
                    >
                      &gt;
                    </button>
                  </>
                )}
                {/* 이미지 인디케이터 (원) */}
                {images.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${
                          currentImageIndex === idx ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* 오른쪽 열: 프로젝트 요약 */}
            <div className="flex-1 space-y-6">
              <section className="border-[1px] rounded-[10px] p-6">
                <div className="space-y-4 text-base leading-6">
                  <div>
                    <p className="font-semibold mb-1 text-l text-gray-400">
                      팀 구성
                    </p>
                    <p className="whitespace-pre-wrap">
                      {project.teamMembers || "미등록"}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-l text-gray-400">
                      프로젝트 기간
                    </p>
                    <p>{project.period || "미등록"}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-l text-gray-400">
                      사용 기술 스택
                    </p>
                    {project.techStack && project.techStack.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block bg-[#3d3e47] px-2 py-1 rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p>미등록</p>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* 하단: 프로젝트 설명 */}
          <section className="bg-[#2f3038] rounded-[10px] p-6">
            <h2 className="text-lg font-bold mb-4">프로젝트 설명</h2>
            <div className="h-[200px] overflow-auto whitespace-pre-wrap scrollbar-hide">
              {project.description}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

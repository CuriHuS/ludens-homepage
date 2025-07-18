"use client";

import { useState } from "react";
import Image from "next/image";
import { NextButton, PrevButton } from "@/components/common/CarouselArrowButton";

type ImageCarouselProps = {
  images: string[];
  projectTitle: string;
};

export default function ImageCarousel({
  images,
  projectTitle,
}: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (images.length === 0) {
    return <p className="text-center text-gray-500">이미지가 없습니다.</p>;
  }

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative aspect-[16/9]">
        <Image
          src={images[currentImageIndex]}
          alt={`${projectTitle} image ${currentImageIndex + 1}`}
          width={600}
          height={337}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 rounded-2xl"
          sizes="(max-width: 768px) 100vw, 1000px"
          priority={currentImageIndex === 0}
          quality={85}
        />
        {images.length > 1 && (
          <>
            {images[(currentImageIndex + 1) % images.length] && (
              <link rel="preload" href={images[(currentImageIndex + 1) % images.length]} as="image" />
            )}
            <PrevButton
              onClick={handlePrev}
              className="absolute left-8 lg:left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-white/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/20"
            />
            <NextButton
              onClick={handleNext}
              className="absolute right-8 lg:right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-white/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/20"
            />
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${currentImageIndex === idx ? "bg-white" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

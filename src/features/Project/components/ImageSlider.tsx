"use client";

import { useState } from "react";
import Image from "next/image";

type ImageSliderProps = {
  images: string[];
  projectTitle: string;
};

export default function ImageSlider({
  images,
  projectTitle,
}: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full md:w-[600px]">
      <div className="relative aspect-[16/9]">
        <Image
          src={images[currentImageIndex]}
          alt={`${projectTitle} image ${currentImageIndex + 1}`}
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
  );
}

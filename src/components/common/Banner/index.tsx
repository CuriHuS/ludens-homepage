import Image, { StaticImageData } from "next/image";

interface BannerSectionProps {
  imageSrc: StaticImageData; // 배너 이미지 경로
  title: string; // 배너 제목
  subtitle: string; // 배너 서브 텍스트
}

export default function BannerSection({
  imageSrc,
  title,
  subtitle,
}: BannerSectionProps) {
  return (
    <>
      <div className="absolute top-10 left-0 right-0 min-h-[300px]">
        <section className="relative">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent via-45% to-black to-95%" />
          {/* 배너 이미지 */}
          <Image
            src={imageSrc}
            alt="배너 이미지"
            className="h-[300px] object-cover w-full brightness-[0.8]"
          />

          {/* 배너 위 텍스트 추가 */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center">
            <p className="text-5xl font-bold text-white md:text-7xl mb-4">
              {title}
            </p>
            <p className="text-base font-semibold text-white md:text-xl">
              {subtitle}
            </p>
          </div>
        </section>
      </div>
      <div className="h-[300px] mt-10 mb-24" />
    </>
  );
}

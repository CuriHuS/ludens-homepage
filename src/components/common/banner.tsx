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
    <section className="relative w-full">
      <div className="relative w-screen">
        {/* 배너 이미지 */}
        <Image
          src={imageSrc}
          alt="배너 이미지"
          className="w-full h-[500px] object-cover"
        />

        {/* 배너 위 텍스트 추가 */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center">
          <p className="mb-6 text-6xl text-center font-extrabold text-white md:text-8xl">
            {title}
          </p>
          <p className="mb-0 text-base text-center font-semibold text-white md:text-3xl">
            <span className="text-blue-200">LUDENS</span>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

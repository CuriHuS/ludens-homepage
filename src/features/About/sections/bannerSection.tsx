import Image from "next/image";
import bannerImg from "@/assets/banners/banner1-2.png";

export default function BannerSection() {
  return (
    <section className="absolute inset-0 flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent to-60%" />
      <Image
        src={bannerImg}
        alt="banner"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 flex flex-col justify-center items-center">
        <p className="mb-4 text-6xl text-center font-extrabold text-white md:text-8xl">
          LUDENS
        </p>
        <p className="mb-4 text-base text-center font-semibold text-white md:text-xl">
          경희대학교 소프트웨어융합대학 게임 제작 동아리
        </p>
      </div>
    </section>
  );
}

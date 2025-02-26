"use client";

import { LUDENS_EMAIL } from "@/constants/ludens";
import { SPONSOR_LIST } from "@/constants/sponsor";
import SponsorCard from "@/features/Sponsor/components/sponsorCard";
import BannerSection from "@/components/common/banner";
import SponsorBanner from "@/assets/banners/banner4.png";

export default function Sponsor() {
  return (
    <section className="w-full flex flex-col mt-20 items-center">
      <div className="relative w-screen min-h-[500px]">
        <BannerSection
          imageSrc={SponsorBanner}
          title="Sponsors"
          subtitle="를 도와주시는 기업들"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black h-full" />
      </div>

      <div className="w-fit grid grid-cols-1 gap-x-12 gap-y-0 md:grid-cols-2">
        {SPONSOR_LIST.map((sponsor) => (
          <SponsorCard key={sponsor.title} {...sponsor} />
        ))}
      </div>
      <a
        href={LUDENS_EMAIL}
        className="mt-28 py-2.5 px-6 text-base font-semibold rounded-full bg-white text-black"
      >
        후원 문의
      </a>
    </section>
  );
}

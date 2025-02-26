"use client";

import BannerSection from "@/components/common/Banner";
import sponsorBanner from "@/assets/banners/sponsor-banner.png";
import SponsorSection from "@/features/Sponsor/sections/sponsorSection";

export default function Sponsor() {
  return (
    <main className="w-full flex flex-col items-center">
      <BannerSection
        imageSrc={sponsorBanner}
        title="후원"
        subtitle="루덴스를 도와주시는 기업들"
      />
      <SponsorSection />
    </main>
  );
}

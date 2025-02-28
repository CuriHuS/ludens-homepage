import BannerSection from "@/components/common/Banner";
import sponsorBanner from "@/assets/banners/sponsor-banner.png";
import SponsorSection from "@/features/Sponsor/sections/sponsorSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "후원",
  },
  description: "루덴스 운영에 도움을 주는 후원사들입니다"
}

export default function Sponsor() {
  return (
    <main className="w-full flex flex-col items-center">
      <BannerSection
        imageSrc={sponsorBanner}
        title="Sponsors"
        subtitle="루덴스 운영에 도움을 주는 후원사들입니다"
      />
      <SponsorSection />
    </main>
  );
}

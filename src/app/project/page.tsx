import BannerSection from "@/components/common/Banner";
import ProjectBanner from "@/assets/banners/project-banner.png";
import { Metadata } from "next";
import AwardSection from "@/features/Award/sections/awardSection";
import ProjectSection from "@/features/Project/sections/projectSection";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "루덴스에서 진행된 프로젝트를 둘러볼 수 있습니다"
}

export default function Projects() {
  return (
    <section className="w-full flex flex-col items-center">
      <BannerSection
        imageSrc={ProjectBanner}
        title="Portfolio"
        subtitle="루덴스에서 진행된 프로젝트를 둘러볼 수 있습니다"
      />
      <AwardSection />
      <ProjectSection />
    </section>
  );
}
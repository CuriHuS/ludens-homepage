import BannerSection from "@/components/common/Banner";
import ProjectBanner from "@/assets/banners/project-banner.png";
import { Metadata } from "next";
import AwardSection from "@/features/Award/sections/awardSection";
import ProjectSection from "@/features/Project/sections/projectSection";

export const metadata: Metadata = {
  title: {
    absolute: "포트폴리오",
  },
  description: "루덴스 부원들이 진행한 다양한 프로젝트를 확인해보세요"
}

export default function Projects() {
  return (
    <section className="w-full flex flex-col items-center">
      <BannerSection
        imageSrc={ProjectBanner}
        title="Portfolio"
        subtitle="루덴스 부원들이 진행한 다양한 프로젝트를 확인해보세요"
      />
      <AwardSection />
      <ProjectSection />
    </section>
  );
}
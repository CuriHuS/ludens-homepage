import BannerSection from "@/components/common/Banner";
import ProjectBanner from "@/assets/banners/project-banner.png";
import { Metadata } from "next";
import AwardSection from "@/features/Award/sections/awardSection";
// 프로젝트 페이지에서는 src/features/project/sections 폴더의 projectSection을 사용합니다.
import ProjectSection from "@/features/Project/sections/projectSection";

export const metadata: Metadata = {
  title: {
    absolute: "포트폴리오",
  },
  description: "루덴스 부원들이 진행한 다양한 프로젝트를 확인해보세요"
};

export default function Projects() {
  return (
    <section className="w-full flex flex-col items-center">
      <BannerSection
        imageSrc={ProjectBanner}
        title="Portfolio"
        subtitle="루덴스 부원들이 진행한 다양한 프로젝트를 확인해보세요"
      />
      <AwardSection />
      {/* ProjectSection 내부에서 이미 모달 상태 관리와 onClick 핸들러가 구현되어 있음 */}
      <ProjectSection />
    </section>
  );
}

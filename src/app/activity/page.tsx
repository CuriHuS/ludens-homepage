import BannerSection from "@/components/common/Banner";
import activityBanner from "@/assets/banners/activity-banner.png";
import { Metadata } from "next";
import ActivitySection from "@/features/Activity/sections/activitySection";

export const metadata: Metadata = {
  title: "활동",
  description: "루덴스의 다양한 활동을 확인해볼 수 있습니다"
}

export default function Activity() {
  return (
    <section className="w-full flex flex-col items-center">
      <BannerSection
        imageSrc={activityBanner}
        title="Activities"
        subtitle="루덴스의 다양한 활동을 확인해볼 수 있습니다"
      />

      <ActivitySection />
    </section>
  );
}

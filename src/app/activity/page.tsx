import BannerSection from "@/components/common/Banner";
import activityBanner from "@/assets/banners/activity-banner.png";
import { Metadata } from "next";
import ActivitySection from "@/features/Activity/sections/activitySection";

export const metadata: Metadata = {
  title: {
    absolute: "활동",
  },
  description: "루덴스의 여러 활동을 확인해보세요"
}

export default function Activity() {
  return (
    <section className="w-full flex flex-col items-center">
      <BannerSection
        imageSrc={activityBanner}
        title="Activities"
        subtitle="루덴스의 여러 활동을 확인해보세요"
      />

      <ActivitySection />
    </section>
  );
}

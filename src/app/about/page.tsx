import BannerSection from '@/features/About/sections/bannerSection';
import IntroSection from '@/features/About/sections/introSection';
import ProjectSection from '@/features/About/sections/projectSection';
import { Metadata } from 'next';
import ActivitySection from '@/features/About/sections/activitySection';

export const metadata: Metadata = {
  title: {
    absolute: "LUDENS : 경희대학교 게임 제작 동아리",
  },
}

export default function About() {
  return (
    <main>
      <BannerSection />
      <div className="h-screen" />
      <IntroSection />
      <ActivitySection />
      <ProjectSection />
    </main>
  );
}

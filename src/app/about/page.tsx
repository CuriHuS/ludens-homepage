import BannerSection from '@/features/About/sections/bannerSection';
import IntroSection from '@/features/About/sections/introSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: "루덴스",
  },
  description: "루덴스의 소개를 확인할 수 있습니다"
}

export default function About() {
  return (
    <main>
      <BannerSection />
      <div className="h-screen" />
      <IntroSection />

      <section className="flex flex-col items-center justify-center mt-64">
        <p className="mb-8 text-3xl font-semibold text-white">활동</p>
        <p className="mb-16 max-w-4xl text-lg text-center font-medium text-white">
          루덴스는 다양한 분야의 스터디, 게임 제작 발표회와 같은 세미나, 대학 간 게임 교류회와 같은 행사 등 대내외 활동을 진행하고 있습니다. 이뿐만 아니라 MT 및 개강총회와 같은 친목의 자리 또한 활발히 마련하고 있습니다.
        </p>
      </section>

    </main>
  );
}

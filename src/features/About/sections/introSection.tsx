'use client';

import CountupCard from '../components/countupCard';
import { QUANTIFIED_INFO } from '@/constants/about';

export default function IntroSection() {
  return (
    <section className="flex flex-col items-center mt-64">
      <p className="mb-8 text-3xl font-semibold text-white">열정으로 이루는 <span className="text-red-300">도전, 성장</span></p>
      <p className="mb-16 max-w-4xl text-base md:text-lg text-center font-medium text-white whitespace-nowrap">
        루덴스는 경희대학교 소프트웨어융합학과 게임콘텐츠트랙 학생들이 모여 시작한 동아리입니다.<br/>기획, 디자인, 개발 등 게임의 전반적인 과정을 경험할 수 있으며, 부원들이 열정을 가지고 성장할 수 있도록 지원합니다.
      </p>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 w-full max-w-7xl">
        {QUANTIFIED_INFO.map(({ title, number, unit }, idx) => (
          <CountupCard title={title} number={number} unit={unit} key={idx} />
        ))}
      </div>
    </section>
  );
}
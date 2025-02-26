"use client";

import CountUp from "react-countup";
import { QUANTIFIED_INFO } from "@/constants/about";

export default function IntroSection() {
  return (
    <section className="flex flex-col items-center mt-64">
      <p className="mb-8 text-3xl font-semibold text-white">
        열정으로 이루는 <span className="text-blue-200">도전, 성장</span>
      </p>
      <p className="mb-16 max-w-4xl text-lg text-center font-semibold text-white">
        루덴스는 경희대학교 소프트웨어융합학과 게임콘텐츠트랙 학생들이 모여
        시작한 동아리입니다.
        <br />
        기획, 디자인, 개발 등 게임의 전반적인 과정을 경험할 수 있으며, 부원들이
        열정을 가지고 성장할 수 있도록 지원합니다.
      </p>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 w-full max-w-7xl">
        {QUANTIFIED_INFO.map(({ title, number, unit }, idx) => (
          <CountUp
            start={0}
            end={number}
            duration={3}
            key={idx}
            enableScrollSpy={true}
            scrollSpyOnce={true}
            separator=""
          >
            {({ countUpRef }) => (
              <div className="flex flex-col items-center justify-center bg-neutral-800 rounded-xl p-8 w-full aspect-[2/1]">
                <p className="text-base md:text-lg text-white font-semibold mb-1">
                  {title}
                </p>
                <p className="flex items-center">
                  <span
                    className="text-2xl md:text-4xl text-blue-300 font-extrabold"
                    ref={countUpRef}
                  >
                    {number}
                  </span>
                  <span className="text-2xl md:text-4xl text-white font-extrabold">
                    {unit}
                  </span>
                </p>
              </div>
            )}
          </CountUp>
        ))}
      </div>
    </section>
  );
}

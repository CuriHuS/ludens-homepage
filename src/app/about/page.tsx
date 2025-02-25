import BannerSection from '@/features/About/sections/bannerSection';

const MEMBERS_DATA = [
  {
    title: "김정원",
    description: "안녕하세요~! 김정원입니다 20학번 26살입니다. 잘부탁드려요~~!",
  },
  {
    title: "최현승",
    description: "안녕하세요~! 최현승입니다 20학번 만 24살입니다. 잘부탁드려요~~!",
  },
  {
    title: "김정삼",
    description: "안녕하세요~! 김정원입니다 23학번 21살입니다. 잘부탁드려요~~!",
  },
  {
    title: "김정사",
    description: "안녕하세요~! 김정원입니다 23학번 21살입니다. 잘부탁드려요~~!",
  },
];

export default function About() {
  return (
    <main>
      <BannerSection />
      <div className="h-screen" />
      <section className="flex flex-col items-center mt-60">
        <p className="mb-4 text-3xl font-semibold text-white">
          소개
        </p>
      </section>

      <section className="flex flex-col items-center justify-center mt-32">
        <p className="mb-4 text-3xl font-semibold text-white">임원진</p>
        <p className="text-lg font-semibold text-gray-300">
          루덴스를 이끄는 임원진들입니다.
        </p>

        <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
          {MEMBERS_DATA.map((member, index) => (
            <MemberCard
              key={index}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </section>

    </main>
  );
}

interface MemberCardProps {
  title: string;
  description: string;
}

export function MemberCard({ title, description }: MemberCardProps) {
  return (
    <div className="ktq4">
      <h3 className="pt-3 font-semibold text-lg text-white">{title}</h3>
      <p className="pt-2 value-text text-md text-gray-200 fkrr1">
        {description}
      </p>
    </div>
  );
}

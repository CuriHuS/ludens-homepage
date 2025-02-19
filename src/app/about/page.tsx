const MEMBERS_DATA = [
    {
      title: "김정원",
      description: "안녕하세요~! 김정원입니다 23학번 21살입니다. 잘부탁드려요~~!",
    },
    {
      title: "김정투",
      description: "안녕하세요~! 김정원입니다 23학번 21살입니다. 잘부탁드려요~~!",
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
      <section className="text-gray-600 body-font">
        <div className="max-w-5xl pt-52 pb-24 mx-auto">
          <p className="mb-4 text-8xl text-center font-4 lh-6 ld-04 font-bold text-white">
            Ludens
          </p>
          <p className="mb-12 text-2xl text-center font-4 font-bold text-white">
            루덴스는 ...입니다.
          </p>
        </div>
        
        <div className="text-center">
          <p className="pt-12 mb-2 text-3xl font-bold tracking-tighter text-gray-200 md:text-4xl">
            임원진
          </p>
          <p className="mx-auto text-lg font-semibold text-gray-300 leading-relaxed fs521 md:w-2/3 md:text-xl">
            루덴스를 이끄는 임원진들입니다.
          </p>
        </div>
  
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
  
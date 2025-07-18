import CountUp from "react-countup";

export type CountupCardProps = {
  title: string;
  number: number;
  unit: string;
};

export default function CountupCard({ title, number, unit }: CountupCardProps) {
  return (
    <CountUp
      start={0}
      end={number}
      duration={4}
      enableScrollSpy={true}
      scrollSpyOnce={true}
      separator=""
    >
      {({ countUpRef }) => (
        <div className="flex flex-col items-center justify-center bg-neutral-800 rounded-xl p-8 w-full aspect-[2/1]">
          <p className="text-[10px] md:text-lg text-white font-medium mb-1">
            {title}
          </p>
          <p className="flex items-center">
            <span
              className="text-2xl md:text-4xl text-white font-extrabold "
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
  );
}

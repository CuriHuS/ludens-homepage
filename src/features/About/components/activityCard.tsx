// activityCard.tsx
import Image from 'next/image';

interface ActivityCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function ActivityCard({ imageSrc, imageAlt, title, description }: ActivityCardProps) {
  return (
    <div className="bg-neutral-800 rounded-xl overflow-hidden flex flex-col h-full">
      {/* 이미지 영역: 고정 높이 */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill 
          className="object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      {/* 텍스트 영역: 남은 공간 채우기 */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-base text-white flex-grow">{description}</p>
      </div>
    </div>
  );
}

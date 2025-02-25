import { Award } from '@/constants/award';

type AwardCardProps = {
  award: Award;
};

// place 값에 맞춰 이모티콘을 자동으로 붙여주는 함수
function getPlaceText(place: string): string {
  if (place.includes('대상')) {
    return '🏆 ' + place;
  }
  if (place.includes('최우수상')) {
    return '🏅' + place;
  }
  if (place.includes('우수상')) {
    return '🥈' + place;
  }
  return place;
}

export function AwardCard({ award }: AwardCardProps) {
  const placeText = getPlaceText(award.place);

  return (
    <div className="w-full flex flex-col bg-neutral-800 rounded-xl p-8">
      <div className="flex justify-between mb-6">
        <span className="text-xl md:text-2xl text-white font-bold truncate">
          {placeText}
        </span>
        <span className="text-sm md:text-base text-white/50 font-semibold truncate ml-4 bg-neutral-700 px-3 py-1 rounded-lg">
          {award.year}
        </span>
      </div>
      <div className="text-base md:text-lg text-white font-semibold mb-1 truncate">
        {award.title}
      </div>
      {award.holder ? (
        <div className="text-base md:text-lg text-white/50 font-semibold truncate">
          {award.holder}
        </div>
      ) : (
        <div className="text-base md:text-lg font-semibold">&nbsp;</div>
      )}
    </div>
  );
}

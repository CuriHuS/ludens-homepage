import { Award } from '@/constants/award';

type AwardCardProps = {
    award: Award;
};

export function AwardCard({ award }: AwardCardProps) {
    return (
        <div className="w-full flex flex-col bg-neutral-800 rounded-xl p-8">
            <div className="flex justify-between mb-6">
                <span className="text-xl md:text-2xl text-white font-bold truncate">{award.place}</span>
                <span className="text-sm md:text-base text-neutral-400 font-semibold truncate ml-4 bg-neutral-700 px-3 py-1 rounded-lg">{award.year}</span>
            </div>
            <div className="text-base md:text-lg text-white font-semibold mb-1 truncate">
                {award.title}
            </div>
            {award.holder ? (
                <div className="text-base md:text-lg text-white/50 font-semibold truncate">
                    팀 "{award.holder}"
                </div>
            ) : (
                <div className="text-base md:text-lg text-white/50 font-semibold">
                    &nbsp;
                </div>
            )}
        </div>
    );
} 
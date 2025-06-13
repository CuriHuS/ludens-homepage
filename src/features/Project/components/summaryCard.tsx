type SummaryCardProps = {
    teamMembers?: string;
    period?: string;
    techStack?: string[];
};

export function SummaryCard({ teamMembers, period, techStack }: SummaryCardProps) {
    return (
        <div className="rounded-2xl p-8 bg-neutral-800 mb-8">
            <div>
                <p className="text-base md:text-lg text-white/50 font-semibold mb-1 truncate">
                    팀 구성
                </p>
                <p className="text-base md:text-lg text-white font-semibold mb-3 truncate whitespace-pre-wrap">
                    {teamMembers || "미등록"}
                </p>
            </div>
            <div>
                <p className="text-base md:text-lg text-white/50 font-semibold mb-1 truncate">
                    프로젝트 기간
                </p>
                <p className="text-base md:text-lg text-white font-semibold mb-3 truncate">
                    {period || "미등록"}
                </p>
            </div>
            {techStack && techStack.length > 0 && (
                <>
                    <p className="text-base md:text-lg text-white/50 font-semibold mb-2 truncate">
                        사용 기술 스택
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech: string) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-base md:text-lg font-medium bg-neutral-700 backdrop-blur-sm rounded-lg text-white"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
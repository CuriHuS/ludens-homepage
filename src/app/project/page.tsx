'use client';

import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { AnimatePresence, motion } from 'framer-motion';
import { YearTab } from '@/components/common/YearTab';
import { AwardCard } from '@/components/common/AwardCard';
import { usePrevNextButtons, PrevButton, NextButton } from '@/components/common/CarouselArrowButton';
import { YEAR_LIST, AWARD_LIST } from '@/constants/award';

import { ProjectCard, Link } from '@/components/common/ProjectCard';
import { staggerHalf } from '@/constants/motion';
import { PROJECT_LIST } from '@/constants/project';
import { getCurrentAwards } from '@/utils/carousel';

const PROJECTS_INITIALLY_SHOWN = 6;
const ALL_YEARS = '전체';

export default function Projects() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        slidesToScroll: 1,
        containScroll: 'trimSnaps',
    });
    const [selectedAwardsList, setSelectedAwardsList] = useState(AWARD_LIST);
    const [currentYearTab, setCurrentYearTab] = useState(ALL_YEARS);
    const [visibleProjects, setVisibleProjects] = useState(PROJECTS_INITIALLY_SHOWN);

    // not used after using embla carousel

    // const isSmallScreen = useMediaQuery('(max-width: 640px)');
    // const isMediumScreen = useMediaQuery('(max-width: 1024px)');

    // const numberOfAwards = useMemo(() => {
    //     if (isSmallScreen) return MOBILE_CAROUSEL_SIZE;
    //     if (isMediumScreen) return TABLET_CAROUSEL_SIZE;
    //     return PC_CAROUSEL_SIZE;
    // }, [isSmallScreen, isMediumScreen]);

    useEffect(() => {
        if (currentYearTab === ALL_YEARS) {
            setSelectedAwardsList(AWARD_LIST);
        } else {
            const selectedAwards = getCurrentAwards(AWARD_LIST, currentYearTab);
            setSelectedAwardsList(selectedAwards);
        }
    }, [currentYearTab]);

    const handleShowMore = () => {
        setVisibleProjects(prev => prev + PROJECTS_INITIALLY_SHOWN);
    };

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    return (
        <section className="w-full flex flex-col mt-32 items-center">
            <p className="text-6xl text-white font-bold text-center mb-36">포트폴리오</p>
            <p className="text-3xl text-white font-semibold text-center mb-12">수상 실적</p>

            <div className="w-full">
                <div className="flex items-center justify-center">
                    <YearTab currentTab={currentYearTab} setCurrentTab={setCurrentYearTab} tabList={YEAR_LIST} />
                </div>

                <div className="relative w-full mt-8">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-6">
                            {selectedAwardsList.map(award => (
                                <div
                                    key={`${award.title}-${award.place}-${award.holder}`}
                                    className="flex-[0_0_auto] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                >
                                    <AwardCard award={award} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                        className="absolute left-8 lg:left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-white/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/20"
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                        className="absolute right-8 lg:right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-white/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/20"
                    />
                </div>
            </div>

            <p className="text-3xl text-white font-semibold text-center mt-48 mb-12">진행한 프로젝트</p>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    className="w-full mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={staggerHalf}
                >
                    {PROJECT_LIST
                        .slice(0, visibleProjects)
                        .map(project => (
                            <ProjectCard
                                key={project.title}
                                img={`/images/project/${encodeURIComponent(project.title)}/thumbnail.${project.thumbnailFormat || 'webp'}`}
                                title={project.title}
                                subTitle={project.subTitle}
                                links={project.links as Link[]}
                            />
                        ))}
                </motion.div>
            </AnimatePresence>
            {visibleProjects < PROJECT_LIST.length && (
                <button
                    onClick={handleShowMore}
                    className="mt-12 py-2.5 px-6 text-base font-bold rounded-full bg-gray-200 text-black"
                >
                    더보기
                </button>
            )}
        </section>
    );
}

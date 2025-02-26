"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import { FilterYearTab } from "@/components/common/FilterYearTab";
import { AwardCard } from "@/features/Award/components/awardCard";
import {
  usePrevNextButtons,
  PrevButton,
  NextButton,
} from "@/components/common/CarouselArrowButton";
import { YEAR_LIST, AWARD_LIST } from "@/constants/award";

import { ProjectCard, Link } from "@/features/Project/components/projectCard";
import { staggerHalf } from "@/constants/motion";
import { PROJECT_LIST } from "@/constants/project";
import { getCurrentAwards } from "@/features/Award/utils/carousel";
import BannerSection from "@/components/common/banner";
import ProjectBanner from "@/assets/banners/banner3.png";

const INITIAL_VISIBLE_PROJECTS = 6;
const ALL_TAB = "전체";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [selectedAwardsList, setSelectedAwardsList] = useState(AWARD_LIST);
  const [currentTab, setCurrentTab] = useState(ALL_TAB);
  const [visibleProjects, setVisibleProjects] = useState(
    INITIAL_VISIBLE_PROJECTS
  );

  // not used after using embla carousel

  // const isSmallScreen = useMediaQuery('(max-width: 640px)');
  // const isMediumScreen = useMediaQuery('(max-width: 1024px)');

  // const numberOfAwards = useMemo(() => {
  //     if (isSmallScreen) return MOBILE_CAROUSEL_SIZE;
  //     if (isMediumScreen) return TABLET_CAROUSEL_SIZE;
  //     return PC_CAROUSEL_SIZE;
  // }, [isSmallScreen, isMediumScreen]);

  useEffect(() => {
    if (currentTab === ALL_TAB) {
      setSelectedAwardsList(AWARD_LIST);
    } else {
      const selectedAwards = getCurrentAwards(AWARD_LIST, currentTab);
      setSelectedAwardsList(selectedAwards);
    }
  }, [currentTab]);

  const onClickShowMore = () => {
    setVisibleProjects((prev) => prev + INITIAL_VISIBLE_PROJECTS);
  };

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-full flex flex-col mt-20 items-center">
      <div className="relative w-full min-h-[500px]">
        <BannerSection
          imageSrc={ProjectBanner}
          title="Projects"
          subtitle="의 프로젝트를 구경해보세요!"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black h-full" />
      </div>
      <p className="text-3xl text-white font-semibold text-center mt-50 mb-12">
        AWARDS
      </p>

      <div className="w-full">
        <div className="flex items-center justify-center">
          <FilterYearTab
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            tabList={YEAR_LIST}
          />
        </div>

        <div className="relative w-full mt-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {selectedAwardsList.map((award) => (
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

      <p className="text-3xl text-white font-semibold text-center mt-48 mb-12">
        PROJECTS
      </p>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="w-full mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={staggerHalf}
        >
          {PROJECT_LIST.slice(0, visibleProjects).map((project) => (
            <ProjectCard
              key={project.title}
              img={`/images/project/${project.id}/thumbnail.${
                project.thumbnailFormat || "webp"
              }`}
              title={project.title}
              subTitle={project.subTitle}
              links={project.links as Link[]}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      {visibleProjects < PROJECT_LIST.length && (
        <button
          onClick={onClickShowMore}
          className="mt-12 py-2.5 px-6 text-base font-semibold rounded-full bg-white text-black"
        >
          더보기
        </button>
      )}
    </section>
  );
}

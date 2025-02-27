"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FilterYearTab } from "@/components/common/FilterYearTab";
import { AwardCard } from "@/features/Award/components/awardCard";
import {
    usePrevNextButtons,
    PrevButton,
    NextButton,
} from "@/components/common/CarouselArrowButton";
import { YEAR_LIST, AWARD_LIST } from "@/constants/award";
import { getCurrentAwards } from "@/features/Award/utils/carousel";

const ALL_TAB = "전체";

export default function AwardSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        slidesToScroll: 1,
        containScroll: "trimSnaps",
    });
    const [selectedAwardsList, setSelectedAwardsList] = useState(AWARD_LIST);
    const [currentTab, setCurrentTab] = useState(ALL_TAB);

    useEffect(() => {
        if (currentTab === ALL_TAB) {
            setSelectedAwardsList(AWARD_LIST);
        } else {
            const selectedAwards = getCurrentAwards(AWARD_LIST, currentTab);
            setSelectedAwardsList(selectedAwards);
        }
    }, [currentTab]);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div className="w-full">
            <p className="text-3xl text-white font-semibold text-center mb-12">
                수상 기록
            </p>

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
    );
}
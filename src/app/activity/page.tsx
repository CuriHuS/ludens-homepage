'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';

import { Pagination } from '@/components/common/Pagination';
import { FilterYearTab } from '@/components/common/FilterYearTab';
import { ActivityCard } from '@/features/Activity/components/activityCard';
import { staggerHalf } from '@/constants/motion';
import { ACTIVITY_LIST, YEAR_LIST } from '@/constants/activity';
import { getCurrentActivities } from '@/features/Activity/utils/pagination';

const FIRST_PAGE = 1;
const ALL_TAB = '전체';
const ITEMS_PER_PAGE = 9;

export default function Activity() {
    const [currentTab, setCurrentTab] = useState(ALL_TAB);
    const [selectedActivityList, setSelectedActivityList] = useState(ACTIVITY_LIST);
    const [currentPage, setCurrentPage] = useState(FIRST_PAGE);

    useEffect(() => {
        setCurrentPage(1);
        if (currentTab === ALL_TAB) {
            return setSelectedActivityList(ACTIVITY_LIST);
        }
        const selectedActivities = getCurrentActivities(ACTIVITY_LIST, currentTab);
        setSelectedActivityList(selectedActivities);
    }, [currentTab]);

    const onClickPage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section className="w-full flex flex-col mt-32 items-center">
            <p className="text-6xl text-white font-bold text-center mb-36">활동 기록</p>
            <div className="flex items-center justify-center">
                <FilterYearTab currentTab={currentTab} setCurrentTab={setCurrentTab} tabList={YEAR_LIST} />
            </div>
            <AnimatePresence mode="wait" initial={false}>
                <m.div
                    className="w-full mx-auto mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={staggerHalf}
                >
                    {selectedActivityList
                        .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
                        .map(activity => (
                            <ActivityCard
                                key={activity.title}
                                img={`/images/activity/${activity.year}/${encodeURIComponent(activity.title)}/thumbnail.webp`}
                                title={activity.title}
                                type={activity.type}
                                year={activity.year}
                                date={activity.date}
                            />
                        )
                        )}
                </m.div>
            </AnimatePresence>
            <Pagination
                numberOfPages={Math.ceil(selectedActivityList.length / ITEMS_PER_PAGE)}
                currentPage={currentPage}
                handlePageClick={onClickPage}
            />
        </section>
    );
}

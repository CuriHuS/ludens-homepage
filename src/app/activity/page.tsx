// page.tsx
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
  const [currentTab, setCurrentTab] = useState<string>(ALL_TAB);
  const [selectedActivityList, setSelectedActivityList] = useState(ACTIVITY_LIST);
  const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE);

  useEffect(() => {
    setCurrentPage(1);
    if (currentTab === ALL_TAB) {
      setSelectedActivityList(ACTIVITY_LIST);
    } else {
      const selectedActivities = getCurrentActivities(ACTIVITY_LIST, currentTab);
      setSelectedActivityList(selectedActivities);
    }
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
            .map((activity) => {
              // year가 배열이면, 이미지 경로용으로 첫 번째 year만 사용한다는 예시
              const yearForPath = Array.isArray(activity.year)
                ? activity.year[0] // <-- changed
                : activity.year;

              return (
                <ActivityCard
                  key={activity.title}
                  // encodeURIComponent로 title을 안전하게 인코딩
                  img={`/images/activity/${yearForPath}/${encodeURIComponent(activity.title)}/thumbnail.webp`}
                  title={activity.title}
                  type={activity.type}
                  year={activity.year}
                  date={activity.date}
                />
              );
            })}
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

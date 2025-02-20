'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';

import { Pagination } from '@/components/common/Pagination';
import { YearTab } from '@/components/common/YearTab';
import { Thumbnail } from '@/components/common/Thumbnail';
import { Link } from '@/components/common/Thumbnail/';
import { staggerHalf } from '@/constants/motion';
import { PROJECT_LIST } from '@/constants/dummyProject';
import {
    getCurrentProjects,
    getTenUnderProjects,
    sliceByPage,
} from '@/utils/pagination';

const FIRST_PAGE = 1;
const ALL_TAB = '전체';
const TEN_UNDER_TAB = '~10기';
const ITEMS_PER_PAGE = 9;

export default function Activity() {
    const [currentTab, setCurrentTab] = useState(ALL_TAB);
    const [selectedProjectList, setSelectedProjectList] = useState(PROJECT_LIST);
    const [currentPage, setCurrentPage] = useState(FIRST_PAGE);

    useEffect(() => {
        setCurrentPage(1);
        if (currentTab === ALL_TAB) {
            return setSelectedProjectList(PROJECT_LIST);
        }

        if (currentTab === TEN_UNDER_TAB) {
            return setSelectedProjectList(getTenUnderProjects(PROJECT_LIST));
        }

        const selectedProjects = getCurrentProjects(PROJECT_LIST, currentTab);
        setSelectedProjectList(selectedProjects);
    }, [currentTab]);

    const onClickPage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section className="w-full flex flex-col mt-40 items-center">
            <AnimatePresence mode="wait" initial={false}>
                <m.div
                    className="w-full mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={staggerHalf}
                >
                    {selectedProjectList
                        .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
                        .map(project => (
                            <Thumbnail
                                key={project.title}
                                img={`/images/project/${project.subTitle}/${project.title}.png`}
                                title={project.title}
                                subTitle={project.subTitle}
                                description={project.description}
                                links={project.links as Link[]}
                            />
                        )
                        )}
                </m.div>
            </AnimatePresence>
            <Pagination
                numberOfPages={Math.ceil(selectedProjectList.length / ITEMS_PER_PAGE)}
                currentPage={currentPage}
                handlePageClick={onClickPage}
            />
        </section>
    );
}

'use client';

import { ProjectCard, Link as L } from '@/features/Project/components/projectCard';
import { PROJECT_LIST } from '@/constants/project';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import {
    usePrevNextButtons,
    PrevButton,
    NextButton,
} from "@/components/common/CarouselArrowButton";

export default function ProjectSection() {
    // Get a subset of projects (8 projects)
    const featuredProjects = PROJECT_LIST.slice(0, 8);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        slidesToScroll: 1,
        containScroll: "trimSnaps",
    }, [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="w-full flex flex-col items-center mt-64">
            <motion.p 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl text-white font-semibold text-center mb-8"
            >
                프로젝트
            </motion.p>
            <motion.p 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 max-w-4xl text-lg text-center font-medium text-white"
            >
                루덴스 부원들이 진행한 다양한 프로젝트를 확인해보세요.
            </motion.p>

            <div className="relative w-full mt-8">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6">
                        {featuredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex-[0_0_auto] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                            >
                                <ProjectCard
                                    img={`/images/project/${project.id}/thumbnail.${project.thumbnailFormat || "webp"}`}
                                    title={project.title}
                                    subTitle={project.subTitle}
                                    links={project.links as L[]}
                                />
                            </motion.div>
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
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 py-2.5 px-6 text-base font-semibold rounded-full bg-white text-black"
            >
                <Link href="/project">더 알아보기</Link>
            </motion.div>
        </section>
    );
} 
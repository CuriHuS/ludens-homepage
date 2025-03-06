"use client";

import { ACTIVITY } from "@/constants/about";
import ActivityCard from "../components/activityCard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ActivitySection() {
  return (
    <section className="flex flex-col items-center justify-center mt-64">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-3xl font-semibold text-white"
      >
        활동
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-4xl text-base md:text-lg text-center font-medium text-white"
      >
        루덴스는 다양한 분야의 스터디, 게임 제작 발표회와 같은 세미나, 대학 간
        게임 교류회와 같은 행사 등 대내외 활동을 진행하고 있습니다. 더불어 MT 및
        개강총회와 같은 친목의 자리 또한 활발히 마련하고 있습니다.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl items-stretch">
        {ACTIVITY.map((activity) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ActivityCard
              imageSrc={activity.img}
              imageAlt={activity.imgAlt}
              title={activity.title}
              description={activity.description}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 py-2.5 px-6 text-base font-semibold rounded-full bg-white text-black"
      >
        <Link href="/activity">더 알아보기</Link>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import mainBanner from "@/assets/banners/main-banner.jpeg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ASCIIText from "@/components/common/AsciiText";

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show subtitle after title starts appearing
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="absolute inset-0 flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent to-60%" />
      <Image
        src={mainBanner}
        alt="banner"
        fill
        className="object-cover brightness-[0.9]"
        priority
      />
      <div className="relative z-10 flex flex-col justify-center items-center">
        {/* ASCII Text Title */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ 
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 1, ease: [0.22, 1, 0.36, 1] },
            filter: { duration: 1 }
          }}
          className="relative w-screen h-32 md:h-48 -mb-4"
        >
          <ASCIIText 
            text="LUDENS"
            asciiFontSize={6}
            textFontSize={120}
            textColor="#ffffff"
            planeBaseHeight={16}
            enableWaves={false}
          />
        </motion.div>
        
        {/* Simple subtitle animation */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4 text-lg text-center font-normal text-white md:text-2xl"
        >
          경희대학교 소프트웨어융합대학 게임 제작 동아리
        </motion.p>
      </div>
    </section>
  );
}

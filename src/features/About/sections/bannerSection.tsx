import Image from "next/image";
import mainBanner from "@/assets/banners/main-banner.jpeg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show subtitle after title starts appearing
    const timer = setTimeout(() => setIsVisible(true), 800);
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
        {/* Title with simple fade-in, blur reduction and scaling */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ 
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 1, ease: [0.22, 1, 0.36, 1] },
            filter: { duration: 1 }
          }}
          className="mb-4 relative"
        >
          <p className="text-6xl text-center font-extrabold text-white md:text-8xl">
            LUDENS
          </p>
          
          {/* RGB color splitting layers */}
          <p className="text-6xl text-center font-extrabold text-[#ff0000] md:text-8xl absolute top-0 left-0 right-0"
             style={{ 
               mixBlendMode: "screen", 
               transform: "translate(-2px, 0)", 
               animation: "glitch 2s infinite alternate-reverse",
               opacity: 0.5
             }}
          >
            LUDENS
          </p>
          
          <p className="text-6xl text-center font-extrabold text-[#00ffff] md:text-8xl absolute top-0 left-0 right-0"
             style={{ 
               mixBlendMode: "screen", 
               transform: "translate(2px, 0)",
               animation: "glitch 1.5s infinite alternate",
               opacity: 0.5
             }}
          >
            LUDENS
          </p>
        </motion.div>
        
        {/* Simple subtitle animation */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4 text-base text-center font-semibold text-white md:text-xl"
        >
          경희대학교 소프트웨어융합대학 게임 제작 동아리
        </motion.p>
      </div>
      
      {/* CSS for simple glitch animation */}
      <style jsx global>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
            opacity: 0.5;
          }
          20% {
            transform: translate(-2px, 1px);
            opacity: 0.7;
          }
          40% {
            transform: translate(-1px, -1px);
            opacity: 0.6;
          }
          60% {
            transform: translate(1px, 1px);
            opacity: 0.5;
          }
          80% {
            transform: translate(2px, -1px);
            opacity: 0.7;
          }
          100% {
            transform: translate(0);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}

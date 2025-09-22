"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SmartCalendarButton from "../../components/SmartCalendarButton";

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (Reel) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Blurred Box Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 text-center px-6 py-12 sm:px-10 sm:py-14 
                   bg-white/20 backdrop-blur-md border border-[#c4a882]/40 
                   rounded-lg shadow-xl max-w-md md:max-w-lg flex flex-col items-center"
        style={{ backgroundColor: "rgba(245, 225, 200, 0.15)" }} // light faded yellow tint
      >
        {/* Names */}
        <h1 className="hero-names">
          <span className="block lg:inline mb-2 lg:mb-0">Ria</span>
          <span className="text-[#f5e1c8] block lg:inline mb-2 lg:mb-0">&</span>
          <span className="block lg:inline">Vivek</span>
        </h1>

        {/* Dates with divider */}
        <div className="flex items-center justify-center w-full mb-6">
          <p className="font-trajanpro text-white text-lg sm:text-xl md:text-2xl mb-6 drop-shadow-md text-center">
            March 05<sup>th</sup> - 06<sup>th</sup>, 2026
          </p>
        </div>

        {/* Venue */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl mb-10 text-white drop-shadow-md">
          FAIRMONT UDAIPUR PALACE
        </p>

        {/* Add to Calendar */}
        <div className="mb-6 w-full">
          <SmartCalendarButton />
        </div>

        {/* Welcome Note Button */}
        <div className="mb-6 w-full">
          <Link href="/welcome">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.25)",
                transition: { duration: 0 },
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 font-sans rounded-md text-sm sm:text-base uppercase tracking-[0.15em] px-6 py-3 border border-white/70 text-white bg-transparent shadow-lg backdrop-blur-sm transition-all duration-300"
            >
              Welcome Note
            </motion.button>
          </Link>
        </div>

        {/* Message Button - Now centered
        <div className="w-full flex justify-center">
          <Link href="/welcome">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.25)",
                transition: { duration: 0 },
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 font-sans rounded-full text-xs sm:text-sm uppercase tracking-[0.15em] px-8 py-3 border border-white/70 text-white bg-transparent shadow-lg backdrop-blur-sm transition-all duration-300"
            >
              Message
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex"
              >
                <CircleArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </motion.span>
            </motion.button>
          </Link>
        </div> */}
      </motion.div>
    </div>
  );
}

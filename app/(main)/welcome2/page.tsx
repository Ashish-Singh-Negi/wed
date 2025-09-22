"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import Navigation from "@/app/components/Navigation";

const invitationText = [
  "With hearts brimming with love and gratitude, we joyfully invite you to be part of the most cherished day of our lives.",
  "As we embark on this wonderful journey together, your presence will make our celebration truly complete.",
  "Please join us in celebrating our wedding on March 05th - 06th, 2026 as we gather to share love, laughter, and blessings.",
  "We can’t wait to create unforgettable memories with our beloved family and friends.",
];

export default function WelcomePage2() {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine < invitationText.length) {
      if (currentChar < invitationText[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => {
            const newText = [...prev];
            if (!newText[currentLine]) newText[currentLine] = "";
            newText[currentLine] += invitationText[currentLine][currentChar];
            return newText;
          });
          setCurrentChar((prev) => prev + 1);
        }, 60); // change 60 to a bigger number for slower typing
        return () => clearTimeout(timeout);
      } else {
        // move to next line
        const nextLineTimeout = setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
          setCurrentChar(0);
        }, 500); // pause before next line
        return () => clearTimeout(nextLineTimeout);
      }
    }
  }, [currentChar, currentLine]);

  return (
    <>
      <Navigation />
      <div className="w-full relative z-10 pt-[10vh] md:pt-[10vh] lg:pt-[20vh] flex justify-center md:px-[6%]">
        <div className="shadow-2xl h-screen">
          <div className="grid grid-rows-[50vh_auto] lg:grid-cols-2 lg:grid-rows-1 h-full">
            {/* Left side - Image */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="relative w-full h-full">
                <Image
                  src="/she-says-yes.jpg"
                  alt="Ria & Vivek"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right side - Main Message */}
            <div className="flex flex-col justify-center lg:items-center m-8 sm:m-12 md:m-24 lg:m-0">
              <div className="bg-white bg-clip-padding text-center p-[5%] px-[7%] lg:px-[15%] border-[10px] border-white/50 shadow-xl rounded-lg max-w-xl mx-auto space-y-6 lg:h-full text-gray-700 text-base leading-relaxed">
                <div className="flex flex-col justify-center gap-6">
                  <h1 className="title text-[#c4a882]">Welcome</h1>

                  {/* Typewriter Invitation Text */}
                  <div className="max-w-xl mx-auto space-y-4 text-base font-alice min-h-[220px] text-[#c4a882]">
                    {displayedText.map((line, index) => {
                      // Highlight date text
                      const formattedLine = line.replace(
                        /(March 05th - 06th, 2026)/g,
                        `<strong class="font-semibold text-[#c4a882]">$1</strong>`
                      );

                      return (
                        <p
                          key={index}
                          dangerouslySetInnerHTML={{ __html: formattedLine }}
                        />
                      );
                    })}
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 text-black mt-6">
                    <p className="text-sm sm:text-lg font-serif font-alice text-[#c4a882]">
                      With love,
                    </p>
                    <h2 className="title text-[#c4a882] mt-1">
                      Ria &amp; Vivek
                    </h2>
                  </div>
                </div>

                {/* Footer + Button */}
                <div className="lg:flex hidden flex-col items-center gap-4 mt-8">
                  <Link href="/our-story">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-[#c4a882] text-[#FFE8DB] px-6 py-3 rounded-full shadow-lg text-sm md:text-base font-playfair tracking-wide transition-all duration-300"
                    >
                      Our Story
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

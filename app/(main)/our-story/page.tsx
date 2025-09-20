"use client";

import "./our-story.css";
import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import SideNavigation from "../../components/SideNavigation";
import Navigation from "../../components/Navigation";
import Image from "next/image";
import StoryCard from "./components/StoryCard";

export default function OurStoryPage() {
  const [currentStory, setCurrentStory] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // stop background scroll
    } else {
      document.body.style.overflow = ""; // reset
    }

    return () => {
      document.body.style.overflow = ""; // cleanup on unmount
    };
  }, [isModalOpen]);

  // allow Esc to close modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const stories = [
    {
      title: "Ascot Day Out",
      date: "June 23, 2024",
      image: "/ascot.jpg",
      content: `This is us, celebrating a perfect day at Ascot. We were both so happy, dressed up and ready to enjoy the day, and this photo captures our joy.`,
      positon: "right-96",
    },
    {
      title: "Ria meets Vivek's Family",
      date: "December 15, 2024",
      image: "/ria-meets-vivek-family.jpg",
      content: `Here is a special moment we'll never forget: the day Ria met my family. On December 15, 2024, we all got together, and it felt so natural, like the beginning of something truly wonderful.`,
      positon: "left-50",
    },
    {
      title: "Vivek meets Ria's Family",
      date: "December 23, 2024",
      image: "/vivek-meets-ria-family.jpg",
      content: `New beginnings and growing families! We absolutely loved this moment on December 23, 2024, when Vivek officially met Ria's family. Surrounded by holiday cheer and a beautiful Christmas tree, it was the perfect start to our combined family journey.`,
      positon: "right-40",
    },
    {
      title: "Isle of Wight Excursion",
      date: "June 22, 2025",
      image: "/isle-of-wight-excursion.jpg",
      content: `One of our favorite memories! This was us, so happy and ready for fun on our Isle of Wight trip on June 22, 2025. We loved every moment of sailing, exploring, and just being together, soaking in the beautiful views and making memories that last a lifetime.`,
      positon: "left-80",
    },
    {
      title: "Ria passes!",
      date: "July 18, 2025",
      image: "/ria-passes.jpg",
      content: `A day to be proud of! This photo captures the moment on July 18, 2025, when we celebrated Ria's incredible achievement. It was a day of hard work paying off, marking a big milestone in our lives and a beautiful step forward in our journey together. What a special day to celebrate!`,
      positon: "right-60",
    },
    {
      title: "Races in Singapore",
      date: "July 27, 2025",
      image: "/races-in-singapore.jpg",
      content: `Who said races are just for race cars? We took a trip to Singapore on July 27, 2025, and had an absolute blast on the Skyline Luge! This photo captures our competitive, fun-loving spirit. It was the perfect adventure and a reminder that our life together is a thrilling ride.`,
      positon: "left-50",
    },
    {
      title: "Universal Roller Coaster",
      date: "July 27, 2025",
      image: "/universal-rollercoaster.jpg",
      content: `Ready for a wild ride! This photo perfectly sums up our journey together—full of excitement and adventure. Here we are, all smiles in front of the iconic Universal Studios globe in Singapore on July 27, 2025. It's just a taste of the thrilling life we're building, and we can't wait for you to be a part of it.`,
      positon: "right-50",
    },
    {
      title: "She said yes!",
      date: "July 28, 2025",
      image: "/she-says-yes.jpg",
      content: `On July 28, 2025, our biggest adventure began. With the sooting sun as our witness and the water gently swaying beneath us, Vivek got down on one knee and asked Ria to marry him. This moment, captured in front of a heart-shaped arch and a 'Marry Me' sign, is the start of our journey toward happily ever after. We cannot wait to celebrate with you!`,
      positon: "left-60",
    },
    {
      title: "Celebrating engaged life",
      date: "July 28, 2025",
      image: "/celebrating-engaged-life.jpg",
      content: `Every celebration feels more special when we're together...`,
      positon: "right-80",
    },
    {
      title: "Roka-fied",
      date: "July 29, 2025",
      image: "/roka-fied.jpg",
      content: `Every celebration feels more special when we're together...`,
      positon: "left-50",
    },
    {
      title: "She said yes again!",
      date: "July 30, 2025",
      image: "/she-says-yes-again.jpg",
      content: `Every celebration feels more special when we're together...`,
      positon: "right-60",
    },
    {
      title: "Trip to Liverpool",
      date: "September 09, 2025",
      image: "/trip-to-liverpool.jpg",
      content: `Every celebration feels more special when we're together...`,
      positon: "left-96",
    },
  ];

  const handlePreviousStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleNextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const handlePreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  return (
    <div className="min-h-screen lg:bg-[#bba582]/80 relative overflow-hidden">
      <Navigation />
      <div className="pt-[12%]">
        {/* <div className="hidden lg:block">
          <SideNavigation
            currentStory={currentStory}
            totalStories={stories.length}
            onPreviousStory={handlePreviousStory}
            onNextStory={handleNextStory}
          />
        </div> */}

        {/* Thumbnail selector (desktop only) */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:flex justify-center px-4"
        >
          <div className="flex space-x-2 px-[2%] pt-[1%] sm:space-x-3 overflow-x-auto pb-2">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`w-6 h-6 sm:w-16 sm:h-16 md:w-12 md:h-12 rounded-full overflow-hidden border-2 sm:border-3 shadow-lg cursor-pointer transition-all flex-shrink-0 ${
                  index === currentStory
                    ? "border-[#bba582] scale-130"
                    : "border-[#bba582]/70 hover:border-[#bba582]"
                }`}
                onClick={() => setCurrentStory(index)}
              >
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={`Story ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Story display */}
        <div className="pt-10 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-left justify-center max-w-7xl w-full">
            {/* Grid for mobile + tablet */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
              {stories.map((story, index) => (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setCurrentStory(index);
                    setIsModalOpen(true);
                  }}
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setCurrentStory(index);
                      setIsModalOpen(true);
                    }
                  }}
                  className="bg-white relative p-2 sm:p-2 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 w-full flex-shrink-0 cursor-pointer z-30"
                >
                  <div className="mb-4 sm:mb-6 relative w-full h-48 sm:h-64 md:h-72">
                    {/* put the click handler on the card wrapper (above) and make the image ignore pointer events so the wrapper always receives clicks */}
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>

                  <h3 className="story-title-mobile font-cursive italic text-center">
                    {story.title}
                  </h3>
                </div>
              ))}
            </div>

            <section className="lg:h-[9200px] w-full flex flex-col">
              {stories.map((story, index) => (
                <div
                  key={story.image}
                  style={{ top: `${index * 800}px` }}
                  className={`absolute ${story.positon}`}
                >
                  <StoryCard
                    index={index}
                    image={story.image}
                    title={story.title}
                    date={story.date}
                    content={story.content}
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
              ))}
            </section>
          </div>
        </div>

        {/* Modal (shared for mobile + tablet + desktop) */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#bba582] lg:bg-black"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left: Image */}
                <div className="relative w-full h-[80%] lg:h-full lg:w-1/2 flex items-center justify-center">
                  <Image
                    src={stories[currentStory].image || "/placeholder.svg"}
                    alt={stories[currentStory].title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>

                {/* Right: Story info */}
                <div
                  className="relative w-full h-[20%] lg:h-full lg:w-1/2
                  flex flex-col justify-end lg:justify-center
                  items-center lg:items-start
                  bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:bg-transparent
                  p-6 md:p-8"
                >
                  <div className="max-w-2xl lg:mx-0 text-center lg:text-left">
                    <h2 className="text-2xl md:text-4xl italic text-white mb-2">
                      {stories[currentStory].title}
                    </h2>
                    <p className="text-sm md:text-base text-white/80 mb-4">
                      {stories[currentStory].date}
                    </p>
                    <div className="text-sm md:text-base text-white/90 leading-relaxed">
                      {stories[currentStory].content
                        .split("\n\n")
                        .slice(0, 2)
                        .map((paragraph, index) => (
                          <p key={index} className="mb-2">
                            {paragraph}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={handlePreviousImage}
                  className="absolute left-4 top-[40%] -translate-y-1/2 text-white/80 hover:text-white text-4xl md:text-6xl transition-all duration-200 hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-[40%] -translate-y-1/2 text-white/80 hover:text-white text-4xl md:text-6xl transition-all duration-200 hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  ›
                </button>
                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl md:text-4xl transition-all duration-200 hover:scale-110 z-10"
                  aria-label="Close modal"
                >
                  ✕
                </button>
                {/* Image counter */}
                <div className="absolute top-4 left-4 text-white/80 text-sm md:text-base z-10">
                  {currentStory + 1} / {stories.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

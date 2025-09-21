"use client";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Dispatch, SetStateAction, useEffect } from "react";

import Image from "next/image";

const itemVariants = {
  hidden: (side: string) => ({
    opacity: 0,
    x: side === "left" ? -400 : 400,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function Timeline({
  stories,
  setCurrentStory,
  setIsModalOpen,
}: {
  stories: {
    title: string;
    image: string;
    date: string;
    content: string;
    positon: string;
  }[];
  setCurrentStory: Dispatch<SetStateAction<number>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className=" h-full w-full p-6 rounded-xl shadow-lg font-mono">
      <h1 className="title flex justify-center">
        <p className="bg-gradient-to-b from-transparent to-white px-10 rounded-b-3xl">
          Our Love Story
        </p>
      </h1>
      <div>
        {stories.map(({ title, image, date, content, positon }, index) => (
          <AnimatedEntry
            key={image}
            side={positon}
            image={image}
            date={date}
            title={title}
            content={content}
            setCurrentStory={setCurrentStory}
            index={index}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </div>
    </div>
  );
}

function AnimatedEntry({
  side,
  title,
  image,
  date,
  content,
  index,
  setCurrentStory,
  setIsModalOpen,
}: {
  side: string;
  title: string;
  image: string;
  date: string;
  content: string;
  index: number;
  setCurrentStory: Dispatch<SetStateAction<number>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div className={`h-[420px] w-full flex`}>
      {side === "left" ? (
        <div className="h-full w-full flex items-center ">
          <div className="h-fit w-1/2 sm:w-full flex flex-col items-end justify-center gap-2 bg-gradient-to-r from-transparent to-white py-4">
            <h2 className="px-4 title sm:font-english">{date}</h2>
            <p className="pr-4 lg:pl-32 font-alice">{content}</p>
          </div>
          <div className="h-full w-1 bg-white"></div>
          <motion.div
            ref={ref}
            custom={side}
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            className="bg-gradient-to-r from-white to-transparent px-2 w-1/2"
          >
            <div
              className={`bg-white p-4 sm:p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300 w-full max-w-sm lg:w-80 flex-shrink-0`}
            >
              <div
                className="mb-4 sm:mb-6 relative cursor-pointer"
                onClick={() => {
                  setIsModalOpen(true);
                  setCurrentStory(index);
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={title}
                      width={400}
                      height={400}
                      className="w-full h-48 sm:h-64 lg:h-72 object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-end ">
          <motion.div
            ref={ref}
            custom={side}
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            className=" bg-gradient-to-r from-transparent to-white px-2 w-1/2 flex justify-end"
          >
            {" "}
            <div
              className={`bg-white p-4 sm:p-6 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 w-full max-w-sm lg:w-80 flex-shrink-0`}
            >
              <div
                className="mb-4 sm:mb-6 relative cursor-pointer"
                onClick={() => {
                  setIsModalOpen(true);
                  setCurrentStory(index);
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={title}
                      width={400}
                      height={400}
                      className="w-full h-48 sm:h-64 lg:h-72 object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          <div className="h-full w-1 bg-white"></div>
          <div className="h-fit w-1/2 flex flex-col gap-2 justify-center bg-gradient-to-r from-white py-4">
            <h2 className="px-4 title sm:font-english">{date}</h2>
            <p className="px-4 lg:pr-32 font-alice text-sm">{content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const StoryCard = ({
  image,
  title,
  content,
  date,
  index,
  setIsModalOpen,
}: {
  image: string;
  title: string;
  date: string;
  content: string;
  index: number;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const contentLeft = index % 2 !== 1;

  return (
    <div className="flex">
      {contentLeft && (
        <div
          key={`content-${content}`}
          className="lg:flex lg:flex-1 flex-col items-start text-white hidden px-32 pt-4 lg:pt-8 max-w-2xl text-center lg:text-left"
        >
          <h2 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6 text-white">
            {date}
          </h2>
          <div className="text-sm sm:text-base leading-relaxed font-light space-y-3 sm:space-y-4">
            {content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
      <div
        key={image + title}
        className={`lg:relative hidden lg:block bg-white p-4 sm:p-6 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 w-full max-w-sm lg:w-80 flex-shrink-0`}
      >
        <div
          className="mb-4 sm:mb-6 relative cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={image}
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
        <h3 className="story-title-desktop font-cursive text-center">
          {title}
        </h3>
      </div>
      {!contentLeft && (
        <div
          key={`content-${content}`}
          className="lg:flex lg:flex-1 flex-col items-start text-white hidden px-32 pt-4 lg:pt-8 max-w-2xl text-center lg:text-left"
        >
          <h2 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6 text-white">
            {date}
          </h2>
          <div className="text-sm sm:text-base leading-relaxed font-light space-y-3 sm:space-y-4">
            {content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default StoryCard;
